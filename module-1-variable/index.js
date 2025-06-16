// kalau var = bisa diakses luar scopes dan nilai bisa diubah

if(true){
  var nama = "Glen"

}
console.log("Nama mahasiswa : ",nama)

// let = tidak bisa diakses luar scopes dan nilai bisa diubah, bisa tidak di inisialisasi

if (true){
  let sekolah = "IT Del"
  console.log("Nama Kampus : ",sekolah)
}


//const = tidak bisa diakses luar scopes , nilai tidak bisa diubah, dan harus di inisialisasi

if (true){
  const kota="Batam"
  // kota= "Medan" ini akan error karena nilai tidak bisa diubah
  console.log("Kota asal :", kota)
}