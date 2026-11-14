/**
 * Techoverxe — content curation.
 *
 * Keeps ONLY the real, generated pages (tracked in scripts/.content-manifest.json)
 * and removes every other stub .mdx under content/. Fully git-recoverable.
 *
 * Usage:
 *   node scripts/curate-content.mjs --dry   # show what would be removed
 *   node scripts/curate-content.mjs         # actually delete stubs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const CONTENT = path.join(ROOT, "content");
const MANIFEST = path.join(__dirname, ".content-manifest.json");

const DRY = process.argv.includes("--dry");

const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf-8")) : {};
const keep = new Set(Object.keys(manifest)); // relative paths, e.g. content\ai-tools\coding\cursor.mdx

if (keep.size === 0) {
  console.error("✖ Manifest empty — refusing to delete everything. Generate content first.");
  process.exit(1);
}

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(full));
    else if (entry.name.endsWith(".mdx")) out.push(full);
  }
  return out;
}

const all = walk(CONTENT);
const toDelete = all.filter((f) => !keep.has(path.relative(ROOT, f)));
const kept = all.length - toDelete.length;

// Group counts by top-level collection for the report.
const byCollection = {};
for (const f of toDelete) {
  const rel = path.relative(CONTENT, f).split(path.sep)[0];
  byCollection[rel] = (byCollection[rel] || 0) + 1;
}

console.log(`\nContent files: ${all.length}  |  keep: ${kept}  |  remove: ${toDelete.length}${DRY ? "  (dry run)" : ""}`);
console.log("Removing (by collection):");
for (const [c, n] of Object.entries(byCollection)) console.log(`  ${c}: ${n}`);

if (DRY) {
  console.log("\nDry run — nothing deleted. Re-run without --dry to apply.\n");
  process.exit(0);
}

for (const f of toDelete) fs.rmSync(f);

// Remove now-empty directories under content/.
function pruneEmpty(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) pruneEmpty(path.join(dir, entry.name));
  }
  if (dir !== CONTENT && fs.readdirSync(dir).length === 0) fs.rmdirSync(dir);
}
pruneEmpty(CONTENT);

console.log(`\n✓ Removed ${toDelete.length} stub files. Kept ${kept}. Run \`npm run build\` to recompile.\n`);
