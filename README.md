# Crumble & Co. — Bakery Website

Website statis untuk Crumble & Co. Bakery, dibuat menggunakan HTML, CSS, dan JavaScript.

## Struktur folder

```text
crumble-and-co/
├── index.html
├── style.css
├── script.js
├── README.md
└── images/
    ├── hero.jpeg
    ├── about.jpeg
    ├── cookies.jpeg
    ├── brownies.jpeg
    ├── nastar.jpeg
    ├── cheese-stick.jpeg
    ├── palmier.jpeg
    └── gallery-1.jpg ... gallery-4.jpg
```

## Menjalankan website

Buka `index.html` di browser, atau gunakan ekstensi Live Server di Visual Studio Code.

## Konfigurasi pemesanan WhatsApp

1. Buka `script.js`.
2. Cari `const WHATSAPP_NUMBER = "";`.
3. Isi dengan nomor WhatsApp bisnis menggunakan format internasional tanpa `+`, spasi, atau tanda hubung. Contoh format Indonesia: `62812XXXXXXXX`.
4. Simpan dan unggah ulang file.

Nomor WhatsApp tidak diisi otomatis karena harus menggunakan nomor resmi milik pemilik toko.

## Konfigurasi media sosial

Pada `index.html`, ubah atribut `href="#"` pada tautan TikTok dan Instagram menjadi URL akun resmi toko.

## Publikasi dengan GitHub Pages

1. Unggah isi folder proyek ini ke root repository GitHub.
2. Buka **Settings → Pages**.
3. Pada **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu proses publikasi selesai. GitHub akan menampilkan URL website pada halaman Pages.

## Catatan

- Semua gambar lokal disimpan di folder `images/`.
- Tidak menggunakan framework atau proses build tambahan.
- Pastikan nama file gambar di folder `images/` tidak diubah tanpa memperbarui referensi di `index.html`.
