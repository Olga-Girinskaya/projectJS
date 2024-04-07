"use strict"


//let num =20;
// function showFirstMessage(text){
//     console.log(text);
//     let num = 10;
// }
// showFirstMessage("Hello world!");
// console.log(num); // выведет 20 , потому что внутри функции объявлена переменная let num, 
//                   //а мы ничего не знаем про это значение,  так как видима только внутри функции,
//                   //если бы не было let, а просто num ,
//                   //то тогда бы в результате было бы 10 (значение взяли бы из функции, 
//                   //так как она объявлена глобально и результат функции мы ей смогли присвоить )

////____________ function declaration, такие функции как и var переменные инициируются/запускаются сразу при запуске программы ,
// поэтому функции можно в конце файла создавать, а использовать до их места создания

// console.log(calc(5,9));
// console.log(calc(4,1));
// console.log(calc(3,7));

// function calc(a , b){
//     return(a + b);
// }


// //___________________
// function ret(){
//     let num =50;
//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);

////____________ function expression, ее можно использовать только после объявления
// const logger = function () {
//     console.log("Hello!");
// };
// logger();

////_________стрелочные функции ,ее можно использовать только после объявления

// const calc = (a, b) => {
//     console.log("Hello!");
//     return a + b
// };

// //const calc = (a, b) => a + b; // если одно выражение в фукнции, то можно без скобок {}


// //lesson 26
// const usdCurr = 28;
// const euroCurr = 32;

// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(100, usdCurr);
// convert(100, euroCurr);

//lesson 27 Return

const usdCurr = 28;
const discount = 0.9;

function convert(amount, curr) {
    //console.log(curr * amount);
   return  curr * amount;
}

function promousion(result) {
    console.log(result  *  discount);
}

const res = convert(100, usdCurr);
promousion(res);

//__________________

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if(i === 3) return; //таким образом можно полностью закончить выполнене функции на 3, до console.log('Done') не дойдет
    }                       // если в return ничего не возвращаем, то функция вернет undefined
    console.log('Done');   
}
test();

 // если в функции нет return, то функция вернет undefined , функция всегда что-то возвращает

 function doNothing() {};
 console.log(doNothing()); // undefined
 console.log(doNothing() === undefined) // true; 


