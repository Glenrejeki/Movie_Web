// Polymorphism - > Menggunakan method dgn nama yang sama pada objek yg berbeda 

class Hewan {
    bersuara(){
        console.log("Hewan ini bersuara")
    }
}

class Kucing extends Hewan{
    bersuara(){
        console.log('Miaw')
    }
}


class Anjing extends Hewan{
    bersuara(){
        console.log("Guk guk")
    }
}

let hewan1 = new Hewan()
let kucing1 = new Kucing()
let anjing1 = new Anjing()

hewan1.bersuara()
kucing1.bersuara()
anjing1.bersuara()