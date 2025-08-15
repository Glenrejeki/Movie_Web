// Array questions

const questions = [
    {
        question: "Apa kepanjangan dari IT Del?",
        answer: [
            { text: "Institut Teknologi Del", correct: true },
            { text: "Institut Teknologi Depok", correct: false },
            { text: "Institut Teknik Del", correct: false },
            { text: "Institut Teknologi Digital", correct: false }
        ]
    },
    {
        question: "IT Del terletak di provinsi mana?",
        answer: [
            { text: "Sumatera Utara", correct: true },
            { text: "Sumatera Barat", correct: false },
            { text: "Riau", correct: false },
            { text: "Aceh", correct: false }
        ]
    },
    {
        question: "Siapa pendiri IT Del?",
        answer: [
            { text: "Luhut Binsar Pandjaitan", correct: true },
            { text: "BJ Habibie", correct: false },
            { text: "Basuki Tjahaja Purnama", correct: false },
            { text: "Ridwan Kamil", correct: false }
        ]
    },
    {
        question: "Kapan IT Del didirikan?",
        answer: [
            { text: "2001", correct: true },
            { text: "2005", correct: false },
            { text: "1999", correct: false },
            { text: "2010", correct: false }
        ]
    },
    {
        question: "Apa moto IT Del?",
        answer: [
            { text: "MarTuhan, Marroha, Marbisuk", correct: true },
            { text: "Cerdas, Kreatif, Mandiri", correct: false },
            { text: "Ilmu untuk Negeri", correct: false },
            { text: "Teknologi untuk Semua", correct: false }
        ]
    },
    {
        question: "Kampus IT Del berada di dekat danau apa?",
        answer: [
            { text: "Danau Toba", correct: true },
            { text: "Danau Maninjau", correct: false },
            { text: "Danau Singkarak", correct: false },
            { text: "Danau Poso", correct: false }
        ]
    },
    {
        question: "Fakultas apa yang ada di IT Del?",
        answer: [
            { text: "Fakultas Informatika dan Teknik Elektro", correct: true },
            { text: "Fakultas Kedokteran", correct: false },
            { text: "Fakultas Hukum", correct: false },
            { text: "Fakultas Pertanian", correct: false }
        ]
    },
    {
        question: "Apa nama laboratorium komputer di IT Del?",
        answer: [
            { text: "Laboratorium Informatika", correct: true },
            { text: "Lab Pemrograman", correct: false },
            { text: "Lab Data Science", correct: false },
            { text: "Lab Desain", correct: false }
        ]
    },
    {
        question: "Program studi berikut yang ada di IT Del adalah...",
        answer: [
            { text: "Teknik Informatika", correct: true },
            { text: "Teknik Penerbangan", correct: false },
            { text: "Ilmu Kelautan", correct: false },
            { text: "Teknik Sipil", correct: false }
        ]
    },
    {
        question: "Apa bahasa pengantar utama di IT Del?",
        answer: [
            { text: "Bahasa Indonesia", correct: true },
            { text: "Bahasa Inggris", correct: false },
            { text: "Bahasa Batak", correct: false },
            { text: "Bahasa Mandarin", correct: false }
        ]
    },
    {
        question: "Dimana lokasi tepat kampus IT Del?",
        answer: [
            { text: "Laguboti, Toba", correct: true },
            { text: "Balige, Toba", correct: false },
            { text: "Medan", correct: false },
            { text: "Parapat", correct: false }
        ]
    },
    {
        question: "Apa fokus utama pendidikan di IT Del?",
        answer: [
            { text: "Teknologi dan Rekayasa", correct: true },
            { text: "Kedokteran dan Farmasi", correct: false },
            { text: "Pertanian dan Peternakan", correct: false },
            { text: "Bahasa dan Sastra", correct: false }
        ]
    },
    {
        question: "Siapa rektor IT Del per tahun 2025?",
        answer: [
            { text: "Prof. Robertus Pudyanto", correct: true },
            { text: "Ir. Luhut B. Pandjaitan", correct: false },
            { text: "Prof. Yohannes Sirait", correct: false },
            { text: "Prof. Andar Lumban Gaol", correct: false }
        ]
    },
    {
        question: "IT Del terkenal dengan fasilitas...",
        answer: [
            { text: "Asrama mahasiswa", correct: true },
            { text: "Pusat perbelanjaan", correct: false },
            { text: "Bandara pribadi", correct: false },
            { text: "Pantai pribadi", correct: false }
        ]
    },
    {
        question: "Berapa lama masa studi untuk program D4 di IT Del?",
        answer: [
            { text: "4 tahun", correct: true },
            { text: "3 tahun", correct: false },
            { text: "5 tahun", correct: false },
            { text: "2 tahun", correct: false }
        ]
    },
    {
        question: "IT Del memiliki program pertukaran pelajar dengan negara...",
        answer: [
            { text: "Jepang", correct: true },
            { text: "Brazil", correct: false },
            { text: "Arab Saudi", correct: false },
            { text: "Kanada", correct: false }
        ]
    },
    {
        question: "Simbol logo IT Del memiliki bentuk...",
        answer: [
            { text: "Buku terbuka dan gelombang", correct: true },
            { text: "Gunung dan matahari", correct: false },
            { text: "Pohon dan burung", correct: false },
            { text: "Roda gigi dan bintang", correct: false }
        ]
    },
    {
        question: "IT Del berada di bawah yayasan apa?",
        answer: [
            { text: "Yayasan Del", correct: true },
            { text: "Yayasan Pendidikan Toba", correct: false },
            { text: "Yayasan Teknologi Nasional", correct: false },
            { text: "Yayasan Teknokrat Indonesia", correct: false }
        ]
    },
    {
        question: "IT Del berdiri di area yang dulunya...",
        answer: [
            { text: "Lahan perkebunan", correct: true },
            { text: "Pabrik tekstil", correct: false },
            { text: "Gudang logistik", correct: false },
            { text: "Pabrik kayu", correct: false }
        ]
    },
    {
        question: "Apa tujuan utama IT Del?",
        answer: [
            { text: "Meningkatkan SDM di bidang teknologi", correct: true },
            { text: "Mencetak atlet berprestasi", correct: false },
            { text: "Mengembangkan pariwisata", correct: false },
            { text: "Memproduksi barang industri", correct: false }
        ]
    }
];


