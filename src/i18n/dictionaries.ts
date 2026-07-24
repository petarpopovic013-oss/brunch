import type { Locale } from "./config";

export type Dictionary = {
  metadata: {
    siteName: string;
    siteDescription: string;
    homeTitle: string;
    homeDescription: string;
    locationDescriptionSuffix: string;
    cuisines: string[];
  };
  common: {
    languagePicker: string;
    socialMedia: string;
    instagramProfile: string;
    copyright: string;
  };
  hero: {
    nav: {
      home: string;
      story: string;
      atmosphere: string;
      locations: string;
      contact: string;
    };
    ariaLabel: string;
    welcome: string;
    preposition: string;
    caption: string;
    chooseLocation: string;
    locationCount: string;
    navigation: string;
    closeNavigation: string;
    openNavigation: string;
    homeAria: string;
    locationsAria: string;
    drawerEyebrow: string;
    drawerTitle: string;
    chooseVenue: string;
    closeLocationPicker: string;
    pickerTitle: string;
    pickerDescription: string;
    allLocationPhotos: string;
  };
  story: {
    imageOneAlt: string;
    imageTwoAlt: string;
    eyebrow: string;
    title: string;
    description: string;
    link: string;
    experienceAria: string;
    sloganOne: string;
    sloganTwo: string;
  };
  gallery: {
    ariaLabel: string;
    eyebrow: string;
    titleFirst: string;
    titleEmphasis: string;
    previous: string;
    next: string;
    pickerLabel: string;
    showImage: string;
    caption: string;
    imageAlts: string[];
  };
  locations: {
    bannerEyebrow: string;
    bannerTitle: string;
    sectionEyebrow: string;
    titleFirst: string;
    titleEmphasis: string;
    description: string;
    filterLabel: string;
    all: string;
    details: string;
  };
  homeFooter: {
    eyebrow: string;
    title: string;
    description: string;
    locationCount: string;
    chooseLocation: string;
  };
  siteHeader: {
    homeAria: string;
    mainNavigation: string;
    story: string;
    locations: string;
    contact: string;
    openNavigation: string;
    mobileNavigation: string;
    home: string;
  };
  siteFooter: {
    title: string;
    chooseLocation: string;
    brandCopy: string;
    cities: string;
    information: string;
    allLocations: string;
    story: string;
    followUs: string;
  };
  locationPage: {
    viewMenu: string;
    callVenue: string;
    storyEyebrow: string;
    storyTitleFirst: string;
    storyTitleEmphasis: string;
    featuresAria: string;
    galleryEyebrow: string;
    galleryTitleFirst: string;
    galleryTitleEmphasis: string;
    mapEyebrow: string;
    mapTitle: string;
    startNavigation: string;
    mapTitleAria: string;
    menuEyebrow: string;
    menuTitleFirst: string;
    menuTitleEmphasis: string;
    menuIntroBefore: string;
    menuIntroAfter: string;
    backToLocations: string;
    menu: string;
    readerHint: string;
    openMenuAria: string;
    previewTitle: string;
    previewSubtitle: string;
    menuNote: string;
    location: string;
    contact: string;
    workingHours: string;
    openMaps: string;
    menuWatermark: string;
    country: string;
  };
};

