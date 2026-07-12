# Cocktail Gallery Spec

- Target: `src/components/sections/CocktailGallery.tsx` and local CSS module.
- Client carousel. Use `/assets/img-14.jpg`, `img-15.jpg`, `andrea-riezzo-1hKZ0A182Bk-unsplash-2.jpg`, `food-photographer-david-fedulov-aI5CWpiOOZM-unsplash.jpg`, `img-12.jpg`, `img-13.jpg`.
- Desktop section inset 90px, height 631px, padding 120px 0 70px. Visible track width 1200px, four cards ~252px wide with 64px gaps, vertically centered with natural portrait ratios. Black/dark background.
- Mobile section x=31, width 328, height 675, padding 60px 0. One 328px-wide image, about 491px tall, object-cover. Dots centered beneath, white active dot and muted others.
- Previous/next edge controls on desktop; swipe-friendly track and auto advance around 5 seconds. Respect reduced motion.
