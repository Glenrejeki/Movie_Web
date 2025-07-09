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


// Create function to generate faqData from array faqData 

function generateAccordionItems(faqData){
  faqData.forEach(item => {
    const accordionItem = document.createElement(`div`)


    accordionItem.classList(`accordion-item`)
  });
}