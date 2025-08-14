// Get element from the DOM 
const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

const brushBtn = document.getElementById('brush')
const eraserBtn = document.getElementById('eraser')
const clearBtn = document.getElementById('clear')
const colorPickerBtn = document.getElementById('colorPicker')

// set canvas 
canvas.width = 800
canvas.height = 500

// Variable to store state of the tools 
let painting = false
let erasing = false 
let currentCollor = '#000000'
let lineWidth = 5

// Function to startPainting 
function startPosition (e){
    painting = true
    draw(e) // function to draw on canvas 
}

// function to stop painting 
function endPosition(e){
    painting = false
    ctx.beginPath () // start new path
}

// Function to draw on canvas 
function draw (e){
    if (!painting) return

    ctx.lineWidth = lineWidth
    ctx.lineCap = 'round'
    ctx.strokeStyle = erasing ? '#ffffff' : currentCollor

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY- canvas.offsetTop)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo (e.clientX - canvas.offsetLeft, e.clientY- canvas.offsetTop)
}

// Selection button
function selecBrush (){
    erasing = false
    brushBtn.classList.add('active')
    eraserBtn.classList.remove('active')

}

function selectEraser () {
    erasing = true
    eraserBtn.classList.add('active')
    brushBtn.classList.remove('active')

}

function changeColor(e){
    currentCollor = e.target.value
}

function clearCanvas(){
  ctx.clearRect(0,0, canvas.width, canvas.height)
}

// Add eventListener to  each tool 
brushBtn.addEventListener('click', selecBrush)
eraserBtn.addEventListener('click', selectEraser)
clearBtn.addEventListener('click', clearCanvas)
colorPickerBtn.addEventListener('input', changeColor)

canvas.addEventListener('mousedown', startPosition)
canvas.addEventListener('mouseup', endPosition)
canvas.addEventListener('mousemove', draw)