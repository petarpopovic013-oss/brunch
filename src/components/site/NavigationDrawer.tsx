"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  CloseIcon,
  MenuIcon,
  PinIcon,
} from "@/src/components/icons";
import { getEditorialCopy } from "@/src/data/editorial";
import type { BrunchLocation, CityId } from "@/src/data/locations";
import { localizedPath, locationPath, type Locale } from "@/src/i18n/config";
import type { Dictionary } from "@/src/i18n/dictionaries";
import drawerStyles from "@/src/components/sections/HeaderHero.module.css";

type NavigationDrawerProps = {
  locale: Locale;
  dictionary: Dictionary;
  locations: BrunchLocation[];
  cities: Array<{ id: CityId; label: string }>;
  buttonClassName: string;
};

export function NavigationDrawer({
  locale,
  dictionary,
  locations,
  cities,
  buttonClassName,
}: NavigationDrawerProps) {
  const copy = dictionary.hero;
  const editorial = getEditorialCopy(locale);
  const homePath = localizedPath(locale, "/");
  const [menuOpen, setMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const menuCloseRef = useRef<HTMLButtonElement>(null);
  const locationsCloseRef = useRef<HTMLButtonElement>(null);
  const navItems = [
    { label: copy.nav.home, href: homePath },
    { label: editorial.navAbout, href: localizedPath(locale, "/o-nama/") },
    { label: editorial.navBlog, href: localizedPath(locale, "/blog/") },
    { label: copy.nav.locations, href: `${homePath}#lokacije` },
  ];

  useEffect(() => {
    if (!menuOpen && !locationsOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.requestAnimationFrame(() => {
      (menuOpen ? menuCloseRef : locationsCloseRef).current?.focus();
    });

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
      <button
        className={buttonClassName}
        type="button"
        onClick={() => setMenuOpen(true)}
        aria-label={copy.openNavigation}
      >
        <MenuIcon />
      </button>

      <div
        className={`${drawerStyles.pageScrim} ${menuOpen ? drawerStyles.scrimVisible : ""}`}
        onMouseDown={(event) => event.target === event.currentTarget && setMenuOpen(false)}
        aria-hidden={!menuOpen}
      >
        <aside
          className={`${drawerStyles.menuPanel} ${menuOpen ? drawerStyles.menuOpen : ""}`}
          role="dialog"
          aria-modal="true"
          aria-label={copy.navigation}
        >
          <button
            ref={menuCloseRef}
            className={drawerStyles.drawerClose}
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label={copy.closeNavigation}
          >
            <CloseIcon />
          </button>

          <div className={drawerStyles.drawerBrand}>
            <Image
              src="/images/brunch/logo-white.webp"
              alt="Brunch Lounge"
              width={192}
              height={108}
              sizes="150px"
            />
            <p>Food · Coffee · Good Mood</p>
          </div>

          <div className={drawerStyles.drawerLayout}>
            <div className={drawerStyles.drawerMain}>
              <p className={drawerStyles.drawerEyebrow}>{copy.drawerEyebrow}</p>
              <nav className={drawerStyles.drawerNav} aria-label={copy.navigation}>
                {navItems.map((item, index) => (
                  <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>
                    <span>0{index + 1}</span>
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <aside className={drawerStyles.drawerFeature} aria-label={copy.locationsAria}>
              <div className={drawerStyles.drawerImage} />
              <div className={drawerStyles.drawerFeatureCopy}>
                <p>{copy.locationCount}</p>
                <h2>
                  {copy.drawerTitle}
                  <br /> <em>Brunch.</em>
                </h2>
                <button type="button" onClick={openLocations}>
                  <PinIcon /> {copy.chooseVenue}
                </button>
              </div>
            </aside>
          </div>

          <div className={drawerStyles.drawerFooter}>
            <div className={drawerStyles.drawerCities}>
              {cities.map((city) => <span key={city.id}>{city.label}</span>)}
            </div>
            <div className={drawerStyles.drawerContact}>
              <a href="https://www.instagram.com/brunch.rs/" target="_blank" rel="noreferrer">
                <span>Instagram · @brunch.rs</span>
              </a>
            </div>
          </div>
        </aside>
      </div>

      <div
        className={`${drawerStyles.locationOverlay} ${locationsOpen ? drawerStyles.locationOverlayVisible : ""}`}
        onMouseDown={(event) => event.target === event.currentTarget && setLocationsOpen(false)}
        aria-hidden={!locationsOpen}
      >
        <section
          className={drawerStyles.locationPicker}
          role="dialog"
          aria-modal="true"
          aria-labelledby="shared-location-picker-title"
        >
          <button
            ref={locationsCloseRef}
            className={drawerStyles.locationClose}
            type="button"
            onClick={() => setLocationsOpen(false)}
            aria-label={copy.closeLocationPicker}
          >
            <CloseIcon />
          </button>

          <div className={drawerStyles.pickerIntro}>
            <p className={drawerStyles.pickerEyebrow}>{copy.locationCount}</p>
            <h2 id="shared-location-picker-title">{copy.pickerTitle}</h2>
            <p>{copy.pickerDescription}</p>
          </div>

          <div className={drawerStyles.cityGrid}>
            {cities.map((city) => (
              <section className={drawerStyles.cityGroup} key={city.id}>
                <h3>{city.label}</h3>
                <div className={drawerStyles.locationList}>
                  {locations
                    .filter((location) => location.cityId === city.id)
                    .map((location) => (
                      <Link
                        className={drawerStyles.locationChoice}
                        href={locationPath(locale, location.slug)}
                        prefetch={false}
                        key={location.slug}
                        onClick={() => setLocationsOpen(false)}
                      >
                        <span className={drawerStyles.locationThumb}>
                          <Image src={location.image} alt="" width={112} height={104} />
                        </span>
                        <span className={drawerStyles.locationCopy}>
                          <strong>{location.shortName}</strong>
                          <small>{location.area}</small>
                        </span>
                        <span className={drawerStyles.locationArrow}>
                          <ArrowUpRightIcon />
                        </span>
                      </Link>
                    ))}
                </div>
              </section>
            ))}
          </div>

          <Link
            className={drawerStyles.allLocationsLink}
            href={`${homePath}#lokacije`}
            onClick={() => setLocationsOpen(false)}
          >
            {copy.allLocationPhotos}
          </Link>
        </section>
      </div>
    </>
  );
}
