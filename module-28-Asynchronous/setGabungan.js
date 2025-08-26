let timer = 0 
const interValid = setInterval(()=>{
    timer += 1
    console.log(`Timer : ${timer} detik`)
}, 1000)


setTimeout(()=> {
    clearInterval(interValid)
},5000)