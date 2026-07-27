import type { Locale } from "@/src/i18n/config";
import srData from "./editorial/sr.json";
import enData from "./editorial/en.json";
import ruData from "./editorial/ru.json";

export type EditorialSection = {
  heading: string;
  paragraphs: string[];
};

export type EditorialImage = {
  src: string;
  alt: string;
};

export type EditorialAbout = {
  title: string;
  lead: string;
  intro: string[];
  sections: EditorialSection[];
  heroImage: string;
  heroAlt: string;
  inlineImages: EditorialImage[];
};

export type EditorialPost = {
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  heroImage: string;
  inlineImage: string;
  imageAlt: string;
  inlineImageAlt: string;
  inlineImageAspect?: "landscape" | "portrait";
  intro: string[];
  sections: EditorialSection[];
};

export type EditorialCopy = {
  navAbout: string;
  navBlog: string;
  aboutEyebrow: string;
  blogEyebrow: string;
  blogTitle: string;
  readArticle: string;
  allStories: string;
  articleLabel: string;
  nextStory: string;
  blogCta: string;
  about: EditorialAbout;
  posts: EditorialPost[];
};

type LocalizedSection = {
  heading: string;
  paragraphs: string[];
};

type LocalizedContent = {
  about: {
    title: string;
    lead: string;
    intro: string[];
    sections: LocalizedSection[];
  };
  posts: {
    title: string;
    subtitle: string;
    intro: string[];
    sections: LocalizedSection[];
  }[];
};

type SerbianData = {
  about: EditorialAbout;
  posts: EditorialPost[];
};

const serbian = srData as SerbianData;
const translations: Partial<Record<Locale, LocalizedContent>> = {
  en: enData,
  ru: ruData,
};

const localizedImageCopy = {
  en: {
    about: [
      "A bright and welcoming Brunch Lounge interior",
      "A selection of Brunch Lounge dishes shared at the table",
      "A warm corner of a Brunch Lounge restaurant",
    ],
    posts: [
      ["A Brunch table with a variety of breakfast dishes", "A brunch breakfast with eggs and fresh herbs"],
      ["A table with Mediterranean and international dishes", "A Mediterranean salad with fresh vegetables and cheese"],
      ["The warm atmosphere of a Brunch Lounge bar", "A pleasant Brunch Lounge space for coffee and conversation"],
      ["A spacious Brunch Lounge interior for family gatherings", "Guests of different generations enjoying a family lunch at Brunch Lounge"],
      ["A main course served for a business lunch", "A carefully prepared lunch in a restaurant setting"],
      ["A Brunch Lounge dining room during the day", "Different dishes served at a shared table"],
      ["A comfortable Brunch Lounge interior with wooden tables", "Different Brunch dishes set out for a shared meal"],
      ["A warm and welcoming Brunch Lounge interior", "A Brunch dessert with granola, yoghurt, banana, blueberries and apple"],
      ["A bright Brunch Lounge interior for a city break", "A comfortable green corner of a Brunch Lounge restaurant"],
      ["A Brunch Lounge interior in warm tones", "The evening atmosphere of a Brunch Lounge bar"],
    ],
  },
  ru: {
    about: [
      "Светлый и гостеприимный интерьер Brunch Lounge",
      "Разные блюда Brunch Lounge для общего стола",
      "Тёплый уголок ресторана Brunch Lounge",
    ],
    posts: [
      ["Стол Brunch с разными блюдами для завтрака", "Бранч-завтрак с яйцами и свежей зеленью"],
      ["Стол со средиземноморскими и международными блюдами", "Средиземноморский салат со свежими овощами и сыром"],
      ["Тёплая атмосфера бара Brunch Lounge", "Приятное пространство Brunch Lounge для кофе и разговора"],
      ["Просторный интерьер Brunch Lounge для семейных встреч", "Гости разных поколений за семейным обедом в Brunch Lounge"],
      ["Основное блюдо для делового обеда", "Тщательно приготовленный обед в ресторанной обстановке"],
      ["Обеденный зал Brunch Lounge в дневное время", "Разные блюда за общим столом"],
      ["Уютный интерьер Brunch Lounge с деревянными столами", "Разные блюда Brunch для общей трапезы"],
      ["Тёплый и приятный интерьер Brunch Lounge", "Десерт Brunch с гранолой, йогуртом, бананом, черникой и яблоком"],
      ["Светлый интерьер Brunch Lounge для городской передышки", "Уютный зелёный уголок ресторана Brunch Lounge"],
      ["Интерьер Brunch Lounge в тёплых тонах", "Вечерняя атмосфера бара Brunch Lounge"],
    ],
  },
} as const;

const interfaceCopy: Record<Locale, Omit<EditorialCopy, "about" | "posts">> = {
  sr: {
    navAbout: "O nama",
    navBlog: "Blog",
    aboutEyebrow: "O nama",
    blogEyebrow: "Brunch Lounge",
    blogTitle: "Blog",
    readArticle: "Pročitaj tekst",
    allStories: "Svi tekstovi",
    articleLabel: "Blog",
    nextStory: "Sledeći tekst",
    blogCta: "Pogledaj sve tekstove",
  },
  en: {
    navAbout: "About us",
    navBlog: "Blog",
    aboutEyebrow: "About us",
    blogEyebrow: "Brunch Lounge",
    blogTitle: "Blog",
    readArticle: "Read the article",
    allStories: "All articles",
    articleLabel: "Blog",
    nextStory: "Next article",
    blogCta: "View all articles",
  },
  ru: {
    navAbout: "О нас",
    navBlog: "Блог",
    aboutEyebrow: "О нас",
    blogEyebrow: "Brunch Lounge",
    blogTitle: "Блог",
    readArticle: "Читать статью",
    allStories: "Все статьи",
    articleLabel: "Блог",
    nextStory: "Следующая статья",
    blogCta: "Смотреть все статьи",
  },
};

function localize(locale: Locale) {
  if (locale === "sr") return serbian;

  const translated = translations[locale];
  const imageCopy = localizedImageCopy[locale];
  if (!translated || translated.posts.length !== serbian.posts.length) {
    return serbian;
  }

  return {
    about: {
      ...serbian.about,
      ...translated.about,
      heroAlt: imageCopy.about[0],
      inlineImages: serbian.about.inlineImages.map((image, index) => ({
        ...image,
        alt: imageCopy.about[index + 1],
      })),
    },
    posts: serbian.posts.map((base, index) => {
      const localized = translated.posts[index];
      return {
        ...base,
        ...localized,
        excerpt: localized.intro[0],
        imageAlt: imageCopy.posts[index][0],
        inlineImageAlt: imageCopy.posts[index][1],
      };
    }),
  };
}

export function getEditorialCopy(locale: Locale): EditorialCopy {
  return {
    ...interfaceCopy[locale],
    ...localize(locale),
  };
}

export function getEditorialPost(locale: Locale, slug: string) {
  return getEditorialCopy(locale).posts.find((item) => item.slug === slug);
}

export function getEditorialSlugs() {
  return serbian.posts.map((item) => item.slug);
}
