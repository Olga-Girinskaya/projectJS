"use strict"

// // //При помощи цикла выведите числа от 5 до 10 в консоль. 5 и 10 включительно. Цикл можно использовать любой
// function firstTask() {
//     let num = 5;
//     while(num <= 10){
//     console.log(num);
//     num++;
// }
// }
// firstTask();

// //При помощи цикла for вывести числа от 20 до 10 в консоль. В обратном порядке (20, 19, 18...). Когда цикл дойдет до числа 13 - остановить весь цикл

// function secondTask() {
// for (let i = 20; i > 10 ; i--){
//     if (i > 13) console.log(i);
//     else break;
// }
// };
// secondTask();


// //При помощи цикла for выведите чётные числа от 2 до 10 включительно
// function thirdTask() {
//     for (let i = 2;  i <= 10 ; i++){
//         if(i%2 === 0) console.log(i);
//     }   
// }
// thirdTask();

// //Перепишите цикл  for на вариант с while. 
// //Результат должен остаться точно таким же. 
// //Не создайте бесконечный цикл! Иначе браузер может зависнуть.
// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }


// function fourthTask() {
//     let num = 2;
//     while(num <= 16){
//         if (num % 2 === 0) {
//             num++; continue;
//         } else {
//             console.log(num); 
//         }
//         num++;
//     }    
// }
// fourthTask();


// // Заполните массив цифрами от 5 до 10 включительно. 
// // Помните, что элементы массива можно сформировать так же, как и обращаться к ним: arr[0]

// function fifthTask() {
//     const arrayOfNumbers = [];
//     for (let i = 5; i <= 10; i++) {
//         arrayOfNumbers.push(i);
//     }  
//     // Не трогаем
//        console.log(arrayOfNumbers);
//        return arrayOfNumbers;
// }
// fifthTask();