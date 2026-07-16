# Brunch Srbija — Product Requirements Document

## 1. Sažetak proizvoda

Brunch Srbija je prezentacioni sajt za lanac restorana i kafića koji posluju na više lokacija i u više gradova u Srbiji. Sajt treba da predstavi zajednički Brunch brend, omogući jednostavan izbor grada i lokacije i pruži sve informacije potrebne gostu da pogleda meni ili direktno pozove izabrani lokal.

Projekat se razvija kao statična Next.js 16 aplikacija. Nakon build procesa kompletan sajt mora moći da se izveze u HTML, CSS i JavaScript fajlove i postavi na klasičan cPanel hosting bez Node.js servera, baze podataka ili runtime API-ja.

Vizuelni pravac ostaje zasnovan na postojećoj PatioTime rekonstrukciji: tamna premium atmosfera, velika fotografija, Cormorant Garamond naslovna tipografija, Jost tekstualna tipografija, narandžasti akcenti, veliki razmaci, fotografski banneri i diskretne animacije.

## 2. Ciljevi

### Poslovni ciljevi

- Predstaviti Brunch kao jedinstven lanac sa prepoznatljivim vizuelnim identitetom.
- Povećati broj direktnih poziva lokalima.
- Omogućiti gostima da brzo pronađu odgovarajuću lokaciju i njen meni.
- Obezbediti dobru lokalnu SEO vidljivost za svaki grad i objekat.
- Napraviti sistem koji se može proširiti novim lokacijama bez redizajniranja celog sajta.

### Korisnički ciljevi

- Brzo pronaći Brunch lokal u željenom gradu.
- Videti fotografije, adresu, radno vreme i kontakt lokala.
- Otvoriti kompletan meni lokacije.
- Jednim dodirom pozvati lokal sa mobilnog uređaja.
- Otvoriti tačnu lokaciju objekta u Google Maps aplikaciji.

## 3. Ciljna publika

Primarna publika su:

- Lokalni gosti koji već poznaju Brunch i žele meni, kontakt ili informacije o lokaciji.
- Turisti koji traže restoran ili kafić u gradu koji posećuju.
- Mobilni korisnici koji žele brzu navigaciju, telefon i meni bez komplikovanih koraka.

Prva verzija sajta koristi srpski jezik, latinicu. Arhitektura ne treba da blokira kasnije dodavanje engleske verzije, ali prevodi i višejezične rute nisu deo prve verzije.

## 4. Obim prve verzije

### U obimu

- Jedna centralna landing stranica.
- Prikaz svih poznatih Brunch lokacija, grupisanih po gradovima.
- Zasebna statična stranica za svaku lokaciju.
- Zajednički Brunch header, navigacija, footer i vizuelni sistem.
- Fotografije i dekorativni banner na svakoj lokacijskoj stranici.
- Zaseban PDF jelovnik za svaku lokaciju, prikazan u ugrađenom PDF readeru.
- Kontakt, radno vreme, telefon i Google Maps link.
- Ravnopravni CTA elementi „Pogledaj meni” i „Pozovi lokal”.
- Responsive prikaz za desktop, tablet i mobilne uređaje.
- Statički export za cPanel hosting.
- Osnovna pristupačnost i lokalni SEO.

### Van obima

- CMS ili administrativni panel.
- Baza podataka.
- Online poručivanje ili plaćanje.
- Korisnički nalozi i program lojalnosti.
- Backend rezervacioni sistem i slanje formi.
- Dinamička sinhronizacija menija sa eksternim servisima.
- Višejezični sadržaj u prvoj verziji.
- Mobilna aplikacija.

## 5. Informaciona arhitektura

### Glavne rute

```text
/
/lokacije/{slug-lokacije}/
```

Svaka lokacija dobija eksplicitnu statičnu rutu, na primer:

```text
/lokacije/brunch-novi-sad-centar/
/lokacije/brunch-beograd-vracar/
```

Tačni slugovi biće definisani nakon dostavljanja kompletnog spiska lokacija. Slug mora biti pisan malim slovima, bez dijakritike, sa rečima razdvojenim crticama.

### Model navigacije

- Glavna navigacija vodi ka početnoj stranici, lokacijama i kontakt delu.
- Landing stranica prikazuje gradove, a unutar svakog grada kartice pripadajućih lokacija.
- Kartica lokacije vodi direktno na njenu stranicu.
- Mobilna navigacija koristi postojeći slide-out model teme.
- Svaka lokacijska stranica ima vidljivu putanju nazad ka svim lokacijama.

