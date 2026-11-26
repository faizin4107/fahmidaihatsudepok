// Build static export ke folder out/, lalu sertakan .htaccess untuk Apache/LiteSpeed (cPanel).
import { spawnSync } from "node:child_process";
import { copyFileSync } from "node:fs";
import { createRequire } from "node:module";

const nextBin = createRequire(import.meta.url).resolve("next/dist/bin/next");
const result = spawnSync(process.execPath, [nextBin, "build"], {
  stdio: "inherit",
  env: { ...process.env, STATIC_EXPORT: "true" },
});
if (result.status !== 0) process.exit(result.status ?? 1);

copyFileSync("hosting/.htaccess", "out/.htaccess");
console.log("\nSelesai. Unggah ISI folder out/ (termasuk .htaccess) ke document root domain.");
