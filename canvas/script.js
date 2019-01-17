const canvas = document.querySelector('#draw');

//draw on context. A context can be 2D or 3D
const ctx = canvas.getContext('2d');

//resize canvas to width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round'; //end of line
ctx.lineCap = 'round';  //intersection of two lines
ctx.lineWidth = 29;    //set drawing line width

let isDrawing = false;  //flag of mouse clicking / holding
let lastX = 0;
let lastY = 0;  //last X / Y

function draw(e){

    if(!isDrawing){
        return;
    }
    console.log(e); //only executing while mouse is held down and moving
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    /*
    lastX = e.offsetX;
    lastY = e.offsetY;
    */
    //es6 trick
    [lastX, lastY] = [e.offsetX, e.offsetY];
    
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    //prevent new line from starting from where the last line ends
    [lastX, lastY] = [e.offsetX, e.offsetY];
    //manipulating line color
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ++ hue;
    //line width can also be changed on-the-go
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);   //so that only holding the mouse will trigger event





