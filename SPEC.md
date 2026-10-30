# Spec: Implementasi Cpase Svelte

## Tujuan

Membangun aplikasi Cpase standar menggunakan Svelte 5 (Runes) sebagai bahan demonstrasi kelas. Semua teks UI harus menggunakan **Bahasa Indonesia**. Implementasi ini mematuhi spesifikasi resmi [Cpase Spec](https://raw.githubusercontent.com/tastejs/todomvc/refs/heads/master/app-spec.md).

## Teknologi yang Digunakan

- **Framework**: Svelte 5 (Runes)
- **Toolchain**: Vite+ (vp CLI, Vitest 5, Oxfmt, Oxlint)
- **Styling**: Tailwind CSS v4
- **Bahasa**: TypeScript 6
- **Manajer Paket**: Bun 1.4

## Perintah

- **Server Dev**: `bunx vp dev`
- **Build**: `bunx vp build`
- **Lint & Format**: `bunx vp check` / `bunx vp check --fix`
- **Test**: `bunx vp test`

## Struktur Proyek

```
src/
├── components/       → Komponen UI Svelte (Header, TodoList, TodoItem, Footer)
├── lib/
│   ├── types.ts          → Model data Todo dan tipe Filter
│   └── todoStore.svelte.ts → Status reaktif berbasis Svelte 5 Rune dan persistensi localStorage
├── main.ts           → Titik masuk aplikasi
├── app.css           → Gaya Tailwind CSS
└── index.html        → File HTML utama
docs/                 → Dokumentasi kelas dan penjelasan fitur
```

## Gaya Kode & Konvensi

- Gunakan Svelte 5 Runes (`$state`, `$derived`, `$effect`, `$props`)
- Bahasa Indonesia untuk semua string UI (misalnya, "Apa yang perlu dilakukan?", "semua", "aktif", "selesai", "Bersihkan yang selesai")
- Komit harus kecil, atomik, dan inkremental.

## Pemetaan Bahasa UI (Bahasa Indonesia)

| Cpase Standar (EN)         | Indonesian (UI)             |
| -------------------------- | --------------------------- |
| "todos" (Header)           | "Cpase"                     |
| "What needs to be done?"   | "Apa yang perlu dilakukan?" |
| "items left" / "item left" | "tugas tersisa"             |
| "All"                      | "Semua"                     |
| "Active"                   | "Aktif"                     |
| "Completed"                | "Selesai"                   |
| "Clear completed"          | "Hapus yang selesai"        |
| "Toggle All"               | "Tandai semua selesai"      |

## Strategi Pengujian

- Unit test untuk manajemen status menggunakan Vitest (`src/lib/todoStore.test.ts`)
- Integration test untuk interaksi Cpase.

## Batasan

- **Selalu lakukan**: Menulis test sebelum komit, memperbarui dokumentasi di `docs/` setelah menyelesaikan fitur, membuat komit kecil yang inkremental.
- **Tanya dahulu**: Sebelum menambah dependensi baru atau mengubah konfigurasi framework.
- **Jangan lakukan**: Mencampur bahasa Inggris ke dalam teks UI, membuat komit monolitik yang raksasa.

## Kriteria Sukses

1. Kepatuhan penuh dengan spesifikasi Cpase (filter hash, pengeditan, toggling, menghapus yang selesai, persistensi localStorage).
2. Semua string UI diterjemahkan ke Bahasa Indonesia dengan akurat.
3. Setiap fitur memiliki dokumentasi yang sesuai di `docs/`.
4. Komit inkremental yang mewakili langkah logis.
5. `bunx vp check`, `bunx vp test`, dan `bunx vp build` berjalan lancar.

## Pertanyaan Terbuka

- Tidak ada saat ini.
