import styles from "./EventsFooter.module.css";

function InstagramIcon() {
  return <svg viewBox="0 0 24 24"><path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>;
}

export function EventsFooter() {
  return (
      <footer className={styles.footer} data-mobile-parallax>
        <div className={styles.footerShade} />
        <div className={styles.footerContent}>
          <p className={styles.footerEyebrow}>Brunch Srbija</p>
          <h2 className={styles.footerTitle}>Čekamo vas za omiljenim stolom</h2>
          <div className={styles.details}>
            <p>Radno vreme i kontakt pronađite na stranici izabranog lokala.</p>
            <address>Novi Sad · Beograd · Nova Pazova<br />7 Brunch lokacija</address>
          </div>
          <a className={styles.mapsButton} href="#lokacije">Izaberi lokaciju</a>
          <nav className={styles.socials} aria-label="Social media">
            <a href="https://www.instagram.com/brunch.rs/" target="_blank" rel="noreferrer" aria-label="Brunch Instagram profil"><InstagramIcon /></a>
          </nav>
          <p className={styles.copyright}>© {new Date().getFullYear()} Brunch. Sva prava zadržana.</p>
        </div>
      </footer>
  );
}
