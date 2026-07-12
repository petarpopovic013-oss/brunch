"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ClockIcon,
  CloseIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  PinIcon,
} from "@/src/components/icons";
import { cities, locations } from "@/src/data/locations";
import styles from "./HeaderHero.module.css";

const navItems = [
  { label: "Početna", href: "#home" },
  { label: "Naša priča", href: "#about" },
  { label: "Atmosfera", href: "#atmosfera" },
  { label: "Lokacije", href: "#lokacije" },
  { label: "Kontakt", href: "#contact" },
];

export function HeaderHero() {
  const [sticky, setSticky] = useState(false);
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
      <section className={styles.hero} id="home" aria-label="Brunch Srbija">
        <div className={styles.heroShade} />
        <Header compact={false} hidden={sticky} onMenu={() => setMenuOpen(true)} onLocations={openLocations} />
        <Header compact hidden={!sticky} onMenu={() => setMenuOpen(true)} onLocations={openLocations} />

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <span><em>Dobro došli</em> u</span>
            <span><strong>Brunch</strong> Lounge</span>
          </h1>
          <p className={styles.heroCaption}>Food . Coffee . Good Mood</p>
          <button className={styles.heroLocationButton} type="button" onClick={openLocations}>
            <PinIcon />
            <span>Izaberi svoj lokal</span>
          </button>
        </div>

        <div className={styles.hoursFooter}>
          <ClockIcon />
          <span>Svaki dan: 08:00 — 23:00</span>
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
          aria-label="Navigacija"
        >
          <button ref={menuCloseRef} className={styles.drawerClose} onClick={() => setMenuOpen(false)} aria-label="Zatvori navigaciju">
            <CloseIcon />
          </button>

          <div className={styles.drawerBrand}>
            <img src="/images/brunch/logo-white.webp" alt="Brunch Lounge" />
            <p>Food · Coffee · Good Mood</p>
          </div>

          <div className={styles.drawerLayout}>
            <div className={styles.drawerMain}>
              <p className={styles.drawerEyebrow}>Navigacija</p>
              <nav className={styles.drawerNav} aria-label="Glavna navigacija">
                {navItems.map((item, index) => (
                  <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                    <span>0{index + 1}</span>{item.label}
                  </a>
                ))}
              </nav>
            </div>

            <aside className={styles.drawerFeature} aria-label="Brunch lokacije">
              <div className={styles.drawerImage} />
              <div className={styles.drawerFeatureCopy}>
                <p>7 lokacija · 3 grada</p>
                <h2>Pronađi svoj<br /><em>Brunch.</em></h2>
                <button type="button" onClick={openLocations}><PinIcon /> Izaberi lokal</button>
              </div>
            </aside>
          </div>

          <div className={styles.drawerFooter}>
            <div className={styles.drawerCities}>{cities.map((city) => <span key={city}>{city}</span>)}</div>
            <div className={styles.drawerContact}>
              <a href="tel:+381601234500"><PhoneIcon /><span>+381 60 123 45 00</span></a>
              <a href="mailto:zdravo@brunch.rs"><MailIcon /><span>zdravo@brunch.rs</span></a>
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
          <button ref={locationsCloseRef} className={styles.locationClose} type="button" onClick={() => setLocationsOpen(false)} aria-label="Zatvori izbor lokacije">
            <CloseIcon />
          </button>
          <div className={styles.pickerIntro}>
            <p className={styles.pickerEyebrow}>7 lokacija · 3 grada</p>
            <h2 id="location-picker-title">Gde se danas vidimo?</h2>
            <p>Izaberi najbliži Brunch i odmah otvori detalje, meni i kontakt.</p>
          </div>
          <div className={styles.cityGrid}>
            {cities.map((city) => (
              <section className={styles.cityGroup} key={city}>
                <h3>{city}</h3>
                <div className={styles.locationList}>
                  {locations.filter((location) => location.city === city).map((location) => (
                    <Link className={styles.locationChoice} href={`/lokacije/${location.slug}/`} key={location.slug} onClick={() => setLocationsOpen(false)}>
                      <span className={styles.locationThumb}><Image src={location.image} alt="" width={112} height={104} /></span>
                      <span className={styles.locationCopy}>
                        <strong>{location.shortName}</strong>
                        <small>{location.area}</small>
                      </span>
                      <span className={styles.locationArrow} aria-hidden="true">↗</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
          <a className={styles.allLocationsLink} href="#lokacije" onClick={() => setLocationsOpen(false)}>Pogledaj sve fotografije lokala</a>
        </section>
      </div>
    </>
  );
}

function Header({ compact, hidden, onMenu, onLocations }: { compact: boolean; hidden: boolean; onMenu: () => void; onLocations: () => void }) {
  return (
    <header className={`${styles.header} ${compact ? styles.stickyHeader : styles.heroHeader} ${hidden ? styles.headerHidden : ""}`}>
      <div className={styles.navBar}>
        <div className={styles.navLeft}>
          <button className={styles.menuButton} onClick={onMenu} aria-label="Otvori navigaciju"><MenuIcon /></button>
          <div className={styles.languages}><span>SR</span><span> – </span><span className={styles.mutedLanguage}>EN</span></div>
        </div>
        <a href="#home" className={styles.logoLink} aria-label="Brunch početna">
          <img src="/images/brunch/logo-white.webp" alt="Brunch Lounge" />
        </a>
        <button className={styles.tableButton} type="button" onClick={onLocations}>Pronađi lokal</button>
      </div>
    </header>
  );
}
