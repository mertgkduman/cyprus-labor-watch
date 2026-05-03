-- Cyprus Labor Watch public data schema
-- Run in Supabase SQL editor. The static app also works without Supabase.

create extension if not exists pgcrypto;

create type public.record_type as enum (
  'worker_death',
  'strike',
  'action_call',
  'union_labor_arrest'
);

create type public.record_status as enum (
  'fatality_recorded',
  'decision_taken',
  'ongoing',
  'ended',
  'postponed_banned',
  'action_call_upcoming',
  'action_call_happened',
  'currently_arrested',
  'released',
  'unknown'
);

create type public.action_type as enum (
  'legal_strike',
  'fiili_wildcat',
  'protest',
  'bargaining_dispute',
  'solidarity_action'
);

create type public.verification_status as enum (
  'draft',
  'needs_review',
  'verified',
  'rejected'
);

create type public.source_type as enum (
  'official',
  'union',
  'labor_news',
  'report',
  'news',
  'social_media',
  'informant',
  'solidarity',
  'other'
);

create type public.geocode_precision as enum (
  'exact',
  'venue_approx',
  'district_centroid',
  'area_centroid',
  'unknown'
);

create table public.cases (
  id uuid primary key default gen_random_uuid(),
  public_id text unique not null,
  record_type public.record_type not null,
  status public.record_status not null default 'unknown',
  action_type public.action_type,
  title text not null,
  summary text not null,
  worker_name text,
  worker_age integer check (worker_age is null or worker_age between 0 and 110),
  person_name text,
  employer text,
  labor_organization text,
  role text,
  sector text,
  cause text,
  demands text[] not null default '{}',
  participant_count integer check (participant_count is null or participant_count >= 0),
  decision_date date,
  start_date date,
  end_date date,
  event_date date,
  death_date date,
  detention_date date,
  custody_status text,
  accusation text,
  legal_status text,
  verification_status public.verification_status not null default 'draft',
  last_verified_at date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint action_type_only_for_actions check (
    record_type in ('strike', 'action_call') or action_type is null
  ),
  constraint status_matches_type check (
    (record_type = 'worker_death' and status in ('fatality_recorded', 'unknown')) or
    (record_type = 'strike' and status in ('decision_taken', 'ongoing', 'ended', 'postponed_banned', 'unknown')) or
    (record_type = 'action_call' and status in ('action_call_upcoming', 'action_call_happened', 'unknown')) or
    (record_type = 'union_labor_arrest' and status in ('currently_arrested', 'released', 'unknown'))
  )
);

create table public.case_locations (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references public.cases(id) on delete cascade,
  label text not null,
  province_key text,
  province text not null,
  district text,
  lat numeric(9,6) not null,
  lng numeric(9,6) not null,
  geocode_precision public.geocode_precision not null default 'unknown',
  fatality_count integer check (fatality_count is null or fatality_count >= 0),
  location_basis text,
  created_at timestamptz not null default now(),
  constraint case_locations_lat check (lat between -90 and 90),
  constraint case_locations_lng check (lng between -180 and 180)
);

create table public.case_sources (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references public.cases(id) on delete cascade,
  title text not null,
  url text not null,
  publisher text,
  type public.source_type not null default 'other',
  published_at date,
  created_at timestamptz not null default now(),
  constraint case_sources_http_url check (url ~* '^https?://')
);

create table public.case_timeline (
  id uuid primary key default gen_random_uuid(),
  case_id uuid not null references public.cases(id) on delete cascade,
  date date,
  status public.record_status not null default 'unknown',
  note text not null,
  created_at timestamptz not null default now()
);

create table public.case_submissions (
  id uuid primary key default gen_random_uuid(),
  record_type public.record_type not null,
  title text not null,
  summary text not null,
  province text not null,
  province_key text,
  location_label text,
  event_date date,
  lat numeric(9,6),
  lng numeric(9,6),
  geocode_precision public.geocode_precision not null default 'unknown',
  source_url text not null,
  source_title text,
  submitter_contact text,
  status public.verification_status not null default 'needs_review',
  raw_payload jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  reviewed_at timestamptz,
  reviewer_note text,
  constraint case_submissions_http_url check (source_url ~* '^https?://'),
  constraint case_submissions_lat check (lat is null or lat between -90 and 90),
  constraint case_submissions_lng check (lng is null or lng between -180 and 180),
  constraint case_submissions_coords_pair check ((lat is null and lng is null) or (lat is not null and lng is not null))
);

create index cases_record_type_idx on public.cases(record_type);
create index cases_status_idx on public.cases(status);
create index cases_action_type_idx on public.cases(action_type);
create index cases_verification_idx on public.cases(verification_status);
create index case_locations_case_idx on public.case_locations(case_id);
create index case_locations_province_idx on public.case_locations(province);
create index case_sources_case_idx on public.case_sources(case_id);
create index case_timeline_case_idx on public.case_timeline(case_id);
create index case_submissions_status_idx on public.case_submissions(status);

alter table public.cases enable row level security;
alter table public.case_locations enable row level security;
alter table public.case_sources enable row level security;
alter table public.case_timeline enable row level security;
alter table public.case_submissions enable row level security;

create policy "public can read verified cases"
on public.cases for select
using (verification_status = 'verified');

create policy "public can read verified case locations"
on public.case_locations for select
using (
  exists (
    select 1 from public.cases
    where cases.id = case_locations.case_id
      and cases.verification_status = 'verified'
  )
);

create policy "public can read verified case sources"
on public.case_sources for select
using (
  exists (
    select 1 from public.cases
    where cases.id = case_sources.case_id
      and cases.verification_status = 'verified'
  )
);

create policy "public can read verified case timeline"
on public.case_timeline for select
using (
  exists (
    select 1 from public.cases
    where cases.id = case_timeline.case_id
      and cases.verification_status = 'verified'
  )
);

create policy "public can submit cases for review"
on public.case_submissions for insert
with check (status = 'needs_review');

-- Editors should be granted through Supabase auth/RLS policies or service-role workflows.
