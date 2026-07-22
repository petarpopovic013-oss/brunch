import Image from "next/image";
import Link from "next/link";
import styles from "./SiteHeader.module.css";

type SiteHeaderProps = {
  inner?: boolean;
  logo?: { src: string; alt: string };
};

export function SiteHeader({ inner = false, logo }: SiteHeaderProps) {
  const prefix = inner ? "/" : "";
  const brandLogo = logo ?? { src: "/images/brunch/logo-white.webp", alt: "Brunch Lounge" };

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="Brunch početna stranica">
        <Image src={brandLogo.src} alt={brandLogo.alt} width={1920} height={1080} loading="eager" />
      </Link>

      <nav className={styles.desktopNav} aria-label="Glavna navigacija">
        <Link href={`${prefix}#about`}>Naša priča</Link>
        <Link href={`${prefix}#lokacije`}>Lokacije</Link>
        <Link href={`${prefix}#kontakt`}>Kontakt</Link>
      </nav>

      <div className={styles.headerActions}>
        <div className={styles.languages} aria-label="Izbor jezika">
          <span aria-current="true">SR</span><span aria-hidden="true"> – </span><span className={styles.mutedLanguage}>EN</span><span aria-hidden="true"> – </span><span className={styles.mutedLanguage}>RU</span>
        </div>

        <details className={styles.mobileMenu}>
          <summary aria-label="Otvori navigaciju">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobilna navigacija">
            <Link href="/">Početna</Link>
            <Link href={`${prefix}#about`}>Naša priča</Link>
            <Link href={`${prefix}#lokacije`}>Lokacije</Link>
            <Link href={`${prefix}#kontakt`}>Kontakt</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
