"use client";

import type { MouseEvent } from "react";
import { locales, localeMeta, localizedPath, type Locale } from "@/src/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  pathname: string;
  label: string;
  className?: string;
  mutedClassName?: string;
};

export function LanguageSwitcher({
  locale,
  pathname,
  label,
  className,
  mutedClassName,
}: LanguageSwitcherProps) {
  const switchLanguage = (event: MouseEvent<HTMLAnchorElement>, targetLocale: Locale) => {
    event.preventDefault();
    const hash = window.location.hash;
    window.location.assign(`${localizedPath(targetLocale, pathname)}${hash}`);
  };

  return (
    <div className={className} aria-label={label}>
      {locales.map((item, index) => (
        <span key={item}>
          {index > 0 ? <span aria-hidden="true"> – </span> : null}
          {item === locale ? (
            <span aria-current="page">{localeMeta[item].label}</span>
          ) : (
            <a
              className={mutedClassName}
              href={localizedPath(item, pathname)}
              hrefLang={localeMeta[item].htmlLang}
              lang={localeMeta[item].htmlLang}
              onClick={(event) => switchLanguage(event, item)}
            >
              {localeMeta[item].label}
            </a>
          )}
        </span>
      ))}
    </div>
  );
}
