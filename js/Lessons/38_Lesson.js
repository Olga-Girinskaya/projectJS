'use strict'

//toString

//1)
console.log(typeof(String(null))); //  string
console.log(typeof(String(4))); //  string
console.log(String(null)); //  null

//2) конкатенация - сложение строк или сложение строки с чем-то
console.log(typeof(5 + '')); //  string - со сложением со строкой всегда получается строка

const num = 5;
console.log("https://vk.com/catalog/" + num); //https://vk.com/catalog/5

const fontSize = 26 + 'px';
console.log(fontSize); // 26px;

//toNumber
//1)
console.log(typeof(Number('4'))); //  number

//2) унарный плюс - это знаю плюс, который ставят перед каким-то типом данных
console.log(typeof(+'4')); //  number

//3)
console.log(typeof(parseInt("15px", 10))); //  number - 10 означает десятичная мера

let answ = +prompt("Hello", "");

// To boolean
//0, '', null, undefined, Nan; // Это все false

//1
let switcher = 1;

if(switcher){
    console.log("Working...");
}

//2
console.log(typeof(Boolean('4'))); //  boolean

//3 - практически не используют этот способ приведения
console.log(typeof(!!'444')); //  boolean

