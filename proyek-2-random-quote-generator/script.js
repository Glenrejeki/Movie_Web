// Array that stores a list of quotes and their authors
const quotes = [
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay"
  },
  {
    text: "Life is what happens when you're busy making other plans.",
    author: "John Lennon"
  },
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson"
  },
  {
    text: "Everything you’ve ever wanted is on the other side of fear.",
    author: "George Addair"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Dream big and dare to fail.",
    author: "Norman Vaughan"
  },
  {
    text: "You miss 100% of the shots you don’t take.",
    author: "Wayne Gretzky"
  },
  {
    text: "Whether you think you can or you think you can’t, you’re right.",
    author: "Henry Ford"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    text: "Start where you are. Use what you have. Do what you can.",
    author: "Arthur Ashe"
  },
  {
    text: "I can and I will. Watch me.",
    author: "Carrie Green"
  },
  {
    text: "Don’t wait for opportunity. Create it.",
    author: "Unknown"
  },
  {
    text: "Success doesn’t come to you, you go to it.",
    author: "Marva Collins"
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs"
  },
  {
    text: "Do something today that your future self will thank you for.",
    author: "Sean Patrick Flanery"
  }
];


// Ambil Element html lewat id mereka
const quoteText = document.getElementById("quote")
const quoteAuthor = document.getElementById("author")
const newQuote = document.getElementById("new-quote")
 

// Function to generate a random quote 
function generateQuote (){
  // Get a random index from the quote array 
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]

  // Update the quote text and author in the element html 
  quoteText.textContent = `"${randomQuote.text}"`
  quoteAuthor.textContent = `"${randomQuote.author}"`
}


// Add eventListner for the button 

newQuote.addEventListener("click", generateQuote)


// Call generate quote when page first loaded
generateQuote()