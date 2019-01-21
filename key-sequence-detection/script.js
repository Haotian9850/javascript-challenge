window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    console.log(pressed);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length); //get last len letters of array pressed
    console.log(pressed);

    //check
    if(pressed.join('').includes(secretCode)){   //convert to string
        console.log('Secret code detected!');
    }
}); //will log key anywhere within current window

const pressed = [];
const secretCode = 'haotian';   //sequence that needs to be detected

//trim array to length of secret code



