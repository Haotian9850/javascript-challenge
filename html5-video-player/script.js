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

function handleRangeUpdate(){
    //control video sound and playback rate (intrinsic video properties)
    video[this.name] = this.value;
}

function handleProgress(){
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;    //run when video emits a timeUpdate / progress event
}

function scrub(e){
    console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;   //a percentage, need to be multiplied by video duration
    video.currentTime = scrubTime;  //change video property
}

//add event listeners
video.addEventListener('click', togglePlay);    //play / pause video when clicking on video
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

//toggle button
toggle.addEventListener('click', togglePlay);

//skip function
skipButtons.forEach(button => button.addEventListener('click', skip));

//control
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));

//progress bar: listen click event on progress bar, move video to corresponding progress
progressBar.addEventListener('click', scrub);

//handle dragging
let mouseDown = false;
//dragging action
progress.addEventListener('mouse', scrub);
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e));   //order matters!
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);





