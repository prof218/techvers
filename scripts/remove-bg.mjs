import sharp from "sharp";

// Make the white background transparent. Only affects near-white, low-saturation
// pixels, so the dark mark, black text and blue/purple gradient are untouched.
const src = "public/tv2-src.png";
const out = "public/tv-logo2.png";

const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;

for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const mn = Math.min(r, g, b);
  const sat = Math.max(r, g, b) - mn;
  let a = 255;
  if (sat <= 12) {
    if (mn >= 250) a = 0;
    else if (mn >= 230) a = Math.round(((250 - mn) / 20) * 255);
  }
  data[i + 3] = Math.min(data[i + 3], a);
}

await sharp(data, { raw: { width, height, channels } }).png().toFile(out);
console.log("wrote", out);