const sr: Dictionary = {
  metadata: {
    siteName: "Brunch Srbija",
    siteDescription: "Brunch restorani u Novom Sadu, Beogradu i Novoj Pazovi.",
    homeTitle: "Brunch Srbija | Restorani za svaki deo dana",
    homeDescription: "Pronađite svoj Brunch restoran u Novom Sadu, Beogradu ili Novoj Pazovi. Dobra hrana, omiljena kafa i atmosfera kojoj se vraćate.",
    locationDescriptionSuffix: "Pogledajte jelovnik, adresu, radno vreme i kontakt.",
    cuisines: ["Internacionalna", "Mediteranska", "Italijanska"],
  },
  common: {
    languagePicker: "Izbor jezika",
    socialMedia: "Društvene mreže",
    instagramProfile: "Brunch Instagram profil",
    copyright: "Sva prava zadržana.",
  },
  hero: {
    nav: { home: "Početna", story: "Naša priča", atmosphere: "Atmosfera", locations: "Lokacije", contact: "Kontakt" },
    ariaLabel: "Brunch Srbija",
    welcome: "Dobro došli",
    preposition: "u",
    caption: "Breakfast is a meal but brunch is a culture!",
    chooseLocation: "Izaberite Brunch Lounge lokaciju",
    locationCount: "7 lokacija · 3 grada",
    navigation: "Navigacija",
    closeNavigation: "Zatvori navigaciju",
    openNavigation: "Otvori navigaciju",
    homeAria: "Brunch početna",
    locationsAria: "Brunch lokacije",
    drawerEyebrow: "Navigacija",
    drawerTitle: "Pronađi svoj",
    chooseVenue: "Izaberi lokal",
    closeLocationPicker: "Zatvori izbor lokacije",
    pickerTitle: "Gde se danas vidimo?",
    pickerDescription: "Izaberi najbliži Brunch i odmah otvori detalje, meni i kontakt.",
    allLocationPhotos: "Pogledaj sve fotografije lokala",
  },
  story: {
    imageOneAlt: "Gošća u toploj atmosferi Brunch restorana",
    imageTwoAlt: "Brunch specijalitet i koktel",
    eyebrow: "Brunch priča",
    title: "O nama",
    description: "Mesto za spora jutra, ručak sa ekipom i večeri koje se ne planiraju. Svaki Brunch ima svoj ritam, ali isti ukus dobre hrane, omiljene kafe i atmosfere kojoj se vraćate.",
    link: "Pronađi svoj Brunch",
    experienceAria: "Brunch iskustvo",
    sloganOne: "Good food.",
    sloganTwo: "Great moments.",
  },
  gallery: {
    ariaLabel: "Brunch atmosfera",
    eyebrow: "Brunch atmosfera",
    titleFirst: "Trenuci koje",
    titleEmphasis: "nosimo sa sobom.",
    previous: "Prethodna fotografija",
    next: "Sledeća fotografija",
    pickerLabel: "Izaberi fotografiju",
    showImage: "Prikaži fotografiju",
    caption: "Food · Coffee · Good mood",
    imageAlts: [
      "Zeleni enterijer Brunch Mašinca",
      "Dobar trenutak za Brunch stolom",
      "Brunch specijalitet i koktel",
      "Enterijer Brunch TC BIG Novi Sad",
      "Jelo u Brunch Mercator Beograd restoranu",
      "Burger i piće u Brunch BEO lokalu",
    ],
  },
  locations: {
    bannerEyebrow: "Novi Sad · Beograd · Nova Pazova",
    bannerTitle: "Pronađi svoj Brunch",
    sectionEyebrow: "Odaberi atmosferu",
    titleFirst: "Sedam lokala,",
    titleEmphasis: "jedan Brunch osećaj.",
    description: "Svaki lokal ima svoj karakter. Pronađi onaj koji ti je najbliži ili otkrij novo omiljeno mesto.",
    filterLabel: "Filtriraj Brunch lokale po gradu",
    all: "Sve",
    details: "Detalji i meni",
  },
  homeFooter: {
    eyebrow: "Brunch Srbija",
    title: "Čekamo vas za omiljenim stolom",
    description: "Radno vreme i kontakt pronađite na stranici izabranog lokala.",
    locationCount: "7 Brunch lokacija",
    chooseLocation: "Izaberi lokaciju",
  },
  siteHeader: {
    homeAria: "Brunch početna stranica",
    mainNavigation: "Glavna navigacija",
    story: "Naša priča",
    locations: "Lokacije",
    contact: "Kontakt",
    openNavigation: "Otvori navigaciju",
    mobileNavigation: "Mobilna navigacija",
    home: "Početna",
  },
  siteFooter: {
    title: "Jedan sto. Mnogo dobrih priča.",
    chooseLocation: "Izaberi svoju lokaciju",
    brandCopy: "Od prve jutarnje kafe do večere koja se pretvori u izlazak.",
    cities: "Gradovi",
    information: "Informacije",
    allLocations: "Sve lokacije",
    story: "Naša priča",
    followUs: "Pratite nas",
  },
  locationPage: {
    viewMenu: "Pogledaj meni",
    callVenue: "Pozovi lokal",
    storyEyebrow: "Upoznajte lokaciju",
    storyTitleFirst: "Svaki Brunch ima",
    storyTitleEmphasis: "svoj ritam.",
    featuresAria: "Karakteristike lokala",
    galleryEyebrow: "Atmosfera lokala",
    galleryTitleFirst: "Trenuci koji",
    galleryTitleEmphasis: "ostaju za stolom.",
    mapEyebrow: "Pronađite nas",
    mapTitle: "Vidimo se u",
    startNavigation: "Pokreni navigaciju",
    mapTitleAria: "Google mapa lokala",
    menuEyebrow: "Brunch jelovnik",
    menuTitleFirst: "Izaberi nešto",
    menuTitleEmphasis: "po svom ukusu.",
    menuIntroBefore: "Kliknite na pregled ispod da otvorite kompletan jelovnik za",
    menuIntroAfter: "preko celog ekrana.",
    backToLocations: "Sve Brunch lokacije",
    menu: "Jelovnik",
    readerHint: "PDF · Otvara se preko celog ekrana",
    openMenuAria: "Otvori jelovnik lokala",
    previewTitle: "Klikni da pogledaš meni",
    previewSubtitle: "Otvori PDF preko celog ekrana",
    menuNote: "Ponuda i cene mogu biti promenjene. Za najnovije informacije obratite se direktno lokalu.",
    location: "Lokacija",
    contact: "Kontakt",
    workingHours: "Radno vreme",
    openMaps: "Otvori u Google Maps",
    menuWatermark: "MENU",
    country: "Srbija",
  },
};

