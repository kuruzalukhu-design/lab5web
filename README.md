Laporan Praktikum Pemrograman Web - Pertemuan 6
Topik: JavaScript Dasar dan Manipulasi HTML
Nama Repository: Lab5Web

A. Tujuan Praktikum
Memahami sintaks dasar JavaScript dan cara menyisipkan file JavaScript eksternal pada dokumen HTML.
Menggunakan variabel (const, let), tipe data, operator aritmetika & perbandingan, percabangan (if-else, switch), perulangan (for), serta fungsi (function).
Menampilkan informasi melalui berbagai media seperti console.log(), alert(), prompt(), dan manipulasi elemen HTML (DOM).
Memanipulasi konten serta gaya (style) elemen HTML secara dinamis menggunakan JavaScript.
Membuat interaksi sederhana pada form HTML dan melakukan validasi input pengguna.

B. Perangkat dan File Kerja
Editor Kode: Visual Studio Code / Text Editor
Browser: Browser Modern (Google Chrome / Mozilla Firefox / Microsoft Edge)
Struktur File:
index.html — Berkas antarmuka HTML
script.js — Berkas logika dan instruksi JavaScript
README.md — Dokumentasi dan laporan praktikum

C. Langkah Kerja & Penjelasan Kode
1. Menampilkan Output dan Dialog Interaktif (Latihan 1 & 2)
Mengubah isi konten teks pada elemen <p id="pesan"> menggunakan properti textContent.
Menampilkan pesan log pada tab Console browser.
Meminta masukan nama pengguna melalui dialog prompt(). Jika nama diisi (contoh: "thema"), sistem menampilkan pesan sapaan via alert() dan memperbarui teks pada halaman HTML menjadi "Selamat datang, thema.".
2. Fungsi, Operasi Aritmetika, dan Konversi Input (Latihan 3 - Eksperimen Mandiri 1)
Membuat fungsi operasiDasar(a, b) untuk menghitung penjumlahan, pengurangan, perkalian, pembagian (dengan penanganan pembagian nol), dan modulus.
Nilai a dan b diambil secara dinamis dari pengguna menggunakan prompt() dan dikonversi secara eksplisit dari tipe data String menjadi Number menggunakan fungsi Number().
3. Seleksi Kondisi dan Validasi (Latihan 4 & 5)
If-Else (Kualifikasi Nilai): Meminta masukan nilai (0–100), melakukan validasi input (mengecek nilai null, string kosong, NaN, atau rentang luar 0-100), lalu menentukan status Kelulusan (Lulus jika nilai 60).
Switch-Case (Konversi Angka ke Kata): Meminta input angka 1–5 dari pengguna dan menampilkan output nama bilangan dalam bentuk dialog alert().
4. Manipulasi DOM & Event Handling (Latihan 6, 7, & 8)
Cek Bilangan Genap/Ganjil: Mengambil nilai dari elemen <input type="number">, menguji apakah masukan valid dan merupakan bilangan bulat (contoh memasukkan angka 27), kemudian menampilkan pesan "Bilangan ganjil".
Ubah Warna Latar: Memanggil fungsi ubahWarnaLatar(warna) melalui event onclick pada tombol untuk mengubah document.body.style.backgroundColor (contoh diubah menjadi warna hijau muda/lightgreen).
Kalkulasi Total Menu Makanan: Memasang Event Listener (change) pada elemen <input type="checkbox" class="menu">. Saat pengguna mencentang/melepas centang menu, fungsi hitungTotal() akan menghitung total harga dan menampilkannya dalam format mata uang lokal (id-ID).
5. Perulangan (Eksperimen Mandiri 7)
Menggunakan perulangan for dari i=1 hingga i=10 untuk mencetak tabel perkalian angka 7 secara otomatis pada Console browser.

D. Cara Menjalankan Program
Buka folder kerja Lab5Web pada komputer Anda.
Pastikan file index.html dan script.js berada dalam satu direktori yang sama.
Jalankan file index.html menggunakan browser pilihan Anda.
Jawab prompt dialog interaktif yang muncul di browser saat halaman dimuat.
Untuk melihat hasil keluaran console.log() (seperti Operasi Dasar dan Tabel Perkalian 7):
Klik kanan pada halaman web  Pilih Inspect (atau tekan F12 / Ctrl+Shift+I).
Pindah ke tab Console.

E. Tangkapan Layar (Screenshot) Hasil Pengujian

Deskripsi Hasil Pengujian Antarmuka Web:
Latihan 2 (Prompt Nama): Teks header menampilkan ucapan "Selamat datang, thema." hasil input dari dialog prompt.
Latihan 6 (Cek Genap/Ganjil): Input angka 27 diproses dan berhasil menampilkan teks "Bilangan ganjil".
Latihan 7 (Ubah Warna Latar): Pengujian tombol "Latar Hijau" berhasil mengubah latar belakang seluruh halaman dokumen menjadi warna hijau muda (lightgreen).
Latihan 8 (Kalkulasi Total Menu): Tampilan daftar menu makanan menggunakan checkbox berjalan sesuai dengan nilai awal total Rp0.

F. Referensi
Flanagan, D. (2020). JavaScript: The Definitive Guide (7th ed.). O’Reilly Media.
MDN Web Docs. JavaScript Guide. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide
Rencana Pembelajaran Semester (RPS) Pemrograman Web, Pertemuan 6: JavaScript dasar — variabel, tipe data, operator, percabangan, perulangan, dan function.
