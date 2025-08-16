 // Get the audio, if exist from local storage 

 let playlist = JSON.parse(localStorage.getItem('playlist')) || []

 // Get elemen from DOM "ID"
 const audio = document.getElementById('audio')
 const playIcon = document.getElementById('play-icon')
 const playlistElement = document.getElementById('playlist')
 const pauseIcon = document.getElementById('pause-icon')
const progressBar = document.getElementById('progress-bar')  /* ✅ FIXED id name */
 const audioUpload = document.getElementById('audio-upload')
 const currentTrack = document.getElementById('current-track')
 const playPauseBtn = document.getElementById('play-pause')


// Function to make list audio
function createPlaylist(){
    playlistElement.innerHTML = ''
    playlist.forEach((track, index)=> {
        const li = document.createElement('li')
        li.textContent = track.title
        li.dataset.src =track.src

        li.addEventListener('click',()=> {
            audio.src= track.src
            audio.load()
            audio.play()
            updatePlayPauseIcon()

            document.querySelectorAll('#playlist li ').forEach(item => item.classList.remove('active'))


            li.classList.add('active')

            currentTrack.textContent = track.title
        } )

        playlistElement.appendChild(li)
    })
}


// Function to update play and pause
function updatePlayPauseIcon(){
    if(audio.paused){
        playIcon.style.display = 'block'
        pauseIcon.style.display = 'none'
    } else {
        playIcon.style.display = 'none'
        pauseIcon.style.display = 'block'
    }
}

// Function to save playlist to local storage 
function savePlaylist(){
    localStorage.setItem('playlist', JSON.stringify(playlist))
}

// Insialisasi playlist
createPlaylist()

// Event Listener updload audio
audioUpload.addEventListener('change', (event)=> {
    const files = Array.from(event.target.files)
    files.forEach(file => {
        const reader = new FileReader()
        reader.onload = function(e){
            const track = {
                title : file.name, 
                src : e.target.result
            }
            playlist.push(track)
            
            // Pindahkan blok kode ini ke atas pemanggilan createPlaylist()
            // agar lagu pertama bisa diatur sebelum playlist dibuat ulang.
            if(playlist.length === 1){
                audio.src = track.src;
                audio.load();
                currentTrack.textContent = track.title;
                // audio.play(); // Jangan langsung di-play di sini
                // updatePlayPauseIcon(); // Jangan di-update di sini
            }

            createPlaylist()
            savePlaylist()
            
            // Pindahkan logika play dan update icon ke sini
            // setelah DOM (daftar playlist) sudah diperbarui
            if(playlist.length === 1){
                 audio.play(); // Play secara otomatis
                 updatePlayPauseIcon(); // Perbarui ikon
            }

        }
        reader.readAsDataURL(file)
    })
})


// Event listener to play pause 
playPauseBtn.addEventListener('click', ()=> {
    if(!audio.src){
        alert("Pilih lagu dulu dari playlist")
        return
    }
    if (audio.paused){
        audio.play()
    } else {
        audio.pause()
    }
    updatePlayPauseIcon()
})


// Update progress bar when audio is play
audio.addEventListener('timeupdate', ()=>{
    if(audio.duration){
    const progress = (audio.currentTime / audio.duration)* 100
    progressBar.style.width = progress + '%'
    }
})


// Reset when the audio end 
audio.addEventListener('ended' , ()=> {
    updatePlayPauseIcon()
    progressBar.style.width = '0'
    playIcon.style.display='block'
    pauseIcon.style.display = 'none'
})