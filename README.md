# Fahmi Daihatsu Next.js SEO Starter

## Stack
- Next.js App Router
- React + TypeScript
- CSS responsive (no heavy UI library)

## Local run
1. Install Node.js LTS (recommended).
2. Extract this folder.
3. In terminal run:
   `npm install`
   `npm run dev`
4. Open http://localhost:3000

## Production
- See [DEPLOY.md](DEPLOY.md) for hosting steps (cPanel, Vercel, VPS).
- Set the verified domain as `NEXT_PUBLIC_SITE_URL` in `.env.production` (copy from `.env.example`).
- Replace CSS illustration placeholders with licensed/official vehicle images and alt text.
- Add Google Search Console and analytics only after deployment/domain setup.
- Build test: `npm run build`; launch: `npm start`. Static export for shared hosting: `npm run build:static`.

## SEO checklist
- Page title and description
- Open Graph metadata
- robots.txt route
- sitemap.xml route
- AutoDealer JSON-LD (validate details before use)
- Model pages with static params and metadata
- Responsive, accessible controls

The site is a sales-consultant promotional site, not an official dealership website. Avoid implying official affiliation unless authorized.
