export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://brunch.rs").replace(/\/$/, "");

export const brandName = "Brunch Lounge";
export const brandLogoPath = "/images/brunch/logo-black.webp";
export const brandSocialProfiles = [
  "https://www.instagram.com/brunch.rs/",
  "https://www.facebook.com/brunchlounge.rs/",
];

export function absoluteUrl(pathname: string) {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteUrl}${normalizedPath}`;
}
