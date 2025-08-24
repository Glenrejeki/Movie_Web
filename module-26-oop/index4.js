// Enkapsulasi  -> membatasi akses ke properti dan method dari objek

class BankAccount {
    #balance
    constructor (owner, balance ){
        this.owner = owner 
        this.#balance = balance
    }
    getBalance(){
        console.log(`Saldo : ${this.#balance}`)
    }
}

let akunGlen = new BankAccount ('Glen', 2000)
akunGlen.getBalance()