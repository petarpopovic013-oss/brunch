export type LocationTranslation = {
  city: string;
  areaLocative: string;
  imageAlt: string;
  heroImageAlt: string;
  heroCopy: string;
  description: string;
  galleryCopy: string;
  hoursDays: string[];
  hoursTimes?: string[];
  features: string[];
  gallery: Array<{ alt: string; caption: string }>;
};

export const cityLabels = {
  sr: {
    beograd: "Beograd",
    "novi-sad": "Novi Sad",
    "nova-pazova": "Nova Pazova",
  },
  en: {
    beograd: "Belgrade",
    "novi-sad": "Novi Sad",
    "nova-pazova": "Nova Pazova",
  },
  ru: {
    beograd: "Белград",
    "novi-sad": "Нови-Сад",
    "nova-pazova": "Нова-Пазова",
  },
} as const;

export const locationTranslations: Record<"en" | "ru", Record<string, LocationTranslation>> = {
  en: {
    "brunch-masinac-novi-sad": {
      city: "Novi Sad",
      areaLocative: "the University Campus",
      imageAlt: "The distinctive green interior of Brunch Mašinac",
      heroImageAlt: "The entrance and garden of Brunch Mašinac at the university campus",
      heroCopy: "Breakfast, coffee and lunch right by the Novi Sad university campus.",
      description: "Located at Trg Dositeja Obradovića, beside the Faculty of Technical Sciences, Brunch Mašinac is an easy choice for morning coffee, breakfast before a busy day or a relaxed lunch. Its green garden and warm interior give the venue a distinctive character, from quiet mornings to the lively student rush.",
      galleryCopy: "A green garden, bold colours and the relaxed atmosphere that makes Mašinac instantly recognisable.",
      hoursDays: ["Monday — Friday", "Saturday", "Sunday"],
      hoursTimes: ["07:30 — 18:00", "08:00 — 15:00", "Closed"],
      features: ["Trg Dositeja Obradovića 6", "Coffee and breakfast", "Garden by the campus"],
      gallery: [
        { alt: "Guests in the green garden at Brunch Mašinac", caption: "A garden in the heart of the campus" },
        { alt: "The warm orange-and-green interior of Brunch Mašinac", caption: "The unmistakable Mašinac atmosphere" },
        { alt: "Interior and mirror details at Brunch Mašinac", caption: "Details with character" },
      ],
    },
    "brunch-lounge-mercator-novi-sad": {
      city: "Novi Sad",
      areaLocative: "Mercator Novi Sad",
      imageAlt: "The bright interior of Brunch Lounge in Mercator",
      heroImageAlt: "The spacious Brunch Lounge Mercator Novi Sad interior overlooking the city",
      heroCopy: "Coffee, lunch and Mediterranean flavours at Mercator, in the heart of Liman.",
      description: "Brunch Lounge is located at Bulevar oslobođenja 102 inside Mercator Novi Sad. Its open-plan interior, gallery and city view make it ideal for a quick coffee, a family lunch or an unhurried get-together over pizza, pasta, burgers and desserts.",
      galleryCopy: "Open space, greenery and thoughtful details turn a busy Mercator break into a proper pause.",
      hoursDays: ["Monday — Sunday"],
      features: ["Bulevar oslobođenja 102", "Mediterranean cuisine", "Gallery with a city view"],
      gallery: [
        { alt: "The bar and long communal table at Brunch Lounge Mercator Novi Sad", caption: "An open space for every part of the day" },
        { alt: "A table surrounded by greenery at Brunch Lounge Mercator Novi Sad", caption: "Greenery above the city bustle" },
        { alt: "Bookshelves inside Brunch Lounge Mercator Novi Sad", caption: "Lounge details with character" },
      ],
    },
    "brunch-tc-big-novi-sad": {
      city: "Novi Sad",
      areaLocative: "BIG Novi Sad",
      imageAlt: "The spacious interior of Brunch at BIG Novi Sad",
      heroImageAlt: "A guest enjoying a meal at Brunch TC BIG Novi Sad",
      heroCopy: "An all-day menu for breakfast, family lunch or evening drinks.",
      description: "At Sentandrejski put 11 inside BIG Novi Sad, this Brunch follows the rhythm of the whole day — from breakfast and the first coffee to lunch and evening drinks. The spacious setting, shopping-centre parking and extended Friday and Saturday hours make it a practical choice for families and larger groups.",
      galleryCopy: "From a satisfying lunch to coffee, dessert and cocktails — everything you need for a welcome break.",
      hoursDays: ["Monday — Thursday", "Friday — Saturday", "Sunday"],
      features: ["Sentandrejski put 11", "Family lunch", "Open until 11 pm on Friday and Saturday"],
      gallery: [
        { alt: "A plated dish and wine at Brunch TC BIG Novi Sad", caption: "All-day dining" },
        { alt: "A red cocktail at Brunch TC BIG Novi Sad", caption: "A drink after shopping" },
        { alt: "Coffee and dessert at Brunch TC BIG Novi Sad", caption: "Time for coffee and dessert" },
      ],
    },
    "brunch-big-fashion-novi-sad": {
      city: "Novi Sad",
      areaLocative: "BIG Fashion Novi Sad",
      imageAlt: "Guests enjoying drinks at Brunch BIG Fashion",
      heroImageAlt: "The bright and lively interior of Brunch BIG Fashion Novi Sad",
      heroCopy: "Breakfast, lunch and drinks at BIG Fashion on Bulevar oslobođenja.",
      description: "Brunch BIG Fashion is located at Bulevar oslobođenja 119 and works equally well for breakfast, a business meeting, a shopping break or a longer get-together. The bright space and all-day offer include breakfasts, sandwiches, burgers, pizza, pasta, main courses and desserts.",
      galleryCopy: "A bright urban setting for coffee, lunch and conversations that do not have to end when the shopping does.",
      hoursDays: ["Monday — Sunday"],
      features: ["Bulevar oslobođenja 119", "All-day menu", "City view"],
      gallery: [
        { alt: "A guest at Brunch BIG Fashion Novi Sad", caption: "A great atmosphere throughout the day" },
        { alt: "A guest enjoying a drink at Brunch BIG Fashion Novi Sad", caption: "A pause from the city rush" },
        { alt: "Two guests at a table in Brunch BIG Fashion Novi Sad", caption: "Made for longer get-togethers" },
      ],
    },
    "brunch-big-nova-pazova": {
      city: "Nova Pazova",
      areaLocative: "BIG Nova Pazova",
      imageAlt: "A Brunch table with lunch and a cocktail in Nova Pazova",
      heroImageAlt: "A dish and cocktail served at Brunch TC BIG Nova Pazova",
      heroCopy: "A spacious family restaurant with a playroom, parking and an all-day menu.",
      description: "Located at Vojački put 1A inside BIG Nova Pazova, this spacious family Brunch offers 250 seats and a large children’s playroom suitable for celebrations. Breakfasts, pizza, pasta, risotto, main courses and desserts are available, along with free parking and reservations.",
      galleryCopy: "A relaxed family setting with varied dishes, refreshing drinks and plenty of space to spend time together.",
      hoursDays: ["Monday — Sunday"],
      features: ["Children’s playroom", "Celebration space", "Free parking"],
      gallery: [
        { alt: "A red cocktail at Brunch TC BIG Nova Pazova", caption: "Refreshment for every part of the day" },
        { alt: "A yellow cocktail on a table at Brunch TC BIG Nova Pazova", caption: "A relaxed family break" },
        { alt: "A fresh salad served at Brunch TC BIG Nova Pazova", caption: "International cuisine" },
      ],
    },
    "brunch-mercator-beograd": {
      city: "Belgrade",
      areaLocative: "Mercator Center Belgrade",
      imageAlt: "A dish served at Brunch Mercator Beograd",
      heroImageAlt: "Two guests dining at Brunch Mercator Beograd",
      heroCopy: "Brunch in New Belgrade for morning coffee, a business lunch or a relaxed break.",
      description: "Located at Bulevar umetnosti 4 in the heart of Block 31, Brunch Mercator is easy to reach from both the business and residential areas of New Belgrade. It is a comfortable choice for morning coffee, a business meeting, lunch or an easy-going break during the day.",
      galleryCopy: "A calm pause in New Belgrade, whether you are stopping by for a quick coffee, a business lunch or time with friends.",
      hoursDays: ["Monday — Sunday"],
      features: ["Bulevar umetnosti 4", "New Belgrade · Block 31", "Business lunch"],
      gallery: [
        { alt: "Red wine at Brunch Mercator Beograd", caption: "A pause in the heart of New Belgrade" },
        { alt: "Wine and a dish beside the window at Brunch Mercator Beograd", caption: "For a meeting or lunch" },
        { alt: "A guest enjoying lunch at Brunch Mercator Beograd", caption: "A moment to yourself" },
      ],
    },
    "brunch-beo-shopping-centar": {
      city: "Belgrade",
      areaLocative: "BEO Shopping Center",
      imageAlt: "A Brunch burger served at the BEO Shopping Center location",
      heroImageAlt: "A dish and refreshing drink at Brunch BEO Shopping Center",
      heroCopy: "Breakfast, lunch and local favourites at BEO Shopping Center in Zvezdara.",
      description: "Brunch BEO is located at Vojislava Ilića 141 inside BEO Shopping Center in Zvezdara. The menu combines international dishes and local favourites, making it a great option for breakfast, a shopping break, an informal meeting or an all-day meal.",
      galleryCopy: "A comfortable setting for breakfast, freshly squeezed juice, lunch or a break with friends in Zvezdara.",
      hoursDays: ["Monday — Sunday"],
      features: ["Vojislava Ilića 141", "Local and international dishes", "A break during shopping"],
      gallery: [
        { alt: "Two guests at a table in Brunch BEO Shopping Center", caption: "A break worth extending" },
        { alt: "Breakfast served at Brunch BEO Shopping Center", caption: "Breakfast in Zvezdara" },
        { alt: "Freshly squeezed juice at Brunch BEO Shopping Center", caption: "From fresh juice to lunch" },
      ],
    },
  },
  ru: {
    "brunch-masinac-novi-sad": {
      city: "Нови-Сад",
      areaLocative: "университетском кампусе",
      imageAlt: "Узнаваемый зелёный интерьер Brunch Mašinac",
      heroImageAlt: "Вход и терраса Brunch Mašinac в университетском кампусе",
      heroCopy: "Завтрак, кофе и обед рядом с университетским кампусом Нови-Сада.",
      description: "Brunch Mašinac находится на Trg Dositeja Obradovića, рядом с факультетом технических наук. Это удобное место для утреннего кофе, завтрака перед началом дня или неспешного обеда. Зелёная терраса и тёплый интерьер создают особую атмосферу как тихим утром, так и во время оживлённого студенческого дня.",
      galleryCopy: "Зелёная терраса, яркие цвета и непринуждённая атмосфера, по которой сразу узнают Mašinac.",
      hoursDays: ["Понедельник — пятница", "Суббота", "Воскресенье"],
      hoursTimes: ["07:30 — 18:00", "08:00 — 15:00", "Закрыто"],
      features: ["Trg Dositeja Obradovića 6", "Кофе и завтраки", "Терраса рядом с кампусом"],
      gallery: [
        { alt: "Гости на зелёной террасе Brunch Mašinac", caption: "Терраса в самом сердце кампуса" },
        { alt: "Тёплый оранжево-зелёный интерьер Brunch Mašinac", caption: "Узнаваемая атмосфера Mašinac" },
        { alt: "Детали интерьера и зеркала в Brunch Mašinac", caption: "Детали с характером" },
      ],
    },
    "brunch-lounge-mercator-novi-sad": {
      city: "Нови-Сад",
      areaLocative: "Mercator Novi Sad",
      imageAlt: "Светлый интерьер Brunch Lounge в Mercator",
      heroImageAlt: "Просторный интерьер Brunch Lounge Mercator Novi Sad с видом на город",
      heroCopy: "Кофе, обед и средиземноморские вкусы в Mercator, в самом сердце района Лиман.",
      description: "Brunch Lounge находится по адресу Bulevar oslobođenja 102 в Mercator Novi Sad. Открытый интерьер с галереей и видом на город подходит для быстрого кофе, семейного обеда или долгой встречи за пиццей, пастой, бургерами и десертами.",
      galleryCopy: "Открытое пространство, зелень и продуманные детали превращают паузу в Mercator в настоящий отдых.",
      hoursDays: ["Понедельник — воскресенье"],
      features: ["Bulevar oslobođenja 102", "Средиземноморская кухня", "Галерея с видом на город"],
      gallery: [
        { alt: "Бар и длинный общий стол в Brunch Lounge Mercator Novi Sad", caption: "Открытое пространство на весь день" },
        { alt: "Стол среди зелени в Brunch Lounge Mercator Novi Sad", caption: "Зелень над городской суетой" },
        { alt: "Книжные полки в интерьере Brunch Lounge Mercator Novi Sad", caption: "Lounge-детали с характером" },
      ],
    },
    "brunch-tc-big-novi-sad": {
      city: "Нови-Сад",
      areaLocative: "BIG Novi Sad",
      imageAlt: "Просторный интерьер Brunch в BIG Novi Sad",
      heroImageAlt: "Гостья за столом в Brunch TC BIG Novi Sad",
      heroCopy: "Меню на весь день — для завтрака, семейного обеда или вечернего напитка.",
      description: "Brunch в BIG Novi Sad по адресу Sentandrejski put 11 следует ритму всего дня — от завтрака и первого кофе до обеда и вечерних напитков. Просторный зал, парковка торгового центра и продлённые часы работы по пятницам и субботам делают его удобным для семей и больших компаний.",
      galleryCopy: "От сытного обеда до кофе, десерта и коктейля — всё для приятной паузы в течение дня.",
      hoursDays: ["Понедельник — четверг", "Пятница — суббота", "Воскресенье"],
      features: ["Sentandrejski put 11", "Семейный обед", "В пятницу и субботу до 23:00"],
      gallery: [
        { alt: "Блюдо и вино в Brunch TC BIG Novi Sad", caption: "Меню на весь день" },
        { alt: "Красный коктейль в Brunch TC BIG Novi Sad", caption: "Напиток после шопинга" },
        { alt: "Кофе и десерт в Brunch TC BIG Novi Sad", caption: "Время для кофе и десерта" },
      ],
    },
    "brunch-big-fashion-novi-sad": {
      city: "Нови-Сад",
      areaLocative: "BIG Fashion Novi Sad",
      imageAlt: "Гостьи с напитками в Brunch BIG Fashion",
      heroImageAlt: "Светлый и оживлённый интерьер Brunch BIG Fashion Novi Sad",
      heroCopy: "Завтрак, обед и напитки в BIG Fashion на Bulevar oslobođenja.",
      description: "Brunch BIG Fashion находится по адресу Bulevar oslobođenja 119 и подходит для завтрака, деловой встречи, перерыва во время шопинга или долгого общения. В светлом пространстве весь день подают завтраки, сэндвичи, бургеры, пиццу, пасту, основные блюда и десерты.",
      galleryCopy: "Светлая городская атмосфера для кофе, обеда и встреч, которые не обязаны заканчиваться вместе с шопингом.",
      hoursDays: ["Понедельник — воскресенье"],
      features: ["Bulevar oslobođenja 119", "Меню на весь день", "Вид на город"],
      gallery: [
        { alt: "Гостья в Brunch BIG Fashion Novi Sad", caption: "Отличная атмосфера весь день" },
        { alt: "Гостья с напитком в Brunch BIG Fashion Novi Sad", caption: "Пауза от городской суеты" },
        { alt: "Две гостьи за столом в Brunch BIG Fashion Novi Sad", caption: "Место для долгих встреч" },
      ],
    },
    "brunch-big-nova-pazova": {
      city: "Нова-Пазова",
      areaLocative: "BIG Nova Pazova",
      imageAlt: "Стол Brunch с обедом и коктейлем в Нова-Пазове",
      heroImageAlt: "Блюдо и коктейль в Brunch TC BIG Nova Pazova",
      heroCopy: "Просторный семейный ресторан с игровой комнатой, парковкой и меню на весь день.",
      description: "В BIG Nova Pazova по адресу Vojački put 1A находится просторный семейный Brunch на 250 мест с большой детской игровой комнатой, подходящей и для праздников. В меню — завтраки, пицца, паста, ризотто, основные блюда и десерты. Для гостей доступны бесплатная парковка и бронирование.",
      galleryCopy: "Непринуждённая семейная атмосфера, разнообразные блюда, освежающие напитки и достаточно места для общения.",
      hoursDays: ["Понедельник — воскресенье"],
      features: ["Детская игровая комната", "Пространство для праздников", "Бесплатная парковка"],
      gallery: [
        { alt: "Красный коктейль в Brunch TC BIG Nova Pazova", caption: "Освежение на весь день" },
        { alt: "Жёлтый коктейль на столе в Brunch TC BIG Nova Pazova", caption: "Спокойный семейный отдых" },
        { alt: "Свежий салат в Brunch TC BIG Nova Pazova", caption: "Международная кухня" },
      ],
    },
    "brunch-mercator-beograd": {
      city: "Белград",
      areaLocative: "Mercator Center",
      imageAlt: "Блюдо в Brunch Mercator Beograd",
      heroImageAlt: "Две гостьи за столом в Brunch Mercator Beograd",
      heroCopy: "Brunch в Новом Белграде для утреннего кофе, делового обеда или приятной паузы.",
      description: "Brunch Mercator находится по адресу Bulevar umetnosti 4, в самом сердце блока 31. Сюда легко добраться как из деловой, так и из жилой части Нового Белграда. Это подходящее место для утреннего кофе, деловой встречи, обеда или спокойного отдыха в течение дня.",
      galleryCopy: "Спокойная пауза в Новом Белграде — для быстрого кофе, делового обеда или встречи с друзьями.",
      hoursDays: ["Понедельник — воскресенье"],
      features: ["Bulevar umetnosti 4", "Новый Белград · Блок 31", "Деловой обед"],
      gallery: [
        { alt: "Красное вино в Brunch Mercator Beograd", caption: "Пауза в самом сердце Нового Белграда" },
        { alt: "Вино и блюдо у окна в Brunch Mercator Beograd", caption: "Для встречи или обеда" },
        { alt: "Гостья за обедом в Brunch Mercator Beograd", caption: "Момент для себя" },
      ],
    },
    "brunch-beo-shopping-centar": {
      city: "Белград",
      areaLocative: "BEO Shopping Center",
      imageAlt: "Бургер Brunch в ресторане BEO Shopping Center",
      heroImageAlt: "Блюдо и освежающий напиток в Brunch BEO Shopping Center",
      heroCopy: "Завтрак, обед и любимые местные блюда в BEO Shopping Center на Звездаре.",
      description: "Brunch BEO находится по адресу Vojislava Ilića 141 в BEO Shopping Center на Звездаре. Меню сочетает международные блюда и местные фавориты, поэтому ресторан подходит для завтрака, перерыва во время шопинга, неформальной встречи или полноценного обеда в любое время дня.",
      galleryCopy: "Уютная атмосфера для завтрака, свежевыжатого сока, обеда или встречи с друзьями на Звездаре.",
      hoursDays: ["Понедельник — воскресенье"],
      features: ["Vojislava Ilića 141", "Местные и международные блюда", "Пауза во время шопинга"],
      gallery: [
        { alt: "Две гостьи за столом в Brunch BEO Shopping Center", caption: "Пауза, которую хочется продлить" },
        { alt: "Завтрак в Brunch BEO Shopping Center", caption: "Завтрак на Звездаре" },
        { alt: "Свежевыжатый сок в Brunch BEO Shopping Center", caption: "От свежего сока до обеда" },
      ],
    },
  },
};
