# Mengenal Kode: Panduan Pemula untuk Proyek "Cpase"

Selamat datang di proyek "Cpase"! Dokumen ini dibuat khusus untuk membantu kamu memahami apa saja yang ada di dalam aplikasi ini, mulai dari konsep dasar hingga cara kerjanya.

Kita tidak akan menggunakan istilah teknis yang rumit. Mari kita bahas satu per satu!

---

## 1. Apa itu "Cpase"?

Cpase adalah aplikasi daftar tugas (_To-Do List_). Sederhananya, ini adalah tempat untuk mencatat hal-hal yang perlu kamu lakukan, menandainya saat selesai, dan menghapusnya jika sudah tidak dibutuhkan.

## 2. Konsep Utama

Bayangkan aplikasi ini seperti **meja kerja**. Ada tiga bagian utama:

1.  **Status Tugas (`$state`)**: Ini adalah "kertas catatan" di meja kamu. Jika kamu menulis tugas baru atau mencoret tugas yang selesai, kertas ini berubah. Aplikasi harus tahu setiap perubahan ini. Di Svelte, kita menggunakan simbol khusus `$state` agar aplikasi selalu "sadar" kapanpun catatan di kertas itu berubah.
2.  **Hasil Perhitungan (`$derived`)**: Ini adalah "tabel ringkasan". Misalnya, kamu ingin tahu berapa banyak tugas yang masih tersisa. Kamu tidak perlu menghitung manual setiap kali ada tugas baru; aplikasi menghitungnya secara otomatis dari daftar tugas yang ada. Kita sebut ini `$derived` (sesuatu yang dihitung dari data lain).
3.  **Tindakan Otomatis (`$effect`)**: Ini adalah "asisten". Misalnya, setiap kali kamu menambah tugas, asisten ini secara otomatis menyimpan daftar tersebut ke dalam memori komputer (`LocalStorage`) agar tidak hilang saat kamu menutup browser. Kita sebut ini `$effect` (sesuatu yang terjadi sebagai akibat dari perubahan lain).

---

## 3. Cara Kerja (Langkah demi Langkah)

1.  **Membuat Tugas**: Kamu mengetik tugas di kotak input. Aplikasi menyimpan input tersebut ke dalam daftar (`$state`).
2.  **Menampilkan Daftar**: Aplikasi melihat daftar tersebut dan membuatkan baris-baris tampilan di layar.
3.  **Memperbarui Status**: Jika kamu mengklik tanda centang, aplikasi mengubah status tugas menjadi "selesai".
4.  **Menyimpan**: Setiap ada perubahan, "asisten" (`$effect`) akan langsung menyimpan daftar tugas terbaru ke memori browser.

---

## 4. Gambaran Singkat (Visual)

```text
[Data Asli] ---> (Dihitung) ---> [Tampilan di Layar]
  (Tugas)        ($derived)         (Berapa sisa tugas?)

[Data Asli] ---> (Simpan)   ---> [Ingatan (LocalStorage)]
  (Tugas)        ($effect)         (Tersimpan selamanya)
```

---

## 5. Yang Perlu Diperhatikan

- **Jangan Mengubah Data Langsung di Dalam Asisten (`$effect`)**: Ini kesalahan umum yang bisa membuat aplikasi bingung dan mengulang terus menerus. Gunakan `$effect` hanya untuk urusan luar (seperti menyimpan ke browser), bukan untuk mengubah data tugas itu sendiri.
- **Satu Sumber Data**: Ingat, daftar tugas (`$state`) adalah "sumber kebenaran". Semua tampilan lain di layar hanyalah cara aplikasi menampilkan data tersebut.

## 6. Contoh Kode Sederhana

Beginilah cara kita menulis kode untuk tugas tersebut:

```svelte
<script>
	// Membuat tempat penyimpanan tugas
	let tugas = $state([]);

	// Menghitung berapa tugas yang tersisa secara otomatis
	let sisa = $derived(tugas.filter((t) => !t.selesai).length);
</script>

<p>Sisa tugas: {sisa}</p>
```

---

_Selamat bereksperimen! Jangan takut mencoba merubah sesuatu. Jika aplikasi rusak, cukup segarkan (*refresh*) browser kamu._
