'use strict';

// //const now1 = new Date();
// //console.log(now1); // текущая дата 2024-07-16T17:52:14.125Z

// const now2 = new Date('2024-07-16');
// console.log(now2); // 2024-07-16T00:00:00.000Z - минуты в ноль

// const now3 = new Date(2024, 7, 16, 20);
// console.log(now3); // 2024-08-16T17:00:00.000Z - 8 месяц потому что месяц в дате считается с нуля
//                    //  время в дате задано  20 , а у нас 17., потому что в дате задаем по времени ютс (по гринвичу)  а нам отображеся полокальному с компьютера , по Москве это 17

//  // дату передаем в миллисекундах
//  const now4 =  new Date(0);        
//  console.log(now4); // 1970-01-01T00:00:00.000Z - дата отсчета          

//  const now5 =  new Date(-457821);        
//  console.log(now5); // 1969-12-31T23:52:22.179Z

 const now =  new Date(); 

//  console.log(now.getFullYear()); // 2024- получили год 2024
//  console.log(now.getMonth()); // 6  Месяц
//  console.log(now.getDate()); //  16 - дата
//  console.log(now.getDay()); // 2  день недели начнается с воскресенья  с 0)

//  console.log(now.getHours()); // 21 -  часы по локальному времени
//  console.log(now.getUTCHours()); // 18 часы в utc

// console.log(now.getTimezoneOffset()); // -180 - таймзона
// console.log(now.getTime()); //1721153246495-  кол-во миллисекунд для текущей даты от 1970-01-01T00:00:00.000Z 


// // set - снйчас 2024-07-16T21:12:44.234Z
// console.log(now.setHours(18)); // установили в 18 часов
// console.log(now); // 18 часов в utc, 2024-07-16T15:12:44.234Z

// console.log(now.setHours(18 , 10)); // установили в 18 часов и 10 минут
// console.log(now); //2024-07-16T15:10:07.186Z
// // в браузере будет время браузера локальное , а не utc


// // автоисправление
// console.log(now.setHours(40)); // установили в 40 часов
// console.log(now); // 2024-07-17T13:10:25.268Z - получаем плюс 40 часов, т.е.  добавляет плюс 1 дату , дата пытается себя исправить


// // парсер даты

// const parseDate = new Date('2024-07-17');
// new Date.parse('2024-07-17');

// разница дат
let start = new Date();
 
for (let i = 0; i < 100000; i++) {
    let some = i ** 3; // ** возвеси в степень
}

let end =  new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`)
