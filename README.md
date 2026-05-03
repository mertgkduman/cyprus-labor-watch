# Cyprus Labor Watch

Static, GitHub Pages friendly labor tracker for Cyprus. It maps workplace deaths, ongoing and ended strikes, action / solidarity calls, and labor-related arrests across the island.

## Files

- `index.html` - app shell, modals, and static CDN dependencies.
- `styles.css` - desktop layout, mobile filter drawer, and mobile record bottom sheet.
- `app.js` - Leaflet map, filters, trilingual UI, local/Supabase data loading, and submission fallback.
- `data/incidents.json` - reviewed Cyprus MVP records with source URLs.
- `data/northern-incidents.json` - supplemental records sourced from Turkish-language reporting in northern Cyprus.
- `data/source-registry.json` - regular update source checklist and archive of used source URLs.
- `data/seed-cases.json` - compatibility fallback copy of the incident seed records.
- `data/import-template.csv` - CSV field template for manual imports.
- `supabase/schema.sql` - Supabase-ready tables, enums, indexes, and public RLS policies.

## Local Run

```powershell
cd c:\Users\User\Documents\projects-git\cyprus-labor-watch
python -m http.server 8090 --bind 127.0.0.1
```

Open `http://127.0.0.1:8090/`.

## Defaults

Default-visible layers are recent workplace deaths, ongoing strikes, upcoming action calls, and current labor arrests. Ended strikes, held actions, strike decisions, postponed/banned strikes, and released arrests are available in filters but hidden at first load.

## Supabase

Leave `SUPABASE_URL` and `SUPABASE_ANON_KEY` blank in `app.js` to run entirely from static JSON. When configured, verified records are read from Supabase and public reports are inserted into `case_submissions` for editor review.
