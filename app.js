const SUPABASE_URL = "";
const SUPABASE_ANON_KEY = "";

const CONFIG = {
  incidentPaths: ["data/incidents.json"],
  fallbackSeedPath: "data/seed-cases.json",
  defaultCenter: [35.1264, 33.4299],
  defaultZoom: 9,
  timeZone: "Europe/Nicosia",
  localSubmissionKey: "cyprus_labor_watch_pending_submissions",
};

const AREAS = [
  { key: "NICOSIA", name: "Nicosia / Lefkosia", lat: 35.1856, lng: 33.3823 },
  { key: "LIMASSOL", name: "Limassol / Lemesos", lat: 34.7071, lng: 33.0226 },
  { key: "LARNACA", name: "Larnaca / Larnaka", lat: 34.9229, lng: 33.6233 },
  { key: "PAPHOS", name: "Paphos / Pafos", lat: 34.772, lng: 32.4297 },
  { key: "FAMAGUSTA", name: "Famagusta / Ammochostos", lat: 35.125, lng: 33.95 },
  { key: "KYRENIA", name: "Kyrenia / Keryneia", lat: 35.3403, lng: 33.3192 },
  { key: "MORPHOU", name: "Morphou / Guzelyurt", lat: 35.198, lng: 32.991 },
  { key: "DHEKELIA", name: "Dhekelia area", lat: 35.05, lng: 33.74 },
  { key: "AKROTIRI", name: "Akrotiri area", lat: 34.604, lng: 32.956 },
  { key: "BUFFER_ZONE", name: "Buffer zone", lat: 35.175, lng: 33.365 },
  { key: "ISLAND_WIDE", name: "Island-wide", lat: 35.1264, lng: 33.4299 },
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
const DEFAULT_LAYERS = ["worker_death_recent", "strike_ongoing", "action_call_upcoming", "union_arrest_current"];
const QUICK_LAYERS = ["worker_death_recent", "strike_ongoing", "action_call_upcoming", "union_arrest_current"];
const DATE_RANGES = ["all", "last_30_days", "last_3_months", "last_6_months"];

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
      fiili_wildcat: "Άτυπη / αυθόρμητη",
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
      fiili_wildcat: "Fiili / wildcat",
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

const state = {
  map: null,
  sb: null,
  records: [],
  filtered: [],
  markers: new Map(),
  layerFilters: new Set(DEFAULT_LAYERS),
  actionFilters: new Set(ACTION_TYPES),
  dateRange: "last_6_months",
  province: "",
  sector: "",
  search: "",
  selectedRecordId: null,
  lang: "en",
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
  document.getElementById("date-range-filter").innerHTML = DATE_RANGES
    .map((range) => `<option value="${range}" ${state.dateRange === range ? "selected" : ""}>${escapeHtml(t(`filters.dateRanges.${range}`))}</option>`)
    .join("");

  const areaOptions = [`<option value="">${escapeHtml(t("filters.allProvinces"))}</option>`]
    .concat(AREAS.map((area) => `<option value="${escapeHtml(area.name)}" ${state.province === area.name ? "selected" : ""}>${escapeHtml(area.name)}</option>`));
  document.getElementById("province-filter").innerHTML = areaOptions.join("");
  document.getElementById("submission-province").innerHTML = `<option value=""></option>${AREAS.map((area) => `<option value="${escapeHtml(area.name)}">${escapeHtml(area.name)}</option>`).join("")}`;

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
          title: record.title,
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

function recordMatchesDateRange(record) {
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
        <strong>${escapeHtml(record.title)}</strong>
        <span>${escapeHtml(recordListMeta(record))}</span>
      </span>
    </button>
  `;
}

function sortedFilteredRecords() {
  return [...state.filtered].sort((a, b) => (
    String(recordDateValue(b)).localeCompare(String(recordDateValue(a)))
    || LAYER_ORDER.indexOf(a.layer) - LAYER_ORDER.indexOf(b.layer)
    || a.title.localeCompare(b.title, localeForLang())
  ));
}

function recordListMeta(record) {
  const location = record.locations[0] || {};
  const place = [location.district, location.province].filter(Boolean).join(", ");
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
      <h2>${escapeHtml(record.title)}</h2>
      <p class="case-summary">${escapeHtml(record.summary || t("common.notSpecified"))}</p>
    </header>
    <div class="detail-stats">${renderTypeStats(record)}</div>
    ${record.demands.length ? detailSection(t("detail.demands"), `<div class="chip-row">${record.demands.map((demand) => chip(demand)).join("")}</div>`) : ""}
    ${detailSection(t("detail.locations"), renderLocations(record))}
    ${detailSection(t("detail.timeline"), renderTimeline(record))}
    ${detailSection(t("detail.sources"), renderSources(record))}
  `;
  detail.querySelector("[data-close-detail]").addEventListener("click", clearSelection);
}

function renderTypeStats(record) {
  if (record.record_type === "worker_death") {
    return [
      detailStat(t("detail.workerName"), record.worker_name),
      detailStat(t("detail.age"), record.worker_age),
      detailStat(t("detail.employer"), record.employer),
      detailStat(t("detail.sector"), record.sector),
      detailStat(t("detail.date"), formatDate(record.death_date)),
      detailStat(t("detail.cause"), record.cause),
      detailStat(t("detail.fatalityCount"), formatCount(fatalityCount(record))),
      detailStat(t("detail.legalStatus"), record.legal_status),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  if (record.record_type === "action_call") {
    return [
      detailStat(t("detail.union"), record.labor_organization),
      detailStat(t("detail.sector"), record.sector),
      detailStat(t("detail.actionType"), record.action_type ? t(`actionType.${record.action_type}`) : ""),
      detailStat(t("detail.eventDate"), formatDate(record.event_date || record.start_date)),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  if (record.record_type === "union_labor_arrest") {
    return [
      detailStat(t("detail.person"), record.person_name || record.title),
      detailStat(t("detail.union"), record.labor_organization),
      detailStat(t("detail.role"), record.role),
      detailStat(t("detail.detentionDate"), formatDate(record.detention_date)),
      detailStat(t("detail.custodyStatus"), t(`status.${record.status}`)),
      detailStat(t("detail.accusation"), record.accusation || record.legal_status),
      detailStat(t("detail.lastVerified"), formatDate(record.last_verified_at)),
    ].join("");
  }
  return [
    detailStat(t("detail.employer"), record.employer),
    detailStat(t("detail.union"), record.labor_organization),
    detailStat(t("detail.sector"), record.sector),
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
      <strong>${escapeHtml(location.label)}</strong>
      <span>${escapeHtml(renderLocationSubtitle(location))}</span><br>
      <span>${escapeHtml(t("detail.geocode"))}: ${escapeHtml(t(`geocodePrecision.${location.geocode_precision || "unknown"}`))}</span>
      ${location.location_basis ? `<br><span>${escapeHtml(location.location_basis)}</span>` : ""}
    </div>`).join("")}</div>`;
}

function renderLocationSubtitle(location) {
  const parts = [location.district, location.province].filter(Boolean);
  if (location.fatality_count) parts.push(`${formatCount(location.fatality_count)} ${state.lang === "tr" ? "iş cinayeti" : state.lang === "el" ? "θάνατοι" : "fatalities"}`);
  return parts.join(", ");
}

function renderTimeline(record) {
  if (!record.timeline.length) return `<p class="case-summary">${escapeHtml(t("common.notSpecified"))}</p>`;
  return `<div class="timeline-list">${record.timeline.map((item) => `
    <div class="timeline-row">
      <div class="timeline-date">${escapeHtml(formatDate(item.date) || "")}</div>
      <div class="timeline-body"><strong>${escapeHtml(t(`status.${item.status}`))}</strong>${escapeHtml(item.note)}</div>
    </div>`).join("")}</div>`;
}

function renderSources(record) {
  return `<div class="source-list">${record.sources.map((source) => `
    <a class="source-row" href="${escapeAttribute(source.url)}" target="_blank" rel="noreferrer">
      <strong>${escapeHtml(source.title || t("common.source"))}</strong>
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
  const values = [
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
    ...record.demands,
    ...record.locations.flatMap((location) => [location.label, location.province, location.district]),
    ...record.sources.flatMap((source) => [source.title, source.publisher]),
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
