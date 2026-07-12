"use client";

import { useEffect } from "react";

const MOBILE_QUERY = "(max-width: 767px)";
const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

export function MobileParallax() {
  useEffect(() => {
    const mobile = window.matchMedia(MOBILE_QUERY);
    const reducedMotion = window.matchMedia(REDUCED_MOTION_QUERY);
    const banners = Array.from(document.querySelectorAll<HTMLElement>("[data-mobile-parallax]"));
    let frame = 0;

    const update = () => {
      frame = 0;
      const enabled = mobile.matches && !reducedMotion.matches;

      banners.forEach((banner) => {
        if (!enabled) {
          banner.style.removeProperty("--mobile-parallax-y");
          return;
        }

        const rect = banner.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) return;

        const distanceFromCenter = window.innerHeight / 2 - (rect.top + rect.height / 2);
        const offset = Math.max(-42, Math.min(42, distanceFromCenter * 0.1));
        banner.style.setProperty("--mobile-parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    mobile.addEventListener("change", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      mobile.removeEventListener("change", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      banners.forEach((banner) => banner.style.removeProperty("--mobile-parallax-y"));
    };
  }, []);

  return null;
}
