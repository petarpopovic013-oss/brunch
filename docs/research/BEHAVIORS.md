# Behavior Inventory

## Header

- Initial header overlays the hero. Desktop includes the 56px contact bar; tablet/mobile hide it.
- After the page scrolls down, a compact fixed header receives `is-sticky show-header`. Scrolling back up restores the transparent hero header.
- Menu button opens a right-side panel (480px desktop, about 340px mobile) over a dimmed page. Panel contains Home, About, Our Menu, Reservation, Contact, opening hours, location, phone and email. Escape or the close control closes it.
- “Find a Table” opens a full viewport black translucent overlay. The form panel is 700px wide on desktop with an outline, title, three-column rows, request field, and orange submit button. Close icon is fixed at top right.

## Scroll and animation

- Story and galleries fade upward when entering the viewport (roughly 500ms). Content remains readable without animation.
- Experience, menu banner and footer backgrounds shift vertically by about 180px across their scroll range. Recreated with fixed oversized imagery / transform-safe CSS.

## Carousels

- Cocktail gallery is a looping horizontal carousel. Desktop shows four portrait items with 64px gaps; mobile shows one item and six dots. Arrow controls sit at the horizontal edges on desktop.
- Events is a looping three-slide gallery. Desktop slide width is 768px, mobile fills the 328px content width. Dots indicate the active slide.
- Both carousels support click controls and auto-advance. Motion is disabled under `prefers-reduced-motion`.

## Hover/focus

- Text links and thin-outline buttons transition toward the orange accent.
- Menu image cards darken/zoom subtly while title and “Discover More” stay centered.
- Slider controls brighten on hover. Keyboard focus receives a visible orange outline.
