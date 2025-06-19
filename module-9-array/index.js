//1.  Notasi literal
let fruits = [`apple`, `banna`, `mango`]
console.log(fruits)

// 2. Araay constructor
let num = new Array (1,2,3,4,5)
console.log(num)

// mengakses elemen array
console.log(fruits[2])
console.log(num[1])

// mengubah elemen array 
fruits[3] = `strawberry`
fruits[0] = `orange`
console.log(fruits)

// manpulasi array  
let angka = new Array(1,2,3,4,5,6)
angka.push(7) // menambahkan elemen di akhir
console.log(angka)
angka.pop() // menghapus elemen di akhir
console.log(angka)
angka.shift() // menghapus elemen di awal
console.log(angka)
angka.unshift(9) // menambahkan elemen di awal
console.log(angka)


let angka2 = [7,8]
let angkaBaru = angka.concat(angka2)
console.log(`angka baru :`,angkaBaru) // menggabungkan dua array
console.log(angkaBaru.slice(2,5))  // mengambil sebagian array dari indeks 2 sampai 5
angkaBaru.splice(0,5,10) // menghapus 5 elemen dari indeks 0 dan menambahkan 10
console.log(`splice :`, angkaBaru)
console.log(`angka 7 ada di index :`,angkaBaru.indexOf(7)) // mencari indeks dari elemen 7
console.log(`angka 6 ada di array gk :`, angkaBaru.includes(6))


// Multidimensional Array
let matrix = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]

console.log(matrix)
console.log(matrix[1][2])