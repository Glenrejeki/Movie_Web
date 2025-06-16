// mengubah tipe data ke tipe data lain

// Implisit -> Dilakukan otomatik oleh JavaScript selama operasi tertentu

// Eksplisit -> Dilakukan secara manual oleh programmer

let result = 10  + "20"
let result2 = 10 * "20"
let result3 = 10  - "20"
console.log(result, typeof result)
console.log(result2, typeof result2)
console.log(result3, typeof result3)

// falsy value -> Nilai yang dianggap false dalam konteks boolean (0, "", null, undefined, NaN  )
let boolean = !0
let boolean2 = !!""
let boolean3 = !!null
let boolean4 = !undefined
console.log(boolean, typeof boolean)  
console.log(boolean2, typeof boolean2)  
console.log(boolean3, typeof boolean3)  
console.log(boolean4, typeof boolean4)



// Eksplisit
let num = 100
let num2 = 20
let str3 = "70.55"
let str = String(num)
let str2  = num2.toString()
let num3 = parseFloat(str3)
console.log(str, typeof str)
console.log(str2, typeof str2)
console.log(num3, typeof num3)