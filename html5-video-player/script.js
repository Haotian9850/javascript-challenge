//retrieve element
const player = document.querySelectorAll('.player');
console.log(player);
const video = player[0].querySelector('.viewer');
console.log(video);

//get progress bar
const progress = player[0].querySelector('.progress');
const progressBar = player[0].querySelector('.progress__filled');
const toggle = player[0].querySelector('.toggle');
const skipButtons = player[0].querySelectorAll('[data-skip]');
const ranges = player[0].querySelectorAll('.player__slider');

function togglePlay(){
    //make video play or pause
    //video property: pause
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}