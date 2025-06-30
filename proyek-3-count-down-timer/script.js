//  Getting the HTML Element
const countDownElement = document.getElementById("countdown")
const daysElement = document.getElementById("days") 
const hourElement = document.getElementById("days") 
const minuteElement = document.getElementById("days") 
const secondsElement = document.getElementById("days") 

const inputHours = document.getElementById("inputHours")
const inputMinutes = document.getElementById("inputMinutes")
const inputSeconds = document.getElementById("inputSeconds")


// varibel countdownInterval
let countdownInterval;


//function to start the timer 
function startTimer (){
  //Get the inpute values from the users
  let hours =  parseInt (inputHours.value) || 0
  let minutes =  parseInt (inputMinutes.value) || 0
  let seconds =  parseInt (inputSeconds.value) || 0


  // Convert the total time into seconds 
    let totalTimeInSeconds = hours * 3600 + minutes *60 + seconds


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
    const days = Math.floor(totalTimeInSeconds/8640)
    const hours = Math.floor(totalTimeInSeconds % 86400 *3600)
    const minutes = Math.floor(totalTimeInSeconds % 3600 * 60)
    const seconds = Math.floor(totalTimeInSeconds % 60)

    // Update the html element display 
    daysElement.textContent = days.toString().padStart(2,'0')
    hoursElement.textContent = days.toString().padStart(2,'0')
    minutesElement.textContent = days.toString().padStart(2,'0')
    secondsElement.textContent = days.toString().padStart(2,'0')


   }
   )
}