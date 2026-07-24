import Image from "next/image";
import Link from "next/link";
import { localizedPath, type Locale } from "@/src/i18n/config";
import type { Dictionary } from "@/src/i18n/dictionaries";
import { LanguageSwitcher } from "./LanguageSwitcher";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  locale: Locale;
  dictionary: Dictionary;
  pagePath: string;
  logo?: { src: string; alt: string };
};

export function SiteHeader({ locale, dictionary, pagePath, logo }: SiteHeaderProps) {
  const copy = dictionary.siteHeader;
  const homePath = localizedPath(locale, "/");
  const brandLogo = logo ?? { src: "/images/brunch/logo-white.webp", alt: "Brunch Lounge" };

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href={homePath} aria-label={copy.homeAria}>
        <Image src={brandLogo.src} alt={brandLogo.alt} width={1920} height={1080} loading="eager" />
      </Link>

      <nav className={styles.desktopNav} aria-label={copy.mainNavigation}>
        <Link href={`${homePath}#about`}>{copy.story}</Link>
        <Link href={`${homePath}#lokacije`}>{copy.locations}</Link>
        <Link href={`${homePath}#contact`}>{copy.contact}</Link>
      </nav>

      <div className={styles.headerActions}>
        <LanguageSwitcher
          locale={locale}
          pathname={pagePath}
          label={dictionary.common.languagePicker}
          className={styles.languages}
          mutedClassName={styles.mutedLanguage}
        />

        <details className={styles.mobileMenu}>
          <summary aria-label={copy.openNavigation}>
            <span />
            <span />
          </summary>
          <nav aria-label={copy.mobileNavigation}>
            <Link href={homePath}>{copy.home}</Link>
            <Link href={`${homePath}#about`}>{copy.story}</Link>
            <Link href={`${homePath}#lokacije`}>{copy.locations}</Link>
            <Link href={`${homePath}#contact`}>{copy.contact}</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