const en: Dictionary = {
  metadata: {
    siteName: "Brunch Serbia",
    siteDescription: "Brunch restaurants in Novi Sad, Belgrade and Nova Pazova.",
    homeTitle: "Brunch Serbia | Restaurants for every part of the day",
    homeDescription: "Find your Brunch restaurant in Novi Sad, Belgrade or Nova Pazova. Great food, favourite coffee and an atmosphere worth returning to.",
    locationDescriptionSuffix: "Explore the menu, address, opening hours and contact details.",
    cuisines: ["International", "Mediterranean", "Italian"],
  },
  common: {
    languagePicker: "Choose language",
    socialMedia: "Social media",
    instagramProfile: "Brunch Instagram profile",
    copyright: "All rights reserved.",
  },
  hero: {
    nav: { home: "Home", story: "Our story", atmosphere: "Atmosphere", locations: "Locations", contact: "Contact" },
    ariaLabel: "Brunch Serbia",
    welcome: "Welcome",
    preposition: "to",
    caption: "Breakfast is a meal but brunch is a culture!",
    chooseLocation: "Choose a Brunch Lounge location",
    locationCount: "7 locations · 3 cities",
    navigation: "Navigation",
    closeNavigation: "Close navigation",
    openNavigation: "Open navigation",
    homeAria: "Brunch home",
    locationsAria: "Brunch locations",
    drawerEyebrow: "Navigation",
    drawerTitle: "Find your",
    chooseVenue: "Choose a venue",
    closeLocationPicker: "Close location picker",
    pickerTitle: "Where shall we meet today?",
    pickerDescription: "Choose the nearest Brunch and open its details, menu and contact information.",
    allLocationPhotos: "View all location photos",
  },
  story: {
    imageOneAlt: "A guest enjoying the warm atmosphere of a Brunch restaurant",
    imageTwoAlt: "A Brunch speciality and cocktail",
    eyebrow: "The Brunch story",
    title: "About us",
    description: "A place for slow mornings, lunch with friends and evenings that need no plan. Every Brunch has its own rhythm, united by great food, favourite coffee and an atmosphere you will want to return to.",
    link: "Find your Brunch",
    experienceAria: "The Brunch experience",
    sloganOne: "Good food.",
    sloganTwo: "Great moments.",
  },
  gallery: {
    ariaLabel: "Brunch atmosphere",
    eyebrow: "Brunch atmosphere",
    titleFirst: "Moments we",
    titleEmphasis: "carry with us.",
    previous: "Previous photo",
    next: "Next photo",
    pickerLabel: "Choose a photo",
    showImage: "Show photo",
    caption: "Food · Coffee · Good mood",
    imageAlts: [
      "The green interior of Brunch Mašinac",
      "A memorable moment around a Brunch table",
      "A Brunch speciality and cocktail",
      "The interior of Brunch TC BIG Novi Sad",
      "A dish served at Brunch Mercator Beograd",
      "A burger and drink at Brunch BEO",
    ],
  },
  locations: {
    bannerEyebrow: "Novi Sad · Belgrade · Nova Pazova",
    bannerTitle: "Find your Brunch",
    sectionEyebrow: "Choose your atmosphere",
    titleFirst: "Seven locations,",
    titleEmphasis: "one Brunch feeling.",
    description: "Every venue has its own character. Find the one closest to you or discover a new favourite place.",
    filterLabel: "Filter Brunch locations by city",
    all: "All",
    details: "Details and menu",
  },
  homeFooter: {
    eyebrow: "Brunch Serbia",
    title: "Your favourite table is waiting",
    description: "Opening hours and contact details are available on each location page.",
    locationCount: "7 Brunch locations",
    chooseLocation: "Choose a location",
  },
  siteHeader: {
    homeAria: "Brunch home page",
    mainNavigation: "Main navigation",
    story: "Our story",
    locations: "Locations",
    contact: "Contact",
    openNavigation: "Open navigation",
    mobileNavigation: "Mobile navigation",
    home: "Home",
  },
  siteFooter: {
    title: "One table. Countless good stories.",
    chooseLocation: "Choose your location",
    brandCopy: "From the first morning coffee to a dinner that turns into a night out.",
    cities: "Cities",
    information: "Information",
    allLocations: "All locations",
    story: "Our story",
    followUs: "Follow us",
  },
  locationPage: {
    viewMenu: "View menu",
    callVenue: "Call location",
    storyEyebrow: "Meet the location",
    storyTitleFirst: "Every Brunch has",
    storyTitleEmphasis: "its own rhythm.",
    featuresAria: "Location features",
    galleryEyebrow: "Location atmosphere",
    galleryTitleFirst: "Moments that",
    galleryTitleEmphasis: "stay at the table.",
    mapEyebrow: "Find us",
    mapTitle: "See you at",
    startNavigation: "Start navigation",
    mapTitleAria: "Google map for",
    menuEyebrow: "Brunch menu",
    menuTitleFirst: "Choose something",
    menuTitleEmphasis: "to suit your taste.",
    menuIntroBefore: "Click the preview below to open the complete menu for",
    menuIntroAfter: "in full screen.",
    backToLocations: "All Brunch locations",
    menu: "Menu",
    readerHint: "PDF · Opens in full screen",
    openMenuAria: "Open the menu for",
    previewTitle: "Click to view the menu",
    previewSubtitle: "Open the PDF in full screen",
    menuNote: "Items and prices are subject to change. Please contact the location directly for the latest information.",
    location: "Location",
    contact: "Contact",
    workingHours: "Opening hours",
    openMaps: "Open in Google Maps",
    menuWatermark: "MENU",
    country: "Serbia",
  },
};

