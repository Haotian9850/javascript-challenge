//change background of hover
const triggers = document.querySelectorAll('a');

//make highlight
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightlink(){
    console.log(this);
    const linkCoords = this.getBoundingClientRect();    //give the coordinate on the page
    console.log(linkCoords);

    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.screenX
    }

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;

    //utilize transform property
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightlink));

