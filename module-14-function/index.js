// Sintaks dasar 
function sapaPengguna(nama){
  console.log(`Halo, ${nama} !`)

}

function sapaSemua(){
  console.log(`Halo semuanya`)
}


// cari menjalankannnya 
sapaPengguna(`Glen`)
sapaSemua()

// Parameter & argumen
function tambah(a, b){ // parameter adalah a & b
  console.log(a+b)
}

tambah(3,5) // argumen adalah 3 dan 5


// return statement - > mengembalikan nilai dengan return. Setelah return statement diekskusi, function tidak akan diekskusi 
function kuadrat (number){
  return number*number
  console.log(`Hallo dunia`)
}

console.log(kuadrat(9))

// kecuali pakai if else 

function kubik(angka){
  if (angka> 0){
    return angka* angka * angka
  } else {
    console.log(`Angka negatif tidak kami kubikkan `)
  }
}

kubik(-15)
