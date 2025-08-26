// Class Custom Erro -> Membuat error sendiri dengan mendifinisikan kelas yang mewarisi Error

let num =123

class CustomError extends Error{
    constructor(message){
        super(message)
        this.name = 'Pesan error cuy' // ini error name
    }
}

try {
    if(num == 123){
        throw new CustomError ('Num tidak boleh bernilai 123') // error messange, disini cuma mau lempar class aja bukan if-nya
    }
} catch(error){
    console.error(`Error: ${error.name}`)
}