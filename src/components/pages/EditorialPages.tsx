import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/src/components/site/SiteFooter";
import { SiteHeader } from "@/src/components/site/SiteHeader";
import { getCities } from "@/src/data/locations";
import { getEditorialCopy, getEditorialPost } from "@/src/data/editorial";
import {
  localeAlternates,
  localeMeta,
  localizedPath,
  type Locale,
} from "@/src/i18n/config";
import { getDictionary } from "@/src/i18n/dictionaries";
import { absoluteUrl, siteUrl } from "@/src/seo";
import styles from "./EditorialPages.module.css";

function Shell({
  locale,
  pagePath,
  children,
}: {
  locale: Locale;
  pagePath: string;
  children: React.ReactNode;
}) {
  const dictionary = getDictionary(locale);
  return (
    <>
      <SiteHeader locale={locale} dictionary={dictionary} pagePath={pagePath} />
      <main>{children}</main>
      <SiteFooter
        locale={locale}
        dictionary={dictionary}
        cities={getCities(locale)}
      />
    </>
  );
}

export function getAboutMetadata(locale: Locale): Metadata {
  const editorial = getEditorialCopy(locale);
  const about = editorial.about;
  const pathname = "/o-nama/";
  const title = `${editorial.navAbout} | Brunch Lounge`;
  return {
    title,
    description: about.lead,
    alternates: {
      canonical: localizedPath(locale, pathname),
      languages: localeAlternates(pathname),
    },
    openGraph: {
      type: "website",
      title,
      description: about.lead,
      url: localizedPath(locale, pathname),
      locale: localeMeta[locale].ogLocale,
      images: [{ url: about.heroImage, alt: about.heroAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: about.lead,
      images: [about.heroImage],
    },
  };
}

export function AboutContent({ locale }: { locale: Locale }) {
  const editorial = getEditorialCopy(locale);
  const about = editorial.about;
  const pagePath = "/o-nama/";
  const pageUrl = absoluteUrl(localizedPath(locale, pagePath));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#about`,
    url: pageUrl,
    name: about.title,
    description: about.lead,
    inLanguage: localeMeta[locale].htmlLang,
    isPartOf: { "@id": `${siteUrl}/#website` },
    primaryImageOfPage: absoluteUrl(about.heroImage),
  };

  return (
    <Shell locale={locale} pagePath={pagePath}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }}
      />
      <section className={styles.hero}>
        <Image
          src={about.heroImage}
          alt={about.heroAlt}
          fill
          preload
          sizes="100vw"
        />
        <div className={styles.heroShade} />
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{editorial.aboutEyebrow}</p>
          <h1>{about.title}</h1>
          <p>{about.lead}</p>
        </div>
      </section>

      <section className={styles.aboutIntro}>
        <div className={styles.aboutIntroImage}>
          <Image
            src={about.inlineImages[0].src}
            alt={about.inlineImages[0].alt}
            fill
            sizes="(max-width: 760px) 100vw, 45vw"
          />
        </div>
        <div className={styles.aboutIntroCopy}>
          <blockquote>{about.intro[0]}</blockquote>
          {about.intro.slice(1).map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <div className={styles.articleBody}>
        {about.sections.map((section, index) => (
          <div key={section.heading}>
            <section className={styles.storySection}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
            {index === 1 && (
              <figure className={styles.inlineFigure}>
                <Image
                  src={about.inlineImages[1].src}
                  alt={about.inlineImages[1].alt}
                  width={1600}
                  height={1067}
                  sizes="(max-width: 900px) 100vw, 920px"
                />
              </figure>
            )}
          </div>
        ))}
      </div>

      <section className={styles.editorialCta}>
        <h2>{editorial.blogTitle}</h2>
        <Link href={localizedPath(locale, "/blog/")}>{editorial.blogCta}</Link>
      </section>
    </Shell>
  );
}

export function getBlogMetadata(locale: Locale): Metadata {
  const editorial = getEditorialCopy(locale);
  const pathname = "/blog/";
  const title = `${editorial.blogTitle} | Brunch Lounge`;
  return {
    title,
    description: editorial.posts[0].excerpt,
    alternates: {
      canonical: localizedPath(locale, pathname),
      languages: localeAlternates(pathname),
    },
    openGraph: {
      type: "website",
      title,
      description: editorial.posts[0].excerpt,
      url: localizedPath(locale, pathname),
      locale: localeMeta[locale].ogLocale,
      images: [{ url: editorial.posts[0].heroImage, alt: editorial.posts[0].imageAlt }],
    },
  };
}

