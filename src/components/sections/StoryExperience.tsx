import Image from "next/image";
import type { Dictionary } from "@/src/i18n/dictionaries";
import styles from "./StoryExperience.module.css";

export function StoryExperience({ dictionary }: { dictionary: Dictionary }) {
  const copy = dictionary.story;

  return (
    <>
      <section className={styles.story} aria-labelledby="story-title">
        <div className={styles.storyInner}>
          <div className={styles.imagePair}>
            <div className={styles.imageFrame}>
              <Image src="/images/brunch/story-moment.webp" alt={copy.imageOneAlt} fill sizes="(max-width: 767px) 82vw, 360px" />
            </div>
            <div className={styles.imageFrame}>
              <Image src="/images/brunch/story-plate.webp" alt={copy.imageTwoAlt} fill sizes="(max-width: 767px) 43vw, 360px" />
            </div>
          </div>

          <div className={styles.copy}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h2 id="story-title">{copy.title}</h2>
            <p className={styles.description}>{copy.description}</p>
            <a className={styles.link} href="#lokacije">
              {copy.link}
            </a>
          </div>
        </div>
      </section>

      <section className={styles.experience} aria-label={copy.experienceAria} data-mobile-parallax>
        <div className={styles.experienceArt}>
          <span>{copy.sloganOne}</span>
          <strong>{copy.sloganTwo}</strong>
        </div>
      </section>
    </>
  );
}
