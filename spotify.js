console.log("welcome to our music player");
let songIndex = 0;
let Play = document.getElementById('Play');

//audioElement.Play();

//Handle play/pause click
Play.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
       
        Play.classList.add('fa-circle-pause');
    }
    else{
     
        Play.classList.remove('fa-circle-pause');
        Play.classList.add('fa-circle-play');
    }
})

//Listen to Events 

//Update Seekbar