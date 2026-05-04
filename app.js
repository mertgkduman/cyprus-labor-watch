const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

const CONFIG = {
  incidentPaths: ["data/incidents.json", "data/northern-incidents.json", "data/workplace-deaths-backfill.json"],
  fallbackSeedPath: "data/seed-cases.json",
  defaultCenter: [35.1264, 33.4299],
  defaultZoom: 9,
  timeZone: "Europe/Nicosia",
  localSubmissionKey: "cyprus_labor_watch_pending_submissions",
};

const AREAS = [
  { key: "NICOSIA", name: "Nicosia / Lefkosia", tr: "Lefkoşa / Nicosia", el: "Λευκωσία / Lefkoşa", lat: 35.1856, lng: 33.3823 },
  { key: "LIMASSOL", name: "Limassol / Lemesos", tr: "Limasol / Limassol", el: "Λεμεσός / Limassol", lat: 34.7071, lng: 33.0226 },
  { key: "LARNACA", name: "Larnaca / Larnaka", tr: "Larnaka / Larnaca", el: "Λάρνακα / Larnaca", lat: 34.9229, lng: 33.6233 },
  { key: "PAPHOS", name: "Paphos / Pafos", tr: "Baf / Paphos", el: "Πάφος / Paphos", lat: 34.772, lng: 32.4297 },
  { key: "FAMAGUSTA", name: "Famagusta / Ammochostos", tr: "Gazimağusa / Famagusta", el: "Αμμόχωστος / Famagusta", lat: 35.125, lng: 33.95 },
  { key: "KYRENIA", name: "Kyrenia / Keryneia", tr: "Girne / Kyrenia", el: "Κερύνεια / Kyrenia", lat: 35.3403, lng: 33.3192 },
  { key: "MORPHOU", name: "Morphou / Guzelyurt", tr: "Güzelyurt / Morphou", el: "Μόρφου / Güzelyurt", lat: 35.198, lng: 32.991 },
  { key: "DHEKELIA", name: "Dhekelia area", tr: "Dikelya bölgesi", el: "Περιοχή Δεκέλειας", lat: 35.05, lng: 33.74 },
  { key: "AKROTIRI", name: "Akrotiri area", tr: "Akrotiri bölgesi", el: "Περιοχή Ακρωτηρίου", lat: 34.604, lng: 32.956 },
  { key: "BUFFER_ZONE", name: "Buffer zone", tr: "Ara bölge", el: "Νεκρή ζώνη", lat: 35.175, lng: 33.365 },
  { key: "ISLAND_WIDE", name: "Island-wide", tr: "Ada geneli", el: "Παγκύπρια", lat: 35.1264, lng: 33.4299 },
];

const AREA_BY_KEY = Object.fromEntries(AREAS.map((item) => [item.key, item]));
const AREA_BY_NAME = Object.fromEntries(AREAS.map((item) => [item.name, item]));

const LANG_ORDER = ["en", "el", "tr"];
const RECORD_TYPES = ["worker_death", "strike", "action_call", "union_labor_arrest"];
const ACTION_TYPES = ["legal_strike", "fiili_wildcat", "protest", "bargaining_dispute", "solidarity_action"];
const LAYER_ORDER = [
  "worker_death_recent",
  "strike_ongoing",
  "strike_ended",
  "action_call_upcoming",
  "action_call_happened",
  "union_arrest_current",
  "union_arrest_released",
  "strike_decision",
  "strike_postponed",
];
const DEFAULT_LAYERS = ["worker_death_recent", "strike_ongoing", "strike_ended", "action_call_upcoming", "union_arrest_current"];
const QUICK_LAYERS = ["worker_death_recent", "strike_ongoing", "strike_ended", "action_call_upcoming", "union_arrest_current"];
const DATE_RANGES = ["all", "last_30_days", "last_3_months", "last_6_months"];
const MAX_YEAR_DATE_RANGE = 2026;

const LAYER_COLORS = {
  worker_death_recent: "#111111",
  strike_ongoing: "#d72d2d",
  strike_ended: "#2f8f4e",
  action_call_upcoming: "#1d4ed8",
  action_call_happened: "#60a5fa",
  strike_decision: "#f7f4ea",
  strike_postponed: "#7c6f64",
  union_arrest_current: "#e76f00",
  union_arrest_released: "#7c6f64",
};

const COPY = {
  en: {
    nav: { filters: "Filter", listAll: "List", methodology: "Method", sources: "Sources", submit: "+ Report" },
    common: { cancel: "Cancel", close: "Close", notSpecified: "Not specified", source: "Source" },
    stats: { label: "Overview", total: "Total records", deaths: "Workplace deaths", strikes: "Ongoing strikes", arrests: "Jailed labor figures" },
    filters: {
      panel: "Filters",
      panelTitle: "Narrow records",
      search: "Search",
      searchPlaceholder: "Employer, union, locality, sector...",
      dateRange: "Date range",
      province: "District / area",
      sector: "Sector",
      dateRanges: {
        all: "All dates",
        last_30_days: "Last 30 days",
        last_3_months: "Last 3 months",
        last_6_months: "Last 6 months",
      },
      allProvinces: "All areas",
      allSectors: "All sectors",
      layers: "Layers",
      actionType: "Strike / action type",
    },
    map: { results: "results" },
    empty: {
      title: "Select a record on the map",
      text: "By default the map shows recent workplace deaths, ongoing strikes, upcoming action calls, and current labor arrests across Cyprus.",
      context: "Context sources",
      aggregateTitle: "Official fatality baselines",
      aggregateRoc: "Republic-controlled areas: 147 fatal workplace accidents recorded by CYSTAT/DLI for 2008-2024.",
      aggregateNorth: "Northern Cyprus: 32 fatal workplace accidents reported in SSD-based research for 2015-2020.",
      aggregateNote: "These totals are shown as context only. They are not mapped as aggregate dots; individual deaths are added one-by-one when a stable public source and usable location can be verified.",
    },
    list: {
      label: "Record list",
      title: "Filtered records",
      countLabel: "records",
      empty: "No records match these filters.",
    },
    recordType: {
      worker_death: "Workplace death",
      strike: "Strike / labor action",
      action_call: "Action / solidarity call",
      union_labor_arrest: "Labor arrest",
    },
    status: {
      fatality_recorded: "Workplace death recorded",
      decision_taken: "Strike decision taken",
      ongoing: "Ongoing",
      ended: "Ended",
      postponed_banned: "Postponed / banned",
      action_call_upcoming: "Call",
      action_call_happened: "Held",
      currently_arrested: "Currently jailed",
      released: "Released",
      unknown: "Unknown",
    },
    layer: {
      worker_death_recent: "Workplace death",
      strike_ongoing: "Ongoing strike",
      strike_ended: "Ended strike",
      action_call_upcoming: "Action / solidarity call",
      action_call_happened: "Action held",
      strike_decision: "Strike decision",
      strike_postponed: "Postponed / banned strike",
      union_arrest_current: "Jailed",
      union_arrest_released: "Released",
    },
    quickLayer: {
      worker_death_recent: "Deaths",
      strike_ongoing: "Strikes",
      action_call_upcoming: "Calls",
      union_arrest_current: "Jailed",
    },
    actionType: {
      legal_strike: "Legal strike",
      fiili_wildcat: "Wildcat / de facto",
      protest: "Protest",
      bargaining_dispute: "Bargaining dispute",
      solidarity_action: "Solidarity action",
    },
    detail: {
      summary: "Summary",
      workerName: "Worker",
      age: "Age",
      employer: "Employer / institution",
      sector: "Sector",
      date: "Date",
      cause: "Cause / incident",
      fatalityCount: "Fatalities",
      legalStatus: "Legal process",
      union: "Union / organization",
      actionType: "Action type",
      workers: "Approx. participants",
      demands: "Demands / issues",
      decisionDate: "Decision date",
      eventDate: "Action date",
      startDate: "Start",
      endDate: "End",
      person: "Person / group",
      role: "Role",
      detentionDate: "Arrest date",
      custodyStatus: "Current status",
      accusation: "Accusation / legal status",
      locations: "Locations",
      timeline: "Timeline",
      sources: "Sources",
      lastVerified: "Last verified",
      geocode: "Geocode precision",
    },
    geocodePrecision: {
      exact: "exact",
      venue_approx: "approx. venue",
      district_centroid: "district centroid",
      area_centroid: "area centroid",
      unknown: "unknown",
    },
    submit: {
      label: "Review queue",
      title: "Report an action or source",
      recordType: "Record type",
      province: "District / area",
      caseTitle: "Title",
      caseTitlePlaceholder: "E.g. delivery riders strike in Limassol",
      summary: "Short summary",
      summaryPlaceholder: "What happened, who is involved, what demand or rights violation is at issue?",
      location: "Location name",
      locationPlaceholder: "Worksite, union office, courthouse, square...",
      date: "Date",
      sourceUrl: "Source URL",
      sourceTitle: "Source title",
      contact: "Contact",
      contactPlaceholder: "Optional email",
      note: "Reports are published after editorial review. Social media or witness accounts alone are treated as leads until corroborated.",
      send: "Send for review",
      successTitle: "Report received",
      successLocal: "Supabase is not configured, so the report was saved to this browser's demo queue.",
      successRemote: "The report was saved to the Supabase review queue.",
      missing: "Record type, title, summary, district / area, and source URL are required.",
      badUrl: "The source URL must start with http or https.",
      badCoords: "Coordinates must be entered together and must be numbers.",
    },
    methodology: {
      label: "Method",
      title: "Recording and verification rules",
      p1: "Cyprus Labor Watch maps strikes, workplace deaths, action calls, and labor-related arrests in one tracker. One dot is one mapped location instance; one case can have multiple locations.",
      p2: "Strike records distinguish decision taken, ongoing, ended, and postponed / banned. Action calls are separated from strikes and become held after their event date.",
      p3: "Sources are prioritized by strength: official/public bodies, unions, established news, and then social media only as a lead requiring corroboration.",
    },
    sources: { label: "Sources", title: "Initial source pool" },
  },
  el: {
    nav: { filters: "Φίλτρο", listAll: "Λίστα", methodology: "Μέθοδος", sources: "Πηγές", submit: "+ Αναφορά" },
    common: { cancel: "Άκυρο", close: "Κλείσιμο", notSpecified: "Δεν αναφέρεται", source: "Πηγή" },
    stats: { label: "Επισκόπηση", total: "Σύνολο εγγραφών", deaths: "Θάνατοι στην εργασία", strikes: "Απεργίες σε εξέλιξη", arrests: "Κρατούμενοι εργαζόμενοι" },
    filters: {
      panel: "Φίλτρα",
      panelTitle: "Περιορισμός εγγραφών",
      search: "Αναζήτηση",
      searchPlaceholder: "Εργοδότης, συντεχνία, περιοχή, κλάδος...",
      dateRange: "Χρονικό διάστημα",
      province: "Επαρχία / περιοχή",
      sector: "Κλάδος",
      dateRanges: {
        all: "Όλες οι ημερομηνίες",
        last_30_days: "Τελευταίες 30 ημέρες",
        last_3_months: "Τελευταίοι 3 μήνες",
        last_6_months: "Τελευταίοι 6 μήνες",
      },
      allProvinces: "Όλες οι περιοχές",
      allSectors: "Όλοι οι κλάδοι",
      layers: "Επίπεδα",
      actionType: "Τύπος απεργίας / δράσης",
    },
    map: { results: "αποτελέσματα" },
    empty: {
      title: "Επιλέξτε εγγραφή στον χάρτη",
      text: "Ο αρχικός χάρτης δείχνει πρόσφατους θανάτους στην εργασία, απεργίες σε εξέλιξη, καλέσματα δράσης και τρέχουσες εργατικές συλλήψεις στην Κύπρο.",
      context: "Πηγές πλαισίου",
      aggregateTitle: "Επίσημες βάσεις θανάτων",
      aggregateRoc: "Περιοχές υπό έλεγχο της Κυπριακής Δημοκρατίας: 147 θανατηφόρα εργατικά ατυχήματα καταγεγραμμένα από CYSTAT/DLI για το 2008-2024.",
      aggregateNorth: "Βόρεια Κύπρος: 32 θανατηφόρα εργατικά ατυχήματα σε έρευνα βασισμένη σε δεδομένα SSD για το 2015-2020.",
      aggregateNote: "Τα σύνολα εμφανίζονται μόνο ως πλαίσιο. Δεν χαρτογραφούνται ως συνολικά σημεία. Οι ατομικοί θάνατοι προστίθενται ένας-ένας όταν υπάρχει σταθερή δημόσια πηγή και χρήσιμη τοποθεσία.",
    },
    list: {
      label: "Λίστα εγγραφών",
      title: "Φιλτραρισμένες εγγραφές",
      countLabel: "εγγραφές",
      empty: "Δεν υπάρχουν εγγραφές με αυτά τα φίλτρα.",
    },
    recordType: {
      worker_death: "Θάνατος στην εργασία",
      strike: "Απεργία / εργατική δράση",
      action_call: "Κάλεσμα δράσης / αλληλεγγύης",
      union_labor_arrest: "Εργατική σύλληψη",
    },
    status: {
      fatality_recorded: "Καταγεγραμμένος θάνατος",
      decision_taken: "Απόφαση απεργίας",
      ongoing: "Σε εξέλιξη",
      ended: "Έληξε",
      postponed_banned: "Αναβλήθηκε / απαγορεύτηκε",
      action_call_upcoming: "Κάλεσμα",
      action_call_happened: "Πραγματοποιήθηκε",
      currently_arrested: "Υπό κράτηση",
      released: "Αφέθηκε ελεύθερος/η",
      unknown: "Άγνωστο",
    },
    layer: {
      worker_death_recent: "Θάνατος στην εργασία",
      strike_ongoing: "Απεργία σε εξέλιξη",
      strike_ended: "Απεργία που έληξε",
      action_call_upcoming: "Κάλεσμα δράσης / αλληλεγγύης",
      action_call_happened: "Δράση που έγινε",
      strike_decision: "Απόφαση απεργίας",
      strike_postponed: "Αναβληθείσα / απαγορευμένη απεργία",
      union_arrest_current: "Υπό κράτηση",
      union_arrest_released: "Απελευθερώθηκε",
    },
    quickLayer: {
      worker_death_recent: "Θάνατοι",
      strike_ongoing: "Απεργίες",
      action_call_upcoming: "Καλέσματα",
      union_arrest_current: "Κράτηση",
    },
    actionType: {
      legal_strike: "Νόμιμη απεργία",
      fiili_wildcat: "Άτυπη / αυθόρμητη απεργία",
      protest: "Διαμαρτυρία",
      bargaining_dispute: "Συλλογική διαφορά",
      solidarity_action: "Δράση αλληλεγγύης",
    },
    detail: {
      summary: "Περίληψη",
      workerName: "Εργαζόμενος/η",
      age: "Ηλικία",
      employer: "Εργοδότης / φορέας",
      sector: "Κλάδος",
      date: "Ημερομηνία",
      cause: "Αιτία / περιστατικό",
      fatalityCount: "Θάνατοι",
      legalStatus: "Νομική διαδικασία",
      union: "Συντεχνία / οργάνωση",
      actionType: "Τύπος δράσης",
      workers: "Περίπου συμμετέχοντες",
      demands: "Αιτήματα / ζητήματα",
      decisionDate: "Ημερομηνία απόφασης",
      eventDate: "Ημερομηνία δράσης",
      startDate: "Έναρξη",
      endDate: "Λήξη",
      person: "Πρόσωπο / ομάδα",
      role: "Ρόλος",
      detentionDate: "Ημερομηνία σύλληψης",
      custodyStatus: "Τρέχουσα κατάσταση",
      accusation: "Κατηγορία / νομική κατάσταση",
      locations: "Τοποθεσίες",
      timeline: "Χρονολόγιο",
      sources: "Πηγές",
      lastVerified: "Τελευταία επαλήθευση",
      geocode: "Ακρίβεια γεωκωδικοποίησης",
    },
    geocodePrecision: {
      exact: "ακριβές",
      venue_approx: "περίπου χώρος",
      district_centroid: "κέντρο επαρχίας",
      area_centroid: "κέντρο περιοχής",
      unknown: "άγνωστο",
    },
    submit: {
      label: "Ουρά ελέγχου",
      title: "Αναφορά δράσης ή πηγής",
      recordType: "Τύπος εγγραφής",
      province: "Επαρχία / περιοχή",
      caseTitle: "Τίτλος",
      caseTitlePlaceholder: "Π.χ. απεργία διανομέων στη Λεμεσό",
      summary: "Σύντομη περίληψη",
      summaryPlaceholder: "Τι συνέβη, ποιοι εμπλέκονται, ποιο αίτημα ή παραβίαση αφορά;",
      location: "Όνομα τοποθεσίας",
      locationPlaceholder: "Χώρος εργασίας, γραφείο συντεχνίας, δικαστήριο, πλατεία...",
      date: "Ημερομηνία",
      sourceUrl: "URL πηγής",
      sourceTitle: "Τίτλος πηγής",
      contact: "Επικοινωνία",
      contactPlaceholder: "Προαιρετικό email",
      note: "Οι αναφορές δημοσιεύονται μετά από συντακτικό έλεγχο. Τα κοινωνικά δίκτυα ή μαρτυρίες θεωρούνται αρχικές ενδείξεις μέχρι να επιβεβαιωθούν.",
      send: "Αποστολή για έλεγχο",
      successTitle: "Η αναφορά λήφθηκε",
      successLocal: "Το Supabase δεν έχει ρυθμιστεί, οπότε η αναφορά αποθηκεύτηκε στην τοπική δοκιμαστική ουρά του browser.",
      successRemote: "Η αναφορά αποθηκεύτηκε στην ουρά ελέγχου του Supabase.",
      missing: "Απαιτούνται τύπος εγγραφής, τίτλος, περίληψη, επαρχία / περιοχή και URL πηγής.",
      badUrl: "Το URL της πηγής πρέπει να αρχίζει με http ή https.",
      badCoords: "Οι συντεταγμένες πρέπει να καταχωρούνται μαζί και να είναι αριθμοί.",
    },
    methodology: {
      label: "Μέθοδος",
      title: "Κανόνες καταγραφής και επαλήθευσης",
      p1: "Το Cyprus Labor Watch χαρτογραφεί απεργίες, θανάτους στην εργασία, καλέσματα δράσης και εργατικές συλλήψεις σε έναν ενιαίο χάρτη. Κάθε σημείο είναι μία χαρτογραφημένη τοποθεσία· μία υπόθεση μπορεί να έχει πολλές τοποθεσίες.",
      p2: "Οι απεργίες διακρίνονται σε απόφαση, σε εξέλιξη, λήξη και αναβολή / απαγόρευση. Τα καλέσματα δράσης καταγράφονται χωριστά και σημειώνονται ως πραγματοποιημένα μετά την ημερομηνία τους.",
      p3: "Οι πηγές ιεραρχούνται ως εξής: επίσημοι/δημόσιοι φορείς, συντεχνίες, καθιερωμένα μέσα ενημέρωσης και κοινωνικά δίκτυα μόνο ως ένδειξη που χρειάζεται επιβεβαίωση.",
    },
    sources: { label: "Πηγές", title: "Αρχική δεξαμενή πηγών" },
  },
  tr: {
    nav: { filters: "Filtre", listAll: "Listele", methodology: "Yöntem", sources: "Kaynaklar", submit: "+ Bildir" },
    common: { cancel: "Vazgeç", close: "Kapat", notSpecified: "Belirtilmedi", source: "Kaynak" },
    stats: { label: "Genel görünüm", total: "Toplam kayıt", deaths: "İş cinayeti", strikes: "Süren grev", arrests: "Tutuklu emekçi" },
    filters: {
      panel: "Filtreler",
      panelTitle: "Kayıtları daralt",
      search: "Ara",
      searchPlaceholder: "İşveren, sendika, bölge, sektör...",
      dateRange: "Tarih aralığı",
      province: "Bölge / ilçe",
      sector: "Sektör",
      dateRanges: {
        all: "Tüm tarihler",
        last_30_days: "Son 30 gün",
        last_3_months: "Son 3 ay",
        last_6_months: "Son 6 ay",
      },
      allProvinces: "Tüm bölgeler",
      allSectors: "Tüm sektörler",
      layers: "Katmanlar",
      actionType: "Grev / eylem türü",
    },
    map: { results: "sonuç" },
    empty: {
      title: "Haritadan bir kayıt seçin",
      text: "Varsayılan harita Kıbrıs genelinde son iş cinayetlerini, süren grevleri, yaklaşan eylem çağrılarını ve güncel emek tutuklamalarını gösterir.",
      context: "Bağlam kaynakları",
      aggregateTitle: "Resmi ölüm veri tabanları",
      aggregateRoc: "Kıbrıs Cumhuriyeti kontrolündeki bölgeler: CYSTAT/DLI verilerinde 2008-2024 için 147 ölümlü iş kazası.",
      aggregateNorth: "Kuzey Kıbrıs: SSD verilerine dayalı araştırmada 2015-2020 için 32 ölümlü iş kazası.",
      aggregateNote: "Bu toplamlar yalnızca bağlam olarak gösterilir. Toplu nokta olarak haritalanmaz; sabit kamusal kaynak ve kullanılabilir konum bulunduğunda ölümler tek tek eklenir.",
    },
    list: {
      label: "Kayıt listesi",
      title: "Filtredeki kayıtlar",
      countLabel: "kayıt",
      empty: "Bu filtrelerde kayıt yok.",
    },
    recordType: {
      worker_death: "İş cinayeti",
      strike: "Grev / işçi eylemi",
      action_call: "Eylem / dayanışma çağrısı",
      union_labor_arrest: "Emek tutuklaması",
    },
    status: {
      fatality_recorded: "İş cinayeti kaydı",
      decision_taken: "Grev kararı alındı",
      ongoing: "Sürüyor",
      ended: "Sona erdi",
      postponed_banned: "Ertelendi / yasaklandı",
      action_call_upcoming: "Çağrı",
      action_call_happened: "Gerçekleşti",
      currently_arrested: "Tutuklu",
      released: "Serbest bırakıldı",
      unknown: "Bilinmiyor",
    },
    layer: {
      worker_death_recent: "İş cinayeti",
      strike_ongoing: "Süren grev",
      strike_ended: "Sona eren grev",
      action_call_upcoming: "Eylem ve dayanışma çağrısı",
      action_call_happened: "Gerçekleşen eylem",
      strike_decision: "Grev kararı",
      strike_postponed: "Ertelenen / yasaklanan grev",
      union_arrest_current: "Tutuklu",
      union_arrest_released: "Serbest bırakıldı",
    },
    quickLayer: {
      worker_death_recent: "İş cinayeti",
      strike_ongoing: "Grev",
      action_call_upcoming: "Çağrı",
      union_arrest_current: "Tutuklu",
    },
    actionType: {
      legal_strike: "Yasal grev",
      fiili_wildcat: "Fiili / kendiliğinden grev",
      protest: "Protesto",
      bargaining_dispute: "Toplu pazarlık uyuşmazlığı",
      solidarity_action: "Dayanışma eylemi",
    },
    detail: {
      summary: "Özet",
      workerName: "İşçi",
      age: "Yaş",
      employer: "İşveren / kurum",
      sector: "Sektör",
      date: "Tarih",
      cause: "Ölüm nedeni / olay",
      fatalityCount: "İş cinayeti sayısı",
      legalStatus: "Hukuki süreç",
      union: "Sendika / örgüt",
      actionType: "Eylem türü",
      workers: "Yaklaşık katılımcı",
      demands: "Talepler / konular",
      decisionDate: "Karar tarihi",
      eventDate: "Eylem tarihi",
      startDate: "Başlangıç",
      endDate: "Bitiş",
      person: "Kişi / grup",
      role: "Görev / rol",
      detentionDate: "Tutuklama tarihi",
      custodyStatus: "Mevcut durum",
      accusation: "Suçlama / hukuki durum",
      locations: "Konumlar",
      timeline: "Zaman çizelgesi",
      sources: "Kaynaklar",
      lastVerified: "Son teyit",
      geocode: "Konum kesinliği",
    },
    geocodePrecision: {
      exact: "tam koordinat",
      venue_approx: "mekan yaklaşık",
      district_centroid: "bölge merkezi",
      area_centroid: "alan merkezi",
      unknown: "bilinmiyor",
    },
    submit: {
      label: "İnceleme kuyruğu",
      title: "Eylem veya kaynak bildir",
      recordType: "Kayıt türü",
      province: "Bölge / ilçe",
      caseTitle: "Başlık",
      caseTitlePlaceholder: "Örn. Limasol'da kurye grevi",
      summary: "Kısa özet",
      summaryPlaceholder: "Ne oldu, kimler dahil, hangi talep veya hak ihlali var?",
      location: "Konum adı",
      locationPlaceholder: "İşyeri, sendika ofisi, mahkeme, meydan...",
      date: "Tarih",
      sourceUrl: "Kaynak URL",
      sourceTitle: "Kaynak başlığı",
      contact: "İletişim",
      contactPlaceholder: "İsteğe bağlı e-posta",
      note: "Bildirimler editör incelemesinden sonra yayımlanır. Sosyal medya veya tanık aktarımı teyit edilene kadar yalnızca ipucu sayılır.",
      send: "İncelemeye gönder",
      successTitle: "Bildirim alındı",
      successLocal: "Supabase yapılandırılmadığı için bildirim bu tarayıcıda demo kuyruğuna kaydedildi.",
      successRemote: "Bildirim Supabase inceleme kuyruğuna kaydedildi.",
      missing: "Kayıt türü, başlık, özet, bölge / ilçe ve kaynak URL zorunludur.",
      badUrl: "Kaynak URL http veya https ile başlamalıdır.",
      badCoords: "Koordinatlar birlikte girilmeli ve sayı olmalıdır.",
    },
    methodology: {
      label: "Yöntem",
      title: "Kayıt ve doğrulama ilkeleri",
      p1: "Cyprus Labor Watch; grevleri, iş cinayetlerini, eylem çağrılarını ve emekle bağlantılı tutuklamaları tek haritada gösterir. Bir nokta bir konum örneğidir; aynı vaka birden çok konuma sahip olabilir.",
      p2: "Grevler için karar alındı, sürüyor, sona erdi ve ertelendi / yasaklandı durumları ayrıdır. Eylem çağrıları grevlerden ayrı tutulur ve etkinlik tarihi geçince gerçekleşti olarak işaretlenir.",
      p3: "Kaynaklar güven gücüne göre sıralanır: resmi/kamusal kurumlar, sendikalar, yerleşik haber kuruluşları ve yalnızca teyit gerektiren ipucu olarak sosyal medya.",
    },
    sources: { label: "Kaynaklar", title: "Başlangıç kaynak havuzu" },
  },
};

