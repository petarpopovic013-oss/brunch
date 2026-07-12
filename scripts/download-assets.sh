#!/bin/sh
set -eu

base="https://patiotime.loftocean.com/demo3/wp-content/uploads/sites/3/2022/04"
out="public/assets"
mkdir -p "$out/fonts"

for name in \
  bar-logo.png \
  video-bg-fallback.jpg \
  img-16.jpg img-17.jpg \
  section-bg-3.jpg experience-text.png \
  img-12.jpg img-13.jpg img-14.jpg img-15.jpg \
  andrea-riezzo-1hKZ0A182Bk-unsplash-2.jpg \
  food-photographer-david-fedulov-aI5CWpiOOZM-unsplash.jpg \
  section-bg-4.jpg \
  img-20.jpg img-18.jpg img-19.jpg \
  bar-events-768x512.jpg \
  sam-van-bussel-MrE4n1hzvLg-unsplash-768x512.jpg \
  louis-hansel-yLUvnCFI500-unsplash-768x512.jpg \
  footer-bg-1.jpg
do
  curl -L "$base/$name" -o "$out/$name"
done

curl -L "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3ZmX5slCNuHLi8bLeY9MK7whWMhyjYrEtImSqn7B6D.woff2" -o "$out/fonts/cormorant-garamond-regular.woff2"
curl -L "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3bmX5slCNuHLi8bLeY9MK7whWMhyjYqXtKky2F7g.woff2" -o "$out/fonts/cormorant-garamond-semibold.woff2"
curl -L "https://fonts.gstatic.com/s/jost/v20/92zatBhPNqw73oTd4jQmfxI.woff2" -o "$out/fonts/jost.woff2"
