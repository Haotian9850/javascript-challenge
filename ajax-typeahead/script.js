const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

var cities = []; //city array

//fetch: return a promise. overall returns data array
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));    //spread into array. put all 1000 cities into array cities 

console.log(cities);

function findMatch(wordToMatch, cities){
    return cities.filter(place => {
        //if city and state matches wordToMatch
        //cant use regex here...
        //create regex outisde...
        const regex = new RegExp(wordToMatch, 'gi');    //global (g) and insensitive (i)
        return place.city.match(regex) || place.state.match(regex); //match in both cities and state
    });
}

function displayMatches(){
    console.log(this.value);    //for testing
    //get search phrase
    
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);




