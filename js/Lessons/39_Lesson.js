'use strict'

// let number = 5; debugger

// function logNumber(){
//     let number = 4; debugger
//     console.log(number)
// };

// number = 6;

// logNumber(number);debugger


function createCounter(){
    let counter = 0;
    
    const myFunction = function(){
    counter = counter + 1;
    return counter;
}

return myFunction;
}

const increment = createCounter();
const c1 = increment(); //1
const c2 = increment(); //2
const c3 = increment(); //3

console.log(c1, c2, c3);  //1, 2, 3




