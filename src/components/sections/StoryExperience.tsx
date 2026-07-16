import Image from "next/image";
import styles from "./StoryExperience.module.css";

export function StoryExperience() {
  return (
    <>
      <section className={styles.story} aria-labelledby="story-title">
        <div className={styles.storyInner}>
          <div className={styles.imagePair}>
            <div className={styles.imageFrame}>
              <Image src="/images/brunch/story-moment.webp" alt="Gošća u toploj atmosferi Brunch restorana" fill sizes="(max-width: 767px) 82vw, 360px" />
            </div>
            <div className={styles.imageFrame}>
              <Image src="/images/brunch/story-plate.webp" alt="Brunch specijalitet i koktel" fill sizes="(max-width: 767px) 43vw, 360px" />
            </div>
          </div>

          <div className={styles.copy}>
            <p className={styles.eyebrow}>Brunch priča</p>
            <h2 id="story-title">O nama</h2>
            <p className={styles.description}>
              Mesto za spora jutra, ručak sa ekipom i večeri koje se ne planiraju. Svaki Brunch ima
              svoj ritam, ali isti ukus dobre hrane, omiljene kafe i atmosfere kojoj se vraćate.
            </p>
            <a className={styles.link} href="#lokacije">
              Pronađi svoj Brunch
            </a>
          </div>
        </div>
      </section>

      <section className={styles.experience} aria-label="Brunch iskustvo" data-mobile-parallax>
        <div className={styles.experienceArt}>
          <span>Good food.</span>
          <strong>Great moments.</strong>
        </div>
      </section>
    </>
  );
}
