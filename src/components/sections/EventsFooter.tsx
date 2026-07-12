import styles from "./EventsFooter.module.css";

function SocialIcon({ name }: { name: string }) {
  if (name === "Facebook") return <svg viewBox="0 0 24 24"><path d="M14.2 8.2V6.6c0-.8.5-1 1-1h2.6V1.8h-3.6c-3.5 0-4.7 2.1-4.7 4.7v1.7H7v4.2h2.5v9.8h4.7v-9.8h3.2l.5-4.2h-3.7Z" /></svg>;
  if (name === "Twitter") return <svg viewBox="0 0 24 24"><path d="M21 6.2c-.7.3-1.4.5-2.2.6a3.8 3.8 0 0 0-6.5 3.5A10.8 10.8 0 0 1 4.4 6.4a3.8 3.8 0 0 0 1.2 5.1c-.6 0-1.2-.2-1.7-.5 0 1.9 1.3 3.5 3.1 3.8-.6.2-1.2.2-1.7.1a3.8 3.8 0 0 0 3.6 2.7A7.7 7.7 0 0 1 4.1 19c-.3 0-.6 0-.9-.1a10.8 10.8 0 0 0 5.8 1.7c7 0 10.8-5.8 10.8-10.8v-.5c.7-.5 1.3-1.2 1.9-2-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1Z" /></svg>;
  if (name === "Instagram") return <svg viewBox="0 0 24 24"><path fillRule="evenodd" d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm10.5 1.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" /></svg>;
  if (name === "Pinterest") return <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-3.6 19.3c-.1-1.7 0-3.6.5-5.1l1.3-5.4s-.3-.7-.3-1.8c0-1.7 1-3 2.2-3 1 0 1.5.8 1.5 1.8 0 1.1-.7 2.6-1 4-.6 1.7.8 3 2.4 3 2.9 0 4.8-3.7 4.8-8 0-3.3-2.7-5.8-6.3-5.8-4.4 0-7.2 3.3-7.2 7 0 1.3.4 2.7 1.1 3.5.1.1.1.3.1.5l-.4 1.5c-.1.5-.5.6-.9.4-2.1-.9-3-3.4-3-6.2 0-4.6 3.9-10.2 11.7-10.2 6.2 0 10.3 4.5 10.3 9.4 0 6.4-3.5 11.2-8.7 11.2-1.7 0-3.4-.9-3.9-2l-1.1 4.3c-.4 1.5-1.2 3-1.9 4A10 10 0 1 0 12 2Z" /></svg>;
  return <svg viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" /></svg>;
}

const socials = ["Facebook", "Twitter", "Instagram", "Pinterest", "YouTube"];

export function EventsFooter() {
  return (
      <footer className={styles.footer} data-mobile-parallax>
        <div className={styles.footerShade} />
        <div className={styles.footerContent}>
          <p className={styles.footerEyebrow}>Brunch Srbija</p>
          <h2 className={styles.footerTitle}>Čekamo vas za omiljenim stolom</h2>
          <div className={styles.details}>
            <p>Svakog dana od 08:00 do 23:00</p>
            <address>Novi Sad · Beograd · Nova Pazova<br />7 Brunch lokacija</address>
            <a href="tel:+381601234500">+381 60 123 45 00</a>
          </div>
          <a className={styles.mapsButton} href="#lokacije">Izaberi lokaciju</a>
          <nav className={styles.socials} aria-label="Social media">
            {socials.map((social) => (
              <a href="#" aria-label={social} key={social}><SocialIcon name={social} /></a>
            ))}
          </nav>
          <p className={styles.copyright}>© {new Date().getFullYear()} Brunch. Sva prava zadržana.</p>
        </div>
      </footer>
  );
}
