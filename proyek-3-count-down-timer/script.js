//  Getting the HTML Element
const countDownElement = document.getElementById("countdown")
const daysElement = document.getElementById("days") 
const hoursElement = document.getElementById("hours") 
const minutesElement = document.getElementById("minutes") 
const secondsElement = document.getElementById("seconds") 

const inputDays = document.getElementById("inputDays")
const inputHours = document.getElementById("inputHours")
const inputMinutes = document.getElementById("inputMinutes")
const inputSeconds = document.getElementById("inputSeconds")
const startButton = document.getElementById("startButton")
const stopPauseButton = document.getElementById("stopPauseButton")
const resetButton =document.getElementById("resetButton")


// varibel countdownInterval
let countdownInterval;
let totalTimeInSeconds = 0; // Simpan total waktu dalam detik 
let isPaused = false; // Mendakan apakah tiemr sedang dijeda 


//function to start the timer 
function startTimer (){
  // Clear any existing interval to prevent mutliple timers running 
  clearInterval(countdownInterval)

  // Declare  time variables
  let days = 0 ;
  let hours = 0 ;
  let minutes = 0;
  let seconds = 0;

  // If not pause get the input values from the user
  if(!isPaused){
    //Get the inpute values from the users
    let days =  parseInt (inputDays.value) || 0;
    let hours =  parseInt (inputHours.value) || 0;
    let minutes =  parseInt (inputMinutes.value) || 0;
    let seconds =  parseInt (inputSeconds.value) || 0;

    
    
    // Convert the total time into seconds & make the variable global 
   totalTimeInSeconds = days*86400 + hours * 3600 + minutes *60 + seconds


   // Input just to make sure the user has entered a valid time
    inputDays.value = ""
    inputHours.value = ``
    inputMinutes.value = ``
    inputSeconds.value = ``
  }



  // If no time is input or the time has run out, stop the function 
  if (totalTimeInSeconds <=0) {
    alert("Please enter a valid time or start a new timer !")
    resetTimerDisplay()// reset the display if time is zero
    stopPauseButton.textContent ="Pause Timer"
    isPaused = false; // reset the pause state
    return
  }

  //Set isPaused to false and update button Text 
  isPaused = false;
  stopPauseButton.textContent = "Pause Timer"


  // clear the input after timer starts
  if(totalTimeInSeconds >0 && !isPaused){ // Only clear inputts if the timer is not paused 
    inputDays.value = ""
    inputHours.value = ``
    inputMinutes.value = ``
    inputSeconds.value = ``
  }
 
  // Function to update the time display every seconds 
   countdownInterval = setInterval(() => {
    // calculate remaining days, hours, minutes, and seconds 
    const days = Math.floor(totalTimeInSeconds/86400)
    const hours = Math.floor(totalTimeInSeconds % 86400 /3600)
    const minutes = Math.floor(totalTimeInSeconds % 3600 / 60)
    const seconds = Math.floor(totalTimeInSeconds % 60)

    // Update the html element display 
    daysElement.textContent = days.toString().padStart(2,'0')
    hoursElement.textContent = hours.toString().padStart(2,'0')
    minutesElement.textContent = minutes.toString().padStart(2,'0')
    secondsElement.textContent = seconds.toString().padStart(2,'0')

    // Decrease the total time by one seconds 
    totalTimeInSeconds --;

    // Stop the timeer when if the time runs out 
    if(totalTimeInSeconds < 0){
      clearInterval(countdownInterval)
      alert("Time's up !")
      isPaused = false ; // Reset pause state 
      resetTimerDisplay()
    }

   }, 1000 // Miliseconds interval to update the timer every second
   )
}

// Function to pause/resume the timer 
function togglePauseResume (){
  if (isPaused) {
    // If curently paused, resume the timer 
    startTimer()
    stopPauseButton.textContent= "Pause Timer"
  }else{
    // If curently runing, pause the timer 
    clearInterval(countdownInterval)
    isPaused = true;
    stopPauseButton.textContent = "Resume Timer"

  }
}

// Function to reset the timer 
function resetTimer(){
  clearInterval(countdownInterval); // clear any running interval
  totalTimeInSeconds = 0;
  isPaused = false; // reset pause state 
  resetTimerDisplay(); // Update the display to show zero time
  stopPauseButton.textContent = "Pause Timer";

  inputDays.value = "" // clear input fields
  inputHours.value = ""
  inputMinutes.value = ""
  inputSeconds.value =""

}

function resetTimerDisplay(){
  daysElement.textContent = "00";
  hoursElement.textContent = "00";
  minutesElement.textContent = "00";
  secondsElement.textContent = "00";

}

// Add event listener to the start button 
startButton.addEventListener("click", ()=> {
  // Stop any running timer
  // clearInterval(countdownInterval)
  // Start the timer 
  startTimer()
})

// Add event listener to the stop/pause button
stopPauseButton.addEventListener("click", togglePauseResume)

//Add eventListener to reset button
resetButton.addEventListener("click", resetTimer)