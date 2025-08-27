document.getElementById('addBtn').addEventListener('click', async ()=>{
    const mathOperaton = await import('./math.js')
    const result = mathOperaton.add(5,3)
    console.log(result)
})

document.getElementById('subtractBtn').addEventListener('click', async ()=>{
    const mathOperaton = await import('./math.js')
    const result = mathOperaton.subtract(4,1)
    console.log(result)
})