const RECORD_TRANSLATIONS = {
  "eac-workers-24h-strike-april-2026": {
    tr: {
      title: "Kıbrıs Elektrik Kurumu çalışanlarının ada genelinde 24 saatlik grevi",
      summary: "Kıbrıs Elektrik Kurumu çalışanları 23 Nisan 2026'da ada genelinde 24 saatlik greve çıktı. Müşteri hizmetleri merkezleri ve ofisler kapatılırken, elektrik arzının kesintiye uğramaması için güvenlik personeli görevde bırakıldı.",
      demands: ["Enerji politikalarına ilişkin kaygılar", "Elektrik maliyeti ve arz yeterliliği", "Bekleyen çalışma sorunları", "Kamusal elektrik hizmeti kapasitesinin korunması"],
      locations: {
        "eac-strike-island-wide": {
          label: "Ada geneli EAC grevi",
          location_basis: "Ada genelindeki grev; merkez noktası yalnızca harita yerleşimi için kullanıldı.",
        },
      },
      timeline: [
        "Sendikalar 24 saatlik greve yükseltme kararını duyurdu.",
        "24 saatlik iş bırakma gece yarısından gece yarısına kadar sürdü.",
      ],
    },
    el: {
      title: "24ωρη παγκύπρια απεργία εργαζομένων στην ΑΗΚ",
      summary: "Οι εργαζόμενοι στην Αρχή Ηλεκτρισμού Κύπρου πραγματοποίησαν 24ωρη παγκύπρια απεργία στις 23 Απριλίου 2026. Τα κέντρα εξυπηρέτησης και τα γραφεία έκλεισαν, ενώ προσωπικό ασφαλείας παρέμεινε σε υπηρεσία για να μη διαταραχθεί η παροχή ηλεκτρικού ρεύματος.",
      demands: ["Ανησυχίες για την ενεργειακή πολιτική", "Κόστος ηλεκτρικής ενέργειας και επάρκεια εφοδιασμού", "Εκκρεμή εργασιακά ζητήματα", "Προστασία της δημόσιας δυναμικότητας ηλεκτρισμού"],
      locations: {
        "eac-strike-island-wide": {
          label: "Παγκύπρια απεργία στην ΑΗΚ",
          location_basis: "Παγκύπρια απεργία. Το κεντρικό σημείο χρησιμοποιείται μόνο για τοποθέτηση στον χάρτη.",
        },
      },
      timeline: [
        "Οι συντεχνίες ανακοίνωσαν την απόφαση για κλιμάκωση σε 24ωρη απεργία.",
        "Η 24ωρη στάση εργασίας διήρκεσε από τα μεσάνυχτα έως τα μεσάνυχτα.",
      ],
    },
  },
  "eac-workers-warning-strike-february-2026": {
    tr: {
      title: "EAC çalışanlarının iki saatlik uyarı grevi",
      summary: "Kıbrıs Elektrik Kurumu çalışanları 27 Şubat 2026'da hükümetin enerji politikası, Cyta'nın enerji piyasasına planlanan girişi ve kurumda çözülmemiş çalışma sorunları nedeniyle iki saatlik uyarı grevi yaptı.",
      demands: ["EAC'yi etkileyen enerji piyasası düzenlemesinin geri çekilmesi", "Bekleyen çalışma sorunlarının çözülmesi", "Dikelya santralinin yükseltilmesi"],
      locations: {
        "eac-warning-nicosia": {
          label: "EAC ofisleri ve müşteri hizmetleri merkezleri",
          location_basis: "Grev Kıbrıs genelindeki EAC ofislerini etkiledi; merkez noktası yalnızca harita yerleşimi için kullanıldı.",
        },
      },
      timeline: ["İki saatlik grev sabah saatlerinde yapıldı."],
    },
    el: {
      title: "Δίωρη προειδοποιητική απεργία εργαζομένων στην ΑΗΚ",
      summary: "Οι εργαζόμενοι στην Αρχή Ηλεκτρισμού Κύπρου πραγματοποίησαν δίωρη προειδοποιητική απεργία στις 27 Φεβρουαρίου 2026 για την κυβερνητική ενεργειακή πολιτική, την προγραμματισμένη είσοδο της Cyta στην αγορά ενέργειας και εκκρεμή εργασιακά ζητήματα στην ΑΗΚ.",
      demands: ["Απόσυρση νομοθεσίας για την αγορά ενέργειας που επηρεάζει την ΑΗΚ", "Επίλυση εκκρεμών εργασιακών ζητημάτων", "Αναβάθμιση του σταθμού Δεκέλειας"],
      locations: {
        "eac-warning-nicosia": {
          label: "Γραφεία και κέντρα εξυπηρέτησης της ΑΗΚ",
          location_basis: "Η απεργία επηρέασε γραφεία της ΑΗΚ σε όλη την Κύπρο. Το κεντρικό σημείο χρησιμοποιείται μόνο για τοποθέτηση στον χάρτη.",
        },
      },
      timeline: ["Η δίωρη απεργία πραγματοποιήθηκε το πρωί."],
    },
  },
  "wolt-delivery-riders-limassol-strike-2026": {
    tr: {
      title: "Wolt kuryelerinin Limasol grevi",
      summary: "Limasol'daki Wolt kuryeleri düşen ücretler ve güvenlik sorunları nedeniyle iş bırakma eylemi başlattı. Kuryeler eylemi hem grev hem protesto olarak tanımladı ve sorunları çözülmezse başka kentlere yayılabileceğini söyledi.",
      demands: ["Daha adil ücret oranları", "Saldırı ve tacize karşı koruma", "Kurye temsilcileriyle diyalog", "Greve katılım hakkına saygı"],
      locations: {
        "wolt-limassol": {
          label: "Limasol kurye eylemi",
          location_basis: "Kent ölçeğinde eylem; kesin toplanma noktaları belirlenene kadar merkez noktası kullanıldı.",
        },
      },
      timeline: [
        "Kuryeler Limasol'da iş bırakma eylemi başlattı.",
        "Cyprus Mail, grevdeki kuryelere bir Wolt işe alım sorumlusu tarafından tehditler yöneltildiğini bildirdi.",
      ],
    },
    el: {
      title: "Απεργία διανομέων της Wolt στη Λεμεσό",
      summary: "Διανομείς της Wolt στη Λεμεσό ξεκίνησαν εργατική κινητοποίηση για τη μείωση των αμοιβών και ζητήματα ασφάλειας. Οι διανομείς περιέγραψαν τη δράση ως απεργία και διαμαρτυρία, με πιθανότητα επέκτασης σε άλλες πόλεις αν δεν αντιμετωπιστούν οι ανησυχίες τους.",
      demands: ["Δικαιότερες αμοιβές", "Προστασία από επιθέσεις και παρενόχληση", "Διάλογος με εκπροσώπους των διανομέων", "Σεβασμός στη συμμετοχή στην απεργία"],
      locations: {
        "wolt-limassol": {
          label: "Κινητοποίηση διανομέων στη Λεμεσό",
          location_basis: "Κινητοποίηση σε επίπεδο πόλης. Χρησιμοποιείται κεντρικό σημείο μέχρι να δημοσιευθούν ακριβή σημεία συγκέντρωσης.",
        },
      },
      timeline: [
        "Οι διανομείς ξεκίνησαν εργατική κινητοποίηση στη Λεμεσό.",
        "Η Cyprus Mail ανέφερε απειλές προς απεργούς διανομείς από υπεύθυνο προσλήψεων της Wolt.",
      ],
    },
  },
  "education-support-programmes-strike-march-2026": {
    tr: {
      title: "Eğitim destek programı çalışanlarının 24 saatlik grevi",
      summary: "Eğitim Bakanlığı destek programlarında çalışanlar 26 Mart 2026 için 24 saatlik grev ve Cumhurbaşkanlığı Sarayı önünde protesto duyurdu. PASEY-PEO ve OEKDY-SEK, çalışanların işçi haklarını ve mahkeme kararlarını yok sayan ertelemeleri ve önerileri reddettiğini belirtti.",
      demands: ["İş güvencesi", "Mahkeme kararlarına saygı", "Hizmet alımı istihdam rejiminin kaldırılması", "İşçi haklarının tanınması"],
      locations: {
        "presidential-palace-education-support": { label: "Cumhurbaşkanlığı Sarayı protesto güzergahı" },
      },
      timeline: [
        "Sendikalar 24 saatlik grev kararını duyurdu.",
        "Grev ve Cumhurbaşkanlığı Sarayı protestosunun tarihi.",
      ],
    },
    el: {
      title: "24ωρη απεργία εργαζομένων σε υποστηρικτικά προγράμματα εκπαίδευσης",
      summary: "Εργαζόμενοι σε υποστηρικτικά προγράμματα του Υπουργείου Παιδείας ανακοίνωσαν 24ωρη απεργία για τις 26 Μαρτίου 2026 και διαμαρτυρία έξω από το Προεδρικό. Η ΠΑΣΕΥ-ΠΕΟ και η ΟΕΚΔΥ-ΣΕΚ δήλωσαν ότι οι εργαζόμενοι απορρίπτουν καθυστερήσεις και προτάσεις που αγνοούν εργασιακά δικαιώματα και δικαστικές αποφάσεις.",
      demands: ["Εργασιακή ασφάλεια", "Σεβασμός στις δικαστικές αποφάσεις", "Κατάργηση του καθεστώτος αγοράς υπηρεσιών", "Αναγνώριση εργασιακών δικαιωμάτων"],
      locations: {
        "presidential-palace-education-support": { label: "Διαδρομή διαμαρτυρίας προς το Προεδρικό" },
      },
      timeline: [
        "Οι συντεχνίες ανακοίνωσαν την απόφαση για 24ωρη απεργία.",
        "Ημερομηνία απεργίας και διαμαρτυρίας έξω από το Προεδρικό.",
      ],
    },
  },
  "taxi-drivers-pan-cyprus-strike-january-2026": {
    tr: {
      title: "Taksi şoförlerinin 24 saatlik ada geneli grevi",
      summary: "Kıbrıs genelindeki taksi şoförleri, önceki iş bırakma eyleminin taleplerini çözmemesinin ardından 20 Ocak 2026'da 24 saatlik greve çıktı. Kıbrıs Kentsel Taksi Sendikası, anlaşmazlığın taksi sektöründe yasallık ve kuralların adil uygulanmasıyla ilgili olduğunu açıkladı.",
      demands: ["Taksi sektöründe yasallığın uygulanması", "Kuralların adil uygulanması", "Yetkililerle diyalog"],
      locations: {
        "larnaca-airport-taxi-strike": { label: "Larnaka Havalimanı taksi toplanması" },
        "taxi-strike-island-wide": {
          label: "Ada geneli taksi grevi",
          location_basis: "Ada genelindeki grev; merkez noktası yalnızca harita yerleşimi için kullanıldı.",
        },
      },
      timeline: ["24 saatlik grev sabah 06.00'da başladı."],
    },
    el: {
      title: "24ωρη παγκύπρια απεργία οδηγών ταξί",
      summary: "Οδηγοί ταξί σε όλη την Κύπρο ξεκίνησαν 24ωρη απεργία στις 20 Ιανουαρίου 2026, αφού προηγούμενη στάση εργασίας δεν οδήγησε σε λύση των αιτημάτων τους. Η Παγκύπρια Ομοσπονδία Αστικών Ταξί ανέφερε ότι η διαφορά αφορά τη νομιμότητα και τη δίκαιη εφαρμογή των κανόνων στον κλάδο.",
      demands: ["Εφαρμογή της νομιμότητας στον κλάδο των ταξί", "Δίκαιη εφαρμογή των κανόνων", "Διάλογος με τις αρχές"],
      locations: {
        "larnaca-airport-taxi-strike": { label: "Συγκέντρωση ταξί στο αεροδρόμιο Λάρνακας" },
        "taxi-strike-island-wide": {
          label: "Παγκύπρια απεργία ταξί",
          location_basis: "Παγκύπρια απεργία. Το κεντρικό σημείο χρησιμοποιείται μόνο για τοποθέτηση στον χάρτη.",
        },
      },
      timeline: ["Η 24ωρη απεργία άρχισε στις 6 π.μ."],
    },
  },
  "cola-general-strike-september-2025": {
    tr: {
      title: "CoLA için üç saatlik ülke geneli genel grev",
      summary: "Kıbrıs genelindeki çalışanlar 11 Eylül 2025'te Hayat Pahalılığı Ödeneği'nin tam uygulanması, korunması ve tüm çalışanları kapsaması talebiyle üç saatlik genel grev yaptı.",
      demands: ["CoLA'nın tam olarak geri getirilmesi", "CoLA'nın tüm çalışanları kapsaması", "Satın alma gücünün korunması", "Toplu sözleşmelere saygı"],
      locations: {
        "cola-finance-ministry-nicosia": { label: "Maliye Bakanlığı merkezi mitingi" },
        "cola-strike-island-wide": {
          label: "CoLA için ada geneli grev",
          location_basis: "Ülke çapında iş bırakma; merkez noktası yalnızca harita yerleşimi için kullanıldı.",
        },
      },
      timeline: [
        "Sendikalar, CoLA görüşmeleri sonuçsuz kalınca grev çağrısı yaptı.",
        "Üç saatlik iş bırakma 11.00 ile 14.00 arasında gerçekleşti.",
      ],
    },
    el: {
      title: "Τρίωρη παγκύπρια γενική απεργία για την ΑΤΑ",
      summary: "Εργαζόμενοι σε όλη την Κύπρο πραγματοποίησαν τρίωρη γενική απεργία στις 11 Σεπτεμβρίου 2025, απαιτώντας πλήρη εφαρμογή και προστασία της Αυτόματης Τιμαριθμικής Αναπροσαρμογής και επέκταση της κάλυψης της ΑΤΑ σε όλους τους εργαζόμενους.",
      demands: ["Πλήρης αποκατάσταση της ΑΤΑ", "Κάλυψη όλων των εργαζομένων από την ΑΤΑ", "Προστασία της αγοραστικής δύναμης", "Σεβασμός στις συλλογικές συμβάσεις"],
      locations: {
        "cola-finance-ministry-nicosia": { label: "Κεντρική συγκέντρωση στο Υπουργείο Οικονομικών" },
        "cola-strike-island-wide": {
          label: "Παγκύπρια απεργία για την ΑΤΑ",
          location_basis: "Παγκύπρια στάση εργασίας. Το κεντρικό σημείο χρησιμοποιείται μόνο για τοποθέτηση στον χάρτη.",
        },
      },
      timeline: [
        "Οι συντεχνίες κάλεσαν απεργία μετά την αποτυχία των συνομιλιών για την ΑΤΑ.",
        "Η τρίωρη στάση εργασίας πραγματοποιήθηκε από τις 11:00 έως τις 14:00.",
      ],
    },
  },
  "turkish-cypriot-cola-strikes-april-2026": {
    tr: {
      title: "Kıbrıslı Türk kamu çalışanlarının CoLA grevleri",
      summary: "Kıbrıslı Türk kamu sektörü sendikaları Nisan 2026'da hayat pahalılığı ödeneği ödemelerini etkileyen düzenlemelere karşı Kuzey Lefkoşa'da grevler ve protestolar yaptı. Eylemler meclis binası çevresinde yoğunlaştı ve birkaç gün sürdü.",
      demands: ["Hayat pahalılığı kararnamesi ve yasa tasarısının geri çekilmesi", "Hayat pahalılığı ödeneğinin korunması", "Hükümetin istifası / siyasi hesap verebilirlik"],
      locations: {
        "north-nicosia-assembly-cola": { label: "Meclis binası protesto alanı" },
      },
      timeline: [
        "Genel grev ve protesto meclis binası çevresinde yükseldi.",
        "Gösteriler sürdü ve çatışmalar bildirildi.",
        "Yeni grev eylemleri ve mobilizasyonun süreceğine dair uyarılar bildirildi.",
      ],
    },
    el: {
      title: "Απεργίες Τουρκοκύπριων δημόσιων υπαλλήλων για την ΑΤΑ",
      summary: "Τουρκοκυπριακές συντεχνίες του δημόσιου τομέα πραγματοποίησαν απεργίες και διαμαρτυρίες στη βόρεια Λευκωσία τον Απρίλιο του 2026 για μέτρα που επηρέαζαν τις πληρωμές του τιμαριθμικού επιδόματος. Οι κινητοποιήσεις επικεντρώθηκαν γύρω από το κτήριο της συνέλευσης και συνεχίστηκαν για αρκετές ημέρες.",
      demands: ["Απόσυρση διατάγματος και νομοσχεδίου για την ΑΤΑ", "Προστασία του τιμαριθμικού επιδόματος", "Παραίτηση κυβέρνησης / πολιτική λογοδοσία"],
      locations: {
        "north-nicosia-assembly-cola": { label: "Χώρος διαμαρτυρίας κοντά στη συνέλευση" },
      },
      timeline: [
        "Η γενική απεργία και η διαμαρτυρία κλιμακώθηκαν γύρω από το κτήριο της συνέλευσης.",
        "Οι διαδηλώσεις συνεχίστηκαν και αναφέρθηκαν συγκρούσεις.",
        "Αναφέρθηκαν νέες απεργιακές δράσεις και προειδοποιήσεις για συνέχιση της κινητοποίησης.",
      ],
    },
  },
  "ahmet-tugcu-arrest-release-april-2026": {
    tr: {
      title: "El-Sen Başkanı Ahmet Tuğcu CoLA protestolarında gözaltına alındı",
      summary: "El-Sen Başkanı Ahmet Tuğcu 7 Nisan 2026'da Kıbrıslı Türk meclisi önündeki protestolar sırasında gözaltına alındı ve aynı akşam serbest bırakıldı. Haberlerde suçlamaların serbest bırakıldıktan sonra okunduğu ve Tuğcu'nun suçlamaları reddettiği belirtildi.",
      role: "Başkan",
      custody_status: "7 Nisan 2026'da serbest bırakıldı",
      accusation: "Ajans Cyprus tarafından aktarılan savunma açıklamalarına göre isyan, polisi engelleme ve kasten zarar verme",
      legal_status: "Serbest bırakıldı; suçlamaları reddetti",
      locations: {
        "ahmet-tugcu-north-nicosia-assembly": { label: "Meclis protesto alanı" },
      },
      timeline: [
        "Sigmalive, Tuğcu'nun olaylar sırasında tutuklandığını bildirdi.",
        "Ajans Cyprus, Tuğcu'nun saat 20.30 civarında serbest bırakıldığını bildirdi.",
      ],
    },
    el: {
      title: "Ο πρόεδρος της El-Sen Αχμέτ Τουγτζού κρατήθηκε στις διαμαρτυρίες για την ΑΤΑ",
      summary: "Ο πρόεδρος της El-Sen, Αχμέτ Τουγτζού, κρατήθηκε στις 7 Απριλίου 2026 κατά τη διάρκεια διαμαρτυριών έξω από την τουρκοκυπριακή συνέλευση και αφέθηκε ελεύθερος αργότερα το ίδιο βράδυ. Δημοσιεύματα ανέφεραν ότι οι κατηγορίες διαβάστηκαν μετά την απελευθέρωσή του και ότι ο Τουγτζού τις απέρριψε.",
      role: "Πρόεδρος",
      custody_status: "Αφέθηκε ελεύθερος στις 7 Απριλίου 2026",
      accusation: "Εξέγερση, παρεμπόδιση αστυνομίας και εσκεμμένη ζημιά σύμφωνα με δηλώσεις υπεράσπισης που μετέδωσε το Ajans Cyprus",
      legal_status: "Αφέθηκε ελεύθερος. Οι κατηγορίες απορρίφθηκαν από τον ίδιο",
      locations: {
        "ahmet-tugcu-north-nicosia-assembly": { label: "Χώρος διαμαρτυρίας στη συνέλευση" },
      },
      timeline: [
        "Το Sigmalive ανέφερε ότι ο Τουγτζού συνελήφθη κατά την αναταραχή.",
        "Το Ajans Cyprus ανέφερε ότι ο Τουγτζού αφέθηκε ελεύθερος γύρω στις 20:30.",
      ],
    },
  },
  "lakatiamia-construction-worker-death-february-2026": {
    tr: {
      title: "Lakatamia'da inşaat işçisi düşme sonucu hayatını kaybetti",
      summary: "Üçüncü ülke vatandaşı 43 yaşındaki bir inşaat işçisi, Lakatamia'da yapımı süren bir apartmandan düşerek hayatını kaybetti. PEO, olayın iş güvenliği denetimindeki zayıflıkları gösterdiğini belirterek daha güçlü eğitim ve denetim çağrısı yaptı.",
      worker_name: "Adı yayımlanmadı",
      employer: "İnşaat işvereni yayımlanmadı",
      sector: "İnşaat",
      cause: "Yapımı süren apartmandan düşme",
      legal_status: "Polis ve iş güvenliği bağlamı bildirildi; kaynakta belirli dava sonucu yayımlanmadı",
      locations: {
        "lakatamia-worker-death": { label: "Lakatamia inşaat sahası" },
      },
      timeline: [
        "İşçi yapımı süren apartmandaki düşme sonrası hayatını kaybetti.",
        "PEO, ölümü güvenlik denetimindeki zayıflıklarla ilişkilendiren açıklama yaptı.",
      ],
    },
    el: {
      title: "Εργάτης οικοδομής πέθανε μετά από πτώση στη Λακατάμια",
      summary: "43χρονος εργάτης οικοδομής, υπήκοος τρίτης χώρας, πέθανε μετά από πτώση από υπό ανέγερση πολυκατοικία στη Λακατάμια. Η ΠΕΟ δήλωσε ότι το περιστατικό δείχνει αδυναμίες στην εποπτεία της ασφάλειας στην εργασία και ζήτησε ισχυρότερη εκπαίδευση και επιθεωρήσεις.",
      worker_name: "Το όνομα δεν δημοσιεύθηκε",
      employer: "Ο εργοδότης στην οικοδομή δεν δημοσιεύθηκε",
      sector: "Οικοδομές",
      cause: "Πτώση από υπό ανέγερση πολυκατοικία",
      legal_status: "Αναφέρθηκε αστυνομικό και εργασιακό πλαίσιο ασφάλειας. Συγκεκριμένη έκβαση υπόθεσης δεν δημοσιεύθηκε στην πηγή",
      locations: {
        "lakatamia-worker-death": { label: "Εργοτάξιο στη Λακατάμια" },
      },
      timeline: [
        "Ο εργάτης πέθανε μετά από πτώση σε υπό ανέγερση πολυκατοικία.",
        "Η ΠΕΟ εξέδωσε ανακοίνωση συνδέοντας τον θάνατο με αδυναμίες στην εποπτεία της ασφάλειας.",
      ],
    },
  },
  "kofinou-finis-alexandru-worker-death-january-2026": {
    tr: {
      title: "Finis Alexandru Kofinou'da karşı ağırlık boşaltılırken hayatını kaybetti",
      summary: "Kıbrıs Elektrik Kurumu için direk montajı yapan özel bir şirkette çalışan 55 yaşındaki Romanyalı işçi Finis Alexandru, Kofinou yakınlarında boşaltma sırasında ağır beton karşı ağırlığın çarpması sonucu hayatını kaybetti.",
      employer: "EAC için çalışan özel direk montaj taşeronu",
      sector: "Kamu hizmetleri / inşaat",
      cause: "Boşaltma sırasında kamyon devrildi ve beton karşı ağırlık işçiye çarptı",
      legal_status: "Polis ve Çalışma Teftiş Dairesi soruşturması; kaynağa göre kamyon şoförü mahkeme emriyle tutuklandı",
      locations: {
        "kofinou-counterweight-death": { label: "Kofinou çalışma sahası" },
      },
      timeline: [
        "Ölümcül boşaltma kazası öğleden sonra meydana geldi.",
        "KNEWS polis ve çalışma müfettişlerinin soruşturmasını bildirdi.",
      ],
    },
    el: {
      title: "Ο Φίνις Αλεξάντρου σκοτώθηκε κατά την εκφόρτωση αντίβαρου στην Κοφίνου",
      summary: "Ο Φίνις Αλεξάντρου, 55χρονος Ρουμάνος εργάτης σε ιδιωτική εταιρεία που συναρμολογούσε πυλώνες για την Αρχή Ηλεκτρισμού Κύπρου, χτυπήθηκε θανάσιμα από βαρύ τσιμεντένιο αντίβαρο κατά την εκφόρτωση κοντά στην Κοφίνου.",
      employer: "Ιδιωτικός εργολάβος συναρμολόγησης πυλώνων για την ΑΗΚ",
      sector: "Υπηρεσίες κοινής ωφελείας / οικοδομές",
      cause: "Φορτηγό ανατράπηκε κατά την εκφόρτωση και τσιμεντένιο αντίβαρο χτύπησε τον εργάτη",
      legal_status: "Έρευνα αστυνομίας και Τμήματος Επιθεώρησης Εργασίας. Σύμφωνα με την πηγή, ο οδηγός φορτηγού συνελήφθη με ένταλμα",
      locations: {
        "kofinou-counterweight-death": { label: "Χώρος εργασίας στην Κοφίνου" },
      },
      timeline: [
        "Το θανατηφόρο ατύχημα κατά την εκφόρτωση έγινε το απόγευμα.",
        "Το KNEWS ανέφερε έρευνες της αστυνομίας και των επιθεωρητών εργασίας.",
      ],
    },
  },
  "peyia-aldahdouh-housain-worker-death-may-2025": {
    tr: {
      title: "Aldahdouh Housain Peyia'da düşen kerestelerin altında kalarak öldü",
      summary: "34 yaşındaki Suriyeli inşaat işçisi Aldahdouh Housain, Peyia'da forklift üzerindeki kereste yükünün düşmesi sonucu hayatını kaybetti. Cyprus Mail'e göre polis, forklift sürücüsünü ve proje müteahhidini sorgulamak üzere gözaltına aldı.",
      employer: "Kaynakta adı verilmeyen inşaat proje müteahhidi",
      sector: "İnşaat",
      cause: "Sabitleme kayışının kopması sonrası kereste yükünün altında kalma",
      legal_status: "Polis soruşturması; kaynağa göre forklift sürücüsü ve proje müteahhidi sorgulanmak üzere tutuldu",
      locations: {
        "peyia-st-george-worker-death": { label: "St George Kilisesi yakınındaki park alanı" },
      },
      timeline: [
        "İşçi yaralandı ve daha sonra Baf Genel Hastanesi'nde hayatını kaybetti.",
        "Cyprus Mail polis soruşturmasını bildirdi.",
      ],
    },
    el: {
      title: "Ο Αλνταχτούχ Χουσεΐν σκοτώθηκε από πτώση ξυλείας στην Πέγεια",
      summary: "Ο Αλνταχτούχ Χουσεΐν, 34χρονος Σύρος εργάτης οικοδομής, πέθανε όταν φορτίο ξυλείας έπεσε από περονοφόρο στην Πέγεια. Σύμφωνα με την Cyprus Mail, η αστυνομία συνέλαβε για ανάκριση τον οδηγό του περονοφόρου και τον εργολάβο του έργου.",
      employer: "Εργολάβος κατασκευαστικού έργου που δεν κατονομάστηκε στην πηγή",
      sector: "Οικοδομές",
      cause: "Καταπλακώθηκε από φορτίο ξυλείας μετά το σπάσιμο ιμάντα πρόσδεσης",
      legal_status: "Αστυνομική έρευνα. Σύμφωνα με την πηγή, ο οδηγός του περονοφόρου και ο εργολάβος κρατήθηκαν για ανάκριση",
      locations: {
        "peyia-st-george-worker-death": { label: "Χώρος στάθμευσης κοντά στην εκκλησία Αγίου Γεωργίου" },
      },
      timeline: [
        "Ο εργάτης τραυματίστηκε και αργότερα πέθανε στο Γενικό Νοσοκομείο Πάφου.",
        "Η Cyprus Mail ανέφερε την αστυνομική έρευνα.",
      ],
    },
  },
  "limassol-gela-kaltsidis-worker-death-june-2025": {
    tr: {
      title: "Gela Kaltsidis Limasol inşaatında düşerek hayatını kaybetti",
      summary: "47 yaşındaki Gürcü inşaat işçisi Gela Kaltsidis, Limasol'da yapımı süren bir binanın altıncı katından düşerek hayatını kaybetti. KNEWS, polis ve Çalışma Teftiş Dairesi'nin soruşturma yürüttüğünü bildirdi.",
      employer: "İnşaat işvereni yayımlanmadı",
      sector: "İnşaat",
      cause: "İnşaat sahasının altıncı katından düşme",
      legal_status: "Polis ve Çalışma Teftiş Dairesi soruşturması bildirildi",
      locations: {
        "limassol-construction-fall-death": {
          label: "Limasol inşaat sahası",
          location_basis: "Kaynağa göre kent düzeyinde konum; kesin işyeri yayımlanmadı.",
        },
      },
      timeline: ["İşçi yapımı süren bir binadan düşerek hayatını kaybetti."],
    },
    el: {
      title: "Ο Γκέλα Καλτσίδης πέθανε μετά από πτώση σε εργοτάξιο στη Λεμεσό",
      summary: "Ο Γκέλα Καλτσίδης, 47χρονος Γεωργιανός εργάτης οικοδομής, πέθανε μετά από πτώση από τον έκτο όροφο υπό ανέγερση κτηρίου στη Λεμεσό. Το KNEWS ανέφερε ότι η αστυνομία και το Τμήμα Επιθεώρησης Εργασίας διερευνούσαν την υπόθεση.",
      employer: "Ο εργοδότης στην οικοδομή δεν δημοσιεύθηκε",
      sector: "Οικοδομές",
      cause: "Πτώση από τον έκτο όροφο εργοταξίου",
      legal_status: "Αναφέρθηκε έρευνα αστυνομίας και Τμήματος Επιθεώρησης Εργασίας",
      locations: {
        "limassol-construction-fall-death": {
          label: "Εργοτάξιο στη Λεμεσό",
          location_basis: "Τοποθεσία σε επίπεδο πόλης από την πηγή. Το ακριβές εργοτάξιο δεν δημοσιεύθηκε.",
        },
      },
      timeline: ["Ο εργάτης πέθανε μετά από πτώση από υπό ανέγερση κτήριο."],
    },
  },
  "peo-may-day-gatherings-cyprus-2026": {
    tr: {
      title: "PEO 1 Mayıs buluşmaları ve Ledra Palace ortak yürüyüşü",
      summary: "PEO, 2026 yılı için Kıbrıs genelinde 1 Mayıs buluşmaları duyurdu. Programda Eleftheria Meydanı'nda merkezi Lefkoşa buluşması ve ara bölgedeki Ledra Palace'ta Kıbrıslı Türk sendikalarla birleşmek üzere yürüyüş yer aldı.",
      demands: ["İşçi hakları", "Sosyal adalet", "Kolektif eylem", "İki toplumlu emek dayanışması"],
      locations: {
        "eleftheria-square-may-day-2026": { label: "Eleftheria Meydanı" },
        "ledra-palace-may-day-2026": { label: "Ledra Palace ara bölge buluşma noktası" },
      },
      timeline: [
        "PEO 1 Mayıs programını yayımladı.",
        "Buluşmalar ve ortak yürüyüş için planlanan tarih.",
      ],
    },
    el: {
      title: "Πρωτομαγιάτικες συγκεντρώσεις της ΠΕΟ και κοινή πορεία στο Ledra Palace",
      summary: "Η ΠΕΟ ανακοίνωσε πρωτομαγιάτικες συγκεντρώσεις σε όλη την Κύπρο για το 2026, με κεντρική συγκέντρωση στην πλατεία Ελευθερίας στη Λευκωσία και πορεία για συνάντηση με τουρκοκυπριακές συντεχνίες στο Ledra Palace στη νεκρή ζώνη.",
      demands: ["Εργατικά δικαιώματα", "Κοινωνική δικαιοσύνη", "Συλλογική δράση", "Δικοινοτική εργατική αλληλεγγύη"],
      locations: {
        "eleftheria-square-may-day-2026": { label: "Πλατεία Ελευθερίας" },
        "ledra-palace-may-day-2026": { label: "Σημείο συνάντησης Ledra Palace στη νεκρή ζώνη" },
      },
      timeline: [
        "Η ΠΕΟ δημοσίευσε το πρόγραμμα της Πρωτομαγιάς.",
        "Προγραμματισμένη ημερομηνία για συγκεντρώσεις και κοινή πορεία.",
      ],
    },
  },
};

