// 1. Objek Literal 
let mobil = {
  merk : `Toyota`,
  model : `Avanza`,
  tahun : 2025
}

console.log(mobil)

// 2. Objek Constructor
let buku = new Object()
buku.judul = `Belajar PHP`
buku.penulis = `PZN`
console.log(buku)

// Mengakses properti objek
// 1. Notasi titik
let mahasiswa = {
  nama : `Glen`,
  prodi : `Teknik Informatika`,
  tahunMasuk : 2023
}
console.log(mahasiswa.tahunMasuk)

// 2. Notasi kurung siku
console.log(mahasiswa[`prodi`])

// Menambah dan mengubah properti objek
// 1. Menambah properti
mahasiswa.email= `glen.tjbs@gmail.com`
console.log(mahasiswa)

// 2. Mengubah properti
mahasiswa.nama = `Zefanya`
console.log(mahasiswa)

// Menghapus properti objek
delete mahasiswa.email
console.log(mahasiswa)

// Nested Object
let kampus = { 
  nama : `Institut Teknologi Bandung`,
  fakultas : {
    nama : `Fakultas Teknik`,
    jurusan : `Teknik Informatika`
  }
}
console.log(kampus)

// Destructurig Object
let {nama} = mahasiswa
console.log(nama)