import Image from "next/image";
import Link from "next/link";
import type { BrunchLocation } from "@/src/data/locations";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import styles from "./LocationPlaceholder.module.css";

export function LocationPlaceholder({ location }: { location: BrunchLocation }) {
  const readerUrl = `${location.menuPdf}#view=FitH&toolbar=1&navpanes=0`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(`${location.name}, ${location.address}, ${location.city}`)}&output=embed`;
  const galleryImages = location.gallery;

  return (
    <main>
      <section className={styles.hero}>
        <Image src={location.heroImage} alt={location.heroImageAlt} fill priority sizes="100vw" />
        <div className={styles.shade} />
        <SiteHeader inner />
        <div className={styles.content}>
          <span>{location.city} · {location.area}</span>
          <h1>{location.shortName}</h1>
          <p>{location.heroCopy}</p>
          <div className={styles.actions}>
            <a href="#jelovnik">Pogledaj meni</a>
            <a href={location.phoneHref}>Pozovi lokal</a>
          </div>
        </div>
      </section>

      <section className={styles.story} aria-labelledby="location-story-title">
        <div className={styles.storyHeading}>
          <span className={styles.storyNumber} aria-hidden="true">{location.locationNumber}</span>
          <span className={styles.kicker}>Upoznajte lokaciju</span>
          <h2 id="location-story-title">Svaki Brunch ima<br /><em>svoj ritam.</em></h2>
        </div>
        <div className={styles.storyBody}>
          <p>{location.description}</p>
          <ul aria-label={`Karakteristike lokala ${location.name}`}>
            {location.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
      </section>

      <section className={styles.gallerySection} aria-labelledby="gallery-title">
        <div className={styles.galleryIntro}>
          <span className={styles.kicker}>Atmosfera lokala</span>
          <h2 id="gallery-title">Trenuci koji<br /><em>ostaju za stolom.</em></h2>
          <p>{location.heroCopy}</p>
        </div>
        <div className={styles.galleryGrid}>
          {galleryImages.map((image, index) => (
            <figure className={styles.galleryItem} key={`${image.src}-${index}`}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={index === 0 ? "(max-width: 760px) 100vw, 58vw" : "(max-width: 760px) 100vw, 29vw"}
              />
              <figcaption><span>0{index + 1}</span>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className={styles.mapSection} aria-labelledby="map-title">
        <div className={styles.mapCopy}>
          <span className={styles.kicker}>Pronađite nas</span>
          <h2 id="map-title">Vidimo se u<br /><em>{location.areaLocative}.</em></h2>
          <address>{location.address}<br />{location.postalCode} {location.city}, Srbija</address>
          <a href={location.mapsUrl} target="_blank" rel="noreferrer">
            Pokreni navigaciju <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className={styles.mapFrame}>
          <iframe
            src={mapsEmbedUrl}
            title={`Google mapa lokala ${location.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className={styles.menuSection} id="jelovnik" aria-labelledby="menu-title">
        <div className={styles.menuIntro}>
          <div>
            <span className={styles.kicker}>Brunch jelovnik</span>
            <h2 id="menu-title">Izaberi nešto<br /><em>po svom ukusu.</em></h2>
          </div>
          <div className={styles.menuCopy}>
            <p>Prelistajte kompletan meni lokala {location.shortName}. Za najbolji prikaz na telefonu, otvorite jelovnik preko celog ekrana.</p>
            <Link href="/#lokacije" className={styles.backLink}>← Sve Brunch lokacije</Link>
          </div>
        </div>

        <div className={styles.readerShell}>
          <div className={styles.readerBar}>
            <div className={styles.readerIdentity}>
              <div>
                <strong>Jelovnik</strong>
                <small>{location.name}</small>
              </div>
            </div>
            <div className={styles.readerActions}>
              <a href={location.menuPdf} target="_blank" rel="noreferrer">
                Otvori ceo ekran <span aria-hidden="true">↗</span>
              </a>
              <a href={location.menuPdf} download>
                Preuzmi PDF <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className={styles.readerViewport}>
            <iframe
              src={readerUrl}
              title={`Jelovnik lokala ${location.name}`}
              loading="lazy"
            />
            <div className={styles.readerFallback}>
              <span>PDF pregled nije dostupan u ovom browseru.</span>
              <a href={location.menuPdf} target="_blank" rel="noreferrer">Otvorite jelovnik</a>
            </div>
          </div>
        </div>

        <p className={styles.menuNote}>Ponuda i cene mogu biti promenjene. Za najnovije informacije obratite se direktno lokalu.</p>
      </section>

      <section className={styles.info}>
        <div>
          <span className={styles.label}>Lokacija</span>
          <h2>{location.name}</h2>
          <p>{location.address}<br />{location.postalCode} {location.city}, Srbija</p>
          <a className={styles.mapLink} href={location.mapsUrl} target="_blank" rel="noreferrer">
            Otvori u Google Maps <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div>
          <span className={styles.label}>Kontakt</span>
          <a href={location.phoneHref}>{location.phone}</a>
          {location.email && location.emailHref ? <a className={styles.email} href={location.emailHref}>{location.email}</a> : null}
        </div>
        <div>
          <span className={styles.label}>Radno vreme</span>
          <div className={styles.hours}>
            {location.hours.map((entry) => (
              <p key={entry.days}><span>{entry.days}</span><strong>{entry.time}</strong></p>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