const VALUE_TRANSLATIONS = {
  tr: {
    "Electricity Authority of Cyprus": "Kıbrıs Elektrik Kurumu",
    "EAC trade unions": "EAC sendikaları",
    "Wolt / fleet management contractors": "Wolt / filo yönetimi taşeronları",
    "Wolt riders' collective; PEO informed": "Wolt kuryeleri kolektifi; PEO bilgilendirildi",
    "Ministry of Education, Sport and Youth support programmes": "Eğitim, Spor ve Gençlik Bakanlığı destek programları",
    "Taxi sector": "Taksi sektörü",
    "Turkish Cypriot public sector": "Kıbrıslı Türk kamu sektörü",
    "PEO and Turkish Cypriot unions": "PEO ve Kıbrıslı Türk sendikaları",
    "EKTAM Kibris Ltd.": "EKTAM Kıbrıs Ltd.",
    "Emek-Is / Dev-Is": "Emek-İş / Dev-İş",
    "Telecommunications Department": "Telekomünikasyon Dairesi",
    "Tel-Sen; Turk-Sen-affiliated unions and other unions in support": "Tel-Sen; Türk-Sen'e bağlı sendikalar ve destek veren diğer sendikalar",
    "Health Ministry hospitals and public health centres": "Sağlık Bakanlığı hastaneleri ve kamu sağlık merkezleri",
    "Tip-Is, KTHES, KTAMS, Kamu-Is, Kamu-Sen": "Tıp-İş, KTHES, KTAMS, Kamu-İş, Kamu-Sen",
    "Private contracting firm not named in source": "Kaynakta adı verilmeyen özel müteahhitlik firması",
    "Citrus packaging factory not named in source": "Kaynakta adı verilmeyen narenciye paketleme fabrikası",
    "Energy / utilities": "Enerji / kamu hizmetleri",
    "Delivery platforms": "Teslimat platformları",
    "Education": "Eğitim",
    "Transport": "Ulaşım",
    "Multi-sector": "Çok sektörlü",
    "Public sector": "Kamu sektörü",
    "Energy / public sector": "Enerji / kamu sektörü",
    "Construction": "İnşaat",
    "Utilities / construction": "Kamu hizmetleri / inşaat",
    "Food and beverage manufacturing": "Gıda ve içecek üretimi",
    "Telecommunications": "Telekomünikasyon",
    "Health": "Sağlık",
    "Construction / utilities": "İnşaat / kamu hizmetleri",
    "Agriculture / solar installation": "Tarım / güneş paneli kurulumu",
    "Limassol": "Limasol",
    "Nicosia": "Lefkoşa",
    "North Nicosia": "Kuzey Lefkoşa",
    "Larnaca": "Larnaka",
    "Lakatamia": "Lakatamia",
    "Kofinou": "Kofinou",
    "Peyia": "Peyia",
    "Korkuteli": "Korkuteli",
    "Dortyol-Gecitkale": "Dörtyol-Geçitkale",
    "Kalkanli": "Kalkanlı",
    "EAC workers stage 24-hour island-wide strike": "EAC çalışanları ada genelinde 24 saatlik grev yaptı",
    "EAC Workers to Stage 24-Hour Strike on April 23": "EAC çalışanları 23 Nisan'da 24 saatlik greve çıkacak",
    "EAC workers strike over 'erratic' govt policy, Cyta expansion into energy": "EAC çalışanları hükümet politikası ve Cyta'nın enerjiye genişlemesi nedeniyle greve çıktı",
    "Wolt delivery riders in Limassol take industrial action over falling pay rates, safety issues": "Limasol'da Wolt kuryeleri düşen ücretler ve güvenlik sorunları nedeniyle eylem yaptı",
    "Wolt recruiter threatens striking riders with the sack": "Wolt işe alım sorumlusu grevdeki kuryeleri işten atmakla tehdit etti",
    "Education support staff to stage 24-hour strike on March 26": "Eğitim destek personeli 26 Mart'ta 24 saatlik grev yapacak",
    "ΑΝΑΚΟΙΝΩΣΗ ΤΥΠΟΥ - ΣΕΚ": "SEK basın açıklaması",
    "Taxi drivers launch 24-hour strike across Cyprus": "Taksi şoförleri Kıbrıs genelinde 24 saatlik grev başlattı",
    "Three-hour general strike over CoLA in Cyprus, several sectors affected": "Kıbrıs'ta CoLA için üç saatlik genel grev, birçok sektör etkilendi",
    "Nationwide strike paralyses Cyprus over cost-of-living allowance": "Hayat pahalılığı ödeneği için ülke geneli grev Kıbrıs'ı durdurdu",
    "Calls Grow for Ruling Coalition to Step Down Over CoLA Cuts": "CoLA kesintileri nedeniyle iktidar koalisyonunun istifa etmesi çağrıları artıyor",
    "Strikes Continue in the North for Another Day": "Kuzeyde grevler bir gün daha sürüyor",
    "Protests during Turkish Cypriot strike over cost-of-living adjustments": "Kıbrıslı Türklerin hayat pahalılığı ödeneği grevinde protestolar",
    "PEO: worker's death not an 'unfortunate event'": "PEO: işçinin ölümü 'talihsiz olay' değil",
    "Tragic workplace accident claims life of 55-year-old worker in Kofinou": "Kofinou'da trajik iş kazası 55 yaşındaki işçinin yaşamını aldı",
    "Worker dies in Peyia after being crushed by falling timber": "Peyia'da düşen kerestelerin altında kalan işçi öldü",
    "Another worker falls to death from construction site": "Bir işçi daha inşaat sahasında düşerek öldü",
    "Πρωτομαγιάτικες συγκεντρώσεις της ΠΕΟ σε όλη την Κύπρο": "PEO'nun Kıbrıs genelindeki 1 Mayıs buluşmaları",
    "Urgent need for Cyprus solution to be highlighted on May Day": "1 Mayıs'ta Kıbrıs çözümünün acil gerekliliği vurgulanacak",
  },
  el: {
    "Electricity Authority of Cyprus": "Αρχή Ηλεκτρισμού Κύπρου",
    "EAC trade unions": "Συντεχνίες ΑΗΚ",
    "Wolt / fleet management contractors": "Wolt / εργολάβοι διαχείρισης στόλου",
    "Wolt riders' collective; PEO informed": "Συλλογικότητα διανομέων Wolt. Η ΠΕΟ ενημερώθηκε",
    "Ministry of Education, Sport and Youth support programmes": "Υποστηρικτικά προγράμματα Υπουργείου Παιδείας, Αθλητισμού και Νεολαίας",
    "Taxi sector": "Κλάδος ταξί",
    "Turkish Cypriot public sector": "Τουρκοκυπριακός δημόσιος τομέας",
    "PEO and Turkish Cypriot unions": "ΠΕΟ και τουρκοκυπριακές συντεχνίες",
    "EKTAM Kibris Ltd.": "EKTAM Kibris Ltd.",
    "Emek-Is / Dev-Is": "Emek-Is / Dev-Is",
    "Telecommunications Department": "Τμήμα Τηλεπικοινωνιών",
    "Tel-Sen; Turk-Sen-affiliated unions and other unions in support": "Tel-Sen, συντεχνίες της Turk-Sen και άλλες συντεχνίες σε υποστήριξη",
    "Health Ministry hospitals and public health centres": "Νοσοκομεία Υπουργείου Υγείας και δημόσια κέντρα υγείας",
    "Tip-Is, KTHES, KTAMS, Kamu-Is, Kamu-Sen": "Tip-Is, KTHES, KTAMS, Kamu-Is, Kamu-Sen",
    "Private contracting firm not named in source": "Ιδιωτική εργοληπτική εταιρεία που δεν κατονομάστηκε στην πηγή",
    "Citrus packaging factory not named in source": "Εργοστάσιο συσκευασίας εσπεριδοειδών που δεν κατονομάστηκε στην πηγή",
    "Energy / utilities": "Ενέργεια / υπηρεσίες κοινής ωφελείας",
    "Delivery platforms": "Πλατφόρμες διανομής",
    "Education": "Εκπαίδευση",
    "Transport": "Μεταφορές",
    "Multi-sector": "Πολλοί κλάδοι",
    "Public sector": "Δημόσιος τομέας",
    "Energy / public sector": "Ενέργεια / δημόσιος τομέας",
    "Construction": "Οικοδομές",
    "Utilities / construction": "Υπηρεσίες κοινής ωφελείας / οικοδομές",
    "Food and beverage manufacturing": "Παραγωγή τροφίμων και ποτών",
    "Telecommunications": "Τηλεπικοινωνίες",
    "Health": "Υγεία",
    "Construction / utilities": "Οικοδομές / υπηρεσίες κοινής ωφελείας",
    "Agriculture / solar installation": "Γεωργία / εγκατάσταση φωτοβολταϊκών",
    "Limassol": "Λεμεσός",
    "Nicosia": "Λευκωσία",
    "North Nicosia": "Βόρεια Λευκωσία",
    "Larnaca": "Λάρνακα",
    "Lakatamia": "Λακατάμια",
    "Kofinou": "Κοφίνου",
    "Peyia": "Πέγεια",
    "Korkuteli": "Korkuteli",
    "Dortyol-Gecitkale": "Dortyol-Gecitkale",
    "Kalkanli": "Kalkanli",
    "EAC workers stage 24-hour island-wide strike": "Οι εργαζόμενοι της ΑΗΚ πραγματοποιούν 24ωρη παγκύπρια απεργία",
    "EAC Workers to Stage 24-Hour Strike on April 23": "Οι εργαζόμενοι της ΑΗΚ θα πραγματοποιήσουν 24ωρη απεργία στις 23 Απριλίου",
    "EAC workers strike over 'erratic' govt policy, Cyta expansion into energy": "Απεργία εργαζομένων της ΑΗΚ για την κυβερνητική πολιτική και την επέκταση της Cyta στην ενέργεια",
    "Wolt delivery riders in Limassol take industrial action over falling pay rates, safety issues": "Διανομείς της Wolt στη Λεμεσό κινητοποιούνται για μειωμένες αμοιβές και ζητήματα ασφάλειας",
    "Wolt recruiter threatens striking riders with the sack": "Υπεύθυνος προσλήψεων της Wolt απειλεί απεργούς διανομείς με απόλυση",
    "Education support staff to stage 24-hour strike on March 26": "Προσωπικό υποστήριξης εκπαίδευσης θα πραγματοποιήσει 24ωρη απεργία στις 26 Μαρτίου",
    "Taxi drivers launch 24-hour strike across Cyprus": "Οδηγοί ταξί ξεκινούν 24ωρη απεργία σε όλη την Κύπρο",
    "Three-hour general strike over CoLA in Cyprus, several sectors affected": "Τρίωρη γενική απεργία για την ΑΤΑ στην Κύπρο, επηρεάστηκαν πολλοί κλάδοι",
    "Nationwide strike paralyses Cyprus over cost-of-living allowance": "Παγκύπρια απεργία παραλύει την Κύπρο για την αυτόματη τιμαριθμική αναπροσαρμογή",
    "Calls Grow for Ruling Coalition to Step Down Over CoLA Cuts": "Πληθαίνουν οι εκκλήσεις για παραίτηση του κυβερνητικού συνασπισμού λόγω περικοπών στην ΑΤΑ",
    "Strikes Continue in the North for Another Day": "Οι απεργίες συνεχίζονται στον βορρά για άλλη μία ημέρα",
    "Protests during Turkish Cypriot strike over cost-of-living adjustments": "Διαμαρτυρίες κατά την τουρκοκυπριακή απεργία για τις τιμαριθμικές αναπροσαρμογές",
    "El-Sen Başkanı Ahmet Tuğcu Serbest Bırakıldı: 'Suçlamaları Reddediyoruz'": "Ο πρόεδρος της El-Sen Αχμέτ Τουγτζού αφέθηκε ελεύθερος: απορρίπτουμε τις κατηγορίες",
    "PEO: worker's death not an 'unfortunate event'": "ΠΕΟ: ο θάνατος εργάτη δεν είναι 'ατυχές γεγονός'",
    "Tragic workplace accident claims life of 55-year-old worker in Kofinou": "Τραγικό εργατικό ατύχημα στοιχίζει τη ζωή 55χρονου εργάτη στην Κοφίνου",
    "Worker dies in Peyia after being crushed by falling timber": "Εργάτης πέθανε στην Πέγεια αφού καταπλακώθηκε από ξυλεία",
    "Another worker falls to death from construction site": "Άλλος ένας εργάτης πέφτει θανάσιμα από εργοτάξιο",
    "Urgent need for Cyprus solution to be highlighted on May Day": "Η επείγουσα ανάγκη για λύση του Κυπριακού θα τονιστεί την Πρωτομαγιά",
  },
};

