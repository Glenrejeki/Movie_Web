let bilBulat = 12
let bilPecahan = 4.12
let bilNegatif = -1
let infinityValue = Infinity
let notANumber = NaN

console.log(bilBulat)
console.log(bilPecahan)
console.log(bilNegatif)
console.log(infinityValue)
console.log(notANumber)

// Properti yang ada pada objek number
// 1, Max Value
console.log(Number.MAX_VALUE)

// 2. Min value
console.log(Number.MIN_VALUE)

// 3. Positif Infinity
console.log(Number.POSITIVE_INFINITY)

//4. Negatif Infinitiy
console.log(Number.NEGATIVE_INFINITY)

// 5. NaN
console.log(Number.NaN)
console.log(0/0)

// Metode bawaan Number
// 1. toString() -> Mengubah angka menjadi string
let number = 723.9
let str = number.toString()
console.log(str, typeof str)

//2. toFixed() -> Mengambil angka bebarap belakang koma
let floating = 3.14159
console.log(floating.toFixed(3), typeof floating)

///3. toPrecision() -> Mengambil angka detail berapa buah, bukan berapa angka belakang koma
let float = 3.14289
console.log(float.toPrecision(3), typeof float)

// 4. parseInt() dan parseFloat() -> Mengubah string menjadi angka integer atau float

let str2 = `123`
let int = parseInt(str2)
console.log(int, typeof int)

let str3 = `1234.567`
let int2 = parseFloat(str3)
console.log(int2, typeof int2)