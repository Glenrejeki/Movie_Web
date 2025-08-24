// Inheritance Class -> membuat class baru yag mewarisi properti dan method dari class lain 


// extends -> membuat class
// super -> memanggil constructor dari class induk 

class Hewan {
    constructor(nama, jenis){
        this.nama = nama
        this.jenis = jenis 
    }
    makan (){
       return`${this.nama} sedang makan`
    }
}


class Kucing extends Hewan {
    constructor(nama, jenis, warna) {
        super ( nama, jenis) // disini memanggil constructor class induk
        this.warna= warna
    }
}

let Kitty = new Kucing ('Kitty', 'Kucig', 'Orange')
console.log(Kitty.makan())