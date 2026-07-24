import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/src/components/icons";
import type { BrunchLocation, CityId } from "@/src/data/locations";
import { localizedPath, type Locale } from "@/src/i18n/config";
import type { Dictionary } from "@/src/i18n/dictionaries";
import { SiteFooter } from "./SiteFooter";
import { SiteHeader } from "./SiteHeader";
import styles from "./LocationPlaceholder.module.css";

export function LocationPlaceholder({
  locale,
  dictionary,
  location,
  cities,
}: {
  locale: Locale;
  dictionary: Dictionary;
  location: BrunchLocation;
  cities: Array<{ id: CityId; label: string }>;
}) {
  const copy = dictionary.locationPage;
  const homePath = localizedPath(locale, "/");
  const pagePath = `/lokacije/${location.slug}/`;
  const menuPreviewImage = `/images/menu-previews/${location.slug}.webp`;
  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(`${location.name}, ${location.address}, ${location.city}`)}&output=embed`;
  const galleryImages = location.gallery;

  return (
    <main>
      <section className={styles.hero}>
        <Image src={location.heroImage} alt={location.heroImageAlt} fill loading="eager" sizes="100vw" />
        <div className={styles.shade} />
        <SiteHeader locale={locale} dictionary={dictionary} pagePath={pagePath} logo={location.logo} />
        <div className={styles.content}>
          <span>{location.city} · {location.area}</span>
          <h1>{location.shortName}</h1>
          <p>{location.heroCopy}</p>
          <div className={styles.actions}>
            <a href="#jelovnik">{copy.viewMenu}</a>
            <a href={location.phoneHref}>{copy.callVenue}</a>
          </div>
        </div>
      </section>

      <section className={styles.story} aria-labelledby="location-story-title">
        <div className={styles.storyHeading}>
          <span className={styles.storyNumber} aria-hidden="true">{location.locationNumber}</span>
          <span className={styles.kicker}>{copy.storyEyebrow}</span>
          <h2 id="location-story-title">{copy.storyTitleFirst}<br />{" "}<em>{copy.storyTitleEmphasis}</em></h2>
        </div>
        <div className={styles.storyBody}>
          <p>{location.description}</p>
          <ul aria-label={`${copy.featuresAria}: ${location.name}`}>
            {location.features.map((feature) => <li key={feature}>{feature}</li>)}
          </ul>
        </div>
      </section>

      <section className={styles.gallerySection} aria-labelledby="gallery-title">
        <div className={styles.galleryIntro}>
          <span className={styles.kicker}>{copy.galleryEyebrow}</span>
          <h2 id="gallery-title">{copy.galleryTitleFirst}<br />{" "}<em>{copy.galleryTitleEmphasis}</em></h2>
          <p>{location.galleryCopy}</p>
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
          <span className={styles.kicker}>{copy.mapEyebrow}</span>
          <h2 id="map-title">{copy.mapTitle}<br />{" "}<em className={styles.mapLocation}>{location.areaLocative}.</em></h2>
          <address>{location.address}<br />{location.postalCode} {location.city}, {copy.country}</address>
          <a href={location.mapsUrl} target="_blank" rel="noreferrer">
            {copy.startNavigation} <span><ArrowUpRightIcon /></span>
          </a>
        </div>
        <div className={styles.mapFrame}>
          <iframe
            src={mapsEmbedUrl}
            title={`${copy.mapTitleAria} ${location.name}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <section className={styles.menuSection} id="jelovnik" aria-labelledby="menu-title">
        <span className={styles.menuWatermark} aria-hidden="true">{copy.menuWatermark}</span>
        <div className={styles.menuIntro}>
          <div>
            <span className={styles.kicker}>{copy.menuEyebrow}</span>
            <h2 id="menu-title">{copy.menuTitleFirst}<br />{" "}<em>{copy.menuTitleEmphasis}</em></h2>
          </div>
          <div className={styles.menuCopy}>
            <p>{copy.menuIntroBefore} {location.shortName} {copy.menuIntroAfter}</p>
            <Link href={`${homePath}#lokacije`} className={styles.backLink}>← {copy.backToLocations}</Link>
          </div>
        </div>

        <div className={styles.readerShell}>
          <div className={styles.readerBar}>
            <div className={styles.readerIdentity}>
              <div>
                <strong>{copy.menu}</strong>
                <small>{location.name}</small>
              </div>
            </div>
            <span className={styles.readerHint}>{copy.readerHint}</span>
          </div>
          <div className={styles.readerViewport}>
            <Image
              className={styles.readerPreviewImage}
              src={menuPreviewImage}
              alt=""
              fill
              sizes="(max-width: 760px) calc(100vw - 50px), 1260px"
            />
            <a
              className={styles.readerPreviewLink}
              href={location.menuPdf}
              target="_blank"
              rel="noreferrer"
              aria-label={`${copy.openMenuAria} ${location.name}`}
            >
              <span className={styles.readerPreviewCta}>
                <span className={styles.readerPreviewIcon}><ArrowUpRightIcon /></span>
                <strong>{copy.previewTitle}</strong>
                <small>{copy.previewSubtitle}</small>
              </span>
            </a>
          </div>
        </div>

        <p className={styles.menuNote}>{copy.menuNote}</p>
      </section>

      <section className={styles.info}>
        <div>
          <span className={styles.label}>{copy.location}</span>
          <h2>{location.name}</h2>
          <p>{location.address}<br />{location.postalCode} {location.city}, {copy.country}</p>
          <a className={styles.mapLink} href={location.mapsUrl} target="_blank" rel="noreferrer">
            {copy.openMaps} <span><ArrowUpRightIcon /></span>
          </a>
        </div>
        <div>
          <span className={styles.label}>{copy.contact}</span>
          <a href={location.phoneHref}>{location.phone}</a>
          {location.email && location.emailHref ? <a className={styles.email} href={location.emailHref}>{location.email}</a> : null}
        </div>
        <div>
          <span className={styles.label}>{copy.workingHours}</span>
          <div className={styles.hours}>
            {location.hours.map((entry) => (
              <p key={entry.days}><span>{entry.days}</span><strong>{entry.time}</strong></p>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter locale={locale} dictionary={dictionary} cities={cities} logo={location.logo} />
    </main>
  );
}
