import type { Dictionary } from "@/src/i18n/dictionaries";
import styles from "./EventsFooter.module.css";

function InstagramIcon() {
  return <svg viewBox="0 0 24 24"><path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>;
}

function FacebookIcon() {
  return <svg viewBox="0 0 24 24"><path d="M13.5 22v-9h3l.45-3.5H13.5V7.26c0-1.01.28-1.7 1.74-1.7h1.86V2.43a25 25 0 0 0-2.71-.14c-2.68 0-4.52 1.64-4.52 4.66V9.5H6.84V13h3.03v9h3.63Z" /></svg>;
}

export function EventsFooter({ dictionary, cityNames }: { dictionary: Dictionary; cityNames: string[] }) {
  const copy = dictionary.homeFooter;

  return (
      <footer className={styles.footer} data-mobile-parallax>
        <div className={styles.footerShade} />
        <div className={styles.footerContent}>
          <p className={styles.footerEyebrow}>{copy.eyebrow}</p>
          <h2 className={styles.footerTitle}>{copy.title}</h2>
          <div className={styles.details}>
            <p>{copy.description}</p>
            <address>{cityNames.join(" · ")}<br />{copy.locationCount}</address>
          </div>
          <a className={styles.mapsButton} href="#lokacije">{copy.chooseLocation}</a>
          <nav className={styles.socials} aria-label={dictionary.common.socialMedia}>
            <a href="https://www.instagram.com/brunch.rs/" target="_blank" rel="noreferrer" aria-label={dictionary.common.instagramProfile}><InstagramIcon /></a>
            <a href="https://www.facebook.com/brunchlounge.rs/" target="_blank" rel="noreferrer" aria-label={dictionary.common.facebookProfile}><FacebookIcon /></a>
          </nav>
          <p className={styles.copyright}>© {new Date().getFullYear()} Brunch. {dictionary.common.copyright}</p>
        </div>
      </footer>
  );
}
