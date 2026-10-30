# Cpase Svelte 5 (Bahasa Indonesia)

Proyek demonstrasi kelas Cpase yang dibangun dengan **Svelte 5 (Runes)**. Semua teks antarmuka pengguna (UI) menggunakan **Bahasa Indonesia**.

Berdasarkan [todomvc Spec](https://raw.githubusercontent.com/tastejs/todomvc/refs/heads/master/app-spec.md) resmi dari proyek induk **[tastejs/todomvc](https://github.com/tastejs/todomvc)** — referensi implementasi standar untuk membandingkan kerangka kerja (framework) MV*.

## Teknologi yang Digunakan

| Alat               | Kegunaan                                                      |
| ------------------ | ------------------------------------------------------------- |
| **Svelte 5**       | Framework UI (reaktivitas berbasis Runes)                     |
| **Vite+ (vp)**     | CLI toolchain terpadu (server dev, build, test, lint, format) |
| **Vitest 5**       | Framework unit testing                                        |
| **daisyUI 5**      | Perpustakaan komponen untuk Tailwind CSS                      |
| **Tailwind CSS 4** | Framework CSS berbasis utility                                |
| **TypeScript 6**   | Pengecekan tipe statis                                        |
| **Bun 1.4**        | Manajer paket dan runtime                                     |

## Mengapa Svelte 5?

### Dibandingkan Vanilla HTML/CSS/JS

Vanilla cocok untuk demo kecil, tetapi membutuhkan pengaturan manual untuk event DOM, pembaruan status, dan sinkronisasi localStorage. Svelte menangani reaktivitas secara deklaratif — lebih sedikit kode boilerplate, lebih sedikit bug, dan lebih mudah diajarkan.

### Dibandingkan React

React sangat bagus tetapi memiliki beban konsep yang lebih besar (hooks, array dependensi useEffect, memoisasi, rekonsiliasi virtual DOM). Untuk Cpase di kelas, rune `$state`, `$derived`, dan `$effect` milik Svelte lebih langsung dan mudah dibaca bagi pemula.

### Dibandingkan Vue

Vue mirip dengan Svelte, tetapi Svelte menghilangkan framework pada saat build — paket yang dikirimkan hanya berisi kode yang kamu gunakan, sehingga hasilnya lebih kecil. Sintaks rune Svelte juga sangat mirip dengan variabel JavaScript biasa, sehingga lebih mudah dipelajari.

### Keunggulan Utama untuk Pembelajaran

- **Reaktivitas waktu kompilasi**: Tidak ada runtime virtual DOM; siswa melihat JS biasa di devtools.
- **Svelte 5 Runes**: Reaktivitas eksplisit (`$state`, `$derived`, `$effect`) membuat aliran data menjadi jelas.
- **Komponen file tunggal**: Markup, logika, dan gaya berada dalam satu file `.svelte`.
- **Ukuran kecil**: Framework dikompilasi keluar; hanya kode aplikasi kamu yang dikirim ke browser.

## Apa itu Vite?

**Vite** adalah alat build frontend dan server dev yang cepat. Vite menggunakan modul ES asli saat pengembangan (start-up sangat instan) dan Rollup/Rolldown untuk build produksi.

## Apa itu Vite+?

**Vite+ (vp CLI)** adalah toolchain terpadu untuk web. Ia menggabungkan Vite, Vitest, Oxlint, Oxfmt, Rolldown, tsdown, dan Vite Task ke dalam satu CLI. Alih-alih mengelola banyak file konfigurasi, cukup gunakan `vp dev`, `vp build`, `vp test`, dan `vp check`.

## Apa itu Bun?

**Bun** adalah runtime JavaScript/TypeScript dan manajer paket yang sangat cepat. Bun menginstal dependensi dengan cepat dan menjalankan TypeScript secara asli.

## Perintah

```bash
bunx vp dev       # Menjalankan server pengembangan
bunx vp build     # Membuat build produksi
bunx vp preview   # Pratinjau hasil build produksi
bunx vp test      # Menjalankan pengujian (test)
bunx vp check     # Pengecekan lint + format
bunx vp fmt .     # Merapikan format kode
```

## Struktur Proyek

```
src/
├── components/   → Komponen UI Svelte (Header, TodoList, TodoItem, Footer)
├── lib/          → Tipe data dan store Svelte 5
│   ├── types.ts
│   └── todoStore.svelte.ts
├── main.ts       → Titik masuk aplikasi (mengimpor app.css)
├── app.css       → Pengaturan Tailwind + daisyUI
└── index.html    → File HTML utama
docs/             → Dokumentasi pembelajaran
```

## Referensi Induk

Proyek ini mengikuti spesifikasi **[tastejs/todomvc](https://github.com/tastejs/todomvc)** sebagai ide umum dan referensi perilaku aplikasi. Teks UI diterjemahkan ke dalam Bahasa Indonesia untuk kebutuhan kelas.