## 6. Landing stranica

Landing stranica treba da predstavi brend i omogući brz prelazak ka lokalima. Predviđeni redosled sekcija je:

1. **Header i hero**
   - Brunch Lounge bela varijanta logotipa na tamnoj pozadini.
   - Kratak glavni slogan.
   - Atmosferska fotografija ili video fallback.
   - CTA „Pronađi lokaciju”.

2. **Priča o brendu**
   - Kratak opšti opis Brunch koncepta.
   - Dve do tri odabrane fotografije.
   - Tekst usmeren i lokalnim gostima i turistima.

3. **Dekorativni fotografski banner**
   - Vizuelni predah koji zadržava stil postojeće teme.
   - Kratka brend poruka ili dekorativna grafika.

4. **Gradovi i lokacije**
   - Lokacije grupisane po gradovima.
   - Svaka kartica sadrži fotografiju, naziv lokacije, grad ili naselje i link ka stranici.
   - Raspored mora skalirati kada se doda novi grad ili objekat.

5. **Zajednički footer**
   - Opšti kontakt brenda, društvene mreže i copyright.
   - Linkovi ka svim gradovima ili najvažnijim lokacijama.

Landing stranica ne treba da kopira kompletan sadržaj pojedinačnih lokala. Njena primarna funkcija je predstavljanje brenda i usmeravanje korisnika.

## 7. Stranica pojedinačne lokacije

Sve lokacije koriste isti dizajn sistem i osnovni raspored. Svaka lokacija ima sopstvenu eksplicitnu React stranicu, pa njen sadržaj može ručno da se prilagodi bez uticaja na ostale objekte.

### Obavezne sekcije

1. **Lokalni hero**
   - Naziv lokacije i grad.
   - Glavna fotografija objekta.
   - Dva ravnopravna CTA dugmeta: „Pogledaj meni” i „Pozovi lokal”.
   - „Pozovi lokal” koristi `tel:` link.

2. **Kratak opis lokacije**
   - Jedinstveni tekst o atmosferi, ponudi ili karakteru objekta.
   - Tekst ne treba automatski ponavljati sadržaj drugih lokacija.

3. **Galerija**
   - Nekoliko fotografija enterijera, hrane, pića i atmosfere.
   - Asimetrična responsive fotografska mreža sa dominantnom fotografijom konkretnog lokala.
   - Fotografije i opisi se prilagođavaju karakteru svake lokacije.
   - Fotografije imaju smislen alt tekst.

4. **Dekorativni banner**
   - Široka fotografija ili dekorativna grafika.
   - Kratka poruka lokala ili brenda.

5. **Google mapa**
   - Interaktivni Google Maps prikaz sa tačnom adresom lokala nalazi se neposredno iznad jelovnika.
   - Sekcija ima direktnu akciju za pokretanje navigacije u Google Maps aplikaciji.
   - Mapa se učitava odloženo kako ne bi usporila prvi prikaz stranice.

6. **PDF jelovnik**
   - Svaka lokacija koristi sopstveni PDF dokument; jedan PDF ne sme biti deljen između lokacija sa različitom ponudom.
   - Jelovnik je prikazan unutar stilizovanog PDF readera na stranici lokacije.
   - Korisnik dolazi do readera putem anchor linka sa CTA dugmeta.
   - Reader ima jasne akcije za otvaranje PDF-a preko celog ekrana i preuzimanje dokumenta.
   - Ako browser ne podržava ugrađeni PDF prikaz, mora postojati direktan link ka dokumentu.

7. **Kontakt sekcija**
   - Puna adresa.
   - Telefon sa `tel:` linkom.
   - Radno vreme po danima ili grupama dana.
   - Google Maps link.
   - Opcioni Instagram ili drugi lokalni društveni profil.

8. **Footer**
   - Zajednički Brunch footer.
   - Link ka svim lokacijama.

### CTA prioriteti

„Pogledaj meni” i „Pozovi lokal” imaju isti vizuelni prioritet. Google Maps je sekundarni CTA i nalazi se u kontakt sekciji. Rezervaciona forma nije deo prve verzije.

## 8. Model PDF jelovnika

