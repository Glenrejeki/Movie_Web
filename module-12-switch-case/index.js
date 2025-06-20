const hari  = 8
let namaHari ;
switch (hari){
  case 1:
    namaHari =`Senin`
    break
  case 2:
    namaHari =`Selasa`
    break
  case 3:
    namaHari =`Rabu`
    break
  case 4:
    namaHari =`Kamis`
    break
  case 5:
    namaHari =`Jumat`
    break
  case 6:
    namaHari =`Sabtu`
    break
  case 7:
    namaHari =`Minggu`
    break
  default :
    namaHari = `Tidak valid harinya`
}

console.log(namaHari)

// Contoh kasus jika tidak ada break di switch case statement 

const hari2  = 5
let namaHari2 ;
switch (hari2){
  case 1:
    namaHari2 =`Senin`
    console.log(`HARI SENIN`)
  case 2:
    namaHari2 =`Selasa`
    console.log(`HARI SELASA`)
  case 3:
    namaHari2 =`Rabu`
    console.log(`HARI RABU`)
  case 4:
    namaHari2 =`Kamis`
    console.log(`HARI KAMIS`)
  case 5:
    namaHari2 =`Jumat`
    console.log(`HARI JUMAT`)
  case 6:
    namaHari2 =`Sabtu`
    console.log(`HARI SABTU`)
  case 7:
    namaHari2 =`Minggu`
    console.log(`HARI MINGGU`)
  default :
    namaHari2 = `Tidak valid harinya`
}

console.log(`Tanpa break :`,namaHari2)

// Operasi
let nilai = 100
switch (true){
  case nilai >= 90:
    console.log(`Grade : A`)
    break
  case nilai >= 80 : 
    console.log(`Grade : B `)
    break 
  case nilai >= 70 :
    console.log(`Grade : C `)
    break
  case nilai >= 60 : 
    console.log(`Grade : D`)
    break
  default : 
    console.log(`Grade : F`)
} 