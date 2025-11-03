let nilaiSiswa = [80, 75, 90, 60, 85, 70];

console.log("Nilai Siswa:", nilaiSiswa);

let total = nilaiSiswa.reduce((a, b) => a + b, 0);
let rataRata = total / nilaiSiswa.length;
console.log("Rata-rata Nilai:", rataRata);

let nilaiLulus = nilaiSiswa.filter(nilai => nilai >= 75);
console.log("Nilai ≥ 75:", nilaiLulus);

nilaiSiswa.push(95);
console.log("Setelah tambah nilai:", nilaiSiswa);

let index = nilaiSiswa.indexOf(60);
if (index !== -1) {
  nilaiSiswa.splice(index, 1);
}
console.log("Setelah hapus nilai 60:", nilaiSiswa);

console.log("Data akhir:", nilaiSiswa);