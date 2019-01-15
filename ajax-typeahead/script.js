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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches(){
    console.log(this.value);    //for testing
    //get search phrase
    const matchArr = findMatch(this.value, cities);
    console.log(matchArr);
    const html = matchArr.map(place => {
        //highlight matching search phrase
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="h1">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join(''); //make it return a big string instead of an multi-element array
    suggestions.innerHTML = html; //display suggestion list
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
//keyup: when user releases a key, basically gets every input character entered
searchInput.addEventListener('keyup', displayMatches);  








