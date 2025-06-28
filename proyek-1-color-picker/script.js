document.getElementById("colorInput").
addEventListener("input", function(event){

  // ambil warna dari input
  let selectedColor = event.target.value


  // update si text color
  document.getElementById("colorCode").textContent = selectedColor 


  // Update background color dari kotak display
  document.getElementById("colorDisplay").style.backgroundColor = selectedColor
})
