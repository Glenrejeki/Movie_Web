// For Loop
for (let i = 1; i <= 5; i++){
  console.log(`Iterasi ke-${i}`)
}

// While loop
let y = 1 
while (y<=5){
  console.log(`While loop ke-${y}`)
  y++
}

// Do while loop 
let z = 6
do {
  console.log(`Do while loop ke-${z}`)
  z++
}while (z<=5)


  // For-In 
const object = {nama : `Zefanya`, umur:19}
for (let properti in object){
  console.log(properti) // ini manggil nama objeknya aja
  console.log(object[properti ]) // ini manggil nilai si objek 
}

// For-of Loop
let sum = 0 
const array = [10, 2, 3, 4, 5]
for ( let nilai of array){
  sum = sum + nilai
}
console.log(`Pejumlahan array :`,sum)