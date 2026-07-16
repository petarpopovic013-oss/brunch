import Link from "next/link";
import Image from "next/image";
import { locations } from "@/src/data/locations";
import styles from "./MenuSections.module.css";

export function MenuSections() {
  return (
    <>
      <section className={styles.banner} aria-labelledby="locations-title" data-mobile-parallax>
        <div className={styles.bannerShade} />
        <div className={styles.bannerContent}>
          <p className={styles.eyebrow}>Novi Sad · Beograd · Nova Pazova</p>
          <h2 id="locations-title" className={styles.bannerTitle}>Pronađi svoj Brunch</h2>
        </div>
      </section>

      <section className={styles.cardsSection} id="lokacije" aria-labelledby="locations-list-title">
        <div className={styles.cardsIntro}>
          <div className={styles.introHeading}>
            <p className={styles.cardsEyebrow}>Odaberi atmosferu</p>
            <h2 id="locations-list-title">Sedam lokala,<br /><em>jedan Brunch osećaj.</em></h2>
          </div>
          <div className={styles.introAside}>
            <p>Svaki lokal ima svoj karakter. Pronađi onaj koji ti je najbliži ili otkrij novo omiljeno mesto.</p>
            <div className={styles.cityList} aria-label="Gradovi u kojima se nalaze Brunch lokali">
              <span>Novi Sad</span>
              <span>Beograd</span>
              <span>Nova Pazova</span>
            </div>
          </div>
        </div>
        <div className={styles.cards}>
          {locations.map((location, index) => (
            <Link className={styles.card} href={`/lokacije/${location.slug}/`} key={location.slug}>
              <Image
                className={styles.cardImage}
                src={location.image}
                alt={location.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 42vw"
              />
              <span className={styles.cardShade} />
              <span className={styles.cardNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.cardContent}>
                <span className={styles.cardCity}>{location.city}</span>
                <span className={styles.cardTitle}>{location.shortName}</span>
                <span className={styles.cardArea}>{location.area}</span>
                <span className={styles.cardLink}>Detalji i meni <span aria-hidden="true">↗</span></span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
