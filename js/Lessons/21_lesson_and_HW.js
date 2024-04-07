"use strict"

// логический оператор И &&

// const hamburger = 3;
// const fries = 2;
// const cola = 0;

// if (hamburger === 3 && cola === 1 && fries){
//     console.log("Все довольны!");
// } else {
//     console.log("Мы уходим!");
// };

// console.log(hamburger === 3 && cola && fries); // вернет 0 , значение аргумента на котором он остановился (const cola = 0;)
// console.log(hamburger === 3 && cola === 0 && fries); // вернет 2 (const fries = 2;)
// console.log(hamburger === 3 && cola === 1 && fries); // вернет false , так как cola === 1 не равно const cola = 0
// console.log(hamburger === 3 && cola === 0 && fries === 2); // вернет true , все условия совпали


// console.log(1 && 0); // 0 (т.к. это false , потому то 0 это всега фолсе и мы на нем запнулись)
// console.log(1 && 5); // 5 (труу, отдаем последнее на котором остановились)
// console.log(null && 5); //null (null это фалсе, на нем запнулись, его отдали)
// console.log(NaN && undefined); //NaN (NaN это фалсе, на нем запнулись, его отдали)
// console.log(NaN && undefined && 5); //NaN (NaN это фалсе, на нем запнулись, его отдали)
// console.log(0 && "строка"); // 0 (т.к. это false , потому то 0 это всега фолсе и мы на нем запнулись)



// //Логический лператор ИЛИ ||

//____________
// const hamburger = 3;
// const fries = 0;
// const cola = 0;

// if (hamburger || cola || fries){
//     console.log("Все довольны!");
// } else {
//     console.log("Мы уходим!");
// };

//____________

// let johnReport, alexReport, samReport, mariaReport = "done";

// console.log(johnReport || alexReport || samReport || mariaReport); // done

// __________

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets){
//     console.log("Все довольны!");
// } else {
//     console.log("Мы уходим!");
// };

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets); // 2  

//! Логический оператор Не равно !=

//console.log(!0); // true , не равно false , тк 0 это false


// //HW
// console.log( NaN || 2 || undefined );  // 2
// console.log( NaN && 2 && undefined ); // NaN
// console.log( 1 && 2 && 3 ); // 3
// console.log( !1 && 2 || !3 ); // false (false И 2 ИЛИ false)
// console.log( 25 || null && !3 );// 25 (25 ИЛИ (null И false)) - Не поняла
// console.log( NaN || null || !3 || undefined || 5);  //5
// console.log( NaN || null && !3 && undefined || 5); //5
// console.log( 5 === 5 && 3 > 1 || 5); // true (все условия true)

// //Выполняется ли условие?  Ответ - Да, совпадо одно условие  fries === 3 && nuggets

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }

// //Выполняется ли условие? Ответ -  Да Ю выполняется, так как nuggets есть

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }


// //Выполняется ли условие? , нет не выполняется, не сопао ни одно условие

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }
