# Crumble & Co. — Situs Web Toko Kue

Situs web sederhana untuk Crumble & Co. Bakery yang dibuat menggunakan HTML, CSS, dan JavaScript.

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
    └── gallery-1.jpg sampai gallery-4.jpg
```

## Cara menjalankan situs

1. Ekstrak berkas ZIP.
2. Buka folder proyek.
3. Klik dua kali `index.html` untuk membukanya di peramban.
4. Untuk pengembangan, Anda juga dapat menggunakan ekstensi Live Server di Visual Studio Code.

## Mengatur pemesanan melalui WhatsApp

1. Buka berkas `script.js`.
2. Cari baris `const WHATSAPP_NUMBER = "";`.
3. Isi dengan nomor WhatsApp bisnis menggunakan format internasional tanpa tanda `+`, spasi, atau tanda hubung. Contoh format Indonesia: `62812XXXXXXXX`.
4. Simpan berkas, lalu unggah perubahan ke GitHub.

Nomor WhatsApp tidak diisi otomatis karena harus menggunakan nomor resmi milik toko.

## Mengatur media sosial

Pada `index.html`, ubah alamat tautan `href="#"` untuk TikTok dan Instagram menjadi alamat akun resmi toko.

## Menerbitkan situs melalui GitHub Pages

1. Unggah seluruh isi folder proyek ke direktori utama (root) repositori GitHub.
2. Buka menu **Settings → Pages**.
3. Pada bagian **Build and deployment**, pilih **Deploy from a branch**.
4. Pilih cabang `main` dan folder `/ (root)`, kemudian klik **Save**.
5. Tunggu proses penerbitan selesai. Alamat situs akan ditampilkan pada halaman GitHub Pages.

## Catatan

- Semua gambar disimpan di dalam folder `images/`.
- Proyek ini tidak memerlukan kerangka kerja (framework) atau proses build tambahan.
- Jangan mengubah nama berkas gambar tanpa memperbarui alamat gambar di `index.html`.
