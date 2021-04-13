const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')
//checking

// console.log('this is play',play);
//songs

const songs = ['BrownMunde','Champion','SmackThat']

//track of songs

let songIndex = 2

//load song info in DOM

loadSong(songs[songIndex])

//update song details

function loadSong(song){
    
    title.innerText = song
    audio.src = `music/${song}.mp3`
    cover.src = `images/${song}.jpeg`
}
function playSong(){
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fas').classList.remove('fa-play')
    playBtn.querySelector('i.fas').classList.add('fa-pause')
audio.play()
}
function pauseSong(){
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fas').classList.remove('fa-pause')
    playBtn.querySelector('i.fas').classList.add('fa-play')
    audio.pause()
}
function prevSong(){
    
songIndex--
if(songIndex < 0){
    songIndex = songs.length-1

}
loadSong(songs[songIndex])
playSong()
}
function nextSong(){
songIndex++
if(songIndex > songs.length-1){
    songIndex = 0

}
loadSong(songs[songIndex])
playSong()
}

function updateProgress(e){
    const {currentTime, duration} = e.srcElement
// console.log(e.srcElement.currentTime);
const progressPercent = (currentTime/ duration)*100
progress.style.width = `${progressPercent}%`
}
function setProgress(e){
    const width = this.clientWidth
    console.log(width);
    clickX = e.offsetX
    const duration = audio.duration
    audio.currentTime = (clickX/width)*duration
    console.log(clickX);
}
//event listner
playBtn.addEventListener('click',() =>{
    const isPlaying = musicContainer.classList.contains('play')
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})

//change song event

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

audio.addEventListener('timeupdate',updateProgress)
progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended',nextSong)
