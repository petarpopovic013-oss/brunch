# Brunch Srbija — Design Guide

## Pregled

Brunch Srbija je tamna, fotografski vođena prezentacija Brunch Lounge brenda i njegovih sedam lokala u Novom Sadu, Beogradu i Novoj Pazovi. Vizuelni pravac kombinuje elegantnu editorial tipografiju, velike fotografije hrane i enterijera, narandžaste akcente i prostrane kompozicije.

Početna stranica se sklapa u `app/page.tsx` ovim redosledom:

1. `HeaderHero` — hero, header, navigacioni drawer i izbor lokacije
2. `StoryExperience` — priča o brendu i fotografska statement sekcija
3. `CocktailGallery` — carousel atmosfere
4. `MenuSections` — uvodni banner i kartice svih lokala
5. `EventsFooter` — završni kontaktni poziv i footer

`MobileParallax`, montiran na početnoj stranici, dodaje scroll-driven pomeranje pozadine fotografskim bannerima na telefonu.

Ruta `app/lokacije/[slug]/page.tsx` generiše zasebnu privremenu stranicu za svaki lokal iz podataka u `src/data/locations.ts`.

## Vizuelni identitet

### Boje

Osnovni tokeni su definisani u `app/globals.css`.

| Token | Vrednost | Namena |
| --- | --- | --- |
| `--background` | `#0e0d0a` | Glavna gotovo crna pozadina |
| `--foreground` | `#eeeeee` | Osnovni svetli tekst |
| `--paper` | `#ffffff` | Beli naslovi i kontrole |
| `--black` | `#000000` | Overlay slojevi i senke |
| `--orange` | `#dd5903` | Glavni Brunch akcenat i CTA elementi |
| `--muted` | `#b8b7b4` | Sekundarni tekst |

Komponente dodatno koriste toplije varijante akcenta, najčešće `#e9782f`, `#f17a2c` i `#f08a42`, kao i toplu svetlu pozadinu `#f0ede6` na informacijama o lokalu.

### Tipografija

Fontovi su lokalni i registruju se preko `next/font/local` u `app/layout.tsx`:

- **Jost** — navigacija, opisni tekst, dugmad, metadata i forme.
- **Cormorant Garamond** — veliki hero naslovi, naslovi sekcija i editorial poruke.

Cormorant koristi promenljivu normalnu i italic varijantu. Veliki naslovi imaju tesan prored i visok kontrast u odnosu na male uppercase Jost labele.

### Layout i razmaci

- Maksimalna širina sadržaja: `1260px` (`--container`).
- Standardni desktop bočni razmak: `6.25vw` (`--side-space`).
- Galerija i glavne sekcije koriste desktop širinu `calc(100% - 180px)`.
- Mobilni layout koristi fluidnu širinu sa najčešće `20–24px` bočnog razmaka, bez fiksne minimalne širine.
- Glavni mobilni breakpoint je `767px`; pojedine unutrašnje stranice prelaze na mobilni raspored na `760px`.
- Tablet prilagođavanja se pojavljuju na `900px`, `1024px`, `1199px` i `1350px`, zavisno od komponente.

## Početna stranica

### HeaderHero

Fajlovi:

- `src/components/sections/HeaderHero.tsx`
- `src/components/sections/HeaderHero.module.css`

Hero koristi fotografiju `hero-guests.webp`, gradijentni tamni overlay i minimalnu navigaciju. Poruka je „Dobro došli u Brunch Lounge“, sa narandžasto istaknutom reči „Brunch“, sloganom i dugmetom za izbor lokala. Na desktopu je kompozicija centralna, dok je na telefonu sadržaj veliki, levo poravnat i postavljen uz donju ivicu fotografije.

Header ima dve varijante:

- providniju hero varijantu visine `101px`;
- sticky tamnu varijantu visine `80px`, koja se pojavljuje nakon `96px` skrola.

Desktop header sadrži menu dugme, SR/EN oznake, centralni beli logo i CTA „Pronađi lokal“. Na mobilnom prikazu CTA se uklanja, ali logo ostaje dovoljno velik i čitljiv na svim širinama. Mobilni header koristi tamnu translucent pozadinu i `backdrop-filter` blur.

Menu dugme otvara full-screen tamni drawer sa numerisanom navigacijom, izdvojenom fotografijom, gradovima i kontaktima. Izbor lokacije otvara zaseban modal koji grupiše sedam lokala po gradu i vodi na njihove stranice. Oba overlaya:

- zaključavaju skrol stranice;
- zatvaraju se klikom na pozadinu ili Escape tasterom;
- prebacuju fokus na dugme za zatvaranje.

### StoryExperience

Fajlovi:

- `src/components/sections/StoryExperience.tsx`
- `src/components/sections/StoryExperience.module.css`

