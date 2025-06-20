// Sintaks dasar
let age = 18

if (age >= 18){
  console.log(`Yout are eligble vote`)

}else {
  console.log(`You are not eligble to vote`)
}

// if else if 
let score = 75

if (score > 90){
  console.log(`Grade : A`)

} else if (score>=80){
  console.log(`Grade : B `)

} else if (score>=70){
  console.log(`Grade : C `)

}else if (score>=60 ){
  console.log(`Grade : D `)
} else {
  console.log(`Grade : F`)
}

// Nested if-else - > didalam if ada if lagi 
let num = 10
if(num > 0){
  if(num %2 == 0){
    console.log(`Nomor ini positif dan bilangan genap`)
  }else {
    console.log(`Nomor ini positif dan bilangan ganjil`)
  }
}else {
  console.log(`Number ini bilangan negatif `)
}