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

function updateButton(){
    console.log('button updated');
    //changing button graphics
    const icon = this.paused ? '►' : '❚ ❚';  //pause / play icons
    console.log(this.paused);
    console.log(icon);
    toggle.textContent = icon;

}

function skip(){
    //快进 / 快退按钮
    console.log("this is skip function!");
    video.currentTime += parseFloat(this.dataset.skip);
}

//add event listeners
video.addEventListener('click', togglePlay);    //play / pause video when clicking on video
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

//toggle button
toggle.addEventListener('click', togglePlay);

//skip function
skipButtons.forEach(button => button.addEventListener('click', skip));