const state = {
  map: null,
  sb: null,
  records: [],
  filtered: [],
  markers: new Map(),
  layerFilters: new Set(DEFAULT_LAYERS),
  actionFilters: new Set(ACTION_TYPES),
  dateRange: "all",
  province: "",
  sector: "",
  search: "",
  selectedRecordId: null,
  lang: "tr",
  listOpen: false,
};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  initMap();
  initSupabase();
  bindStaticEvents();
  await loadRecords();
  populateControls();
  applyTranslations();
  applyFilters();
}

function initMap() {
  state.map = L.map("map", { zoomControl: false }).setView(CONFIG.defaultCenter, CONFIG.defaultZoom);
  L.control.zoom({ position: "topright" }).addTo(state.map);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(state.map);
  state.map.on("zoomend", renderMarkers);
}

function initSupabase() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !window.supabase) return;
  state.sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
}

async function loadRecords() {
  if (state.sb) {
    const { data, error } = await state.sb
      .from("cases")
      .select("*, case_locations(*), case_sources(*), case_timeline(*)")
      .eq("verification_status", "verified");
    if (!error && Array.isArray(data)) {
      state.records = data.map(normalizeSupabaseRecord).filter(hasPublicSource);
      return;
    }
    showLoadNotice(`Supabase could not be read; using static data: ${error?.message || "unknown error"}`);
  }

  try {
    const incidentPayloads = await Promise.all(CONFIG.incidentPaths.map(fetchJson));
    state.records = incidentPayloads
      .flatMap(extractRecords)
      .map(normalizeRecord)
      .filter(hasPublicSource);
  } catch (error) {
    showLoadNotice(`Current data could not be read; trying seed fallback: ${error.message}`);
    const fallback = await fetchJson(CONFIG.fallbackSeedPath);
    state.records = extractRecords(fallback).map(normalizeRecord).filter(hasPublicSource);
  }
}

