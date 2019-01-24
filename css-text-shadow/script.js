
const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100;   //100px

function shadow(e){
    console.log(e);
    const width = hero.offserWidth;
    const height = hero.offsetHeight;

    let {offsetX: x, offsetY: y} = e;   //ES6 destructure
    console.log(x, y);

    //normalize
    if(this !== e.target){
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    const xWalk = (x / width * walk) - (walk / 2);  //size of text shadow
    const yWalk = (y / height * walk) - (walk / 2); 

    console.log(xWalk, yWalk);

    //set text shadow
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 grey`;
}

hero.addEventListener('mousemove', shadow);