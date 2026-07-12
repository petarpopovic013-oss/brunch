# Header + Hero Spec

- Target: `src/components/sections/HeaderHero.tsx` and local CSS module.
- Client boundary required for sticky state, menu panel, reservation modal, and form controls.
- Desktop header: absolute 0/0, 1440×157. Contact row 56px, content inset 90px, Jost 14px. Navigation row 101px. Logo 190×61 centered at y=76. Menu button x=78, 40×40; language at x=158; table button at right, 155×42 outline.
- Mobile header: 80px, menu at 20px, logo roughly 118×38 centered, EN–IT right. No contact strip or table button.
- Hero: desktop min-height `100vh`, captured 702px. Mobile 640px. Fallback image `/assets/video-bg-fallback.jpg`, cover; desktop center, mobile `44% center`. Add black overlay about .18.
- Desktop title 98/98 Cormorant regular, centered, two lines, x=120 width 1200. Mobile 48/48 and narrower. “Welcome” italic, “PatioTime” orange and semibold. Caption Jost 24/39.8 desktop, 18px mobile, uppercase. Opening hours centered at bottom 48px with clock icon.
- Menu panel and reservation modal behavior follows `BEHAVIORS.md`; use exact real text from the source capture.
- Tablet follows mobile header but desktop-sized 66px hero title.