async function fetchJson(path) {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`${path} ${response.status}`);
  return response.json();
}

function extractRecords(payload) {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload.records)) return payload.records;
  if (Array.isArray(payload.cases)) return payload.cases;
  return [];
}

function normalizeSupabaseRecord(row) {
  return normalizeRecord({
    ...row,
    locations: row.case_locations || row.locations || [],
    sources: row.case_sources || row.sources || [],
    timeline: row.case_timeline || row.timeline || [],
  });
}

function normalizeRecord(raw) {
  const areaFromKey = raw.province_key ? AREA_BY_KEY[raw.province_key]?.name : null;
  const fallbackArea = areaFromKey || raw.province || "";
  const topLocation = raw.lat || raw.lng || fallbackArea ? [{
    id: `${raw.id || raw.public_id || raw.title}-loc`,
    label: raw.location_label || raw.employer || raw.title,
    province_key: raw.province_key,
    province: fallbackArea,
    district: raw.district || "",
    lat: raw.lat,
    lng: raw.lng,
    geocode_precision: raw.geocode_precision,
    fatality_count: raw.fatality_count,
  }] : [];

  const locations = (raw.locations?.length ? raw.locations : topLocation).map((location, index) => {
    const areaKey = location.province_key || raw.province_key || keyForArea(location.province || fallbackArea);
    const area = AREA_BY_KEY[areaKey]?.name || location.province || fallbackArea;
    const center = AREA_BY_KEY[areaKey] || AREA_BY_NAME[area] || {};
    return {
      id: location.id || `${raw.id || raw.public_id || "record"}-${index}`,
      label: location.label || raw.location_label || raw.employer || raw.title || area,
      province_key: areaKey || "",
      province: area,
      district: cleanTitle(location.district || raw.district || ""),
      lat: finiteNumber(location.lat) ?? finiteNumber(raw.lat) ?? center.lat ?? null,
      lng: finiteNumber(location.lng) ?? finiteNumber(raw.lng) ?? center.lng ?? null,
      geocode_precision: location.geocode_precision || raw.geocode_precision || (location.lat && location.lng ? "exact" : "area_centroid"),
      fatality_count: finiteNumber(location.fatality_count) ?? null,
      location_basis: location.location_basis || location.location_note || raw.location_basis || "",
    };
  }).filter((location) => Number.isFinite(location.lat) && Number.isFinite(location.lng));

  const record = {
    id: String(raw.id || raw.public_id || slugify(raw.title || cryptoRandomId())),
    public_id: raw.public_id || raw.id || "",
    record_type: raw.record_type || raw.category || "strike",
    status: raw.status || raw.stage || "unknown",
    action_type: raw.action_type || null,
    title: raw.title || "Untitled record",
    summary: raw.summary || "",
    worker_name: raw.worker_name || "",
    worker_age: raw.worker_age || raw.age || null,
    person_name: raw.person_name || raw.person || "",
    employer: raw.employer || "",
    labor_organization: raw.labor_organization || raw.union || "",
    role: raw.role || "",
    sector: raw.sector || "",
    cause: raw.cause || raw.cause_of_death || "",
    demands: Array.isArray(raw.demands) ? raw.demands : stringList(raw.demands),
    participant_count: raw.participant_count || null,
    decision_date: raw.decision_date || null,
    start_date: raw.start_date || null,
    end_date: raw.end_date || null,
    event_date: raw.event_date || null,
    death_date: raw.death_date || null,
    detention_date: raw.detention_date || raw.arrest_date || null,
    custody_status: raw.custody_status || raw.detention_status || "",
    accusation: raw.accusation || "",
    legal_status: raw.legal_status || "",
    last_verified_at: raw.last_verified_at || raw.updated_at || null,
    locations,
    sources: (raw.sources || []).map((source) => ({
      title: source.title || source.source_title || source.url || "",
      url: source.url || source.source_url || "",
      publisher: source.publisher || source.source_publisher || "",
      type: source.type || source.source_type || "",
      published_at: source.published_at || source.source_published_at || null,
    })),
    timeline: (raw.timeline || []).map((item) => ({
      date: item.date || null,
      status: item.status || item.stage || raw.status || "unknown",
      note: item.note || "",
    })),
    translations: {
      ...(raw.translations || {}),
      ...(RECORD_TRANSLATIONS[String(raw.id || raw.public_id || "")] || {}),
    },
  };

  if (record.record_type === "action_call") {
    record.status = isUpcomingActionCall(record) ? "action_call_upcoming" : "action_call_happened";
  }

  record.layer = getLayer(record);
  record.search_blob = buildSearchBlob(record);
  return record;
}

function hasPublicSource(record) {
  return record.sources.some((source) => /^https?:\/\//i.test(source.url));
}

function getLayer(record) {
  if (record.record_type === "worker_death") return "worker_death_recent";
  if (record.record_type === "action_call") return record.status === "action_call_upcoming" ? "action_call_upcoming" : "action_call_happened";
  if (record.record_type === "union_labor_arrest") {
    return isCurrentArrestRecord(record) ? "union_arrest_current" : "union_arrest_released";
  }
  if (record.status === "ended") return "strike_ended";
  if (record.status === "decision_taken") return "strike_decision";
  if (record.status === "postponed_banned") return "strike_postponed";
  return "strike_ongoing";
}

function isUpcomingActionCall(record) {
  const eventKey = dateKey(record.event_date || record.start_date || record.decision_date);
  if (!eventKey) return record.status === "action_call_upcoming";
  return eventKey > cyprusTodayKey();
}

function isCurrentArrestRecord(record) {
  const text = normalizeAscii([
    record.status,
    record.title,
    record.summary,
    record.custody_status,
    record.legal_status,
    record.accusation,
    ...(record.timeline || []).flatMap((item) => [item.status, item.note]),
    ...(record.sources || []).flatMap((source) => [source.title, source.publisher]),
  ].filter(Boolean).join(" "));
  const hasArrestInfo = record.status === "currently_arrested" || /\barrest\w*|\bjail\w*|\btutuk\w*|\bdetain\w*/i.test(text);
  const hasReleaseInfo = record.status === "released" || /\breleased\b|\bserbest\b|\btahliye\b/i.test(text);
  return hasArrestInfo && !hasReleaseInfo;
}

function populateControls() {
  document.getElementById("date-range-filter").innerHTML = availableDateRanges()
    .map((range) => `<option value="${range}" ${state.dateRange === range ? "selected" : ""}>${escapeHtml(dateRangeLabel(range))}</option>`)
    .join("");

  const areaOptions = [`<option value="">${escapeHtml(t("filters.allProvinces"))}</option>`]
    .concat(AREAS.map((area) => `<option value="${escapeHtml(area.name)}" ${state.province === area.name ? "selected" : ""}>${escapeHtml(localizedAreaName(area.key))}</option>`));
  document.getElementById("province-filter").innerHTML = areaOptions.join("");
  document.getElementById("submission-province").innerHTML = `<option value=""></option>${AREAS.map((area) => `<option value="${escapeHtml(area.name)}">${escapeHtml(localizedAreaName(area.key))}</option>`).join("")}`;

  const sectors = Array.from(new Set(state.records.map((item) => item.sector).filter(Boolean)))
    .sort((a, b) => a.localeCompare(b, localeForLang()));
  document.getElementById("sector-filter").innerHTML = [`<option value="">${escapeHtml(t("filters.allSectors"))}</option>`]
    .concat(sectors.map((sector) => `<option value="${escapeHtml(sector)}" ${state.sector === sector ? "selected" : ""}>${escapeHtml(sector)}</option>`))
    .join("");

  document.getElementById("submission-record-type").innerHTML = RECORD_TYPES
    .map((type) => `<option value="${type}">${escapeHtml(t(`recordType.${type}`))}</option>`)
    .join("");

  renderCheckboxGroup("layer-filters", LAYER_ORDER, state.layerFilters, "layer");
  renderCheckboxGroup("action-filters", ACTION_TYPES, state.actionFilters, "actionType");
}

function availableDateRanges() {
  return DATE_RANGES.concat(recordYearDateRanges());
}

function recordYearDateRanges() {
  const years = state.records
    .map((record) => parseDate(recordDateValue(record))?.getFullYear())
    .filter((year) => Number.isInteger(year));
  if (!years.length) return [];
  const firstYear = Math.min(...years);
  const lastYear = Math.max(MAX_YEAR_DATE_RANGE, firstYear);
  return Array.from({ length: lastYear - firstYear + 1 }, (_, index) => `year_${firstYear + index}`);
}

function dateRangeLabel(range) {
  const year = dateRangeYear(range);
  return year ? String(year) : t(`filters.dateRanges.${range}`);
}

function renderCheckboxGroup(id, values, selectedSet, labelKey) {
  document.getElementById(id).innerHTML = values.map((value) => {
    const checked = selectedSet.has(value) ? "checked" : "";
    return `<label class="check-row">
      <input type="checkbox" value="${escapeHtml(value)}" data-filter-group="${labelKey}" ${checked}>
      <span>${escapeHtml(t(`${labelKey}.${value}`))}</span>
    </label>`;
  }).join("");
}

function bindStaticEvents() {
  document.getElementById("search-input").addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLocaleLowerCase(localeForLang());
    applyFilters();
  });
  document.getElementById("date-range-filter").addEventListener("change", (event) => {
    state.dateRange = event.target.value;
    applyFilters();
  });
  document.getElementById("province-filter").addEventListener("change", (event) => {
    state.province = event.target.value;
    applyFilters();
  });
  document.getElementById("sector-filter").addEventListener("change", (event) => {
    state.sector = event.target.value;
    applyFilters();
  });
  document.querySelector(".filters").addEventListener("change", (event) => {
    if (!event.target.matches("[data-filter-group]")) return;
    const group = event.target.dataset.filterGroup;
    const set = group === "layer" ? state.layerFilters : state.actionFilters;
    event.target.checked ? set.add(event.target.value) : set.delete(event.target.value);
    applyFilters();
  });
  document.getElementById("mobile-chipbar").addEventListener("click", (event) => {
    const button = event.target.closest("[data-quick-layer]");
    if (!button) return;
    const layer = button.dataset.quickLayer;
    state.layerFilters.has(layer) ? state.layerFilters.delete(layer) : state.layerFilters.add(layer);
    populateControls();
    applyFilters();
  });
  document.getElementById("mobile-filter-btn").addEventListener("click", openFilters);
  document.getElementById("close-filter-btn").addEventListener("click", closeFilters);
  document.getElementById("drawer-scrim").addEventListener("click", closeFilters);
  document.getElementById("list-records-btn").addEventListener("click", () => {
    state.listOpen ? closeRecordList() : renderRecordList();
  });
  document.getElementById("lang-btn").addEventListener("click", switchLanguage);
  document.getElementById("open-submit-btn").addEventListener("click", () => openModal("submit-modal"));
  document.getElementById("methodology-btn").addEventListener("click", () => openModal("methodology-modal"));
  document.getElementById("sources-btn").addEventListener("click", () => openModal("sources-modal"));
  document.querySelectorAll("[data-close-modal]").forEach((button) => button.addEventListener("click", closeOpenModal));
  document.querySelectorAll(".modal-backdrop").forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeOpenModal();
    });
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeOpenModal();
      closeFilters();
    }
  });
  document.getElementById("submission-form").addEventListener("submit", submitReport);
}

function switchLanguage() {
  const currentIndex = LANG_ORDER.indexOf(state.lang);
  state.lang = LANG_ORDER[(currentIndex + 1) % LANG_ORDER.length];
  state.search = document.getElementById("search-input").value.trim().toLocaleLowerCase(localeForLang());
  populateControls();
  applyTranslations();
  applyFilters();
  if (state.selectedRecordId) renderDetail(getSelectedRecord());
  if (state.listOpen) renderRecordList();
}

function openFilters() {
  document.body.classList.add("filters-open");
  document.getElementById("drawer-scrim").hidden = false;
  setTimeout(() => state.map.invalidateSize(), 220);
}

function closeFilters() {
  document.body.classList.remove("filters-open");
  document.getElementById("drawer-scrim").hidden = true;
  setTimeout(() => state.map.invalidateSize(), 220);
}

function closeRecordList() {
  state.listOpen = false;
  document.getElementById("record-list-panel").hidden = true;
  document.getElementById("empty-detail").hidden = Boolean(state.selectedRecordId);
  updateListButton();
}

function updateListButton() {
  const button = document.getElementById("list-records-btn");
  button.classList.toggle("active", state.listOpen);
  button.setAttribute("aria-pressed", String(state.listOpen));
  button.setAttribute("aria-label", `${t("nav.listAll")} - ${formatCount(state.filtered.length)} ${t("list.countLabel")}`);
}

function applyTranslations() {
  document.documentElement.lang = state.lang;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    node.placeholder = t(node.dataset.i18nPlaceholder);
  });
  const nextLang = LANG_ORDER[(LANG_ORDER.indexOf(state.lang) + 1) % LANG_ORDER.length].toUpperCase();
  const langButton = document.getElementById("lang-btn");
  langButton.textContent = nextLang;
  langButton.setAttribute("aria-label", `Switch language to ${nextLang}`);
}

function applyFilters() {
  state.filtered = state.records.filter((record) => {
    if (!state.layerFilters.has(record.layer)) return false;
    const locations = displayLocations(record);
    if (!locations.length) return false;
    if (!recordMatchesDateRange(record)) return false;
    if (state.province && !locations.some((location) => location.province === state.province)) return false;
    if (state.sector && record.sector !== state.sector) return false;
    if (record.record_type === "strike" && record.action_type && !state.actionFilters.has(record.action_type)) return false;
    if (state.search && !record.search_blob.includes(state.search)) return false;
    return true;
  });

  if (state.selectedRecordId && !state.filtered.some((record) => record.id === state.selectedRecordId)) {
    clearSelection();
  }

  updateStats();
  renderLegend();
  renderMobileChips();
  renderMarkers();
  updateListButton();
  if (state.listOpen) renderRecordList();
  document.getElementById("result-count").textContent = state.filtered.length;
}

function updateStats() {
  const displayRecords = state.records.filter((record) => displayLocations(record).length && recordMatchesDateRange(record));
  document.getElementById("stat-total").textContent = formatCount(displayRecords.length);
  document.getElementById("stat-deaths").textContent = formatCount(workerDeathTotal(displayRecords));
  document.getElementById("stat-strikes").textContent = formatCount(displayRecords.filter((record) => record.layer === "strike_ongoing").length);
  document.getElementById("stat-arrests").textContent = formatCount(displayRecords.filter((record) => record.layer === "union_arrest_current").length);
}

function workerDeathTotal(records) {
  return records
    .filter((record) => record.record_type === "worker_death")
    .reduce((sum, record) => sum + fatalityCount(record), 0);
}

function fatalityCount(record) {
  const locationTotal = record.locations.reduce((sum, location) => sum + (finiteNumber(location.fatality_count) || 0), 0);
  return locationTotal || finiteNumber(record.fatality_count) || 1;
}

function renderLegend() {
  document.getElementById("legend-card").innerHTML = LAYER_ORDER.map((layer) => {
    const border = layer === "strike_decision" ? "border-color:#575047" : "";
    return `<div class="legend-row"><span class="legend-dot" style="background:${LAYER_COLORS[layer]};${border}"></span>${escapeHtml(t(`layer.${layer}`))}</div>`;
  }).join("");
}

function renderMobileChips() {
  const counts = Object.fromEntries(QUICK_LAYERS.map((layer) => [layer, state.records.filter((record) => record.layer === layer && displayLocations(record).length && recordMatchesDateRange(record)).length]));
  document.getElementById("mobile-chipbar").innerHTML = QUICK_LAYERS.map((layer) => {
    const active = state.layerFilters.has(layer) ? "active" : "";
    return `<button class="quick-chip ${active}" type="button" data-quick-layer="${layer}">
      <span class="quick-dot" style="background:${LAYER_COLORS[layer]}"></span>${escapeHtml(t(`quickLayer.${layer}`))} ${formatCount(counts[layer])}
    </button>`;
  }).join("");
}

function renderMarkers() {
  state.markers.forEach((marker) => marker.remove());
  state.markers.clear();

  const markerItems = [];
  state.filtered.forEach((record) => {
    displayLocations(record).forEach((location) => {
      markerItems.push({ record, location });
    });
  });

  const overlapGroups = markerItems.reduce((groups, item) => {
    const key = locationKey(item.location);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(item);
    return groups;
  }, new Map());

  overlapGroups.forEach((items) => {
    items
      .sort((a, b) => `${a.record.id}:${a.location.id}`.localeCompare(`${b.record.id}:${b.location.id}`))
      .forEach(({ record, location }, index) => {
        const selected = record.id === state.selectedRecordId ? "selected" : "";
        const offset = markerOffset(index, items.length);
        const marker = L.marker([location.lat, location.lng], {
          icon: L.divIcon({
            className: "case-marker-wrap",
            html: `<span class="case-marker ${record.layer} ${selected}" aria-hidden="true"></span>`,
            iconSize: [18, 18],
            iconAnchor: [9 - offset.x, 9 - offset.y],
          }),
          title: localizedRecordValue(record, "title"),
          zIndexOffset: selected ? 2000 : 0,
        }).addTo(state.map);
        marker.on("click", () => selectRecord(record.id, location));
        state.markers.set(`${record.id}:${location.id}`, marker);
      });
  });
}

