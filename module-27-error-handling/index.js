// Try - Catch - Finnaly -> Menjalankan kode jika  terjadi error 
let number = 123

try {
    console.log(number)
} catch(error){
    console.error(`Error Terjadi : ${error.name}`)
} finally {
    console.log('Ini akan selalu dinjalankan')
}

// Throw
let angka = 123

try {
    if(angka == 123){
        throw new Error('Nomor 123 tidak diperbolehkan')
    }
    console.log(angka)
} catch (error){
    console.error(`Error terjadi : ${error.message}`)
} finally {
    console.log('Program selalu berjalan')
}

function devide(a,b){
    if(b == 0){
        throw new Error ('Pembagian dengan nol tidak diperbolehkan ')
    } 
    return a/b
}

try {
    devide(10,0)
} catch (error){
    console.log(`Error : ${error.message}`)
}