Svaka lokacija u modelu podataka ima obaveznu `menuPdf` putanju ka svom dokumentu u `public/menus/` folderu. Nazivi fajlova pišu se malim slovima, bez razmaka i dijakritike.

Pravila prikaza:

- PDF se učitava lokalno i sajt ne zavisi od eksternog servisa.
- Reader se učitava odloženo (`loading="lazy"`) kako ne bi usporio hero i prvi prikaz stranice.
- Desktop reader prikazuje dokument unutar stranice sa browser kontrolama za stranice, zumiranje i štampu.
- Na telefonu su uvek vidljive akcije „Otvori ceo ekran” i „Preuzmi PDF”.
- Direktan URL PDF-a mora raditi i nakon statičkog exporta na cPanel hostingu.
- PDF treba optimizovati za web pre objave kad god izvorni dokument nepotrebno prelazi razumnu veličinu za mobilno preuzimanje.

## 9. Upravljanje sadržajem

Ne koristi se CMS. Svaka lokacija dobija zasebnu stranicu unutar `app/lokacije/`, ali uvozi zajedničke komponente za header, galeriju, meni, kontakt i footer.

Ovim pristupom:

- Dizajn ostaje konzistentan.
- Jedna lokacija može imati ručno prilagođen redosled ili dodatni sadržaj.
- Izmena jedne stranice ne menja podatke drugih lokala.
- Novi objekat se dodaje kreiranjem nove statične rute i unosom njegovog sadržaja.

Za svaku novu lokaciju moraju biti dostavljeni:

- Zvaničan naziv lokala.
- Grad, naselje i puna adresa.
- Telefonski broj.
- Radno vreme.
- Google Maps URL.
- Glavna fotografija i galerija.
- Kratak opis lokala.
- Finalni PDF jelovnik namenjen toj lokaciji.
- Društvene mreže, ako se razlikuju od centralnih profila.
- SEO naslov i opis ili informacije iz kojih se mogu napisati.

## 10. Dizajn sistem

### Vizuelni pravac

- Tamna premium pozadina sa fotografijama punog formata.
- Veliki elegantni naslovi i centrirane kompozicije.
- Narandžasta akcentna boja za CTA elemente i aktivna stanja.
- Diskretni overlay slojevi preko fotografija radi čitljivosti.
- Prostran vertikalni ritam između sekcija.

### Brending

- Bela varijanta Brunch Lounge logotipa koristi se na tamnim i fotografskim površinama.
- Crna varijanta koristi se samo na svetlim površinama.
- Logo ne sme biti deformisan ili rasterizovan preko prirodne rezolucije.

### Tipografija i boje

- Display font: Cormorant Garamond.
- Tekstualni font: Jost.
- Glavna pozadina: `#0e0d0a`.
- Glavni tekst: `#eeeeee`.
- Akcent: `#dd5903`.
- Maksimalna desktop širina sadržaja: približno `1260px`.

### Responsive ponašanje

- Desktop: višekolonski layout i velike fotografije.
- Tablet: kompaktni header i smanjeni razmaci.
- Mobilni: jedna kolona, sticky CTA elementi po potrebi i minimalno 44px velika dodirna površina.
- Navigacija, meni i kontakt moraju biti potpuno upotrebljivi na širini od `390px`.

## 11. Interakcije i pristupačnost

- Sticky header nakon napuštanja hero sekcije.
- Mobilni slide-out meni sa zatvaranjem putem dugmeta, overlay-a i Escape tastera.
- Carousel kontrole dostupne tastaturom.
- Vidljiv focus stil za linkove, dugmad i kontrole.
- Semantički redosled naslova od `h1` ka nižim nivoima.
- Alt tekst za sadržajne fotografije; dekorativne slike koriste prazan alt.
- Kontrast teksta i CTA elemenata mora ostati čitljiv preko fotografija.
- `prefers-reduced-motion` isključuje automatske i velike pokrete.
- Telefonski i Maps linkovi imaju jasan pristupačan naziv.

## 12. Lokalni SEO

Svaka lokacijska stranica mora imati:

- Jedinstven `<title>`.
- Jedinstven meta description.
- Canonical URL.
- Open Graph title, description i fotografiju.
- Lokalni naziv, grad i lokaciju u `h1` naslovu.
- Strukturirane `Restaurant` ili `CafeOrCoffeeShop` JSON-LD podatke.
- Naziv, adresu, telefon, radno vreme, geo podatke kada su dostupni i URL menija.