function locationKey(location) {
  return `${Number(location.lat).toFixed(6)},${Number(location.lng).toFixed(6)}`;
}

function displayLocations(record) {
  return (record.locations || []).filter((location) => Number.isFinite(location.lat) && Number.isFinite(location.lng));
}

function localizedRecordValue(record, field) {
  const explicitValue = record.translations?.[state.lang]?.[field];
  if (explicitValue) return localizedValue(explicitValue);
  const generatedValue = generatedLocalizedRecordValue(record, field, state.lang);
  return generatedValue || localizedValue(record[field] ?? "");
}

function localizedValue(value) {
  return VALUE_TRANSLATIONS[state.lang]?.[value] || value;
}

function generatedLocalizedRecordValue(record, field, lang = state.lang) {
  if (lang === "en") return "";
  if (record.record_type === "worker_death") {
    const death = workerDeathLocalizationParts(record, lang);
    if (field === "title") return death.title;
    if (field === "summary") return death.summary;
    if (field === "worker_name") return localizedWorkerName(record.worker_name, lang);
    if (field === "employer") return localizedEmployer(record.employer, lang);
    if (field === "sector") return localizedSector(record.sector, lang);
    if (field === "cause") return localizedCause(record.cause, lang, "detail");
    if (field === "legal_status") return localizedLegalStatus(record.legal_status, lang);
  }
  if (record.record_type === "strike" || record.record_type === "action_call" || record.record_type === "union_labor_arrest") {
    const laborRecord = laborRecordLocalizationParts(record, lang);
    if (field === "title") return laborRecord.title;
    if (field === "summary") return laborRecord.summary;
    if (field === "employer") return localizedOrganizationName(record.employer, lang);
    if (field === "labor_organization") return localizedOrganizationName(record.labor_organization, lang);
    if (field === "sector") return localizedSector(record.sector, lang);
    if (field === "action_type") return localizedActionTypeValue(record.action_type, lang);
    if (field === "person_name") return localizedPersonName(record.person_name, lang);
    if (field === "role") return localizedRole(record.role, lang);
    if (field === "custody_status") return localizedCustodyStatus(record, lang);
    if (field === "legal_status") return localizedLegalStatus(record.legal_status, lang);
    if (field === "accusation") return localizedAccusation(record, lang);
  }
  return "";
}

function workerDeathLocalizationParts(record, lang) {
  const worker = localizedWorkerName(record.worker_name, lang);
  const age = Number.isFinite(Number(record.worker_age)) ? Number(record.worker_age) : null;
  const location = displayLocations(record)[0] || record.locations?.[0] || {};
  const place = localizedWorkerDeathPlace(location, lang);
  const sector = localizedSector(record.sector, lang);
  const employer = localizedEmployer(record.employer, lang);
  const causeTitle = localizedCause(record.cause, lang, "title");
  const causeSentence = localizedCause(record.cause, lang, "sentence");
  const legalStatus = localizedLegalStatus(record.legal_status, lang);

  if (lang === "tr") {
    const workerPhrase = worker === "Adı yayımlanmadı" ? "Adı yayımlanmayan işçi" : worker;
    const agePhrase = age ? `${age} yaşındaki ` : "";
    const placePhrase = place ? `${place} bölgesinde ` : "";
    return {
      title: `${workerPhrase} ${placePhrase}${causeTitle} hayatını kaybetti`.replace(/\s+/g, " ").trim(),
      summary: `${agePhrase}${workerPhrase}, ${placePhrase}${sector ? `${sector} işinde ` : ""}${causeSentence} yaşamını yitirdi. ${employer ? `İşveren/kurum: ${employer}. ` : ""}${legalStatus ? `Hukuki süreç: ${legalStatus}.` : "Kaynak, olayın iş kazası olarak kaydedildiğini bildiriyor."}`.replace(/\s+/g, " ").trim(),
    };
  }

  const workerPhrase = worker === "Το όνομα δεν δημοσιεύθηκε" ? "Εργάτης του οποίου το όνομα δεν δημοσιεύθηκε" : worker;
  const agePhrase = age ? `${age}χρονος ` : "";
  const placePhrase = place ? `στην περιοχή ${place} ` : "";
  return {
    title: `${workerPhrase} πέθανε ${placePhrase}${causeTitle}`.replace(/\s+/g, " ").trim(),
    summary: `${agePhrase}${workerPhrase} πέθανε ${placePhrase}${sector ? `ενώ εργαζόταν στον κλάδο ${sector} ` : ""}${causeSentence}. ${employer ? `Εργοδότης/φορέας: ${employer}. ` : ""}${legalStatus ? `Νομική διαδικασία: ${legalStatus}.` : "Η πηγή καταγράφει το περιστατικό ως εργατικό δυστύχημα."}`.replace(/\s+/g, " ").trim(),
  };
}

function laborRecordLocalizationParts(record, lang) {
  if (record.record_type === "strike") return strikeLocalizationParts(record, lang);
  if (record.record_type === "action_call") return actionCallLocalizationParts(record, lang);
  if (record.record_type === "union_labor_arrest") return unionRetaliationLocalizationParts(record, lang);
  return { title: "", summary: "" };
}

function strikeLocalizationParts(record, lang) {
  const org = localizedOrganizationName(record.labor_organization, lang);
  const employer = localizedOrganizationName(record.employer, lang);
  const actor = org || employer || localizedRecordTypeActor(record, lang);
  const place = localizedRecordPlace(record, lang);
  const date = formatDate(record.start_date || record.decision_date || record.end_date || record.last_verified_at);
  const status = localizedStatusValue(record.status, lang);
  const actionType = localizedActionTypeValue(record.action_type, lang);
  const demands = localizedDemandsFallback(record, lang);

  if (lang === "tr") {
    const title = `${actor} ${place ? `${place} bölgesinde ` : ""}${actionType || "grev / işçi eylemi"}`.replace(/\s+/g, " ").trim();
    const summary = `${date ? `${date} tarihinde ` : ""}${actor}, ${employer && employer !== actor ? `${employer} ile ilgili ` : ""}${place ? `${place} bölgesinde ` : ""}${actionType || "grev / işçi eylemi"} kaydıyla izlendi. ${demands.length ? `Talepler/konular: ${demands.join("; ")}. ` : ""}${status ? `Durum: ${status}.` : ""}`.replace(/\s+/g, " ").trim();
    return { title, summary };
  }

  const title = `${actor} ${place ? `στην περιοχή ${place} ` : ""}${actionType || "απεργία / εργατική δράση"}`.replace(/\s+/g, " ").trim();
  const summary = `${date ? `Στις ${date}, ` : ""}${actor} καταγράφηκε ${place ? `στην περιοχή ${place} ` : ""}για ${actionType || "απεργία / εργατική δράση"}${employer && employer !== actor ? ` που αφορά ${employer}` : ""}. ${demands.length ? `Αιτήματα/ζητήματα: ${demands.join("; ")}. ` : ""}${status ? `Κατάσταση: ${status}.` : ""}`.replace(/\s+/g, " ").trim();
  return { title, summary };
}

function actionCallLocalizationParts(record, lang) {
  const org = localizedOrganizationName(record.labor_organization, lang) || localizedRecordTypeActor(record, lang);
  const place = localizedRecordPlace(record, lang);
  const date = formatDate(record.event_date || record.start_date || record.decision_date || record.last_verified_at);
  const actionType = localizedActionTypeValue(record.action_type, lang);
  const status = localizedStatusValue(record.status, lang);
  const demands = localizedDemandsFallback(record, lang);

  if (lang === "tr") {
    const title = `${org} ${place ? `${place} için ` : ""}${actionType || "eylem / dayanışma çağrısı"}`.replace(/\s+/g, " ").trim();
    const summary = `${org}, ${date ? `${date} tarihi için ` : ""}${place ? `${place} bölgesinde ` : ""}${actionType || "eylem / dayanışma çağrısı"} yaptı. ${demands.length ? `Talepler/konular: ${demands.join("; ")}. ` : ""}${status ? `Durum: ${status}.` : ""}`.replace(/\s+/g, " ").trim();
    return { title, summary };
  }

  const title = `${org} ${place ? `για την περιοχή ${place} ` : ""}${actionType || "κάλεσμα σε δράση / αλληλεγγύη"}`.replace(/\s+/g, " ").trim();
  const summary = `${org} απηύθυνε ${date ? `για τις ${date} ` : ""}${actionType || "κάλεσμα σε δράση / αλληλεγγύη"}${place ? ` στην περιοχή ${place}` : ""}. ${demands.length ? `Αιτήματα/ζητήματα: ${demands.join("; ")}. ` : ""}${status ? `Κατάσταση: ${status}.` : ""}`.replace(/\s+/g, " ").trim();
  return { title, summary };
}

function unionRetaliationLocalizationParts(record, lang) {
  const person = localizedPersonName(record.person_name, lang);
  const org = localizedOrganizationName(record.labor_organization, lang);
  const actor = person || org || localizedRecordTypeActor(record, lang);
  const place = localizedRecordPlace(record, lang);
  const date = formatDate(record.detention_date || record.last_verified_at || record.start_date);
  const status = localizedCustodyStatus(record, lang) || localizedStatusValue(record.status, lang);
  const accusation = localizedAccusation(record, lang);

  if (lang === "tr") {
    const title = `${actor} için emek hakkı baskısı / gözaltı kaydı`.replace(/\s+/g, " ").trim();
    const summary = `${date ? `${date} tarihinde ` : ""}${actor}${org && person ? ` (${org})` : ""} için ${place ? `${place} bölgesinde ` : ""}emek ve sendika hakkıyla bağlantılı gözaltı, tutuklama veya baskı kaydı izlendi. ${accusation ? `Suçlama/hukuki durum: ${accusation}. ` : ""}${status ? `Durum: ${status}.` : ""}`.replace(/\s+/g, " ").trim();
    return { title, summary };
  }

  const title = `Καταγραφή εργατικής δίωξης / κράτησης για ${actor}`.replace(/\s+/g, " ").trim();
  const summary = `${date ? `Στις ${date}, ` : ""}καταγράφηκε υπόθεση κράτησης, σύλληψης ή πίεσης συνδεδεμένης με εργατικά και συνδικαλιστικά δικαιώματα για ${actor}${org && person ? ` (${org})` : ""}${place ? ` στην περιοχή ${place}` : ""}. ${accusation ? `Κατηγορία/νομική κατάσταση: ${accusation}. ` : ""}${status ? `Κατάσταση: ${status}.` : ""}`.replace(/\s+/g, " ").trim();
  return { title, summary };
}

function localizedRecordTypeActor(record, lang) {
  if (record.record_type === "strike") return lang === "tr" ? "İşçiler / sendika" : "Εργαζόμενοι / συντεχνία";
  if (record.record_type === "action_call") return lang === "tr" ? "Emek örgütleri" : "Εργατικές οργανώσεις";
  if (record.record_type === "union_labor_arrest") return lang === "tr" ? "Emek hakkı savunucuları" : "Υπερασπιστές εργατικών δικαιωμάτων";
  return "";
}

function localizedRecordPlace(record, lang) {
  const location = displayLocations(record)[0] || record.locations?.[0] || {};
  return localizedWorkerDeathPlace(location, lang);
}

function localizedOrganizationName(value, lang) {
  if (!value) return "";
  const text = normalizeAscii(value).toLowerCase();
  const translations = {
    "electricity authority of cyprus": { tr: "Kıbrıs Elektrik Kurumu", el: "Αρχή Ηλεκτρισμού Κύπρου" },
    "eac": { tr: "Kıbrıs Elektrik Kurumu", el: "Αρχή Ηλεκτρισμού Κύπρου" },
    "peo": { tr: "PEO", el: "ΠΕΟ" },
    "sek": { tr: "SEK", el: "ΣΕΚ" },
    "ktams": { tr: "KTAMS", el: "KTAMS" },
    "kamu-is": { tr: "Kamu-İş", el: "Kamu-İş" },
    "kamusen": { tr: "Kamu-Sen", el: "Kamu-Sen" },
    "el-sen": { tr: "EL-SEN", el: "EL-SEN" },
    "wolt": { tr: "Wolt", el: "Wolt" },
  };
  const exact = translations[text]?.[lang];
  if (exact) return exact;
  if (/not named|not published|not specified|unknown/.test(text)) {
    return lang === "tr" ? "Kaynakta adlandırılmayan örgüt / işveren" : "οργάνωση / εργοδότης που δεν κατονομάζεται στην πηγή";
  }
  return value;
}

function localizedPersonName(value, lang) {
  if (!value || /not named|not published|unnamed|unknown/i.test(value)) {
    return lang === "tr" ? "Adı yayımlanmayan kişi" : "πρόσωπο του οποίου το όνομα δεν δημοσιεύθηκε";
  }
  return value;
}

function localizedRole(value, lang) {
  const text = normalizeAscii(value || "").toLowerCase();
  if (!text) return "";
  if (/president|chair/.test(text)) return lang === "tr" ? "sendika başkanı" : "πρόεδρος συντεχνίας";
  if (/secretary/.test(text)) return lang === "tr" ? "sendika sekreteri" : "γραμματέας συντεχνίας";
  if (/teacher|educator/.test(text)) return lang === "tr" ? "eğitim emekçisi" : "εκπαιδευτικός";
  if (/worker|employee/.test(text)) return lang === "tr" ? "işçi / çalışan" : "εργαζόμενος/η";
  if (/protester|demonstrator/.test(text)) return lang === "tr" ? "eylemci" : "διαδηλωτής/τρια";
  return lang === "tr" ? "emek hakkı öznesi" : "πρόσωπο συνδεδεμένο με εργατικά δικαιώματα";
}

function localizedActionTypeValue(value, lang) {
  if (!value) return "";
  const text = normalizeAscii(value).toLowerCase();
  const type = ACTION_TYPES.includes(value) ? value : ACTION_TYPES.find((item) => text.includes(normalizeAscii(item).toLowerCase()));
  if (type && COPY[lang]?.actionType?.[type]) return COPY[lang].actionType[type];
  if (/strike|grev/.test(text)) return lang === "tr" ? "grev" : "απεργία";
  if (/protest|demonstration|eylem/.test(text)) return lang === "tr" ? "protesto / eylem" : "διαμαρτυρία / δράση";
  if (/solidarity|dayan/.test(text)) return lang === "tr" ? "dayanışma eylemi" : "δράση αλληλεγγύης";
  return lang === "tr" ? "emek eylemi" : "εργατική δράση";
}

function localizedStatusValue(value, lang) {
  return COPY[lang]?.status?.[value] || "";
}

function localizedCustodyStatus(record, lang) {
  const text = normalizeAscii([record.custody_status, record.legal_status, record.status].filter(Boolean).join(" ")).toLowerCase();
  if (!text) return "";
  if (/released|serbest/.test(text)) return lang === "tr" ? "serbest bırakıldı" : "αφέθηκε ελεύθερος/η";
  if (/arrest|detain|custody|jail|remand|tutuk|gozalti|gözalti|gözalt/.test(text)) return lang === "tr" ? "gözaltı / tutuklama bildirildi" : "αναφέρθηκε κράτηση / σύλληψη";
  if (/summon|police statement|statement/.test(text)) return lang === "tr" ? "polis ifadesi / çağrısı bildirildi" : "αναφέρθηκε κλήση ή κατάθεση στην αστυνομία";
  return localizedStatusValue(record.status, lang) || (lang === "tr" ? "emek hakkı baskısı bildirildi" : "αναφέρθηκε πίεση σε εργατικά δικαιώματα");
}

function localizedAccusation(record, lang) {
  const text = normalizeAscii([record.accusation, record.legal_status, record.summary].filter(Boolean).join(" ")).toLowerCase();
  if (!text) return "";
  if (/cola/.test(text)) return lang === "tr" ? "CoLA / hayat pahalılığı eylemleriyle bağlantılı süreç" : "διαδικασία συνδεδεμένη με κινητοποιήσεις για την ΑΤΑ / CoLA";
  if (/strike|protest|demonstration|union|sendika|grev|eylem/.test(text)) return lang === "tr" ? "sendikal faaliyet veya protestoyla bağlantılı hukuki süreç" : "νομική διαδικασία συνδεδεμένη με συνδικαλιστική δράση ή διαμαρτυρία";
  if (/police|court|arrest|detain|summon/.test(text)) return lang === "tr" ? "polis veya mahkeme süreci bildirildi" : "αναφέρθηκε αστυνομική ή δικαστική διαδικασία";
  return lang === "tr" ? "kaynakta emek hakkı bağlamında hukuki süreç bildirildi" : "η πηγή αναφέρει νομική διαδικασία σε πλαίσιο εργατικών δικαιωμάτων";
}

function localizedDemandsFallback(record, lang) {
  const explicit = record.translations?.[lang]?.demands;
  if (explicit?.length) return explicit;
  const rawDemands = Array.isArray(record.demands) ? record.demands : [];
  if (!rawDemands.length) return [];
  return rawDemands.map((demand) => localizedDemandText(demand, lang)).filter(Boolean);
}

