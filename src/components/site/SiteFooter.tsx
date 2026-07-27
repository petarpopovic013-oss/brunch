import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon } from "@/src/components/icons";
import { getEditorialCopy } from "@/src/data/editorial";
import type { CityId } from "@/src/data/locations";
import { localizedPath, type Locale } from "@/src/i18n/config";
import type { Dictionary } from "@/src/i18n/dictionaries";
import styles from "./SiteFooter.module.css";

type SiteFooterProps = {
  locale: Locale;
  dictionary: Dictionary;
  cities: Array<{ id: CityId; label: string }>;
};

export function SiteFooter({ locale, dictionary, cities }: SiteFooterProps) {
  const copy = dictionary.siteFooter;
  const editorial = getEditorialCopy(locale);
  const homePath = localizedPath(locale, "/");

  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.topline}>
        <p>{copy.title}</p>
        <Link href={`${homePath}#lokacije`}>{copy.chooseLocation} <span><ArrowUpRightIcon /></span></Link>
      </div>

      <div className={styles.grid}>
        <div className={styles.brand}>
          <Image src="/images/brunch/logo-white.webp" alt="Brunch Lounge" width={1920} height={1080} />
          <p>{copy.brandCopy}</p>
        </div>
        <div>
          <span className={styles.label}>{copy.cities}</span>
          {cities.map((city) => <Link key={city.id} href={`${homePath}#lokacije`}>{city.label}</Link>)}
        </div>
        <div>
          <span className={styles.label}>{copy.information}</span>
          <Link href={`${homePath}#lokacije`}>{copy.allLocations}</Link>
          <Link href={localizedPath(locale, "/o-nama/")}>{editorial.navAbout}</Link>
          <Link href={localizedPath(locale, "/blog/")}>{editorial.navBlog}</Link>
        </div>
        <div>
          <span className={styles.label}>{copy.followUs}</span>
          <a href="https://www.instagram.com/brunch.rs/" target="_blank" rel="noreferrer" aria-label={dictionary.common.instagramProfile}>Instagram · @brunch.rs</a>
          <a href="https://www.facebook.com/brunchlounge.rs/" target="_blank" rel="noreferrer" aria-label={dictionary.common.facebookProfile}>Facebook · Brunch Lounge</a>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {new Date().getFullYear()} Brunch. {dictionary.common.copyright}</span>
        <span>Developed by Petar Popović</span>
      </div>
    </footer>
  );
}