Sajt takođe mora imati:

- `sitemap.xml` sa početnom i svim lokacijskim rutama.
- `robots.txt`.
- Build-time `SITE_URL` vrednost iz koje se formiraju canonical i sitemap URL-ovi.
- Stabilne slugove koji se ne menjaju nakon indeksiranja bez plana redirekcije.

Pošto je cilj statičan cPanel hosting, promene URL strukture nakon objave treba izbegavati. Ako su neophodne, redirekcije se podešavaju kroz cPanel ili `.htaccess`, ne kroz Next.js runtime.

## 13. Tehnička arhitektura i static export

### Next.js konfiguracija

Produkcijska konfiguracija mora koristiti:

```ts
const nextConfig = {
  output: "export",
  trailingSlash: true,
};
```

`next build` generiše `out/` folder koji sadrži kompletan statički sajt spreman za cPanel.

### Ograničenja

Implementacija ne sme zavisiti od:

- Server Actions.
- Runtime Route Handler-a.
- Cookies ili server session podataka.
- Dinamičkih ruta bez unapred poznatih parametara.
- Next.js default image optimization servera.
- ISR-a, rewrites, server redirects ili middleware/proxy funkcija.

Interaktivne funkcije, poput mobilnog menija i galerije, rade kao Client Components i izvršavaju se u browseru. Sav osnovni sadržaj mora biti unapred renderovan u HTML-u.

### Asseti

- Slike, logotipi, fontovi i PDF jelovnici čuvaju se lokalno u `public/` folderu.
- Fotografije se pre unosa optimizuju u odgovarajuće WEBP/JPG dimenzije.
- Putanje ne treba da koriste razmake ili specijalne znakove u novim fajlovima.
- Static export ne sme zavisiti od udaljenog WordPress sajta ili drugih asset hostova.

## 14. Scope of Work

### Faza 1 — Content inventory

- Prikupiti kompletan spisak gradova i lokacija.
- Definisati slug svake lokacije.
- Prikupiti kontakte, radno vreme, Maps URL-ove, fotografije i menije.
- Evidentirati nedostajući sadržaj pre izrade pojedinačnih stranica.

**Isporuka:** potvrđena tabela sadržaja za sve lokacije.

### Faza 2 — Brunch dizajn sistem

- Refaktorisati postojeću PatioTime temu u Brunch brending.
- Standardizovati header, navigaciju, CTA dugmad, tipografiju i footer.
- Definisati zajedničke responsive sekcije za landing i lokale.

**Isporuka:** skup zajedničkih Brunch komponenti i tokena.

### Faza 3 — Landing stranica

- Implementirati Brunch hero i priču o brendu.
- Napraviti prikaz gradova i kartica lokacija.
- Povezati sve kartice sa eksplicitnim lokacijskim rutama.

**Isporuka:** završena početna stranica sa navigacijom ka svim lokalima.

### Faza 4 — Sistem lokacijskih stranica

- Izraditi zajedničke komponente za hero, galeriju, banner, meni i kontakt.
- Kreirati zasebnu statičnu stranicu za svaku poznatu lokaciju i povezati njen PDF jelovnik.
- Uneti jedinstvene podatke i sadržaj svakog objekta.

**Isporuka:** kompletan skup lokacijskih stranica.

### Faza 5 — SEO i metadata

- Uneti jedinstvene metadata podatke.
- Dodati JSON-LD za svaki objekat.
- Generisati sitemap, robots i canonical linkove.

**Isporuka:** lokalno SEO spreman statički sajt.

### Faza 6 — Static export i cPanel priprema

- Aktivirati `output: "export"` i trailing slash putanje.
- Proveriti da sve stranice rade iz statičkog `out/` foldera.
- Dokumentovati cPanel upload postupak.

**Isporuka:** produkcijski `out/` paket i deployment uputstvo.

### Faza 7 — QA

- Desktop, tablet i mobilna vizuelna provera.
- Provera navigacije, CTA linkova, telefona, menija i Maps linkova.
- Accessibility i keyboard provera.
- Provera svih ruta i asseta nakon static exporta.

**Isporuka:** QA checklist sa zatvorenim kritičnim problemima.

## 15. Kriterijumi prihvatanja

