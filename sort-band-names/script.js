const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

const sortedBands = bands.sort(function(a, b){
    if(strip(a) > strip(b)){
        //works with both strings and numbers
        return 1;
    }else{
        return -1;
    }
});

console.log(sortedBands);

document.querySelector('#bands').innerHTML = sortedBands.
    map(band => `<li>${band}</li>`)
    .join('');

function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();  //insensitive reg. Must include trailling spaces!
}

