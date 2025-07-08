  // Get Element HTML
  const carouselSlide= document.querySelector(`.carousel-slide`) // contariner for all image
   
  const carouselImages = document.querySelectorAll(`.carousel-slide img`)

  const prevBtn = document.querySelector(`.prev-btn`)
  const nextBtn = document.querySelector(`.next-btn`)

  const indicators = document.querySelectorAll(`.indicator`)

  let currentIndex = 0 // state curent index
  const totalImages= carouselImages.length

  let autoSlideInterval ; // Variable to save interval for auto slide

  function updateCarousel(){
    carouselSlide.style.transform = `translateX(${-currentIndex * 100}%)`

    // update active indicators 
    indicators.forEach((indicators, index)=> {

      indicators.classList.toggle(`active`, index == currentIndex)
    }
    )

  }

  function nextSlide (){
    currentIndex = (currentIndex  + 1 ) % totalImages
    updateCarousel()
    // resetAutoSlide()
  }

  function prevSlide (){
    currentIndex = (currentIndex  -1 + totalImages  ) % totalImages
    updateCarousel()
    // resetAutoSlide()
  }


  function resetAutoSlide(){
     clearInterval(autoSlieInterval)

     autoSlieInterval = setInterval(nextSlide, 5000)
  }


  // Add evetListener for next 
  nextBtn.addEventListener(`click`,nextSlide )
  // Add evetListener for prev
  prevBtn.addEventListener(`click`,prevSlide)
  