function localizedDemandText(value, lang) {
  const text = normalizeAscii(value || "").toLowerCase();
  const trRules = [
    [/collective|agreement|bargain|sozlesme|sözlesme/, "Toplu iş sözleşmesi ve pazarlık hakkı"],
    [/pay|wage|salary|rate|cola|allowance|cost of living|ücret|maas|maaş/, "Ücret, ödenek ve hayat pahalılığı düzenlemesi"],
    [/staff|shortage|vacant|workload|kad(ro|ro)|personel/, "Personel eksikliği ve iş yükünün azaltılması"],
    [/safety|health|protect|risk|safe/, "İşçi sağlığı ve güvenliği önlemleri"],
    [/dismiss|reinstat|termination|fired|işten/, "İşten çıkarılanların geri alınması ve sendikal baskının durması"],
    [/privat|protocol|public|asset/, "Kamusal hizmetlerin ve kurumların korunması"],
    [/service|delay|patient|education|school/, "Kamu hizmetlerinin ve çalışma koşullarının iyileştirilmesi"],
    [/solidarity|support/, "Dayanışma ve hak ihlallerinin görünür kılınması"],
  ];
  const elRules = [
    [/collective|agreement|bargain|sozlesme|sözlesme/, "Συλλογική σύμβαση και δικαίωμα διαπραγμάτευσης"],
    [/pay|wage|salary|rate|cola|allowance|cost of living|ücret|maas|maaş/, "Μισθοί, επιδόματα και ρύθμιση της ΑΤΑ / CoLA"],
    [/staff|shortage|vacant|workload|kad(ro|ro)|personel/, "Ελλείψεις προσωπικού και μείωση φόρτου εργασίας"],
    [/safety|health|protect|risk|safe/, "Μέτρα υγείας και ασφάλειας στην εργασία"],
    [/dismiss|reinstat|termination|fired|işten/, "Επαναπρόσληψη απολυμένων και παύση αντισυνδικαλιστικής πίεσης"],
    [/privat|protocol|public|asset/, "Προστασία δημόσιων υπηρεσιών και θεσμών"],
    [/service|delay|patient|education|school/, "Βελτίωση δημόσιων υπηρεσιών και συνθηκών εργασίας"],
    [/solidarity|support/, "Αλληλεγγύη και ανάδειξη παραβιάσεων δικαιωμάτων"],
  ];
  const rules = lang === "tr" ? trRules : elRules;
  return rules.find(([pattern]) => pattern.test(text))?.[1] || (lang === "tr" ? "Kaynakta belirtilen işçi talepleri" : "εργατικά αιτήματα που αναφέρονται στην πηγή");
}

function localizedWorkerName(value, lang) {
  if (!value || /name not published|not published|unnamed/i.test(value)) {
    return lang === "tr" ? "Adı yayımlanmadı" : "Το όνομα δεν δημοσιεύθηκε";
  }
  return value;
}

function localizedWorkerDeathPlace(location, lang) {
  if (!location) return "";
  const district = location.district || location.label || "";
  return district || localizedAreaNameForLang(location.province_key || location.province, lang);
}

function localizedAreaNameForLang(nameOrKey, lang) {
  const area = AREA_BY_KEY[nameOrKey] || AREA_BY_NAME[nameOrKey];
  if (!area) return nameOrKey || "";
  return area[lang] || area.name;
}

function localizedSector(value, lang) {
  if (!value) return "";
  const text = normalizeAscii(value).toLowerCase();
  const tr = [
    [/construction|building|plumbing|painting|scaffold|site/, "İnşaat"],
    [/electric|utilities|telecommunication|installation|power/, "Elektrik / altyapı"],
    [/agricultur|farm|tractor|vineyard|olive|cattle|greenhouse|landscap/, "Tarım / hayvancılık"],
    [/factory|manufactur|industrial|warehouse|glass|pack|retail|maintenance/, "Sanayi / depo"],
    [/port|ship|demining|mine/, "Liman / saha çalışması"],
    [/domestic|restaurant|municipal|waste/, "Hizmetler"],
  ];
  const el = [
    [/construction|building|plumbing|painting|scaffold|site/, "οικοδομές"],
    [/electric|utilities|telecommunication|installation|power/, "ηλεκτρισμό / υποδομές"],
    [/agricultur|farm|tractor|vineyard|olive|cattle|greenhouse|landscap/, "γεωργία / κτηνοτροφία"],
    [/factory|manufactur|industrial|warehouse|glass|pack|retail|maintenance/, "βιομηχανία / αποθήκες"],
    [/port|ship|demining|mine/, "λιμάνι / εργασίες πεδίου"],
    [/domestic|restaurant|municipal|waste/, "υπηρεσίες"],
  ];
  const rules = lang === "tr" ? tr : el;
  return rules.find(([pattern]) => pattern.test(text))?.[1] || (lang === "tr" ? "çalışma" : "εργασία");
}

function localizedEmployer(value, lang) {
  if (!value) return "";
  const text = normalizeAscii(value).toLowerCase();
  if (/not named|not published|not specified|unknown|direct employer not named/.test(text)) {
    if (/construction/.test(text)) return lang === "tr" ? "Kaynakta adı verilmeyen inşaat işvereni" : "εργοδότης οικοδομής που δεν κατονομάστηκε στην πηγή";
    if (/factory|warehouse|industrial/.test(text)) return lang === "tr" ? "Kaynakta adı verilmeyen işyeri" : "χώρος εργασίας που δεν κατονομάστηκε στην πηγή";
    return lang === "tr" ? "Kaynakta adı yayımlanmadı" : "δεν κατονομάστηκε στην πηγή";
  }
  return value;
}

function localizedCause(value, lang, style = "detail") {
  const text = normalizeAscii(value || "").toLowerCase();
  const tr = causePhrase(text, "tr");
  const el = causePhrase(text, "el");
  const phrase = lang === "tr" ? tr : el;
  if (style === "title") return phrase.title;
  if (style === "sentence") return phrase.sentence;
  return phrase.detail;
}

function causePhrase(text, lang) {
  const tr = (title, sentence, detail = title) => ({ title, sentence, detail });
  const el = (title, sentence, detail = title) => ({ title, sentence, detail });

  if (/electrocut|electric/.test(text)) {
    return lang === "tr"
      ? tr("elektrik akımına kapılarak", "elektrik akımına kapılması sonucu", "Elektrik akımına kapılma")
      : el("από ηλεκτροπληξία", "από ηλεκτροπληξία", "Ηλεκτροπληξία");
  }
  if (/lift shaft|elevator shaft/.test(text)) {
    return lang === "tr"
      ? tr("asansör boşluğuna düşerek", "asansör boşluğuna düşmesi sonucu", "Asansör boşluğuna düşme")
      : el("μετά από πτώση σε φρεάτιο ανελκυστήρα", "μετά από πτώση σε φρεάτιο ανελκυστήρα", "Πτώση σε φρεάτιο ανελκυστήρα");
  }
  if (/scaffold/.test(text)) {
    return lang === "tr"
      ? tr("iskeleden düşerek", "iskeleden düşmesi sonucu", "İskeleden düşme")
      : el("μετά από πτώση από σκαλωσιά", "μετά από πτώση από σκαλωσιά", "Πτώση από σκαλωσιά");
  }
  if (/ladder/.test(text)) {
    return lang === "tr"
      ? tr("merdivenden düşerek", "merdivenden düşmesi sonucu", "Merdivenden düşme")
      : el("μετά από πτώση από σκάλα", "μετά από πτώση από σκάλα", "Πτώση από σκάλα");
  }
  if (/fall|fell|plung|height|floor|roof|balcony/.test(text)) {
    return lang === "tr"
      ? tr("yüksekten düşerek", "yüksekten düşmesi sonucu", "Yüksekten düşme")
      : el("μετά από πτώση από ύψος", "μετά από πτώση από ύψος", "Πτώση από ύψος");
  }
  if (/crush|crushed|falling|struck|hit/.test(text) && /timber|wood|lumber/.test(text)) {
    return lang === "tr"
      ? tr("düşen kerestelerin altında kalarak", "düşen kerestelerin altında kalması sonucu", "Düşen kerestelerin altında kalma")
      : el("αφού καταπλακώθηκε από ξυλεία", "αφού καταπλακώθηκε από ξυλεία", "Καταπλάκωση από ξυλεία");
  }
  if (/glass/.test(text)) {
    return lang === "tr"
      ? tr("düşen cam plakanın altında kalarak", "düşen cam plakanın altında kalması sonucu", "Düşen cam plaka")
      : el("αφού καταπλακώθηκε από γυάλινο φύλλο", "αφού καταπλακώθηκε από γυάλινο φύλλο", "Καταπλάκωση από γυάλινο φύλλο");
  }
  if (/tractor|harvester|digger|forklift|truck|lorry|garbage truck|machinery|machine|crane|counterweight|pipes|slab|block/.test(text)) {
    return lang === "tr"
      ? tr("makine veya ağır ekipman kazasında", "makine veya ağır ekipman kazası sonucu", "Makine / ağır ekipman kazası")
      : el("σε δυστύχημα με μηχάνημα ή βαρύ εξοπλισμό", "σε δυστύχημα με μηχάνημα ή βαρύ εξοπλισμό", "Δυστύχημα με μηχάνημα / βαρύ εξοπλισμό");
  }
  if (/collapse|trench|excavation|earth|sand|hole/.test(text)) {
    return lang === "tr"
      ? tr("göçük veya çökme sonucu", "göçük veya çökme sonucu", "Göçük / çökme")
      : el("σε κατάρρευση ή υποχώρηση εδάφους", "σε κατάρρευση ή υποχώρηση εδάφους", "Κατάρρευση / υποχώρηση εδάφους");
  }
  if (/fire|burn|explosion|mine/.test(text)) {
    return lang === "tr"
      ? tr("yangın veya patlamada", "yangın veya patlama sonucu", "Yangın / patlama")
      : el("σε πυρκαγιά ή έκρηξη", "σε πυρκαγιά ή έκρηξη", "Πυρκαγιά / έκρηξη");
  }
  if (/drown/.test(text)) {
    return lang === "tr"
      ? tr("boğularak", "boğulma sonucu", "Boğulma")
      : el("από πνιγμό", "από πνιγμό", "Πνιγμός");
  }
  if (/bull|animal/.test(text)) {
    return lang === "tr"
      ? tr("hayvan saldırısı sonucu", "hayvan saldırısı sonucu", "Hayvan saldırısı")
      : el("μετά από επίθεση ζώου", "μετά από επίθεση ζώου", "Επίθεση ζώου");
  }
  return lang === "tr"
    ? tr("iş kazasında", "iş sırasında meydana gelen kaza sonucu", "İş kazası")
    : el("σε εργατικό δυστύχημα", "σε δυστύχημα κατά την εργασία", "Εργατικό δυστύχημα");
}

function localizedLegalStatus(value, lang) {
  const text = normalizeAscii(value || "").toLowerCase();
  if (!text) return "";
  const parts = [];
  if (/police/.test(text)) parts.push(lang === "tr" ? "polis soruşturması bildirildi" : "αναφέρθηκε αστυνομική έρευνα");
  if (/labou?r|inspection|department/.test(text)) parts.push(lang === "tr" ? "çalışma teftişi bildirildi" : "αναφέρθηκε έλεγχος από το Τμήμα Επιθεώρησης Εργασίας");
  if (/arrest|remand|court|trial|suspect/.test(text)) parts.push(lang === "tr" ? "mahkeme veya tutuklama süreci bildirildi" : "αναφέρθηκε δικαστική διαδικασία ή σύλληψη");
  if (/continu/.test(text)) parts.push(lang === "tr" ? "soruşturma sürüyor" : "η έρευνα συνεχίζεται");
  if (!parts.length) return lang === "tr" ? "Kaynakta hukuki süreç belirtiliyor" : "η πηγή αναφέρει νομική διαδικασία";
  return Array.from(new Set(parts)).join(lang === "tr" ? "; " : "; ");
}

function localizedDemands(record) {
  if (record.translations?.[state.lang]?.demands?.length) return record.translations[state.lang].demands;
  if (state.lang !== "en") return localizedDemandsFallback(record, state.lang);
  return record.demands || [];
}

function localizedLocationValue(record, location, field) {
  const explicitValue = record.translations?.[state.lang]?.locations?.[location.id]?.[field];
  if (explicitValue) return explicitValue;
  const generatedValue = generatedLocalizedLocationValue(record, location, field, state.lang);
  return generatedValue || location[field] || "";
}

function localizedTimelineNote(record, item, index) {
  const explicitValue = record.translations?.[state.lang]?.timeline?.[index];
  if (explicitValue) return explicitValue;
  const generatedValue = generatedLocalizedTimelineNote(record, item, state.lang);
  return generatedValue || item.note || "";
}

function localizedSourceTitle(record, source, index) {
  const explicitValue = record.translations?.[state.lang]?.sources?.[index]?.title;
  if (explicitValue) return explicitValue;
  const translatedValue = localizedValue(source.title);
  if (state.lang === "en" || translatedValue !== source.title) return translatedValue || t("common.source");
  const publisher = source.publisher || "";
  if (state.lang === "tr") return publisher ? `${publisher} kaynağı` : "Kamusal kaynak";
  if (state.lang === "el") return publisher ? `Πηγή: ${publisher}` : "Δημόσια πηγή";
  return t("common.source");
}

function generatedLocalizedLocationValue(record, location, field, lang) {
  if (lang === "en") return "";
  const place = localizedWorkerDeathPlace(location, lang);
  if (field === "label") {
    if (record.record_type === "worker_death") {
      const sector = localizedSector(record.sector, lang);
      if (lang === "tr") return place ? `${place} ${sector ? `${sector} sahası` : "çalışma sahası"}` : "";
      return place ? `${sector ? `χώρος ${sector}` : "χώρος εργασίας"} ${place}` : "";
    }
    if (record.record_type === "strike") return lang === "tr" ? `${place || "Kıbrıs"} grev / eylem konumu` : `${place || "Κύπρος"} τόπος απεργίας / δράσης`;
    if (record.record_type === "action_call") return lang === "tr" ? `${place || "Kıbrıs"} eylem çağrısı konumu` : `${place || "Κύπρος"} τόπος καλέσματος δράσης`;
    if (record.record_type === "union_labor_arrest") return lang === "tr" ? `${place || "Kıbrıs"} gözaltı / baskı kaydı konumu` : `${place || "Κύπρος"} τόπος κράτησης / πίεσης`;
  }
  if (field === "location_basis") {
    if (lang === "tr") return `Kaynak olayı ${place || "bu konum"} çevresine yerleştiriyor; kesin nokta yayımlanmadığında harita için yaklaşık konum kullanılır.`;
    return `Η πηγή τοποθετεί την υπόθεση στην περιοχή ${place || "αυτής της τοποθεσίας"}. Όταν δεν δημοσιεύεται ακριβές σημείο, χρησιμοποιείται προσεγγιστική θέση στον χάρτη.`;
  }
  return "";
}

function generatedLocalizedTimelineNote(record, item, lang) {
  if (lang === "en") return "";
  const date = item.date || record.death_date || record.start_date || record.event_date || record.detention_date || "";
  if (record.record_type === "worker_death") {
    if (lang === "tr") return `${date ? `${formatDate(date)}: ` : ""}Ölümcül iş kazası kayda geçirildi.`;
    return `${date ? `${formatDate(date)}: ` : ""}Καταγράφηκε θανατηφόρο εργατικό δυστύχημα.`;
  }
  if (record.record_type === "strike") {
    if (lang === "tr") return `${date ? `${formatDate(date)}: ` : ""}${localizedStatusValue(item.status, lang) || "Grev / işçi eylemi"} kayda geçirildi.`;
    return `${date ? `${formatDate(date)}: ` : ""}Καταγράφηκε ${localizedStatusValue(item.status, lang) || "απεργία / εργατική δράση"}.`;
  }
  if (record.record_type === "action_call") {
    if (lang === "tr") return `${date ? `${formatDate(date)}: ` : ""}Eylem / dayanışma çağrısı kayda geçirildi.`;
    return `${date ? `${formatDate(date)}: ` : ""}Καταγράφηκε κάλεσμα σε δράση / αλληλεγγύη.`;
  }
  if (record.record_type === "union_labor_arrest") {
    if (lang === "tr") return `${date ? `${formatDate(date)}: ` : ""}Emek hakkı baskısı, gözaltı veya tutuklama kaydı güncellendi.`;
    return `${date ? `${formatDate(date)}: ` : ""}Ενημερώθηκε καταγραφή πίεσης, κράτησης ή σύλληψης συνδεδεμένης με εργατικά δικαιώματα.`;
  }
  return "";
}

function localizedAreaName(nameOrKey) {
  const area = AREA_BY_KEY[nameOrKey] || AREA_BY_NAME[nameOrKey];
  if (!area) return nameOrKey || "";
  return area[state.lang] || area.name;
}

function fatalityWord() {
  if (state.lang === "tr") return "iş cinayeti";
  if (state.lang === "el") return "θάνατοι";
  return "fatalities";
}

function recordMatchesDateRange(record) {
  const selectedYear = dateRangeYear(state.dateRange);
  if (selectedYear) {
    const date = parseDate(recordDateValue(record));
    return Boolean(date && date.getFullYear() === selectedYear);
  }
  const cutoff = dateRangeCutoff(state.dateRange);
  if (!cutoff) return true;
  if (!recordUsesDateRange(record)) return true;
  const date = parseDate(recordDateValue(record));
  return Boolean(date && date >= cutoff);
}

function recordUsesDateRange(record) {
  return record.record_type === "worker_death"
    || record.record_type === "action_call"
    || record.layer === "strike_ended"
    || record.layer === "strike_postponed"
    || record.layer === "union_arrest_released";
}

function dateRangeCutoff(range) {
  const now = cyprusToday();
  if (range === "last_30_days") {
    now.setDate(now.getDate() - 30);
    return now;
  }
  if (range === "last_3_months") {
    now.setMonth(now.getMonth() - 3);
    return now;
  }
  if (range === "last_6_months") {
    now.setMonth(now.getMonth() - 6);
    return now;
  }
  return null;
}

function dateRangeYear(range) {
  const match = String(range || "").match(/^year_(\d{4})$/);
  return match ? Number(match[1]) : null;
}

function markerOffset(index, total) {
  if (total <= 1) return { x: 0, y: 0 };
  let ring = 0;
  let ringStart = 0;
  let slots = Math.min(total, 8);
  while (index >= ringStart + slots) {
    ringStart += slots;
    ring += 1;
    slots = Math.min(total - ringStart, 8 * (ring + 1));
  }
  const slot = index - ringStart;
  const angle = ((Math.PI * 2) / slots) * slot - Math.PI / 2;
  const zoom = state.map?.getZoom?.() || CONFIG.defaultZoom;
  const zoomSpread = Math.min(Math.max(0, zoom - CONFIG.defaultZoom) * 4.5, 33);
  const radius = 12 + zoomSpread + (ring * (8 + (zoomSpread * 0.55)));
  return {
    x: Math.cos(angle) * radius,
    y: Math.sin(angle) * radius,
  };
}

