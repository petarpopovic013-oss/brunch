import localFont from "next/font/local";

export const cormorant = localFont({
  src: [
    { path: "../public/assets/fonts/cormorant-garamond-variable.ttf", weight: "300 700", style: "normal" },
    { path: "../public/assets/fonts/cormorant-garamond-variable-italic.ttf", weight: "300 700", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});
