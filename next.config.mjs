// STATIC_EXPORT=true (lewat `npm run build:static`) menghasilkan folder out/ untuk shared hosting.
const isStatic = process.env.STATIC_EXPORT === "true";

if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL && !process.env.SITE_URL_WARNED) {
  process.env.SITE_URL_WARNED = "1";
  console.warn("\n[PERINGATAN] NEXT_PUBLIC_SITE_URL belum diisi. Sitemap dan metadata memakai https://www.example.com. Jangan deploy hasil build ini.\n");
}

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  // URL berakhiran "/" supaya sama di semua jenis hosting (mobil/ayla/index.html).
  trailingSlash: true,
  poweredByHeader: false,
  images: { unoptimized: true },
  // headers() tidak berlaku pada static export; di sana diatur oleh hosting/.htaccess.
  ...(isStatic
    ? { output: "export" }
    : { headers: async () => [{ source: "/:path*", headers: securityHeaders }] }),
};

export default nextConfig;
