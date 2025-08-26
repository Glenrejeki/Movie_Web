//  membuat timer/ jam, menjalankan polling terhadap server, mengupdate secara berkala, seperti slideshow atau news ticker 

let timer = 0
const interValid = setInterval(()=> {
    timer += 1 
    console.log(`TImer : ${timer} detik`)

    if(timer == 5){
        clearInterval(interValid)
        console.log('Timer Berhenti')
    }
})

async function main() {
    try{
        const data = await checStock('Laptop')
        console.log(data)
    } catch(error){
        console.log(error)
    }
}