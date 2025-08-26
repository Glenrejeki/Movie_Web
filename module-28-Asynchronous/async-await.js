/*
1. Menangani operasi Asynchronous scr lebih bersih 
2. Mewakili keberhasilan atau kegagaln suatu operasi Asynchronous
 */
dssdsdasd

function checkStock(product){
    return new Promise((resolve, reject)=> {
        console.log(`Checking stock ${product}`)

        // simulasi mengecek stok (butuh  2 detik)
        setTimeout(()=> {
            const stockAvailable = false

            if(stockAvailable){
                resolve(`${product} is available in stock`)
            } else {
                resolve (`${product} is out of stock`)
            }
        })
    })
}

as