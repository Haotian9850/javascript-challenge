//toggle: change class names


const panels = document.querySelectorAll('.panel');    //returns a node list

function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
    console.log(e.propertyName);    //echoes out what is being transitioned
    if(e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    }
    this.classList.toggle('open-active');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));   //toggle action
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive)); 