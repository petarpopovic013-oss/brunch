"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRightIcon } from "@/src/components/icons";
import type { BrunchLocation, CityId } from "@/src/data/locations";
import { locationPath, type Locale } from "@/src/i18n/config";
import type { Dictionary } from "@/src/i18n/dictionaries";
import styles from "./MenuSections.module.css";

const cityFilterOrder: CityId[] = ["novi-sad", "beograd", "nova-pazova"];
type LocationFilter = "all" | CityId;

export function MenuSections({
  locale,
  dictionary,
  locations,
  cities,
}: {
  locale: Locale;
  dictionary: Dictionary;
  locations: BrunchLocation[];
  cities: Array<{ id: CityId; label: string }>;
}) {
  const copy = dictionary.locations;
  const [activeFilter, setActiveFilter] = useState<LocationFilter>("all");
  const visibleLocations = activeFilter === "all"
    ? locations
    : locations.filter((location) => location.cityId === activeFilter);
  const orderedCities = cityFilterOrder.map((id) => cities.find((city) => city.id === id)!);

  return (
    <>
      <section className={styles.banner} aria-labelledby="locations-title" data-mobile-parallax>
        <div className={styles.bannerShade} />
        <div className={styles.bannerContent}>
          <p className={styles.eyebrow}>{copy.bannerEyebrow}</p>
          <h2 id="locations-title" className={styles.bannerTitle}>{copy.bannerTitle}</h2>
        </div>
      </section>

      <section className={styles.cardsSection} id="lokacije" aria-labelledby="locations-list-title">
        <div className={styles.cardsIntro}>
          <div className={styles.introHeading}>
            <p className={styles.cardsEyebrow}>{copy.sectionEyebrow}</p>
            <h2 id="locations-list-title">{copy.titleFirst}<br />{" "}<em>{copy.titleEmphasis}</em></h2>
          </div>
          <div className={styles.introAside}>
            <p>{copy.description}</p>
            <div className={styles.cityList} aria-label={copy.filterLabel}>
              <button
                className={`${styles.cityButton} ${styles.allButton} ${activeFilter === "all" ? styles.activeCity : ""}`}
                type="button"
                onClick={() => setActiveFilter("all")}
                aria-pressed={activeFilter === "all"}
                aria-controls="locations-grid"
              >
                {copy.all}
              </button>
              {orderedCities.map((city) => (
                <button
                  className={`${styles.cityButton} ${activeFilter === city.id ? styles.activeCity : ""}`}
                  type="button"
                  key={city.id}
                  onClick={() => setActiveFilter(city.id)}
                  aria-pressed={activeFilter === city.id}
                  aria-controls="locations-grid"
                >
                  {city.label}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`${styles.cards} ${activeFilter !== "all" ? styles.filteredCards : ""}`}
          id="locations-grid"
          aria-live="polite"
        >
          {visibleLocations.map((location) => (
            <Link
              className={styles.card}
              href={locationPath(locale, location.slug)}
              prefetch={false}
              key={location.slug}
            >
              <Image
                className={styles.cardImage}
                src={location.image}
                alt={location.imageAlt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 42vw"
              />
              <span className={styles.cardShade} />
              <span className={styles.cardNumber} aria-hidden="true">{location.locationNumber}</span>
              <span className={styles.cardContent}>
                <span className={styles.cardCity}>{location.city}</span>
                <span className={styles.cardTitle}>{location.shortName}</span>
                <span className={styles.cardArea}>{location.area}</span>
                <span className={styles.cardLink}>{copy.details} <span><ArrowUpRightIcon /></span></span>
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
