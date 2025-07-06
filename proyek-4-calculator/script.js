const calculator = {
  displayValue : "0",
  firstOperand : null,
  operator : null, 
  waitingForSecondOperand : false,
 
}


// Halndle for input diplay calc

function updateDisplay(){

  // To update the input display
  const display = document.querySelector(".calculator-display") 
  display.value = calculator.displayValue

}


// Function to handle operator input    
function inputDigit(digit){

  // Get the value from the constructor / function in javascript
  const {displayValue, waitingForSecondOperand} = calculator

  if(waitingForSecondOperand === true){
    calculator.displayValue = digit
    calculator.waitingForSecondOperand = false
  } else {
    calculator.displayValue = displayValue === "0" ? digit :displayValue + digit
  }
  updateDisplay()
}


function inputDecimal(dot){
  if (!calculator.displayValue.includes(dot)){
    calculator.displayValue += dot
  }
}

// Function to handle operator input
function handleOperator (nextOperator){
  const {firstOperand, displayValue, operator} = calculator 

  //assgin statement to change string to the decimal number 
  const inputValue = parseFloat(displayValue)

  if (operator && calculator.waitingForSecondOperand){
    calculator.operator = nextOperator
    return
  }

  if(firstOperand == null && !isNaN(inputValue)){
    calculator.firstOperand = inputValue
  } else if (operator){
    const result = calculate(firstOperand, inputValue, operator)
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`
  }

  calculator.waitingForSecondOperand =  true
  calculator.operator = nextOperator
  updateDisplay()
}

function calculate (firstOperand, secondOperator, operator) {
  
  if(operator === "+"){
    return firstOperand + secondOperator
  } else if ( operator === "-") {
    return firstOperand - secondOperator
  } else if (operator === "*") {
    return firstOperand * secondOperator
  } else if (operator === "/") {
    return firstOperand / secondOperator
  } else if (operator === "√") {
    return Math.sqrt(firstOperand)
  } else if (operator === "%"){
    return firstOperand / 100
  }

  return secondOperator 

}

function resetCalculator(){
  calculator.displayValue = "0"
  calculator.firstOperand = null
  calculator.waitingForSecondOperand = false 
  calculator.operator = null
  updateDisplay()
}


function handleEqual(){
  const{firstOperand, displayValue, operator} = calculator
  const inputValue = parseFloat(displayValue)
  // Check if the operator is defined and if we are not waiting for the second operand
  if(operator && !calculator.waitingForSecondOperand){
    const result = calculate(firstOperand, inputValue, operator)
    calculator.displayValue = `${parseFloat(result.toFixed(7))}`
    calculator.firstOperand = null
    calculator.operator = null
    calculator.waitingForSecondOperand = false
    updateDisplay()
  }


}


// Event listener for button clicks
document.querySelector(".calculator-keys").addEventListener("click", (event)=> {
  const {target} = event 

  if (!target.matches("button")){
    return 
  }

  if (target.classList.contains("operator")){
    handleOperator(target.value)
    return
  }

  if (target.classList.contains("all-clear")){
    resetCalculator()
    return
  }

   if (target.classList.contains("equal-sign")){
    handleEqual()
    return
  }

  inputDigit(target.value)
})