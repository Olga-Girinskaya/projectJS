// //Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки "Это 2 часа и 30 минут". 
// //(Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
// //Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
// //
// //Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). 
// //Так как проверки на большие числа будут раздувать код (33 часа, 31 час, 11 часов и тд). 
// //Этого будет достаточно и код будет проверять именно этот промежуток (1 - 10 часов). 
// //Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

// // Место для первой задачи
// function getTimeFromMinutes(date) {
//     let hour = Math.floor(date/60);
//  function endHour(hour){
//     if (hour == 1) return "час"
//     else if (hour > 1 && hour <= 4 ) return "часа"
//     else return "часов"
//  }
//     if (Number.isInteger(date) && date >= 0) {
//     return `Это ${hour} ${endHour(hour)} и ${date%60} минут`
//     } else return 'Ошибка, проверьте данные';
// }
// console.log(getTimeFromMinutes('text')); //"Ошибка, проверьте данные"
// console.log(getTimeFromMinutes(150));// "Это 2 часа и 30 минут"
// console.log(getTimeFromMinutes(50)); // "Это 0 часов и 50 минут"
// console.log(getTimeFromMinutes(0)); // "Это 0 часов и 0 минут"
// console.log(getTimeFromMinutes(-150)); // "Ошибка, проверьте данные"


// Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. 
//Если один из аргументов не является числом или их меньше 4 - возвращается 0.

function findMaxNumber(a,b,c,d) {
let arr = [a, b, c, d];
let min = 0;
let max = 0;
for (let i = 0; i < arr.length; i++){
    if(typeof arr[i] != 'number' || arr.length != 4)  {
        max = 0 ; break;
    } else  if (arr[i] > min) {
        max = arr[i]; min = arr[i]};
}
return max;
}

 console.log(findMaxNumber(1, 12, 6.6, -15)); //  11
 console.log(findMaxNumber(1, 5)); //  0


 function findMaxNumber2(a, b ,c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

console.log(findMaxNumber2(1, 12, 6.6, -15)); //  11
console.log(findMaxNumber2(1, 5)); //  0

