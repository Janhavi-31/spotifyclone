console.log('Welcome to spotify');

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('spotify_clone/songs/1.mp3');
let masterPlay = document.getElementsById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    {songName: "Zindagi ek safar", filePath: "spotify_clone/songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Zindagi ek safar", filePath: "spotify_clone/songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Zindagi ek safar", filePath: "spotify_clone/songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Zindagi ek safar", filePath: "spotify_clone/songs/1.mp3", coverPath: "covers/1.jpg"}
]

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 0;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
})
//Listen to Events
myProgressBar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

})
