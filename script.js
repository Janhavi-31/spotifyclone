console.log('Welcome to spotify');

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('spotify_clone/songs/1.mp3');
let masterPlay = document.getElementsById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "spotify_clone/songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "spotify_clone/songs/2.mp3", coverPath: "covers/1.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "spotify_clone/songs/3.mp3", coverPath: "covers/1.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "spotify_clone/songs/4.mp3", coverPath: "covers/1.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "spotify_clone/songs/5.mp3", coverPath: "covers/1.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "spotify_clone/songs/6.mp3", coverPath: "covers/1.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "spotify_clone/songs/7.mp3", coverPath: "covers/1.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "spotify_clone/songs/8.mp3", coverPath: "covers/1.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "spotify_clone/songs/9.mp3", coverPath: "covers/1.jpg"},
    {songName: "abcd - Salam-e-Ishq", filePath: "spotify_clone/songs/9.mp3", coverPath: "covers/1.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByTagName('songName')[0].innerText = songs[i].songName;
})
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
audioElement.addEventListener('timeupdate', ()=>{
   
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach(()=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        masterSongName.innerText = songs[songIndex].songName;
        songindex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = 'songs/${index+1}.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
      
     
    }
    audioElement.src = 'songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
})