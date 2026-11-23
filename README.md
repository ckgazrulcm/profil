# Laman Penjenamaan Peribadi Cikgu Azrul (Personal Branding Website)

Laman web penjenamaan peribadi bertaraf premium, sinematik 3D dan interaktif untuk **CIKGU AZRUL** (Mohd Azrul Che Mustapha) — Pendidik Sains Komputer di MRSM Merbok, Kedah, Microsoft Innovative Educator Expert (MIEE), dan penggiat AI pendidikan.

---

## 🌟 Ciri-Ciri Utama & Arahan Reka Bentuk

- **Estetik Sinematik & Futuristik**: Tema *Deep Charcoal Black* (`#09090F`), putih, dan *Neon Energetic Red* (`#FF304F`).
- **Hero 3D Berlapis (Multi-Layer Depth)**:
  - Teks gergasi **"CIKGU AZRUL"** di belakang potret dengan efek strok dan kedalaman optikal.
  - Potret foto potong (cutout portrait) beresolusi tinggi di bahagian hadapan dengan pencahayaan neon red rim dan bayang sinematik.
  - Paralaks 3D interaktif yang bertindak balas dengan pergerakan kursor tetikus (*mouse parallax*).
  - Sistem partikel 3D terapung (*floating red embers & constellation*) di latar belakang menggunakan Canvas 60fps.
  - Lencana HUD 3D terapung (*MIE Expert* & *MRSM Merbok*).
  - Butang tindakan utama berkesan magnetik: **"KENALI SAYA"** dan **"TEROKAI PROJEK"**.
- **6 Seksyen Lengkap**:
  1. **Utama (Hero)** — Sinematik 3D dengan potret berlapis dan statistik pantas.
  2. **Tentang Saya** — Naratif biografi pendidik, kredibiliti MIEE, Falsafah Pendidikan, dan Grid Bento.
  3. **Kepakaran** — 5 domain teras (AI & Prompt Engineering, Sains Komputer & Python, Microsoft 365, Google Apps Script, Kandungan Digital).
  4. **Projek Pilihan** — Kad projek 3D Tilt interaktif dengan tab penapis (*Semua, Aplikasi Web, Automasi MRSM, Alat AI*), pop-up modal perincian teknikal.
  5. **Tutorial & Bengkel AI** — Panduan praktikal dan *Interactive Prompt Playground* dengan fungsi salin satu klik untuk guru-guru.
  6. **Hubungi** — Maklumat perhubungan terus (MRSM Merbok, WhatsApp, LinkedIn, YouTube, TikTok, GitHub) dan borang kiriman mesej interaktif.
- **Teknologi Animasi & Audio**:
  - GSAP & ScrollTrigger untuk peralihan skrol lancar.
  - Efek kecondongan kad 3D (*Perspective Card Tilt*) berserta pantulan cahaya (*specular glare*).
  - Sintesis audio Web Audio API terbina dalam untuk maklum balas bunyi futuristik (dengan suis hidup/padam).
  - Menyokong mod kebolehcapaian `prefers-reduced-motion`.
  - Responsif sepenuhnya pada paparan Desktop, Tablet dan Telefon Pintar.

---

## 📁 Struktur Fail Projek

```
/Users/azrul/dev/profile/
├── index.html            # Laman web interaktif utama (Production-Ready)
├── gambar/
│   └── azrul.png         # Potret rasmi cutout telus Cikgu Azrul
├── package.json          # Konfigurasi dependensi Node/Vite
├── vite.config.js        # Konfigurasi Vite
├── vercel.json           # Konfigurasi penerbitan Vercel
├── firebase.json         # Konfigurasi penerbitan Firebase Hosting
├── quiz_app_backup/      # Salinan arkib projek kuiz terdahulu
└── README.md             # Dokumentasi & panduan deployment
```

---

## 🚀 Cara Menjalankan Server Pembangunan (Development Server)

### Kaedah 1: Menggunakan Python (Sedia Ada - Disyorkan untuk Ujian Pantas)

Memandangkan macOS mempunyai Python sedia terpasang, anda boleh melancarkan server pembangunan serta-merta tanpa perlu memasang Node:

```bash
cd /Users/azrul/dev/profile
python3 -m http.server 8080
```

Buka pelayar web anda di:
👉 **`http://localhost:8080`**

---

### Kaedah 2: Menggunakan Vite & Node.js (Jika Node dipasang)

```bash
cd /Users/azrul/dev/profile
npm install
npm run dev
```

---

## 🌐 Panduan Penerbitan (Deployment Instructions)

### 1. Penerbitan ke Vercel (Paling Pantas & Percuma)

1. Pasang Vercel CLI (atau sambungkan terus melalui GitHub):
   ```bash
   npm i -g vercel
   ```
2. Dari direktori projek, jalankan:
   ```bash
   vercel
   ```
3. Sahkan tetapan dan laman web anda akan aktif di URL `https://cikgu-azrul-profile.vercel.app` dalam masa beberapa saat!
   *(Fail `vercel.json` telah disediakan secara automatik).*

---

### 2. Penerbitan ke Firebase Hosting

1. Pasang Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```
2. Log masuk ke akaun Google anda:
   ```bash
   firebase login
   ```
3. Mulakan dan pilih projek Firebase anda:
   ```bash
   firebase init hosting
   ```
   *(Pilih direktori semasa sebagai public directory).*
4. Terbitkan laman web:
   ```bash
   firebase deploy --only hosting
   ```
   *(Fail `firebase.json` telah sedia dikonfigurasi).*

---

### 3. Penerbitan ke GitHub Pages

1. Tolak kod ke repositori GitHub anda:
   ```bash
   git add .
   git commit -m "Deploy Cikgu Azrul Cinematic 3D Personal Branding Website"
   git push origin main
   ```
2. Di GitHub: **Settings > Pages > Build and deployment**.
3. Pilih cawangan `main` dan folder `/ (root)`.
4. Simpan, dan laman web akan live dalam masa 1-2 minit di `https://[username].github.io/profile/`.

---

© 2026 Cikgu Azrul (Mohd Azrul Che Mustapha). Hak Cipta Terpelihara.
MRSM Merbok, Kedah Darul Aman.
