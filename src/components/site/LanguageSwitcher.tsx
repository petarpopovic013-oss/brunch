"use client";

import Image from "next/image";
import type { MouseEvent } from "react";
import { locales, localeMeta, localizedPath, type Locale } from "@/src/i18n/config";
import styles from "./LanguageSwitcher.module.css";

type LanguageSwitcherProps = {
  locale: Locale;
  pathname: string;
  label: string;
  className?: string;
  mutedClassName?: string;
};

const languageFlags: Record<Locale, { src: string; name: string }> = {
  sr: { src: "/images/flags/rs.svg", name: "Srpski" },
  en: { src: "/images/flags/gb.svg", name: "English" },
  ru: { src: "/images/flags/ru.svg", name: "Русский" },
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
    <div className={`${styles.switcher} ${className ?? ""}`} aria-label={label}>
      {locales.map((item) => {
        const language = languageFlags[item];

        return item === locale ? (
          <span
            key={item}
            className={`${styles.flagButton} ${styles.active}`}
            aria-current="page"
            title={language.name}
          >
            <Image
              className={styles.flag}
              src={language.src}
              alt=""
              width={24}
              height={18}
              unoptimized
            />
            <span className={styles.visuallyHidden}>{language.name}</span>
          </span>
        ) : (
          <a
            key={item}
            className={`${styles.flagButton} ${styles.link} ${mutedClassName ?? ""}`}
            href={localizedPath(item, pathname)}
            hrefLang={localeMeta[item].htmlLang}
            lang={localeMeta[item].htmlLang}
            aria-label={language.name}
            title={language.name}
            onClick={(event) => switchLanguage(event, item)}
          >
            <Image
              className={styles.flag}
              src={language.src}
              alt=""
              width={24}
              height={18}
              unoptimized
            />
          </a>
        );
      })}
    </div>
  );
}
