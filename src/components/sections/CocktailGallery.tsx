"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./CocktailGallery.module.css";

const cocktails = [
  { src: "/images/brunch/masinac.webp", alt: "Zeleni enterijer Brunch Mašinca" },
  { src: "/images/brunch/story-moment.webp", alt: "Dobar trenutak za Brunch stolom" },
  { src: "/images/brunch/story-plate.webp", alt: "Brunch specijalitet i koktel" },
  { src: "/images/brunch/big-ns.webp", alt: "Enterijer Brunch TC BIG Novi Sad" },
  { src: "/images/brunch/mercator-bg.webp", alt: "Jelo u Brunch Mercator Beograd restoranu" },
  { src: "/images/brunch/beo.webp", alt: "Burger i piće u Brunch BEO lokalu" },
] as const;

export function CocktailGallery() {
  const [position, setPosition] = useState(0);
  const [animated, setAnimated] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointerStart = useRef<number | null>(null);

  const next = useCallback(() => {
    setAnimated(true);
    setPosition((value) => value + 1);
  }, []);

  const previous = useCallback(() => {
    setAnimated(true);
    setPosition((value) => (value === 0 ? cocktails.length - 1 : value - 1));
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(media.matches);
    updatePreference();
    media.addEventListener("change", updatePreference);
    return () => media.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(next, 5000);
    return () => window.clearInterval(timer);
  }, [next, reducedMotion]);

  const selectSlide = (index: number) => {
    setAnimated(true);
    setPosition(index);
  };

  const onTransitionEnd = () => {
    if (position < cocktails.length) return;
    setAnimated(false);
    setPosition(0);
  };

  const finishSwipe = (clientX: number) => {
    if (pointerStart.current === null) return;
    const distance = clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < 42) return;
    if (distance < 0) next();
    else previous();
  };

  const activeSlide = position % cocktails.length;
  const renderedSlides = [...cocktails, ...cocktails];

  return (
    <section className={styles.gallery} id="atmosfera" aria-label="Brunch atmosfera">
      <button className={`${styles.arrow} ${styles.previous}`} type="button" onClick={previous} aria-label="Prethodna fotografija">
        <span aria-hidden="true" />
      </button>

      <div
        className={styles.viewport}
        onPointerDown={(event) => {
          pointerStart.current = event.clientX;
          event.currentTarget.setPointerCapture(event.pointerId);
        }}
        onPointerUp={(event) => finishSwipe(event.clientX)}
        onPointerCancel={() => {
          pointerStart.current = null;
        }}
      >
        <div
          className={`${styles.track} ${!animated || reducedMotion ? styles.noTransition : ""}`}
          style={{ "--position": position } as React.CSSProperties}
          onTransitionEnd={onTransitionEnd}
        >
          {renderedSlides.map((cocktail, index) => (
            <figure className={styles.card} key={`${cocktail.src}-${index}`} aria-hidden={index >= cocktails.length}>
              <img src={cocktail.src} alt={index < cocktails.length ? cocktail.alt : ""} draggable={false} />
            </figure>
          ))}
        </div>
      </div>

      <button className={`${styles.arrow} ${styles.next}`} type="button" onClick={next} aria-label="Sledeća fotografija">
        <span aria-hidden="true" />
      </button>

      <div className={styles.dots} aria-label="Izaberi fotografiju">
        {cocktails.map((cocktail, index) => (
          <button
            className={index === activeSlide ? styles.activeDot : ""}
            type="button"
            key={cocktail.src}
            onClick={() => selectSlide(index)}
            aria-label={`Prikaži fotografiju ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
