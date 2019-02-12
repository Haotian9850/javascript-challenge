const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');   //don't need node list!
const nav = document.querySelector('.top');

function handleEnter(){
    console.log('handleEnter!');

    this.classList.add('trigger-enter');
    //time lap: 150ms
    setTimeout(() => {
        if(this.classList.contains('trigger-enter')){
            this.classList.add('trigger-enter-active'); 
        }
    }, 150);    //arrow function preserves value of this!

    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');

    //take coordinates
    const dropdownCoords = dropdown.getBoundingClientRect();
    console.log(dropdownCoords);

    const navCoords = nav.getBoundingClientRect();

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handleLeave(){
    console.log('handleLeave!');
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseover', handleEnter));
triggers.forEach(triggers => triggers.addEventListener('mouseleave', handleLeave));

