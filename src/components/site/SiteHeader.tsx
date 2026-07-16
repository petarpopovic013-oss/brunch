import Image from "next/image";
import Link from "next/link";
import styles from "./SiteHeader.module.css";

export function SiteHeader({ inner = false }: { inner?: boolean }) {
  const prefix = inner ? "/" : "";

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href="/" aria-label="Brunch početna stranica">
        <Image src="/images/brunch/logo-white.webp" alt="Brunch Lounge" width={192} height={108} priority />
      </Link>

      <nav className={styles.desktopNav} aria-label="Glavna navigacija">
        <Link href={`${prefix}#about`}>Naša priča</Link>
        <Link href={`${prefix}#lokacije`}>Lokacije</Link>
        <Link href={`${prefix}#kontakt`}>Kontakt</Link>
      </nav>

      <Link className={styles.headerCta} href={`${prefix}#lokacije`}>
        Pronađi Brunch
      </Link>

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
    </header>
  );
}