const ru: Dictionary = {
  metadata: {
    siteName: "Brunch Сербия",
    siteDescription: "Рестораны Brunch в Нови-Саде, Белграде и Нова-Пазове.",
    homeTitle: "Brunch Сербия | Рестораны на весь день",
    homeDescription: "Найдите свой ресторан Brunch в Нови-Саде, Белграде или Нова-Пазове. Отличная еда, любимый кофе и атмосфера, в которую хочется возвращаться.",
    locationDescriptionSuffix: "Посмотрите меню, адрес, часы работы и контактную информацию.",
    cuisines: ["Международная", "Средиземноморская", "Итальянская"],
  },
  common: {
    languagePicker: "Выбор языка",
    socialMedia: "Социальные сети",
    instagramProfile: "Профиль Brunch в Instagram",
    copyright: "Все права защищены.",
  },
  hero: {
    nav: { home: "Главная", story: "Наша история", atmosphere: "Атмосфера", locations: "Рестораны", contact: "Контакты" },
    ariaLabel: "Brunch Сербия",
    welcome: "Добро пожаловать",
    preposition: "в",
    caption: "Breakfast is a meal but brunch is a culture!",
    chooseLocation: "Выберите ресторан Brunch Lounge",
    locationCount: "7 ресторанов · 3 города",
    navigation: "Навигация",
    closeNavigation: "Закрыть навигацию",
    openNavigation: "Открыть навигацию",
    homeAria: "Главная страница Brunch",
    locationsAria: "Рестораны Brunch",
    drawerEyebrow: "Навигация",
    drawerTitle: "Найдите свой",
    chooseVenue: "Выбрать ресторан",
    closeLocationPicker: "Закрыть выбор ресторана",
    pickerTitle: "Где встретимся сегодня?",
    pickerDescription: "Выберите ближайший Brunch и сразу откройте подробности, меню и контакты.",
    allLocationPhotos: "Посмотреть все фотографии ресторанов",
  },
  story: {
    imageOneAlt: "Гостья в уютной атмосфере ресторана Brunch",
    imageTwoAlt: "Фирменное блюдо Brunch и коктейль",
    eyebrow: "История Brunch",
    title: "О нас",
    description: "Место для неспешных утренних часов, обеда с друзьями и вечеров без лишних планов. У каждого Brunch свой ритм, но всех объединяют отличная еда, любимый кофе и атмосфера, в которую хочется возвращаться.",
    link: "Найдите свой Brunch",
    experienceAria: "Атмосфера Brunch",
    sloganOne: "Good food.",
    sloganTwo: "Great moments.",
  },
  gallery: {
    ariaLabel: "Атмосфера Brunch",
    eyebrow: "Атмосфера Brunch",
    titleFirst: "Моменты, которые",
    titleEmphasis: "остаются с нами.",
    previous: "Предыдущая фотография",
    next: "Следующая фотография",
    pickerLabel: "Выберите фотографию",
    showImage: "Показать фотографию",
    caption: "Food · Coffee · Good mood",
    imageAlts: [
      "Зелёный интерьер Brunch Mašinac",
      "Приятный момент за столом Brunch",
      "Фирменное блюдо Brunch и коктейль",
      "Интерьер Brunch TC BIG Novi Sad",
      "Блюдо в Brunch Mercator Beograd",
      "Бургер и напиток в Brunch BEO",
    ],
  },
  locations: {
    bannerEyebrow: "Нови-Сад · Белград · Нова-Пазова",
    bannerTitle: "Найдите свой Brunch",
    sectionEyebrow: "Выберите атмосферу",
    titleFirst: "Семь ресторанов,",
    titleEmphasis: "одно настроение Brunch.",
    description: "У каждого ресторана свой характер. Найдите ближайший или откройте для себя новое любимое место.",
    filterLabel: "Фильтр ресторанов Brunch по городу",
    all: "Все",
    details: "Подробнее и меню",
  },
  homeFooter: {
    eyebrow: "Brunch Сербия",
    title: "Ваш любимый столик уже ждёт",
    description: "Часы работы и контакты указаны на странице выбранного ресторана.",
    locationCount: "7 ресторанов Brunch",
    chooseLocation: "Выбрать ресторан",
  },
  siteHeader: {
    homeAria: "Главная страница Brunch",
    mainNavigation: "Главная навигация",
    story: "Наша история",
    locations: "Рестораны",
    contact: "Контакты",
    openNavigation: "Открыть навигацию",
    mobileNavigation: "Мобильная навигация",
    home: "Главная",
  },
  siteFooter: {
    title: "Один стол. Множество хороших историй.",
    chooseLocation: "Выберите свой ресторан",
    brandCopy: "От первого утреннего кофе до ужина, который превращается в вечер с друзьями.",
    cities: "Города",
    information: "Информация",
    allLocations: "Все рестораны",
    story: "Наша история",
    followUs: "Мы в соцсетях",
  },
  locationPage: {
    viewMenu: "Посмотреть меню",
    callVenue: "Позвонить",
    storyEyebrow: "Знакомство с рестораном",
    storyTitleFirst: "У каждого Brunch",
    storyTitleEmphasis: "свой ритм.",
    featuresAria: "Особенности ресторана",
    galleryEyebrow: "Атмосфера ресторана",
    galleryTitleFirst: "Моменты, которые",
    galleryTitleEmphasis: "остаются за столом.",
    mapEyebrow: "Как нас найти",
    mapTitle: "До встречи в",
    startNavigation: "Построить маршрут",
    mapTitleAria: "Карта Google для",
    menuEyebrow: "Меню Brunch",
    menuTitleFirst: "Выберите что-нибудь",
    menuTitleEmphasis: "по своему вкусу.",
    menuIntroBefore: "Нажмите на изображение ниже, чтобы открыть полное меню для",
    menuIntroAfter: "на весь экран.",
    backToLocations: "Все рестораны Brunch",
    menu: "Меню",
    readerHint: "PDF · Открывается на весь экран",
    openMenuAria: "Открыть меню ресторана",
    previewTitle: "Нажмите, чтобы посмотреть меню",
    previewSubtitle: "Открыть PDF на весь экран",
    menuNote: "Ассортимент и цены могут меняться. За актуальной информацией обращайтесь непосредственно в ресторан.",
    location: "Адрес",
    contact: "Контакты",
    workingHours: "Часы работы",
    openMaps: "Открыть в Google Maps",
    menuWatermark: "МЕНЮ",
    country: "Сербия",
  },
};

const dictionaries: Record<Locale, Dictionary> = { sr, en, ru };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
