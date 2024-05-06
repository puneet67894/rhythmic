console.log("welcome to our music player");
let songIndex = 0;
let audioElement = new Audio('song1.mp3');
let Play = document.getElementById('Play');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let song = [
    {songName: "Born to Shine - Diljit Dosanjh", filePath:"song1.mp3",coverPath:"cover10.jpg"},
    {songName: "Satranga - Arijit singh", filePath:"song2.mp3",coverPath:"cover3.jpg"},
    {songName: "Udaarian - Satinder Sartaaj", filePath:"song3.mp3",coverPath:"cover2.webp"},
    {songName: "Tum se hi - Mohit Chauhan", filePath:"song4.mp3",coverPath:"cover4.jpg"},
    {songName: "Shape of you - Ed Sheeran", filePath:"song5.mp3",coverPath:"cover5.png"},
    {songName: "Closer -  Chainsmokers & Andrew Taggart", filePath:"song6.mp3",coverPath:"cover5.jpg"},
]

songItems.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;
})
//audioElement.Play();

//Handle play/pause click
Play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        Play.classList.remove('fa-circle-play');
        Play.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        Play.classList.remove('fa-circle-pause');
        Play.classList.add('fa-circle-play');
    }
})

//Listen to Events 
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
//Update Seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
myProgressBar.value = progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
            element.classList.remove('fa-circle-pause');
            element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        Play.classList.remove('fa-circle-play');
        Play.classList.add('fa-circle-pause');
    })
})


document.getElementById('next').addEventListners('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex +=1;
    }
    audioElement.src = `song${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Play.classList.remove('fa-circle-play');
    Play.classList.add('fa-circle-pause');
    


})

document.getElementById('previous').addEventListners('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    Play.classList.remove('fa-circle-play');
    Play.classList.add('fa-circle-pause');
    
})