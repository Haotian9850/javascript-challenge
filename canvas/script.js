const canvas = document.querySelector('#draw');

//draw on context. A context can be 2D or 3D
const ctx = canvas.getContext('2d');

//resize canvas to width
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round'; //end of line
ctx.lineCap = 'round';  //intersection of two lines

let isDrawing = false;  //flag of mouse clicking / holding
let lastX = 0;
let lastY = 0;  //last X / Y

function draw(e){
    console.log(e);
    if(!isDrawing){
        return;
    }
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);   //so that only holding the mouse will trigger event