function renderRecordList() {
  const panel = document.getElementById("record-list-panel");
  const records = sortedFilteredRecords();
  state.listOpen = true;

  document.getElementById("case-detail").hidden = true;
  document.getElementById("empty-detail").hidden = true;
  panel.hidden = false;

  panel.innerHTML = `
    <header class="record-list-header">
      <div>
        <div class="section-label">${escapeHtml(t("list.label"))}</div>
        <h2>${escapeHtml(t("list.title"))}</h2>
        <p>${escapeHtml(formatCount(records.length))} ${escapeHtml(t("list.countLabel"))}</p>
      </div>
      <button class="icon-btn" type="button" data-close-list aria-label="${escapeHtml(t("common.close"))}">×</button>
    </header>
    ${records.length ? `<div class="record-list">${records.map(renderRecordListItem).join("")}</div>` : `<p class="record-list-empty">${escapeHtml(t("list.empty"))}</p>`}
  `;

  panel.querySelector("[data-close-list]").addEventListener("click", closeRecordList);
  panel.querySelectorAll("[data-record-list-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const record = state.records.find((item) => item.id === button.dataset.recordListId);
      if (record) selectRecord(record.id, displayLocations(record)[0] || null);
    });
  });
  updateListButton();
}

function renderRecordListItem(record) {
  const selected = record.id === state.selectedRecordId ? "selected" : "";
  const border = record.layer === "strike_decision" ? "border-color:#575047" : "";
  return `
    <button class="record-list-item ${selected}" type="button" data-record-list-id="${escapeAttribute(record.id)}">
      <span class="record-list-dot" style="background:${LAYER_COLORS[record.layer]};${border}"></span>
      <span class="record-list-copy">
        <strong>${escapeHtml(localizedRecordValue(record, "title"))}</strong>
        <span>${escapeHtml(recordListMeta(record))}</span>
      </span>
    </button>
  `;
}

function sortedFilteredRecords() {
  return [...state.filtered].sort((a, b) => (
    String(recordDateValue(b)).localeCompare(String(recordDateValue(a)))
    || LAYER_ORDER.indexOf(a.layer) - LAYER_ORDER.indexOf(b.layer)
    || localizedRecordValue(a, "title").localeCompare(localizedRecordValue(b, "title"), localeForLang())
  ));
}

function recordListMeta(record) {
  const location = record.locations[0] || {};
  const place = [localizedValue(location.district), localizedAreaName(location.province)].filter(Boolean).join(", ");
  return [
    t(`recordType.${record.record_type}`),
    t(`status.${record.status}`),
    formatDate(recordDateValue(record)),
    place,
  ].filter(Boolean).join(" · ");
}

function recordDateValue(record) {
  if (record.record_type === "worker_death") return record.death_date || record.last_verified_at || "";
  if (record.record_type === "action_call") return record.event_date || record.start_date || record.decision_date || record.last_verified_at || "";
  if (record.record_type === "union_labor_arrest") return record.detention_date || record.last_verified_at || "";
  if (record.status === "ended") return record.end_date || record.last_verified_at || record.start_date || record.decision_date || "";
  if (record.status === "postponed_banned") return record.end_date || record.last_verified_at || record.decision_date || record.start_date || "";
  return record.start_date || record.decision_date || record.end_date || record.last_verified_at || "";
}

function selectRecord(recordId, location) {
  state.selectedRecordId = recordId;
  state.listOpen = false;
  document.body.classList.add("detail-open");
  closeFilters();
  renderDetail(getSelectedRecord());
  renderMarkers();
  updateListButton();
  if (location) state.map.flyTo([location.lat, location.lng], Math.max(state.map.getZoom(), 10), { duration: 0.45 });
  setTimeout(() => state.map.invalidateSize(), 220);
}

function clearSelection() {
  state.selectedRecordId = null;
  state.listOpen = false;
  document.body.classList.remove("detail-open");
  document.getElementById("case-detail").hidden = true;
  document.getElementById("record-list-panel").hidden = true;
  document.getElementById("empty-detail").hidden = false;
  updateListButton();
  renderMarkers();
}

function getSelectedRecord() {
  return state.records.find((record) => record.id === state.selectedRecordId) || null;
}

function renderDetail(record) {
  const detail = document.getElementById("case-detail");
  const empty = document.getElementById("empty-detail");
  if (!record) {
    clearSelection();
    return;
  }
  empty.hidden = true;
  document.getElementById("record-list-panel").hidden = true;
  detail.hidden = false;

  detail.innerHTML = `
    <header class="detail-header">
      <div class="detail-topline">
        <div class="chip-row">
          ${chip(t(`recordType.${record.record_type}`), null)}
          ${chip(t(`status.${record.status}`), LAYER_COLORS[record.layer], record.layer === "strike_decision")}
        </div>
        <div class="detail-actions">
          <button class="icon-btn" type="button" data-close-detail aria-label="${escapeHtml(t("common.close"))}">×</button>
        </div>
      </div>
      <h2>${escapeHtml(localizedRecordValue(record, "title"))}</h2>
      <p class="case-summary">${escapeHtml(localizedRecordValue(record, "summary") || t("common.notSpecified"))}</p>
    </header>
    <div class="detail-stats">${renderTypeStats(record)}</div>
    ${localizedDemands(record).length ? detailSection(t("detail.demands"), `<div class="chip-row">${localizedDemands(record).map((demand) => chip(demand)).join("")}</div>`) : ""}
    ${detailSection(t("detail.locations"), renderLocations(record))}
    ${detailSection(t("detail.timeline"), renderTimeline(record))}
    ${detailSection(t("detail.sources"), renderSources(record))}
  `;
  detail.querySelector("[data-close-detail]").addEventListener("click", clearSelection);
}

function renderTypeStats(record) {
  if (record.record_type === "worker_death") {
    return [
      detailStat(t("detail.workerName"), localizedRecordValue(record, "worker_name")),
      detailStat(t("detail.age"), record.worker_age),
      detailStat(t("detail.employer"), localizedRecordValue(record, "employer")),
      detailStat(t("detail.sector"), localizedRecordValue(record, "sector")),
      detailStat(t("detail.date"), formatDate(record.death_date)),
      detailStat(t("detail.cause"), localizedRecordValue(record, "cause")),
      detailStat(t("detail.fatalityCount"), formatCount(fatalityCount(record))),
      detailStat(t("detail.legalStatus"), localizedRecordValue(record, "legal_status")),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  if (record.record_type === "action_call") {
    return [
      detailStat(t("detail.union"), localizedRecordValue(record, "labor_organization")),
      detailStat(t("detail.sector"), localizedRecordValue(record, "sector")),
      detailStat(t("detail.actionType"), record.action_type ? t(`actionType.${record.action_type}`) : ""),
      detailStat(t("detail.eventDate"), formatDate(record.event_date || record.start_date)),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  if (record.record_type === "union_labor_arrest") {
    return [
      detailStat(t("detail.person"), localizedRecordValue(record, "person_name") || localizedRecordValue(record, "title")),
      detailStat(t("detail.union"), localizedRecordValue(record, "labor_organization")),
      detailStat(t("detail.role"), localizedRecordValue(record, "role")),
      detailStat(t("detail.detentionDate"), formatDate(record.detention_date)),
      detailStat(t("detail.custodyStatus"), localizedRecordValue(record, "custody_status") || t(`status.${record.status}`)),
      detailStat(t("detail.accusation"), localizedRecordValue(record, "accusation") || localizedRecordValue(record, "legal_status")),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  return [
    detailStat(t("detail.employer"), localizedRecordValue(record, "employer")),
    detailStat(t("detail.union"), localizedRecordValue(record, "labor_organization")),
    detailStat(t("detail.sector"), localizedRecordValue(record, "sector")),
    detailStat(t("detail.actionType"), record.action_type ? t(`actionType.${record.action_type}`) : ""),
    detailStat(t("detail.workers"), formatCount(record.participant_count)),
    detailStat(t("detail.decisionDate"), formatDate(record.decision_date)),
    detailStat(t("detail.startDate"), formatDate(record.start_date)),
    detailStat(t("detail.endDate"), formatDate(record.end_date)),
    detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
  ].join("");
}

function detailStat(label, value) {
  const display = value || value === 0 ? String(value) : t("common.notSpecified");
  return `<div class="detail-stat"><span>${escapeHtml(label)}</span><strong>${escapeHtml(display)}</strong></div>`;
}

function detailSection(title, content) {
  return `<section class="detail-section"><h3>${escapeHtml(title)}</h3>${content}</section>`;
}

function renderLocations(record) {
  return `<div class="location-list">${record.locations.map((location) => `
    <div class="location-row">
      <strong>${escapeHtml(localizedLocationValue(record, location, "label"))}</strong>
      <span>${escapeHtml(renderLocationSubtitle(location))}</span><br>
      <span>${escapeHtml(t("detail.geocode"))}: ${escapeHtml(t(`geocodePrecision.${location.geocode_precision || "unknown"}`))}</span>
      ${localizedLocationValue(record, location, "location_basis") ? `<br><span>${escapeHtml(localizedLocationValue(record, location, "location_basis"))}</span>` : ""}
    </div>`).join("")}</div>`;
}

function renderLocationSubtitle(location) {
  const parts = [localizedValue(location.district), localizedAreaName(location.province)].filter(Boolean);
  if (location.fatality_count) parts.push(`${formatCount(location.fatality_count)} ${fatalityWord()}`);
  return parts.join(", ");
}

function renderTimeline(record) {
  if (!record.timeline.length) return `<p class="case-summary">${escapeHtml(t("common.notSpecified"))}</p>`;
  return `<div class="timeline-list">${record.timeline.map((item, index) => `
    <div class="timeline-row">
      <div class="timeline-date">${escapeHtml(formatDate(item.date) || "")}</div>
      <div class="timeline-body"><strong>${escapeHtml(t(`status.${item.status}`))}</strong>${escapeHtml(localizedTimelineNote(record, item, index))}</div>
    </div>`).join("")}</div>`;
}

function renderSources(record) {
  return `<div class="source-list">${record.sources.map((source, index) => `
    <a class="source-row" href="${escapeAttribute(source.url)}" target="_blank" rel="noreferrer">
      <strong>${escapeHtml(localizedSourceTitle(record, source, index))}</strong>
      <span>${escapeHtml([source.publisher, formatDate(source.published_at)].filter(Boolean).join(" · "))}</span>
    </a>`).join("")}</div>`;
}

function chip(label, color, outlined = false) {
  const dot = color ? `<span class="chip-dot" style="background:${color};${outlined ? "border-color:#575047" : ""}"></span>` : "";
  return `<span class="chip">${dot}${escapeHtml(label)}</span>`;
}

async function submitReport(event) {
  event.preventDefault();
  const errorBox = document.getElementById("submission-error");
  errorBox.textContent = "";
  const payload = buildSubmissionPayload();
  const validationError = validateSubmission(payload);
  if (validationError) {
    errorBox.textContent = validationError;
    return;
  }

  try {
    if (state.sb) {
      const { error } = await state.sb.from("case_submissions").insert(payload);
      if (error) throw error;
      showSubmissionSuccess(t("submit.successRemote"));
    } else {
      const pending = JSON.parse(localStorage.getItem(CONFIG.localSubmissionKey) || "[]");
      pending.push({ ...payload, local_id: cryptoRandomId(), created_at: new Date().toISOString() });
      localStorage.setItem(CONFIG.localSubmissionKey, JSON.stringify(pending));
      showSubmissionSuccess(t("submit.successLocal"));
    }
  } catch (error) {
    errorBox.textContent = error.message || String(error);
  }
}

function buildSubmissionPayload() {
  const area = document.getElementById("submission-province").value;
  const center = AREA_BY_NAME[area] || {};
  const latRaw = document.getElementById("submission-lat").value;
  const lngRaw = document.getElementById("submission-lng").value;
  return {
    record_type: document.getElementById("submission-record-type").value,
    title: document.getElementById("submission-title").value.trim(),
    summary: document.getElementById("submission-summary").value.trim(),
    province: area,
    province_key: keyForArea(area),
    location_label: document.getElementById("submission-location").value.trim(),
    event_date: document.getElementById("submission-date").value || null,
    lat: latRaw ? Number(latRaw) : center.lat || null,
    lng: lngRaw ? Number(lngRaw) : center.lng || null,
    geocode_precision: latRaw && lngRaw ? "exact" : "area_centroid",
    source_url: document.getElementById("submission-source-url").value.trim(),
    source_title: document.getElementById("submission-source-title").value.trim(),
    submitter_contact: document.getElementById("submission-contact").value.trim(),
    status: "needs_review",
  };
}

function validateSubmission(payload) {
  if (!payload.record_type || !payload.title || !payload.summary || !payload.province || !payload.source_url) return t("submit.missing");
  if (!/^https?:\/\//i.test(payload.source_url)) return t("submit.badUrl");
  const latEntered = Boolean(document.getElementById("submission-lat").value);
  const lngEntered = Boolean(document.getElementById("submission-lng").value);
  if (latEntered !== lngEntered || !Number.isFinite(payload.lat) || !Number.isFinite(payload.lng)) return t("submit.badCoords");
  return "";
}

function showSubmissionSuccess(message) {
  document.getElementById("submission-form").hidden = true;
  document.getElementById("submission-success").hidden = false;
  document.getElementById("submission-success-copy").textContent = message;
}

function openModal(id) {
  const modal = document.getElementById(id);
  modal.setAttribute("aria-hidden", "false");
  if (id === "submit-modal") {
    document.getElementById("submission-form").hidden = false;
    document.getElementById("submission-success").hidden = true;
    document.getElementById("submission-error").textContent = "";
  }
}

function closeOpenModal() {
  document.querySelectorAll(".modal-backdrop").forEach((modal) => modal.setAttribute("aria-hidden", "true"));
}

function showLoadNotice(message) {
  const notice = document.createElement("div");
  notice.className = "load-notice";
  notice.textContent = message;
  document.querySelector(".map-region").appendChild(notice);
  setTimeout(() => notice.remove(), 8000);
}

function buildSearchBlob(record) {
  const translatableRecordValues = [
    record.title,
    record.summary,
    record.worker_name,
    record.person_name,
    record.employer,
    record.labor_organization,
    record.sector,
    record.cause,
    record.legal_status,
    record.accusation,
    record.custody_status,
    ...record.locations.flatMap((location) => [location.label, location.province, location.district, location.location_basis]),
    ...record.sources.flatMap((source) => [source.title, source.publisher]),
  ];
  const valueTranslationValues = Object.values(VALUE_TRANSLATIONS)
    .flatMap((group) => translatableRecordValues.map((value) => group[value]).filter(Boolean));
  const areaTranslationValues = record.locations.flatMap((location) => {
    const area = AREA_BY_KEY[location.province_key] || AREA_BY_NAME[location.province];
    return area ? [area.name, area.tr, area.el] : [];
  });
  const translationValues = Object.values(record.translations || {}).flatMap((translation) => [
    translation.title,
    translation.summary,
    translation.worker_name,
    translation.employer,
    translation.labor_organization,
    translation.sector,
    translation.cause,
    translation.legal_status,
    translation.accusation,
    translation.custody_status,
    ...(translation.demands || []),
    ...Object.values(translation.locations || {}).flatMap((location) => [location.label, location.location_basis]),
    ...(translation.timeline || []),
    ...(translation.sources || []).map((source) => source.title),
  ]);
  const values = [
    ...translatableRecordValues,
    ...record.demands,
    ...translationValues,
    ...areaTranslationValues,
    ...valueTranslationValues,
  ];
  return values.filter(Boolean).join(" ").toLocaleLowerCase(localeForLang());
}

function stringList(value) {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  return String(value).split(/[;,]/).map((item) => item.trim()).filter(Boolean);
}

function finiteNumber(value) {
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
}

function keyForArea(name) {
  if (!name) return "";
  const existing = AREA_BY_NAME[name];
  if (existing) return existing.key;
  const normalized = normalizeAscii(name);
  return AREAS.find((area) => normalizeAscii(area.name) === normalized || area.key === normalized)?.key || "";
}

function cleanTitle(value) {
  if (!value) return "";
  return String(value)
    .toLocaleLowerCase(localeForLang())
    .split(/\s+/)
    .map((word) => word ? word[0].toLocaleUpperCase(localeForLang()) + word.slice(1) : "")
    .join(" ");
}

function normalizeAscii(value) {
  return String(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase();
}

function parseDate(value) {
  if (!value) return null;
  const normalized = String(value);
  const date = new Date(`${normalized.length === 7 ? `${normalized}-01` : normalized}T00:00:00`);
  return Number.isNaN(date.valueOf()) ? null : date;
}

function dateKey(value) {
  const date = parseDate(value);
  if (!date) return "";
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function cyprusToday() {
  return parseDate(cyprusTodayKey());
}

function cyprusTodayKey() {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: CONFIG.timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const lookup = Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
  return `${lookup.year}-${lookup.month}-${lookup.day}`;
}

function formatDate(value) {
  const date = parseDate(value);
  if (!date) return "";
  const options = String(value).length === 7
    ? { year: "numeric", month: "short" }
    : { year: "numeric", month: "short", day: "numeric" };
  return new Intl.DateTimeFormat(localeForLang(), options).format(date);
}

function formatCount(value) {
  if (value === null || value === undefined || value === "") return "";
  const number = Number(value);
  if (!Number.isFinite(number)) return "";
  return new Intl.NumberFormat(localeForLang()).format(number);
}

function localeForLang() {
  if (state.lang === "el") return "el-CY";
  if (state.lang === "tr") return "tr-TR";
  return "en-GB";
}

function slugify(value) {
  return normalizeAscii(value).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || cryptoRandomId();
}

function cryptoRandomId() {
  if (crypto?.randomUUID) return crypto.randomUUID();
  return Math.random().toString(36).slice(2);
}

function t(path) {
  const parts = path.split(".");
  let value = COPY[state.lang];
  for (const part of parts) value = value?.[part];
  return value || path;
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  }[char]));
}

function escapeAttribute(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}
