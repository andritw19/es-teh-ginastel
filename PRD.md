# Product Requirements Document (PRD) & Spesifikasi Desain Web
## Website Profil UMKM: Es Teh GiNăSTel (Asli Sukoharjo / Solo Raya)

---

## 1. Informasi Umum & Identitas Brand (Product Overview)

* **Nama Brand Resmi:** **Es Teh GiNăSTel**
* **Kepanjangan & Filosofi:** *Legi, Panas, Pait, Sepet, Kentel* (Manis, Panas/Segar, Pahit-Sepat Teh Asli, dan Kental).
* **Slogan Produk:** *"BUKTIkan RASAnya!"*
* **Asal UMKM:** Asli Sukoharjo / Solo Raya, Jawa Tengah.
* **Kontak Resmi & Media Sosial (Berdasarkan Kemasan Asli):**
  * **WhatsApp Kemitraan & Order:** `0823 2222 8006` (`https://wa.me/6282322228006`)
  * **Instagram / TikTok / Facebook:** `@ginastelofficial` / `Ginastel Official`
* **Tujuan Website (SEO & SEM):**
  1. Menjadi *landing page* profil resmi yang terindeks di peringkat teratas Google melalui optimasi **On-Page SEO** (Judul, `H1`–`H3`, *Meta Tags*, *Alt Text* gambar, dan `sitemap.xml`).
  2. Memfasilitasi pengunjung untuk melihat katalog menu dan memesan langsung melalui **3 Merchant Resmi (GoFood, ShopeeFood, GrabFood)**.
  3. Menjaring calon mitra bisnis (*franchise/booth*) dan pesanan konsumsi acara melalui formulir **Kontak Kerja Sama** yang terhubung langsung ke WhatsApp resmi `0823 2222 8006`.

---

## 2. Sistem Desain & Identitas Visual (UI/UX Guidelines)

Referensi mengacu langsung pada *mockup* **Es Teh Ginastel — Desktop** dan karakter kemasan asli produk:

### 2.1. Palet Warna (Color System)

| Peran Warna | Nama Warna | Kode Hex | Penerapan pada Komponen Website |
| :--- | :--- | :--- | :--- |
| **Primary Brand** | **Hijau Tosca (Teal)** | `#0D9488` | Navigasi aktif, teks sorotan ("Segar"), tombol *Pesan Menu Ini*, *filter pill* aktif, dan banner pesanan acara. |
| **Primary Dark** | **Tosca Tua (Logo & Footer)** | `#115E59` | Warna latar *Footer* bawah, warna dasar logo siluet GiNăSTel, dan aksen teks judul sekunder. |
| **Primary Surface** | **Mint / Tosca Sangat Muda** | `#F0FDFA` | Latar belakang seksi *Value Proposition* (3 kartu keunggulan) dan seksi *Kontak Kerja Sama*. |
| **Accent / CTA** | **Merah Ginastel** | `#E11D48` | Tombol CTA utama di Navbar & Hero, teks sorotan ("Ginastel"), teks harga menu, *badge* produk, dan tombol kirim formulir. |
| **Background Utama** | **Putih Bersih** | `#FFFFFF` | Latar belakang *Navbar*, *Hero Section*, kartu produk, kartu *merchant*, kartu keunggulan, dan kartu formulir. |
| **Background Katalog** | **Putih Keabuan Lembut** | `#F8FAFC` | Latar belakang area *Katalog Menu Minuman* dan *Order Merchant*. |
| **Teks Utama** | **Hitam Arang (Slate Dark)** | `#0F172A` | Seluruh *heading* (`H1`, `H2`, `H3`) dan judul kartu agar kontras dan tajam. |
| **Teks Deskripsi** | **Abu-abu Sedang** | `#475569` | Paragraf pembuka SEO, deskripsi varian minuman, dan keterangan tambahan. |

### 2.2. Tipografi & Komponen
* **Font Heading & Body:** *Plus Jakarta Sans* atau *Inter* (`400` Regular, `600` SemiBold, `700` Bold, `800` ExtraBold).
* **Sudut Kartu (Border Radius):** `16px` untuk kartu menu, kartu *merchant*, dan gambar *hero*; `9999px` (*pill button*) untuk tombol CTA dan *filter* kategori.
* **Shadow:** `0 10px 30px rgba(15, 23, 42, 0.06)` dengan garis tepi halus `1px solid #E2E8F0`.

---

## 3. Pemetaan Foto Produk & Spot Visual Website (Asset Mapping)

Agar tidak terjadi *error 404* saat di-*deploy* ke GitHub & Vercel, berikut adalah aturan penamaan ulang (*rename*) yang disarankan beserta penempatan spot untuk **5 foto produk asli** yang telah disiapkan:

| No | Nama File Asli yang Diunggah | Saran Nama File di Folder Project (Root) | Spot Penempatan di Website | Fungsi Visual & Atribut `alt` (SEO) |
| :--- | :--- | :--- | :--- | :--- |
| **1** | `474608924_122191236236171285_3661987963708681210_n.jpg.jpg` | `hero-teh-original.jpg` | **1. Spot Foto Utama Hero Section (Kanan Atas)**<br>**2. Kartu Menu 1 (Es Teh Ginastel Original Jumbo)**<br>**3. Kartu Menu 2 (Es Teh Kampul / Lemon)** | Menampilkan cup Es Teh Ginastel Original bermotif batik yang segar.<br>**Alt Text:** `Es Teh Ginastel Original Asli Sukoharjo Segar dan Kentel` |
| **2** | `474620416_122191351616171285_5456408100054239084_n.jpg.jpg` | `menu-teh-susu.jpg` | **1. Kartu Menu 4 (Es Teh Susu Ginastel / Milk Tea)**<br>**2. Kartu Menu 3 (Varian Spesial)** | Menampilkan cup varian teh susu/creamy cokelat dengan logo GiNăSTel.<br>**Alt Text:** `Es Teh Susu Ginastel Creamy dan Kentel` |
| **3** | `477439835_122195083106171285_8366401819462708696_n.jpg.jpg` | `menu-pink-creamy.jpg` | **Kartu Menu 5 (Es Teh Leci / Pink Creamy Ginastel)** | Menampilkan cup varian warna merah muda segar (*Pink Lava / Strawberry Milk*).<br>**Alt Text:** `Varian Segar Manis Pink Creamy Es Teh Ginastel` |
| **4** | `472099081_122187714152171285_2631642459740612513_n.jpg.jpg` | `menu-tiga-varian.jpg` | **1. Kartu Menu 2 / Varian Matcha & Buah (Trio Cup Outdoor)**<br>**2. Ilustrasi Pendukung Seksi Keunggulan** | Menampilkan 3 cup berjajar (Hijau Matcha/Melon, Teh Original, dan Pink) dengan latar alami.<br>**Alt Text:** `Tiga Varian Favorit Es Teh Ginastel Asli Sukoharjo` |
| **5** | `471381953_122186763068171285_4880678640465452888_n.jpg.jpg` | `koleksi-kemitraan-ginastel.jpg` | **1. Kartu Menu 6 (Paket Krat / Acara Kampus & Kemitraan)**<br>**2. Foto Spot Seksi Artikel Filosofi Teh Ginastel (Kiri Bawah)**<br>**3. Background / Banner Kemitraan** | Menampilkan koleksi lengkap belasan cup GiNăSTel bersama teko blirik tradisional & radio klasik.<br>**Alt Text:** `Koleksi Lengkap Menu dan Paket Kemitraan Es Teh Ginastel 082322228006` |

> **Catatan Teknis Crop/CSS untuk Foto Produk:**
> Karena foto asli memiliki *footer banner* merah bertuliskan `"Informasi Kemitraan Hubungi : 0823 2222 8006"` di bagian bawah dan *logo badge* di bagian atas, gunakan properti CSS `object-fit: cover; object-position: center 45%;` pada bingkai foto kartu menu agar fokus tampilan langsung mengarah secara proporsional ke bagian *cup* minuman.

---

## 4. Spesifikasi Struktur Halaman & 4 Tab Utama (Section-by-Section)

### 4.1. Sticky Header & Navigasi Atas (Navbar)
* **Logo Kiri:** Ikon + Teks **`Es Teh Ginastel`** (Kata *Es Teh* berwarna Tosca `#0D9488`, kata *Ginastel* berwarna Merah `#E11D48`).
* **Menu Navigasi Tengah (4 Tab Utama):**
  1. `Home` (Garis bawah aktif berwarna Tosca `#0D9488`)
  2. `Menu Minuman`
  3. `Order`
  4. `Kontak Kerja Sama`
* **Tombol Kanan Navbar:** Tombol kapsul merah (`#E11D48`) bertuliskan `Pesan Sekarang ↗` yang mengarah ke seksi `#order`.

---

### 4.2. TAB 1: HOME (`#home`)

#### A. Hero Section (2 Kolom)
* **Kolom Kiri (Teks & Konversi):**
  * **Badge Atas:** Lencana hijau tosca muda bertuliskan `🍃 RACIKAN TEH OPLOSAN ASLI SUKOHARJO & SOLO`.
  * **Judul Utama (`H1` SEO):**
    > **Es Teh <span style="color:#E11D48">Ginastel</span> – Legi, <span style="color:#0D9488">Segar</span>, dan Kentelnya Bikin Nagih!**
  * **Paragraf Pembuka (Deskripsi SEO):**
    > *"Cuaca terik bikin dahaga tak tertahankan saat beraktivitas atau kuliah? **Es Teh Ginastel** hadir menyajikan racikan teh oplosan khas Jawa (Legi, Panas, Pait, Sepet, Kentel) yang wangi melati dan manis alami dari 100% gula murni. BUKTIkan RASAnya sekarang!"*
  * **Tombol Aksi (CTA Group):**
    * Tombol 1 (Merah Penuh): `Order via Aplikasi ↗` (Menuju `#order`)
    * Tombol 2 (Garis Tepi Tosca): `Lihat Menu Minuman` (Menuju `#menu`)
  * **Poin Kepercayaan (Micro-copy bawah tombol):**
    * `✓ 100% Gula Asli` • `✓ Daun Teh Pilihan` • `✓ Tersedia di GoFood, ShopeeFood & GrabFood`
* **Kolom Kanan (Spot Foto Utama Hero):**
  * Menampilkan gambar `hero-teh-original.jpg` atau `koleksi-kemitraan-ginastel.jpg` dengan bingkai membulat `24px`.
  * **Floating Badge Kiri Atas:** `✨ Wangi Melati & Kentel`
  * **Floating Badge Kanan Bawah:** `🔥 BUKTIkan RASAnya!`

#### B. Value Proposition Section (`Bukan Sekadar Es Teh Biasa, Ini Racikan Juwara.`)
* Latar belakang seksi berwarna Tosca Sangat Muda (`#F0FDFA`).
* **Sub-label Atas:** `KENAPA HARUS ES TEH GINASTEL?`
* **Judul Seksi (`H2`):** `Bukan Sekadar Es Teh Biasa, Ini Racikan Juwara.`
* **Grid 3 Kartu Putih:**
  1. **Kartu 1 (Ikon Daun/Gula Tosca):** **Legi (Manis Alami 100% Gula Murni)** — Manis yang pas dan tidak meninggalkan rasa pahit atau gatal di tenggorokan karena dibuat tanpa pemanis buatan.
  2. **Kartu 2 (Ikon Es/Suhu Tosca):** **Panas Seduhannya, Segar Sajiannya** — Diseduh pada suhu didih optimal menggunakan teko tradisional untuk mengeluarkan aroma teh terbaik sebelum disajikan dingin.
  3. **Kartu 3 (Ikon Cangkir Merah):** **Pait, Sepet & Kentel (Tidak Hambar)** — Perpaduan teh oplosan asli Sukoharjo-Solo sehingga rasa teh tetap pekat dan mantap walau es batu mencair.

---

### 4.3. TAB 2: MENU MINUMAN (`#menu`)
* **Header Seksi:**
  * **Sub-label:** `KATALOG KESEGARAN`
  * **Judul (`H2`):** `Pilihan Menu Minuman Es Teh Ginastel`
  * **Sub-deskripsi:** `Tersedia dalam berbagai varian teh, buah, dan creamy dengan harga super ramah di kantong.`
* **Tombol Filter Kategori:** `Semua Menu` (Aktif - latar Tosca `#0D9488`), `Varian Klasik`, `Varian Segar Buah`, `Varian Creamy`.
* **Grid 6 Kartu Produk (3 Kolom x 2 Baris pada Desktop):**
  Setiap kartu menampilkan foto asli produk, *badge* di pojok kiri atas foto, label kategori, judul menu (`H3`), deskripsi, harga berwarna Merah (`#E11D48`), dan tombol penuh berwarna Hijau Tosca (`#0D9488`) bertuliskan **`Pesan Menu Ini ↗`**.

| Slot Kartu | Foto Spot yang Digunakan | Badge Pojok Kiri Atas | Kategori | Nama Menu (`H3`) | Harga |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Kartu 1** | `hero-teh-original.jpg` (Cup Batik) | `🔥 Best Seller` (Merah) | `VARIAN KLASIK` | **Es Teh Ginastel Original Jumbo** | **Rp 4.000** `/ cup` |
| **Kartu 2** | `menu-tiga-varian.jpg` (Fokus Cup Hijau/Trio) | `🍃 Khas Solo` (Tosca) | `VARIAN SEGAR & MATCHA` | **Es Teh Matcha & Jeruk Kampul** | **Rp 6.000** `/ cup` |
| **Kartu 3** | `hero-teh-original.jpg` (Zoom Detail Es Teh) | `🍋 Super Segar` (Tosca) | `VARIAN SEGAR BUAH` | **Es Lemon Tea Ginastel** | **Rp 6.000** `/ cup` |
| **Kartu 4** | `menu-teh-susu.jpg` (Cup Cokelat Creamy) | `⭐ Favorit` (Merah) | `VARIAN CREAMY` | **Es Teh Susu Ginastel (Milk Tea)** | **Rp 8.000** `/ cup` |
| **Kartu 5** | `menu-pink-creamy.jpg` (Cup Pink Creamy) | `✨ Manis Harum` (Tosca) | `VARIAN CREAMY` | **Es Pink Lava / Strawberry Milk Tea** | **Rp 8.000** `/ cup` |
| **Kartu 6** | `koleksi-kemitraan-ginastel.jpg` (Koleksi 12 Cup) | `🎉 Hemat Partai` (Merah) | `PAKET EVENT` | **Paket Acara Kampus & Himpunan (50 Cup)** | **Rp 175.000** `/ 50 cup` |

---

### 4.4. TAB 3: ORDER — 3 OPSI MERCHANT (`#order`)
* **Header Seksi:**
  * **Sub-label:** `PESAN ONLINE TANPA ANTRE` (Merah `#E11D48`)
  * **Judul (`H2`):** `Order Es Teh Ginastel di Merchant Favoritmu!`
  * **Deskripsi:** `Haus tapi mager keluar kos atau tempat kerja? Pilih aplikasi pesan-antar favoritmu di bawah ini dan tunggu kurir mengantar kesegaran GiNăSTel ke lokasimu.`
* **Grid 3 Kartu Merchant (GoFood, ShopeeFood, GrabFood):**
  1. **Kartu 1 — GoFood:**
     * Ikon & Judul Merah: `GoFood` | Badge: `Promo Ongkir & Paket Hemat`
     * Sub-judul (`H3`): `Pesan via GoFood`
     * Status: `🟢 Buka Setiap Hari (09.00 - 21.00 WIB)`
     * Tombol CTA (Merah `#E11D48`): **`Buka GoFood Sekarang ↗`**
  2. **Kartu 2 — ShopeeFood:**
     * Ikon & Judul Oranye-Merah: `ShopeeFood` | Badge: `Voucher Diskon Pengguna`
     * Sub-judul (`H3`): `Pesan via ShopeeFood`
     * Status: `🟢 Buka Setiap Hari (09.00 - 21.00 WIB)`
     * Tombol CTA (Oranye-Merah `#EE4D2D`): **`Buka ShopeeFood Sekarang ↗`**
  3. **Kartu 3 — GrabFood:**
     * Ikon & Judul Hijau: `GrabFood` | Badge: `Pengiriman Cepat & Terjadwal`
     * Sub-judul (`H3`): `Pesan via GrabFood`
     * Status: `🟢 Buka Setiap Hari (09.00 - 21.00 WIB)`
     * Tombol CTA (Hijau `#00B14F`): **`Buka GrabFood Sekarang ↗`**
* **Banner Horizontal Bawah Merchant (Latar Hijau Tosca `#0D9488`):**
  * Teks Kiri: `📦 Pesan lebih dari 30 cup? Dapatkan harga khusus acara kampus, rapat, dan Jumat Berkah plus gratis ongkir!`
  * Tombol Kanan (Putih, Teks Tosca): `Pesan Partai Besar via WA ↗` (Mengarah ke WhatsApp `0823 2222 8006`).

---

### 4.5. TAB 4: KONTAK KERJA SAMA (`#kerjasama`)
* Latar belakang seksi berwarna Tosca Sangat Muda (`#F0FDFA`).
* **Header Seksi:**
  * **Sub-label:** `PELUANG BISNIS & KOLABORASI`
  * **Judul (`H2`):** `Kontak Kerja Sama & Kemitraan Es Teh Ginastel`
  * **Deskripsi:** `Ingin membuka booth Es Teh GiNăSTel di kotamu, mengajukan kerja sama sponsorship acara kampus, atau memesan konsumsi partai besar? Mari berkolaborasi bersama kami!`
* **Layout 2 Kolom:**
  * **Kolom Kiri (3 Poin Keunggulan Kerja Sama & Kontak Resmi):**
    1. **Kemitraan Booth / Franchise Terjangkau:** Paket usaha siap jualan lengkap dengan *booth*, teko seduh tradisional, racikan teh asli Sukoharjo, dan dukungan promosi `@ginastelofficial`.
    2. **Konsumsi & Sponsorship Acara Kampus / Sekolah:** Penyediaan ratusan *cup* untuk seminar, pentas seni, wisuda, dan kegiatan mahasiswa dengan harga spesial.
    3. **Suplai Warung Makan & Katering:** Kerja sama suplier teh ginastel untuk rumah makan dan katering lokal.
    * **Detail Kontak Resmi:**
      * 📍 **Asal & Area Layanan:** Asli Sukoharjo – Solo Raya, Jawa Tengah.
      * 📞 **Hotline Kemitraan (WA):** `0823 2222 8006`
      * 📱 **Media Sosial Resmi:** `@ginastelofficial` (Instagram, TikTok, Facebook: `Ginastel Official`)
  * **Kolom Kanan (Kartu Putih Formulir Interaktif `Mari mulai kerja sama`):**
    * Field 1: `Nama Lengkap / Instansi` (Input Text)
    * Field 2: `Nomor WhatsApp Aktif` (Input Tel)
    * Field 3: `Jenis Kerja Sama` (Dropdown: *Kemitraan Booth / Franchise*, *Pesanan Acara Kampus / Himpunan*, *Sponsorship Event*, *Suplai Katering / Warung*)
    * Field 4: `Pesan / Detail Lokasi` (Textarea)
    * Tombol Submit (Merah Penuh `#E11D48`): **`Kirim Pengajuan Kerja Sama via WhatsApp ↗`** (Otomatis mengirim isi form ke nomor WA `6282322228006`).

---

### 4.6. Seksi Artikel Edukasi SEO & Footer Bawah
* **Seksi Artikel SEO (2 Kolom di Atas Footer):**
  * **Kolom Kiri (Spot Foto Artikel):** Menampilkan foto `koleksi-kemitraan-ginastel.jpg` (tampilan teko blirik hijau-putih, daun teh, gula batu, dan koleksi varian cup GiNăSTel).
  * **Kolom Kanan (Konten Artikel SEO):**
    * Sub-label: `EDUKASI & FILOSOFI KULINER`
    * Judul (`H2`): `Mengenal Filosofi Teh Ginastel Khas Solo & Sukoharjo: Rahasia Seduhan Teh yang Legi, Panas, Pait, Sepet, dan Kentel`
    * Isi: 2 paragraf yang memuat kata kunci target SEO (*es teh ginastel*, *teh oplosan khas solo sukoharjo*, *kemitraan es teh ginastel*, *pesan es teh acara kampus*) untuk memperkuat skor *On-Page SEO*.
* **Footer (Latar Tosca Tua `#115E59`, Teks Putih):**
  * **Kolom 1:** Logo `Es Teh Ginastel`, slogan **`LEGI, PANAS, PAIT, SEPET, KENTEL.`**, dan alamat singkat Sukoharjo - Solo Raya.
  * **Kolom 2 (`Navigasi Utama`):** `Home`, `Menu Minuman`, `Order`, `Kontak Kerja Sama`.
  * **Kolom 3 (`Pesan Online & Sosmed`):** `GoFood`, `ShopeeFood`, `GrabFood`, serta Instagram & TikTok `@ginastelofficial`.
  * **Copyright Bawah:** `© 2026 Es Teh GiNăSTel Official. All Rights Reserved.`

---

## 5. Kebutuhan Teknis SEO, Simulasi SEM & KPI (Checklist Tugas)

1. **Meta Tags & Google Search Console:**
   * `<title>Es Teh Ginastel Asli Sukoharjo & Solo: Legi, Segar, Kentel | GoFood, ShopeeFood, GrabFood</title>`
   * Menyertakan `<meta name="description">` yang memuat kata kunci utama dan nomor kemitraan `0823 2222 8006`.
   * Menyertakan tag `<meta name="google-site-verification" ... />` pada `<head>` dan file `sitemap.xml` di *root folder*.
2. **Simulasi SEM & Perhitungan 3 KPI:**
   * Setiap klik pada tombol *merchant* (**GoFood, ShopeeFood, GrabFood**) dan tombol **Kemitraan WA** dicatat sebagai simulasi konversi untuk menghitung metrik:
     $$\text{CTR} = \frac{\text{Klik}}{\text{Tayangan}} \times 100\%$$
     $$\text{CPC} = \frac{\text{Biaya Iklan}}{\text{Jumlah Klik}}$$
     $$\text{ROAS} = \frac{\text{Pendapatan}}{\text{Biaya Iklan}} \times 100\%$$