// List FAQ
const faqData = [
  {
    question: "Apa itu Number Guessing Game?",
    answer: "Number Guessing Game adalah permainan menebak angka secara acak antara 1 hingga 100."
  },
  {
    question: "Bagaimana cara bermainnya?",
    answer: "Masukkan angka tebakan kamu lalu klik tombol 'Submit Guess'. Sistem akan memberitahu apakah tebakan kamu terlalu tinggi, terlalu rendah, atau benar."
  },
  {
    question: "Bagaimana cara mengulang permainan?",
    answer: "Klik tombol 'Play Again' yang muncul setelah kamu berhasil menebak angka dengan benar."
  }
];

// Get accordion container 
const accordionContainer = document.getElementById(`accordion`)


// Create function to generate faqData from array faqData 

function generateAccordionItems(faqData){
  faqData.forEach(item => {
    const accordionItem = document.createElement(`div`)
    accordionItem.classList.add(`accordion-item`)


    //Create element for header 
    const header = document.createElement('button')
    header.classList.add('accordion-header')
    header.textContent = item.question

    // Create element for content 
    const content = document.createElement(`div`)
    content.classList.add(`accordion-content`)


    //Create element for paragraph 
    const contentText= document.createElement(`p`)
    contentText.textContent = item.answer

    // Insert element to html
    content.appendChild(contentText)
    accordionItem.appendChild(header)
    accordionItem.appendChild(content)

    // Add accordion item to accordion container 
    accordionContainer.appendChild(accordionItem)

  });
}


// call function generate faq
generateAccordionItems(faqData)



// get element acordion header 
const accordionHeaders = document.querySelectorAll('.accordion-header')


// Add EventListener
accordionHeaders.forEach(header => {
  header.addEventListener(`click`, ()=>{
    header.classList.toggle('active')

    const accordionContent = header.nextElementSibling

    if(header.classList.contains('active')){
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px'

      }else {
        accordionContent.style.maxHeight =0
      }

    accordionHeaders.forEach(otherHeader => {
      if(otherHeader != header && otherHeader.classList.contains('active')){
        otherHeader.classList.remove('active')
        otherHeader.nextElementSibling.style.maxHeight= 0
      }
    })
})
})