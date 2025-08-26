// Asynchronous - > membantu skip ke baris kode selanjutnya tanpa menghapus proses sebelumnya

console.log('start')
setTimeout(()=> {
    console.log("Ini kode Asynchronous")
}, 10000)
console.log('end')