Prvi blok je tamna editorial kompozicija visine `720px`: dve portretne fotografije dimenzija `360 × 480px` stoje levo i desno od centralnog teksta „O nama“. Link vodi do liste lokacija.

Drugi blok je fotografska statement sekcija visine `590px`, sa fixed pozadinom `brand-detail.webp` i porukom „Good food. Great moments.“ Narandžasta boja izdvaja drugi red.

Na mobilnom prikazu ovaj blok postaje zasebna editorial kompozicija visine približno `890px`. Glavna fotografija zauzima veći deo širine, dok je druga, manja fotografija preklopljena preko njenog donjeg desnog ugla i uokvirena tamnom pozadinom. Tekst je levo poravnat ispod fotografija, sa naslovom od `60px`.

Mobilni statement banner je visok `360px`, poruka je levo poravnata, a pozadina koristi JavaScript parallax koji radi i na iOS-u.

### CocktailGallery

Fajlovi:

- `src/components/sections/CocktailGallery.tsx`
- `src/components/sections/CocktailGallery.module.css`

Galerija prikazuje šest fotografija Brunch enterijera, hrane i atmosfere. Carousel podržava:

- automatsku promenu na svakih pet sekundi;
- previous/next strelice na desktopu;
- navigacione tačke;
- pointer swipe gest;
- beskonačan prelaz preko dupliranog niza slajdova;
- `prefers-reduced-motion`, koji isključuje automatsku promenu i tranzicije.

Desktop kartice su široke `252px` sa razmakom `64px`. Mobilna galerija dobija poseban uvod „Trenuci koje nosimo sa sobom“, kartice visine `430px`, numeraciju i kratku brand poruku preko donjeg gradijenta. Aktivni slajd ne zauzima celu širinu, pa je deo sledeće fotografije namerno vidljiv kao poziv na swipe. Bočne strelice se na telefonu uklanjaju.

### MenuSections

Fajlovi:

- `src/components/sections/MenuSections.tsx`
- `src/components/sections/MenuSections.module.css`

Sekcija počinje fotografskim bannerom „Pronađi svoj Brunch“. Ispod je uvod „Sedam lokala, jedan Brunch osećaj“ i kartice generisane iz `src/data/locations.ts`.

Uvod koristi podeljenu editorial kompoziciju: veliki naslov je levo, dok su opis i lista gradova desno. Kartice prikazuju redni broj, grad, naziv lokala, oblast i link „Detalji i meni“. Hover blago uvećava fotografiju, pojačava overlay i animira strelicu. Desktop raspored je bento grid od 12 kolona: prvi i poslednji red imaju po dve šire kartice, a srednji red tri kompaktnije.

Mobilni banner je visok `360px`, sa tekstom poravnatim uz donji levi ugao. Kartice se slažu vertikalno, ali koriste različite visine od približno `360–430px`; svaka druga kartica je uvučena udesno kako bi duga lista dobila asimetričan editorial ritam.

### EventsFooter

Fajlovi:

- `src/components/sections/EventsFooter.tsx`
- `src/components/sections/EventsFooter.module.css`

Završna sekcija je footer preko fotografije `footer-masinac.png`, sa tamnim overlayem. Sadrži:

- naslov „Čekamo vas za omiljenim stolom“;
- radno vreme, gradove i kontakt;
- CTA „Izaberi lokaciju“;
- Facebook, Twitter, Instagram, Pinterest i YouTube ikone;
- dinamičku copyright godinu.

Desktop footer je visok `724px` i koristi fixed background. Mobilna verzija je veliki CTA banner visine `760px`: naslov, detalji i društvene mreže su levo poravnati, a dugme za izbor lokacije zauzima punu dostupnu širinu. Gradijent postaje tamniji ka dnu radi čitljivosti.

## Mobilni parallax

Fajl:

- `src/components/site/MobileParallax.tsx`

Elementi označeni atributom `data-mobile-parallax` dobijaju CSS promenljivu `--mobile-parallax-y` tokom skrolovanja. Vrednost se osvežava preko `requestAnimationFrame` i ograničena je na `±42px`, pa je efekat primetan ali stabilan. Mobilne pozadine se renderuju na `120%` visine kako bi imale prostor za pomeranje bez otkrivanja ivica.

Parallax trenutno koriste:

- statement banner u `StoryExperience`;
- banner „Pronađi svoj Brunch“;
- fotografski `EventsFooter`.

Efekat radi samo do `767px` i automatski se isključuje kada je aktivan `prefers-reduced-motion`.

## Stranice lokala

Fajlovi:

- `app/lokacije/[slug]/page.tsx`
- `src/components/site/LocationPlaceholder.tsx`
- `src/components/site/SiteHeader.tsx`
- `src/components/site/SiteFooter.tsx`
- odgovarajući `.module.css` fajlovi

Svaka od sedam lokacija dobija statički generisanu rutu, metadata naslov i opis. Trenutni prikaz je namerno placeholder: velika hero fotografija lokala, grad i oblast, naziv, kontakt CTA dugmad i svetla info sekcija sa lokacijom, telefonom i radnim vremenom.

Unutrašnje stranice koriste zaseban header sa desktop navigacijom i CSS `<details>` mobilnim menijem, kao i strukturisan tamni footer sa gradovima, kontaktom i društvenim mrežama.

Svi podaci o lokalima nalaze se na jednom mestu u `src/data/locations.ts`: slug, puni i kratki naziv, grad, oblast, slika, alt tekst i telefon.

## Responsive ponašanje

### Desktop

- Hero zauzima najmanje visinu viewporta i nikada nije niži od `702px`.
- Header ima centralni logo i sticky stanje nakon skrola.
- Story blok koristi kompoziciju fotografija–tekst–fotografija.
- Galerija prikazuje približno četiri kartice u viewportu.
- Lokacije su raspoređene u tri kolone.
- Velike fotografske sekcije koriste suptilan parallax preko `background-attachment: fixed`.

### Tablet

- Hero se smanjuje, logo i naslov postaju kompaktniji.
- Story fotografije ostaju sa obe strane teksta uz manje razmake.
- Kartice lokacija prelaze u dve kolone sa manjim gapom, dok je poslednja kartica centrirana.
- Modal za lokacije prelazi na dve kolone i prilagođava picker dostupnoj visini.

### Mobilni prikaz

- Hero ima najmanje `700px` i koristi `100svh` kada je viewport viši.
- Hero naslov koristi fluidnih `51–64px`, levo je poravnat pri dnu fotografije; CTA za lokaciju ostaje vidljiv, a desktop header CTA nestaje.
- Full-screen meni prelazi u jednu kolonu, dok izbor lokacije postaje vertikalna lista.
- Story koristi preklopljenu asimetričnu foto-kompoziciju i levo poravnat tekst.
- Galerija prikazuje jedan dominantan slajd i deo sledećeg; kartice lokala koriste promenljive visine i naizmenično uvlačenje.
- Fixed pozadine se zamenjuju kontrolisanim scroll-driven parallax efektom.
- Stranice lokala slažu info blokove u jednu kolonu.
- Na širinama ispod `380px` fontovi, logo, padding i visine fotografija dobijaju dodatne kompaktne vrednosti.

## Interakcije i pristupačnost

- Interaktivni elementi imaju jasno narandžasto `:focus-visible` stanje.
- Slike sadržaja imaju opisne `alt` vrednosti; dekorativne slike u pickeru imaju prazan `alt`.
- Overlay elementi koriste `role="dialog"`, `aria-modal` i odgovarajuće labele.
- Carousel kontrole imaju pristupačne nazive i aktivna tačka koristi `aria-current`.
- `prefers-reduced-motion` uklanja carousel, hover i reveal animacije gde je potrebno.
- Mobilni parallax koristi pasivan scroll listener i `requestAnimationFrame`, a ne direktan rad pri svakom scroll eventu.
- Dokument koristi srpski latinični jezik preko `lang="sr-Latn"` u root layoutu.

## Slike i asseti

Aktuelni brand asseti su u `public/images/brunch/`:

- beli i crni Brunch logo;
- hero, story i brand-detail fotografije;
- fotografije svih sedam lokala;
- footer fotografija.

Fontovi su u `public/assets/fonts/`. Stariji fajlovi u `public/assets/` i istraživački materijal u `docs/research/` potiču iz prethodne vizuelne reference i nisu glavni izvor za trenutni Brunch dizajn.

## Gde menjati sadržaj

- Hero, navigacija, drawer i location picker: `src/components/sections/HeaderHero.tsx`
- Priča i statement poruka: `src/components/sections/StoryExperience.tsx`
- Fotografije galerije: `cocktails` niz u `src/components/sections/CocktailGallery.tsx`
- Mobilni parallax ponašanje: `src/components/site/MobileParallax.tsx`
- Podaci svih lokala: `src/data/locations.ts`
- Završni kontakt i društvene mreže: `src/components/sections/EventsFooter.tsx`
- Globalne boje i osnovna tipografija: `app/globals.css`
- Font registracija i globalni metadata: `app/layout.tsx`

Vizuelne izmene pojedinačne komponente rade se u njenom `.module.css` fajlu.

## Pokretanje i provera

Development server:

```bash
npm run dev
```

Standardne provere:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

Lokalna adresa je `http://localhost:3000`.
