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


// varibel countdownInterval
let countdownInterval;


//function to start the timer 
function startTimer (){
  //Get the inpute values from the users
  let days =  parseInt (inputDays.value) || 0;
  let hours =  parseInt (inputHours.value) || 0;
  let minutes =  parseInt (inputMinutes.value) || 0;
  let seconds =  parseInt (inputSeconds.value) || 0;


  // Convert the total time into seconds 
    let totalTimeInSeconds = days*86400 + hours * 3600 + minutes *60 + seconds


  // If no time is input, stop the function 
  if (totalTimeInSeconds <=0) {
    alert("Please enter a valid time !")
    return
  }

  // clear the input after timer starts
  inputHours.value = ``
  inputMinutes.value = ``
  inputSeconds.value = ``
 
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
    }

   }, 1000 // Miliseconds interval to update the timer every second
   )
}

// Add event listener to the start button 
startButton.addEventListener("click", ()=> {
  // Stop any running timer
  clearInterval(countdownInterval)
  // Start the timer 
  startTimer()
})