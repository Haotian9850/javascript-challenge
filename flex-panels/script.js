
const panels = document.querySelectorAll('.panel');    //returns a node list

function toggleOpen(){
    this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));   //toggle action