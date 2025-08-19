 // Get the element of html that we nedd from "ID "
 const textToTypeElement = document.getElementById("text-to-type")
 const textToType = textToTypeElement.innerHTML.trim().split(/\s+/)
 const userInput = document.getElementById('user-input')
 const startBtn = document.getElementById('start-btn')
 const timeDisplay = document.getElementById('time')
 const wpmDisplay = document.getElementById('words-per-minute')

 //
 let startTime ;
 let timerInterval;


// Start test
function startTest(){
    startTime = new Date()
    userInput.value = ''
    userInput.focus()
    timerInterval = setInterval(updateTimer, 1000)
    textToTypeElement.innerHTML = textToType.map(word => `<span>${word}</span>`).join(' ') 
}

function updateTimer(){
    const currentTime = new Date()
    const elapsedTime = Math.floor((currentTime - startTime)/ 1000) // selisih waktu
    timeDisplay.innerHTML = elapsedTime
}

function calculateWPM(){
    const wordsTyped = userInput.value.trim().split(/\s+/).length
    const elapsedTime = Math.floor((new Date() - startTime)/1000)
    const minutes = elapsedTime/60
    const wpm = Math.floor(wordsTyped / minutes)
    wpmDisplay.innerHTML = wpm
}

function checkInput(){
    const typedText = userInput.value.trim().split(' ')
    const spans = textToTypeElement.querySelectorAll('span') 

    typedText.forEach((word, index) => {
        if(spans[index]){
            if(word === textToType[index]){
                spans[index].className = 'correct'
            } else {
                spans[index].className = 'incorrect'
            }
        }

    })

    //delete class if user delete test that already typed before 
    for(let i = typedText.length; i<spans.length; i++){
        spans[i].className = ''
    }

}

function stopTest(){
    clearInterval(timerInterval)
    calculateWPM()
}

// Add event listner 
startBtn.addEventListener('click', ()=> {
    startTest()
})

userInput.addEventListener('input', ()=>{
    checkInput()
    const typedText = userInput.value
    if(typedText.trim() === textToType.join(' ')){
        stopTest()
    }
})