let currentQuestionIndex = 0 
let score = 0 

// Get all element by "ID"
const questionContainer = document.getElementById('question-container')
const questionELement = document.getElementById('question')
const answerBtn = document.getElementById('answer-button')
const nextBtn = document.getElementById('next-btn')
const resultContainer = document.getElementById('result-container')
const scoreElement = document.getElementById('score')
const restartBtn = document.getElementById('restart-btn')


// Function to start quizz
function startQuizz(){
    currentQuestionIndex = 0 
    score = 0
    nextBtn.style.display = 'none'   
    questionContainer.style.display = 'block'
    resultContainer.style.display = 'none' // ⬅️ Hide result container di awal
    scoreElement.style.display = 'none'    // ⬅️ Hide score text di awal

    // Function to show the question
    showQuestion()
}


function showQuestion(){
    resetState()
    const currentQuestion = questions[currentQuestionIndex]

    // Show text question (JANGAN LUPA)
    questionELement.textContent = currentQuestion.question

    // make button for the answer by dynanmicly 
    currentQuestion.answer.forEach(answer=> {
        const button = document.createElement('button')
        button.textContent = answer.text
        button.classList.add('answer-btn')
        if(answer.correct){
            button.dataset.correct = 'true'
        }
        button.addEventListener('click', selectAnswer)
        answerBtn.appendChild(button)
    })
}


function resetState(){
    nextBtn.style.display = 'none'
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct === 'true'
    if(correct){
        score++
        selectedButton.style.background = '#4caf50'
        
    } else{
        selectedButton.style.background = '#f823109a'
    }

    // Disable all button after select answer 
    Array.from(answerBtn.children).forEach(button=> {
        button.disabled = true
        if(button.dataset.correct){
            button.style.backgroundColor = '#4caf50'
        }
    })

    // Show next button if the question still exist 
    if(currentQuestionIndex < questions.length - 1){
        nextBtn.style.display = 'inline-block'
    } else {
        showResult()

    }



}

// To show the result 
function showResult(){
    questionContainer.style.display = 'none'
    resultContainer.style.display = 'block'
    scoreElement.style.display = 'block' // ⬅️ Show score text saat quiz selesai
    scoreElement.textContent = `Your score : ${score} / ${questions.length}`
}


// Handle eventListener next btn 
    nextBtn.addEventListener('click', ()=> {
        currentQuestionIndex++
        showQuestion()
})

// FIX: restart quiz
restartBtn.addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    questionContainer.style.display = "block";
    answerBtn.style.display = "block";
    resultContainer.style.display = "none";
    showQuestion();
});



startQuizz()