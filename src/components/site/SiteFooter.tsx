import Image from "next/image";
import Link from "next/link";
import { cities } from "@/src/data/locations";
import styles from "./SiteFooter.module.css";

type SiteFooterProps = {
  logo?: { src: string; alt: string };
};

export function SiteFooter({ logo }: SiteFooterProps) {
  const brandLogo = logo ?? { src: "/images/brunch/logo-white.webp", alt: "Brunch Lounge" };

  return (
    <footer className={styles.footer} id="kontakt">
      <div className={styles.topline}>
        <p>Jedan sto. Mnogo dobrih priča.</p>
        <Link href="/#lokacije">Izaberi svoju lokaciju <span aria-hidden="true">↗</span></Link>
      </div>

      <div className={styles.grid}>
        <div className={styles.brand}>
          <Image src={brandLogo.src} alt={brandLogo.alt} width={1920} height={1080} />
          <p>Od prve jutarnje kafe do večere koja se pretvori u izlazak.</p>
        </div>
        <div>
          <span className={styles.label}>Gradovi</span>
          {cities.map((city) => <Link key={city} href="/#lokacije">{city}</Link>)}
        </div>
        <div>
          <span className={styles.label}>Informacije</span>
          <Link href="/#lokacije">Sve lokacije</Link>
          <Link href="/#about">Naša priča</Link>
        </div>
        <div>
          <span className={styles.label}>Pratite nas</span>
          <a href="https://www.instagram.com/brunch.rs/" target="_blank" rel="noreferrer" aria-label="Brunch Instagram profil">Instagram · @brunch.rs</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Brunch. Sva prava zadržana.</span>
        <span>Good food · Good mood · All day</span>
      </div>
    </footer>
  );
}
