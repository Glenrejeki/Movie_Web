// Tanggal dan waktu saat ini
let now = new Date();
console.log(now);

/// dengan string
let specifictDate = new Date("2024-01-01");
console.log(specifictDate);

// Dengan paramter ( tahun, bulan , hari, jam , menit, detik, milidetik )
let customDate = new Date (2024, 7 , 20 , 10 ,30)
console.log(customDate) 

// Mengambil tanggal dan waktu 
let today  = new Date()
console.log (today.getDate(), today.getMonth(), today.getFullYear())

// Mengatur tanggal dan waktu 
let hari = new Date()
hari.setFullYear(2026)
hari.setMonth(11) // bulan dimulai dari 0
hari.setDate(28)
console.log(hari)

// Perhitungan waktu dengan date object 
let startDate = new Date (2025, 6, 1, 10, 30)
let endDate = new Date (2025, 9, 12, 20, 30)

let dif = endDate - startDate
console.log(dif) // mili seccond

let difInDays = dif / (1000* 3600 * 24)
let fullDaysUp = Math.ceil(difInDays)
console.log(fullDaysUp) // hari