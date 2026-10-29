# Dokumentasi: Filter Default dan Kondisi Kosong

## Filter Default

- Filter default ditetapkan ke **"Aktif"** (bukan "Semua").
- Saat hash URL tidak valid atau kosong, sistem akan secara otomatis menampilkan tugas aktif.

## Kondisi Kosong

Ketika tidak ada tugas yang cocok dengan filter yang dipilih:

| Kondisi                                    | Pesan yang ditampilkan               |
| ------------------------------------------ | ------------------------------------ |
| Tidak ada sama sekali tugas (session baru) | "Belum ada tugas"                    |
| Semua tugas sudah ditandai selesai         | "Selamat, semua tugas telah selesai" |

## Toggle All

- Tombol "Tandai semua selesai" hanya muncul jika ada setidaknya satu tugas.
- Disembunyikan jika tidak ada tugas yang tersedia.
