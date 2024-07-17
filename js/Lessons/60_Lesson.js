'use strict';
//1 способ (добавить n в конце) числа превращает тип данных в BigInt
const bigint = 1123333333333333333333333333333333333356466666666666n;
console.log(typeof bigint); // bigint
// 2 способ
const sameBigint = BigInt(1123333333333333333333333333333333333356466666666666);
console.log(typeof sameBigint); //bigint

//тип bigint нельзя использовать 
//1 - с методами math
//2 - нельзя смешивать в операциях bigint и другие числа

////console.log(5n + 1); // будет ошибка , так как 5n это тип Bigint
//// сonsole.log(Math.round(5n));// ошибка

//с bigint допустимы операции
// сложения
// вычитания
// умножения
// возведения в степень
// деление с остатком 

// // сравнение
// console.log(2n === 2); // false - строгое соответсиве, типы разные
// console.log(2n == 2); //  true , не строгое соответствие


// для сложения нужно переконвертировать одно из слагаемых

let bigint1 = 1n;
let number1 = 2;

console.log(bigint1 + BigInt(number1)); // 3n
console.log(Number(bigint1) + number1); // 3