# Panduan Deploy

Situs ini seluruhnya statis (tanpa database, tanpa API), jadi bisa dipasang di hampir semua hosting.

| Jenis hosting | Pakai | Perintah build |
|---|---|---|
| Shared hosting / cPanel | Opsi A | `npm run build:static` |
| Vercel | Opsi B | otomatis di Vercel |
| VPS dengan Node.js | Opsi C | `npm run build` |

## Langkah 0: isi domain (wajib untuk semua opsi)

```powershell
Copy-Item .env.example .env.production
```

Edit `.env.production`, misalnya:

```
NEXT_PUBLIC_SITE_URL=https://www.domain-anda.com
```

Tulis lengkap dengan `https://`, tanpa `/` di akhir. Samakan dengan alamat yang benar-benar dipakai (dengan atau tanpa `www`).
Nilai ini ditanam saat build, jadi **setiap ganti domain harus build ulang**.

## Opsi A: shared hosting / cPanel

1. Build dan bungkus (PowerShell, di folder proyek):
   ```powershell
   npm run build:static
   tar.exe -a -c -f situs.zip -C out .
   ```
2. Di cPanel, buka **File Manager** lalu masuk ke document root domain (biasanya `public_html`).
3. Aktifkan **Settings → Show Hidden Files** agar `.htaccess` terlihat. Jika sudah ada `.htaccess` lama, cadangkan dulu.
4. Unggah `situs.zip`, **Extract** di folder itu, lalu hapus zip-nya.
5. Aktifkan SSL (AutoSSL / Let's Encrypt). Setelah `https://` bisa dibuka, hapus tanda `#` pada blok "Paksa HTTPS" di `.htaccess`.
   Agar tidak hilang saat deploy berikutnya, ubah juga di `hosting/.htaccess`.

Situs harus berada di **root** domain atau subdomain, bukan di subfolder (misalnya `domain.com/daihatsu`).

Update berikutnya: ulangi langkah 1 sampai 4.

## Opsi B: Vercel

Tidak perlu Git.

```powershell
npx vercel login
npx vercel                                   # membuat proyek (deploy preview)
npx vercel env add NEXT_PUBLIC_SITE_URL production
npx vercel --prod                            # deploy produksi
```

Lalu tambahkan domain di dashboard Vercel (**Settings → Domains**) dan atur DNS sesuai petunjuknya.

Catatan: paket gratis (Hobby) Vercel ditujukan untuk pemakaian non-komersial. Situs promosi sales kemungkinan perlu paket Pro; cek ketentuan terbaru Vercel.

## Opsi C: VPS (Ubuntu, Nginx, PM2)

Butuh Node.js 20.11 ke atas (disarankan versi LTS). Unggah proyek **tanpa** `node_modules`, `.next`, dan `out`.

```bash
cd /var/www/fahmi-daihatsu
npm ci
npm run build
sudo npm install -g pm2
pm2 start npm --name fahmi-daihatsu -- start -- -H 127.0.0.1 -p 3000
pm2 save
pm2 startup        # jalankan perintah yang ditampilkan
```

`/etc/nginx/sites-available/fahmi-daihatsu`:

```nginx
server {
    listen 80;
    server_name domain-anda.com www.domain-anda.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/fahmi-daihatsu /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d domain-anda.com -d www.domain-anda.com
```

Update berikutnya: unggah file baru, lalu `npm ci && npm run build && pm2 restart fahmi-daihatsu`.

## Cek setelah online

- `https://domain-anda.com/` dan salah satu halaman mobil, misalnya `/mobil/ayla/`, terbuka.
- `/robots.txt` dan `/sitemap.xml` memuat domain asli, bukan `example.com`.
- Alamat asal-asalan menampilkan halaman 404.
- Tombol WhatsApp dan form konsultasi membuka nomor yang benar.
- Daftarkan sitemap di Google Search Console.

## Konten yang perlu diperiksa sebelum publik

- **Gambar mobil** masih ilustrasi CSS. Ganti dengan foto resmi atau berlisensi.
- **Favicon** belum ada: taruh `app/icon.png`.
- **Gambar pratinjau saat link dibagikan** belum ada: taruh `app/opengraph-image.png` (1200×630).
- **Nomor WhatsApp** tertulis di `lib/data.ts`, `components/LeadForm.tsx`, dan `app/page.tsx` (JSON-LD dan footer).
- **Nama dan merek**: data terstruktur menyebut "Astra Daihatsu Depok" bertipe `AutoDealer`, sementara footer menyatakan situs ini bukan situs resmi. Pastikan penyebutan itu memang diizinkan.
