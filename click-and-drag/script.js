
const slider = document.querySelector('.items');
let isDown = false; //is mouse held down?

//will be assigned later in 
let startX;
let scrollLeft;

//attach listeners
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    console.log(startX);
    scrollLeft = slider.scrollLeft;

});

slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
    if(!isDown){
        return;
    }
    e.preventDefault(); //if hte event does not get explicitly handled, its default action shold not be taken as it normally would be
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3;    //how far have the mouse (while held down) devated from the initial clickdown location
    slider.scrollLeft = scrollLeft - walk;
});

