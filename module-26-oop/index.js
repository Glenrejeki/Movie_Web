// Dasar OOP
let mobil = {
//  key : value
    merek : 'Toyota', // gabungan key dan value disebut properti 
    model : 'Avanza',
    tahun : 2021,

    start:function (){ // gabungan key dan value seperti ini disebut method (function)
        console.log('Mobil dimulai')
    },

    info : function(){
        console.log(`Mobil ini merek ${this.merek}, tahun ${this.tahun}, dan namanya adalah ${this.model}`)
    }
}

mobil.info()


// Constructor Function 
function Mobil (merek, model, tahun){
      this.merek = merek
      this.model = model
      this.tahun = tahun


      this.mulai = function (){
        console.log('Mobil dimulai')
      }

      this.informasi = function (){
        console.log(`Mobil:${this.merek} ${this.model} ${this.tahun}`)
      }
}

let Mobil1 = new Mobil('Toyota', 'Fortuner', 2021)
let Mobil2 = new Mobil('Ferari', 'Lamborgini', 2025)

console.log(Mobil1)
Mobil1.informasi()


// Prototypal Inheritance 
function orang(nama, jenis ){
    this.nama = nama
    this.jenis = jenis
}

function makanan (nama, harga) {
    this.namaMakanan = nama
    this.harga = harga
}

orang.prototype.makan = function (makanan){
    console.log(`${this.nama} makan ${makanan.namaMakanan} dengan harga ${makanan.harga}`)
}

let youtuber = new orang('Alfachri')
let Nasgor = new makanan ('Nasi Goreng', 2000)

youtuber.makan(Nasgor)