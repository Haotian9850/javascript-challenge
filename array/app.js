const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const fifteen = inventors.filter(function(inventor){
    //loop over inventors
    if(inventor.year >= 1500 && inventor.year < 1600){
        return true;    //keep
    }
});

const fifteenArrowFunc = inventors.filter(inventor => {
    if(inventor.year >= 1500 && inventor.year < 1600){
        return true;
    }
});

const fiftenInline = inventors.filter(inventors => (inventor.year > 1500 && inventor.year < 1600));

console.table(fifteenArrowFunc);

console.table(fiftenInline);

//map: return processed array of same length
const fullName = inventors.map(inventor => inventor.first + " " + inventor.last);

//sort: return 1 & -1
const ordered = inventors.sort(function(first, second){
    if(first.year > second.year){
        return 1;
    }
    return -1;
});

const orderedInline = inventors.sort((a, b) => (a.year > year) ? 1 : -1);

console.log(ordered);
console.log(orderedInline);

//reduce: get total year of inventors
const totalYears = inventors.reduce((total, inventor) => {
    return total += (inventor.passed - inventor.year);
}, 0);  //init total to 0

console.log(totalYears);

//sort inventors by years
const eldest = inventors.sort(function(a, b){
    const last = a.passed - a.year;
    const next = b.passed - b.year;
    return last > next ? -1 : 1;
});

console.table(eldest);


