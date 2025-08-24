// ES6 Classes

 class Mobil{
    constructor(merk, model,tahun){
        this.merk = merk
        this.model = model
        this.tahun = tahun
    }
    start(){
        console.log('Mobil dimulai')
    }
    info(){
        console.log(`Mobil : ${this.merk} ${this.model}`)
    }
 }

 let mobil1 = new Mobil ('Toyota', 'Avanza', 2021)
 let mobil2 = new Mobil ('Honda', 'Honda', 2025)

mobil1.info()
 