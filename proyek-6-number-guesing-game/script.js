let randomNumber = Math.floor(Math.random()*100) + 1
let attemps =0


// console.log("🔢 Secret Random Number:", randomNumber);


// Get element html
const  guessInput = document.getElementById(`guessInput`)
const  guessButton = document.getElementById(`guessButton`)
const  message = document.getElementById(`message`)
const  restartButton = document.getElementById(`restartButton`)

// Function to check  
function checkGuess(){
  const userGuess = Number(guessInput.value)
  // After check user guess. attemps ++
  attemps++

  if(userGuess === randomNumber){
    message.textContent = `Congratulation you guess the number ${randomNumber} correctly in ${attemps} attemps`
    message.style.color = `#28a745`
    endGame()
  } else if(userGuess > randomNumber){
    message.textContent = `Too High ! Try Again`
    message.style.color = `#dc3545`
  } else if (userGuess < randomNumber) {
    message.textContent = `Too Low ! Try Again`
    message.style.color = `#007bff`
  }

  guessInput.value = `` // kenapa ini bermasalah 
  guessInput.focus()
}


function endGame(){
  guessInput.disabled=true
  guessButton.disabled= true
  restartButton.style.display = `inline`
}

function resetGame(){
  attemps = 0 
  randomNumber = Math.floor(Math.random()*100) + 1
  guessInput.disabled= false
  guessButton.disabled= false
  message.textContent = `Good Luck ! Start Guessing . . .`
  message.style.color = `#333333`
  restartButton.style.display = `none`
  guessInput.value = ``
  guessInput.focus()
}

// Add Event Listener 
guessButton.addEventListener(`click`, checkGuess )
restartButton.addEventListener(`click`, resetGame)
guessInput.addEventListener(`keydown`, function(event){
    if(event.key === `Enter`){
      checkGuess()
    }
  }
)
