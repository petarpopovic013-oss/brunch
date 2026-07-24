"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  ClockIcon,
  CloseIcon,
  MenuIcon,
  PinIcon,
} from "@/src/components/icons";
import { LanguageSwitcher } from "@/src/components/site/LanguageSwitcher";
import type { BrunchLocation, CityId } from "@/src/data/locations";
import { locationPath, type Locale } from "@/src/i18n/config";
import type { Dictionary } from "@/src/i18n/dictionaries";
import styles from "./HeaderHero.module.css";

const heroImages = [
  {
    desktop: "/images/hero1-desktop.webp",
    mobile: "/images/hero1-mobile.webp",
  },
  {
    desktop: "/images/hero2-desktop.webp",
    mobile: "/images/hero2-mobile.webp",
  },
  {
    desktop: "/images/hero3-desktop.webp",
    mobile: "/images/hero3-mobile.webp",
  },
];

const HERO_SLIDE_DURATION_MS = 6_000;

type HeaderHeroProps = {
  locale: Locale;
  dictionary: Dictionary;
  locations: BrunchLocation[];
  cities: Array<{ id: CityId; label: string }>;
};

export function HeaderHero({ locale, dictionary, locations, cities }: HeaderHeroProps) {
  const copy = dictionary.hero;
  const navItems = [
    { label: copy.nav.home, href: "#home" },
    { label: copy.nav.story, href: "#about" },
    { label: copy.nav.atmosphere, href: "#atmosfera" },
    { label: copy.nav.locations, href: "#lokacije" },
    { label: copy.nav.contact, href: "#contact" },
  ];
  const [sticky, setSticky] = useState(false);
  const [activeHeroImage, setActiveHeroImage] = useState(0);
  const [primaryHeroLoaded, setPrimaryHeroLoaded] = useState(false);
  const [carouselReady, setCarouselReady] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const locationsCloseRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateHeader = () => setSticky(window.scrollY > 96);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const confirmInitialLoad = () => setPrimaryHeroLoaded(true);

    if (document.readyState === "complete") {
      confirmInitialLoad();
      return;
    }

    window.addEventListener("load", confirmInitialLoad, { once: true });
    return () => window.removeEventListener("load", confirmInitialLoad);
  }, []);

  useEffect(() => {
    if (!carouselReady || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveHeroImage((current) => (current + 1) % heroImages.length);
    }, HERO_SLIDE_DURATION_MS);

    return () => window.clearInterval(interval);
  }, [carouselReady]);

  useEffect(() => {
    if (!primaryHeroLoaded || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timeout = window.setTimeout(() => setCarouselReady(true), 800);
    return () => window.clearTimeout(timeout);
  }, [primaryHeroLoaded]);

  useEffect(() => {
    if (!menuOpen && !locationsOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => (menuOpen ? menuCloseRef : locationsCloseRef).current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setMenuOpen(false);
      setLocationsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen, locationsOpen]);

  const openLocations = () => {
    setMenuOpen(false);
    setLocationsOpen(true);
  };

  return (
    <>
      <section className={styles.hero} id="home" aria-label={copy.ariaLabel}>
        <div className={styles.heroSlides} aria-hidden="true">
          {heroImages.map((image, index) => {
            if (index > 0 && !carouselReady) return null;

            return (
              <div
                className={`${styles.heroSlide} ${index === activeHeroImage ? styles.heroSlideActive : ""}`}
                key={image.desktop}
              >
                <picture>
                  <source media="(max-width: 767px)" srcSet={image.mobile} />
                  <Image
                    src={image.desktop}
                    alt=""
                    fill
                    sizes="100vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    onLoad={index === 0 ? () => setPrimaryHeroLoaded(true) : undefined}
                  />
                </picture>
              </div>
            );
          })}
        </div>
        <div className={styles.heroShade} />
        <Header locale={locale} dictionary={dictionary} compact={false} hidden={sticky} onMenu={() => setMenuOpen(true)} />
        <Header locale={locale} dictionary={dictionary} compact hidden={!sticky} onMenu={() => setMenuOpen(true)} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span><em>{copy.welcome}</em> {copy.preposition}</span>
            <span><strong>Brunch</strong> Lounge</span>
          </h1>
          <p className={styles.heroCaption}>{copy.caption}</p>
          <button className={styles.heroLocationButton} type="button" onClick={openLocations}>
            <PinIcon />
            <span>{copy.chooseLocation}</span>
          </button>
        </div>

        <div className={styles.hoursFooter}>
          <ClockIcon />
          <span>{copy.locationCount}</span>
        </div>
      </section>

      <div
        className={`${styles.pageScrim} ${menuOpen ? styles.scrimVisible : ""}`}
        onMouseDown={(event) => event.target === event.currentTarget && setMenuOpen(false)}
        aria-hidden={!menuOpen}
      >
        <aside
          className={`${styles.menuPanel} ${menuOpen ? styles.menuOpen : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={copy.navigation}
        >
          <button ref={menuCloseRef} className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label={copy.closeNavigation}>
            <CloseIcon />
          </button>

          <div className={styles.drawerBrand}>
            <Image src="/images/brunch/logo-white.webp" alt="Brunch Lounge" width={192} height={108} sizes="150px" />
            <p>Food · Coffee · Good Mood</p>
          </div>

          <div className={styles.drawerLayout}>
            <div className={styles.drawerMain}>
              <p className={styles.drawerEyebrow}>{copy.drawerEyebrow}</p>
              <nav className={styles.drawerNav} aria-label={copy.navigation}>
                {navItems.map((item, index) => (
                  <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                    <span>0{index + 1}</span>{item.label}
                  </a>
                ))}
              </nav>
            </div>

            <aside className={styles.drawerFeature} aria-label={copy.locationsAria}>
              <div className={styles.drawerImage} />
              <div className={styles.drawerFeatureCopy}>
                <p>{copy.locationCount}</p>
                <h2>{copy.drawerTitle}<br />{" "}<em>Brunch.</em></h2>
                <button type="button" onClick={openLocations}><PinIcon /> {copy.chooseVenue}</button>
              </div>
            </aside>
          </div>

          <div className={styles.drawerFooter}>
            <div className={styles.drawerCities}>{cities.map((city) => <span key={city.id}>{city.label}</span>)}</div>
            <div className={styles.drawerContact}>
              <a href="https://www.instagram.com/brunch.rs/" target="_blank" rel="noreferrer"><span>Instagram · @brunch.rs</span></a>
            </div>
          </div>
        </aside>
      </div>

      <div
        className={`${styles.locationOverlay} ${locationsOpen ? styles.locationOverlayVisible : ""}`}
        onMouseDown={(event) => event.target === event.currentTarget && setLocationsOpen(false)}
        aria-hidden={!locationsOpen}
      >
        <section className={styles.locationPicker} role="dialog" aria-modal="true" aria-labelledby="location-picker-title">
          <button ref={locationsCloseRef} className={styles.locationClose} type="button" onClick={() => setLocationsOpen(false)} aria-label={copy.closeLocationPicker}>
            <CloseIcon />
          </button>
          <div className={styles.pickerIntro}>
            <p className={styles.pickerEyebrow}>{copy.locationCount}</p>
            <h2 id="location-picker-title">{copy.pickerTitle}</h2>
            <p>{copy.pickerDescription}</p>
          </div>
          <div className={styles.cityGrid}>
            {cities.map((city) => (
              <section className={styles.cityGroup} key={city.id}>
                <h3>{city.label}</h3>
                <div className={styles.locationList}>
                  {locations.filter((location) => location.cityId === city.id).map((location) => (
                    <Link
                      className={styles.locationChoice}
                      href={locationPath(locale, location.slug)}
                      prefetch={false}
                      key={location.slug}
                      onClick={() => setLocationsOpen(false)}
                    >
                      <span className={styles.locationThumb}><Image src={location.image} alt="" width={112} height={104} /></span>
                      <span className={styles.locationCopy}>
                        <strong>{location.shortName}</strong>
                        <small>{location.area}</small>
                      </span>
                      <span className={styles.locationArrow}><ArrowUpRightIcon /></span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <a className={styles.allLocationsLink} href="#lokacije" onClick={() => setLocationsOpen(false)}>{copy.allLocationPhotos}</a>
        </section>
      </div>
    </>
  );
}

function Header({
  locale,
  dictionary,
  compact,
  hidden,
  onMenu,
}: {
  locale: Locale;
  dictionary: Dictionary;
  compact: boolean;
  hidden: boolean;
  onMenu: () => void;
}) {
  return (
    <header className={`${styles.header} ${compact ? styles.stickyHeader : styles.heroHeader} ${hidden ? styles.headerHidden : ""}`}>
      <div className={styles.navBar}>
        <a href="#home" className={styles.logoLink} aria-label={dictionary.hero.homeAria}>
          <Image src="/images/brunch/logo-white.webp" alt="Brunch Lounge" width={230} height={129} loading="eager" sizes="(max-width: 390px) 154px, (max-width: 1024px) 190px, 230px" />
        </a>
        <div className={styles.headerActions}>
          <LanguageSwitcher
            locale={locale}
            pathname="/"
            label={dictionary.common.languagePicker}
            className={styles.languages}
            mutedClassName={styles.mutedLanguage}
          />
          <button className={styles.menuButton} onClick={onMenu} aria-label={dictionary.hero.openNavigation}><MenuIcon /></button>
        </div>
      </div>
    </header>
  );
}
