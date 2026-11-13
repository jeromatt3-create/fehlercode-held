const env = typeof process !== 'undefined' && process.env ? process.env : {};

export const SITE_CONFIG = {
  slug: "fehlercode-held",
  name: env.SITE_NAME || "FehlercodeHeld",
  theme: "tech-diagnostic",
  tagline: "Fehlercodes & Technik-Störungen in Minuten verstehen & selbst lösen",
  description: "Die verständliche Fehlercode-Datenbank für Waschmaschine, Spülmaschine, Heizung, Router & PC: Ursachen prüfen, Reparaturkosten sparen und sicher selbst beheben.",
  adsenseClientId: env.PUBLIC_ADSENSE_CLIENT || (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.PUBLIC_ADSENSE_CLIENT : '') || '',
  categories: {
  "waschmaschine-trockner": {
    "slug": "waschmaschine-trockner",
    "name": "Waschmaschine & Trockner",
    "icon": "🌀",
    "description": "Codes wie E18, F21, 5C oder E20 bei Bosch, Siemens, Bauknecht & Co. lösen.",
    "accent": "#1d4ed8"
  },
  "spuelmaschine-kueche": {
    "slug": "spuelmaschine-kueche",
    "name": "Spülmaschine & Küche",
    "icon": "🍽️",
    "description": "E15 Wasser in Bodenwanne, E24 Abpumpfehler, i20/i30 & Herd-Symbole beheben.",
    "accent": "#2563eb"
  },
  "heizung-therme": {
    "slug": "heizung-therme",
    "name": "Heizung & Therme",
    "icon": "🔥",
    "description": "Vaillant F.28, Viessmann, Buderus 6A & Druckabfall sicher einordnen.",
    "accent": "#d97706"
  },
  "router-wlan": {
    "slug": "router-wlan",
    "name": "Router & WLAN",
    "icon": "📡",
    "description": "Blinkende Power-/DSL-LED, PPPoE-Fehler, FritzBox & Telekom Speedport Diagnosen.",
    "accent": "#0284c7"
  },
  "pc-smartphone": {
    "slug": "pc-smartphone",
    "name": "PC & Smartphone",
    "icon": "🖥️",
    "description": "Windows Update Codes, USB-Fehler, Drucker-Status & Ladebuchsen-Warnungen.",
    "accent": "#3730a3"
  }
},
};

export function getCategoryList() {
  return Object.values(SITE_CONFIG.categories);
}

export function getCategoryBySlug(slug) {
  const list = Object.values(SITE_CONFIG.categories);
  return SITE_CONFIG.categories[slug] || list[0];
}
