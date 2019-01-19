const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('This is console log!');


// Interpolated
console.log('This is a string %s logged out!', 'STRING_TARGET');
//ES6
const STRING_TARGET = "STRING_TARGET";
console.log(`This is a ${STRING_TARGET} in ES6 syntax`);

// Styled
console.log('%c I am some great text!', 'font-size: 29px;');    //font styling in console!

// warning!
console.warn('This is a console warning!');

// Error :|
console.error('This is a console error! ERROR!');

// Info
console.info('This is a console info!');

// Testing
console.assert(1 == 1, 'true statement, should never shown');
console.assert(1 == 2, 'false statement, this one should show!');   //throws Assertion failed error

// clearing
console.clear();    //console was cleared

// Viewing DOM Elements

// Grouping together
dogs.forEach(dog => {
    console.group(`${dog.name}`);
    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.groupEnd(`${dog.name}`);    //must specify; otherwise logged content will be nested
});

// counting
console.count('something');
console.count('something');
console.count('something');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/Haotian9850')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data');
        console.log(data);
    }); //will output time taken to fecth requested URL