//sample arrays
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  //some function: check every element in array, return true if ANY of them satisfies condition
  const isAdult = people.some(function(person){
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19){
        return true;
    }
  });

  console.log({isAdult}); //out-of-scope referencing?

  //same effect, simplified version
  const isAdultSimplified = people.some(person => {
    const currYear = (new Date()).getFullYear();
    return currYear - person.year >= 19;    //returns a boolean
  });

  //every: check every element in array, return true if EVERY element satisfies condition
  const isAdultReallySimplified = people.every(person => ((new Date()).getFullYear) - person.year >= 19);

  console.log(isAdult);

  //find: kinda like filter, return the first item instead of a subarray
  const comment = comments.find(function(comment){
    if(comment.id == 823423){
        return true;
    }
    return false;
  });

  console.log({comment});   //first comment satisdying condition in find
  //simplified 
