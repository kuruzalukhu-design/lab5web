// ==========================================
// LATIHAN 1: Menampilkan output
// ==========================================
document.getElementById("pesan").textContent = "Hello World";
console.log("Hello World");

// ==========================================
// LATIHAN 2: Alert dan prompt nama
// ==========================================
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
  alert("Halo, " + namaPengguna + "!");
  document.getElementById("pesan").textContent =
    "Selamat datang, " + namaPengguna + ".";
} else {
  alert("Nama belum diisi.");
}

// ==========================================
// LATIHAN 3: Function & Operasi Aritmetika
// (Dimodifikasi menerima input prompt & dikonversi ke number)
// ==========================================
function operasiDasar(a, b) {
  console.log("=== Hasil Operasi Dasar ===");
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

const inputA = Number(
  prompt("Masukkan nilai pertama (a) untuk operasi dasar:"),
);
const inputB = Number(prompt("Masukkan nilai kedua (b) untuk operasi dasar:"));
operasiDasar(inputA, inputB);

// ==========================================
// LATIHAN 4: Seleksi kondisi if-else (Nilai Mahasiswa)
// ==========================================
const inputNilai = prompt("Masukkan nilai (0–100):");
const nilaiMahasiswa = Number(inputNilai);
if (
  inputNilai === null ||
  inputNilai.trim() === "" ||
  Number.isNaN(nilaiMahasiswa) ||
  nilaiMahasiswa < 0 ||
  nilaiMahasiswa > 100
) {
  alert("Input nilai tidak valid.");
} else if (nilaiMahasiswa >= 60) {
  alert("Lulus");
} else {
  alert("Belum lulus");
}

// ==========================================
// LATIHAN 5: Seleksi kondisi switch (Angka 1-5)
// ==========================================
const inputPilihan = prompt("Masukkan angka 1–5:");
switch (inputPilihan) {
  case "1":
    alert("Bilangan satu");
    break;
  case "2":
    alert("Bilangan dua");
    break;
  case "3":
    alert("Bilangan tiga");
    break;
  case "4":
    alert("Bilangan empat");
    break;
  case "5":
    alert("Bilangan lima");
    break;
  default:
    alert("Pilihan tidak tersedia");
}

// ==========================================
// LATIHAN 6: Cek Bilangan Genap atau Ganjil (DOM Form)
// ==========================================
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}

// ==========================================
// LATIHAN 7: Mengubah warna latar halaman
// ==========================================
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}

// ==========================================
// LATIHAN 8: DOM dan checkbox menu makanan
// ==========================================
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}

// ==========================================
// EKSPERIMEN MANDIRI: Tabel Perkalian Angka 7 (1 sampai 10)
// ==========================================
console.log("=== Tabel Perkalian 7 ===");
for (let i = 1; i <= 10; i++) {
  console.log(`7 x ${i} = ${7 * i}`);
}
