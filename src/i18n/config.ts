export const locales = ["sr", "en", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "sr";
export const translatedLocales = ["en", "ru"] as const;

export const localeMeta: Record<Locale, {
  htmlLang: string;
  ogLocale: string;
  label: string;
}> = {
  sr: { htmlLang: "sr-Latn", ogLocale: "sr_RS", label: "SR" },
  en: { htmlLang: "en", ogLocale: "en_US", label: "EN" },
  ru: { htmlLang: "ru", ogLocale: "ru_RU", label: "RU" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function isTranslatedLocale(value: string): value is "en" | "ru" {
  return translatedLocales.includes(value as "en" | "ru");
}

export function localizedPath(locale: Locale, pathname = "/") {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (locale === defaultLocale) return normalizedPath;
  if (normalizedPath === "/") return `/${locale}/`;

  return `/${locale}${normalizedPath}`;
}

export function locationPath(locale: Locale, slug: string) {
  return localizedPath(locale, `/lokacije/${slug}/`);
}

export function localeAlternates(pathname = "/") {
  return {
    "sr-Latn": localizedPath("sr", pathname),
    en: localizedPath("en", pathname),
    ru: localizedPath("ru", pathname),
    "x-default": localizedPath("sr", pathname),
  };
}
