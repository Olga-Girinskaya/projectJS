// Создайте функцию, которая будет принимать в себя один аргумент-целое положительное число. 
//Она должна возвращать строку, в которой будут через пробел выведены числа Фибоначчи. 
// Причем, их количество должно быть равно переданному аргументу.
// Если переданный аргумент не число - вернуть пустую строку. Решать без применения рекурсии.

function fib(num) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;
    let str = '0 1';
    if(typeof num == 'number' &&  num > 1 && Number.isInteger(num))  {
    for (let i = 0; i < num-2; i++) {
        num3 = num1 + num2;
        str += " " + num3;
        num1 = num2;
        num2 = num3;
    }
} else if (num == 1) {
    return str = "0"; 
} else { 
    return str = ""; 
}
    return str ;
}

// console.log(fib(4));  //''0 1 1 2"
// console.log(fib(7));  //''0 1 1 2 3 5 8"
// console.log(fib('7'));  // ''"
// console.log(fib(1)); // "0"
// console.log(fib(0)); // ''"
// console.log(fib(15));  //''0 1 1 2 3 5 8"

// //// 2  вариант
// function fib(num) {
//     if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//         return "";
//     }

//     let result = '';
//     let first = 0;
//     let second = 1;

//     for (let i = 0; i < num; i++) {
//         if (i + 1 === num) {
//             result += `${first}`;
//             // Без пробела в конце
//         } else {
//             result += `${first} `;
//         }

//         let third = first + second;
//         first = second;
//         second = third;
//     }

//     return result;
// }