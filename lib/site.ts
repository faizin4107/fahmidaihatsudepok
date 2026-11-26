// Domain situs, diambil dari NEXT_PUBLIC_SITE_URL saat build (lihat .env.example).
// Dipakai untuk metadata, robots.txt, sitemap.xml, dan JSON-LD.
export const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL||"https://www.example.com").replace(/\/+$/,"");
