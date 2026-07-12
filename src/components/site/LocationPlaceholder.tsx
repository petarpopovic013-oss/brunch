import Image from "next/image";
import Link from "next/link";
import type { BrunchLocation } from "@/src/data/locations";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import styles from "./LocationPlaceholder.module.css";

export function LocationPlaceholder({ location }: { location: BrunchLocation }) {
  return (
    <main>
      <section className={styles.hero}>
        <Image src={location.image} alt={location.imageAlt} fill priority sizes="100vw" />
        <div className={styles.shade} />
        <SiteHeader inner />
        <div className={styles.content}>
          <span>{location.city} · {location.area}</span>
          <h1>{location.shortName}</h1>
          <p>{location.name} uskoro dobija svoju kompletnu stranicu. Do tada, sačuvajte lokaciju i javite nam se direktno.</p>
          <div className={styles.actions}>
            <a href={location.phoneHref}>Pozovi lokal</a>
            <Link href="/#lokacije">Sve lokacije</Link>
          </div>
        </div>
      </section>

      <section className={styles.info}>
        <div>
          <span className={styles.label}>Lokacija</span>
          <h2>{location.name}</h2>
          <p>{location.area}<br />{location.city}, Srbija</p>
        </div>
        <div>
          <span className={styles.label}>Kontakt</span>
          <a href={location.phoneHref}>{location.phone}</a>
          <small>Privremeni kontakt broj</small>
        </div>
        <div>
          <span className={styles.label}>Radno vreme</span>
          <p>Pon — Ned<br />08:00 — 23:00</p>
          <small>Privremeni podaci</small>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