Projekat je spreman za objavu kada su ispunjeni sledeći uslovi:

- Landing prikazuje sve poznate gradove i lokacije.
- Svaka kartica vodi na ispravnu lokacijsku stranicu.
- Svaka lokacija ima personalizovanu galeriju, interaktivnu mapu, sopstveni PDF jelovnik, kontakt i radno vreme.
- „Pogledaj meni” vodi do menija, a „Pozovi lokal” koristi ispravan `tel:` URL.
- Google Maps link vodi do tačnog objekta.
- Sve stranice koriste konzistentan Brunch dizajn sistem.
- Sajt je upotrebljiv na desktopu, tabletu i telefonu širine `390px`.
- Tastaturna navigacija i focus stanja rade na svim interaktivnim elementima.
- `npx tsc --noEmit`, `npm run lint` i `npm run build` prolaze bez grešaka.
- Build generiše kompletan `out/` folder.
- Svaka ruta se otvara direktno sa statičkog hostinga.
- Nema browser console grešaka, nepostojećih asseta ili pokvarenih linkova.
- Svaka lokacija ima jedinstvene SEO podatke i validan JSON-LD.

## 16. QA scenariji

### Navigacija

- Otvoriti svaki grad i svaku lokacijsku karticu sa landing stranice.
- Direktno otvoriti URL svake lokacije u novom tabu.
- Testirati desktop i mobilnu navigaciju.

### Kontakt i meni

- Aktivirati „Pozovi lokal” na mobilnom uređaju.
- Otvoriti „Pogledaj meni” i proveriti da odgovarajući PDF radi u readeru, preko celog ekrana i kao preuzimanje.
- Proveriti adresu, radno vreme i Google Maps URL svake lokacije.

### Responsive prikaz

- Testirati najmanje širine `1440px`, `768px` i `390px`.
- Proveriti duge nazive lokacija i dugačke stavke menija.
- Proveriti da CTA dugmad ostanu dostupna bez horizontalnog skrolovanja.

### Statički hosting

- Pokrenuti production build.
- Servirati `out/` folder lokalnim statičkim serverom.
- Osvežiti svaku nested rutu direktno.
- Proveriti CSS, JavaScript, fontove, slike, sitemap i robots fajlove.

## 17. Rizici i zavisnosti

| Rizik ili zavisnost | Uticaj | Ublažavanje |
| --- | --- | --- |
| Nepotpun spisak lokacija | Ne mogu se završiti sve rute i navigacija | Zaključati content inventory pre Faze 4 |
| Veliki PDF jelovnici | Sporo otvaranje na mobilnoj mreži | Lazy-load readera i optimizacija PDF fajlova pre produkcije |
| Velike fotografije | Spor mobilni prikaz | Optimizovati dimenzije i kompresiju pre unosa |
| Promena URL-a nakon objave | Gubitak SEO vrednosti | Zaključati slugove pre produkcije |
| cPanel konfiguracija | Nested rute mogu raditi drugačije | Koristiti trailing slash i testirati finalni `out/` paket |
| Nedostajući SEO podaci | Slabiji lokalni rezultati | Koristiti obavezni content checklist po lokaciji |

## 18. Pretpostavke

- Prva verzija obuhvata sve poznate Brunch lokacije.
- Kompletan spisak lokacija biće dostavljen pre implementacije njihovih stranica.
- Srpska latinica je jedini jezik prve verzije.
- Svaka lokacija ima sopstvenu eksplicitnu React stranicu.
- Sve lokacije koriste isti osnovni dizajn sistem i raspored.
- Svaka lokacija ima sopstveni lokalno hostovan PDF jelovnik.
- Telefon i meni su glavne konverzione akcije.
- Hosting je standardni cPanel koji može da servira statičke HTML, CSS i JavaScript fajlove.
- Produkcijski domen biće prosleđen kroz build-time `SITE_URL` pre finalnog exporta.

## 19. Buduće faze

Sledeće mogućnosti nisu deo prve verzije, ali ih arhitektura ne treba nepotrebno otežavati:

- Engleska verzija sajta.
- CMS ili headless CMS za menije i lokacije.
- Online rezervacije.
- Dostava i online poručivanje.
- Događaji i novosti po lokacijama.
- Integracija sa Google Business profilima.
- Analitika CTA klikova i najposećenijih lokacija.