export function BlogIndexContent({ locale }: { locale: Locale }) {
  const editorial = getEditorialCopy(locale);
  const pagePath = "/blog/";
  const blogUrl = absoluteUrl(localizedPath(locale, pagePath));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${blogUrl}#blog`,
    url: blogUrl,
    name: editorial.blogTitle,
    description: editorial.posts[0].excerpt,
    inLanguage: localeMeta[locale].htmlLang,
    blogPost: editorial.posts.map((item) => ({
      "@type": "BlogPosting",
      headline: item.title,
      url: absoluteUrl(localizedPath(locale, `/blog/${item.slug}/`)),
      image: absoluteUrl(item.heroImage),
    })),
  };

  return (
    <Shell locale={locale} pagePath={pagePath}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }}
      />
      <section className={styles.blogHeader}>
        <p className={styles.eyebrow}>{editorial.blogEyebrow}</p>
        <h1>{editorial.blogTitle}</h1>
      </section>
      <section className={styles.blogGrid}>
        {editorial.posts.map((item, index) => (
          <article className={index === 0 ? styles.featureCard : styles.blogCard} key={item.slug}>
            <Link
              className={styles.cardImage}
              href={localizedPath(locale, `/blog/${item.slug}/`)}
              aria-label={`${editorial.readArticle}: ${item.title}`}
            >
              <Image
                src={item.heroImage}
                alt={item.imageAlt}
                fill
                preload={index === 0}
                sizes={index === 0 ? "100vw" : "(max-width: 760px) 100vw, 50vw"}
              />
            </Link>
            <div className={styles.cardCopy}>
              <p>{editorial.articleLabel}</p>
              <h2><Link href={localizedPath(locale, `/blog/${item.slug}/`)}>{item.title}</Link></h2>
              <h3>{item.subtitle}</h3>
              <p className={styles.excerpt}>{item.excerpt}</p>
              <Link className={styles.textLink} href={localizedPath(locale, `/blog/${item.slug}/`)}>
                {editorial.readArticle}
              </Link>
            </div>
          </article>
        ))}
      </section>
    </Shell>
  );
}

export function getPostMetadata(locale: Locale, slug: string): Metadata {
  const item = getEditorialPost(locale, slug);
  if (!item) return {};
  const pathname = `/blog/${item.slug}/`;
  const title = `${item.title} | Brunch Lounge`;
  return {
    title,
    description: item.excerpt,
    alternates: {
      canonical: localizedPath(locale, pathname),
      languages: localeAlternates(pathname),
    },
    openGraph: {
      type: "article",
      title,
      description: item.excerpt,
      url: localizedPath(locale, pathname),
      locale: localeMeta[locale].ogLocale,
      images: [{ url: item.heroImage, alt: item.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: item.excerpt,
      images: [item.heroImage],
    },
  };
}

export function BlogPostContent({ locale, slug }: { locale: Locale; slug: string }) {
  const editorial = getEditorialCopy(locale);
  const item = getEditorialPost(locale, slug);
  if (!item) notFound();

  const pagePath = `/blog/${item.slug}/`;
  const currentIndex = editorial.posts.findIndex((post) => post.slug === item.slug);
  const next = editorial.posts[(currentIndex + 1) % editorial.posts.length];
  const pageUrl = absoluteUrl(localizedPath(locale, pagePath));
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${pageUrl}#article`,
    mainEntityOfPage: pageUrl,
    headline: item.title,
    description: item.excerpt,
    image: [absoluteUrl(item.heroImage), absoluteUrl(item.inlineImage)],
    inLanguage: localeMeta[locale].htmlLang,
    author: { "@type": "Organization", name: "Brunch Lounge", url: siteUrl },
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  return (
    <Shell locale={locale} pagePath={pagePath}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replaceAll("<", "\\u003c") }}
      />
      <article>
        <header className={styles.postHeader}>
          <div className={styles.postHeaderCopy}>
            <Link href={localizedPath(locale, "/blog/")}>{editorial.allStories}</Link>
            <p>{editorial.articleLabel}</p>
            <h1>{item.title}</h1>
            <h2>{item.subtitle}</h2>
          </div>
          <div className={styles.postHeroImage}>
            <Image src={item.heroImage} alt={item.imageAlt} fill preload sizes="100vw" />
          </div>
        </header>

        <div className={styles.postContent}>
          <div className={styles.postLead}>
            {item.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
          {item.sections.map((section, index) => (
            <section key={section.heading}>
              <div>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {index === 0 && (
                <figure className={item.inlineImageAspect === "portrait" ? styles.portraitFigure : undefined}>
                  <Image
                    src={item.inlineImage}
                    alt={item.inlineImageAlt}
                    width={1600}
                    height={item.inlineImageAspect === "portrait" ? 2400 : 1067}
                    sizes="(max-width: 900px) 100vw, 860px"
                  />
                </figure>
              )}
            </section>
          ))}
        </div>
      </article>

      <section className={styles.nextPost}>
        <p>{editorial.nextStory}</p>
        <Link href={localizedPath(locale, `/blog/${next.slug}/`)}>{next.title}</Link>
      </section>
    </Shell>
  );
}
