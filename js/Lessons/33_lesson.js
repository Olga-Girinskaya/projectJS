"use strict"

//const arr = [1, 2, 3, 4, 6, 8];

// arr.pop(); // удалить элемент в конце [ 1, 2, 3, 4, 6 ]
// console.log(arr);

// arr.push(10);  // добавить элемент в конце  [ 1, 2, 3, 4, 6, 10 ]
// console.log(arr);

// arr.reverse();
// console.log(arr); // Перевернуть элементы массива [ 10, 6, 4, 3, 2, 1 ]

// // перебор массива и вывод элементов
// //1 способ
// for (let i =0 ; i< arr.length; i++) {
//     console.log(arr[i]);
// }

// // 2 способ
// for (let value of arr) {
//     console.log(value); 
// }

// // 3 способ // в функции форич можно задачвать как 1 так и несколько аргументов
//  arr.forEach(function(item, index, arr) {
//     console.log(`${index}: ${item} внутри массива ${arr} `)
//  })


//
// const str =  prompt("", "");
// const products = str.split(", ");
// //console.log(products);

// products.sort(); // сортировка , но как строки , цифры тоже сортирует как строки а не в порялке возрастания
// console.log(products.join(';'));


// // сортировка цифр
// const arr2 = [1, 23, 2, 10, 6, 111];
// // arr2.sort();
// // console.log(arr2); //[ 1, 10, 111, 2, 23, 6 ]


// // сортировка по нарастающей 
// function compare(num1, num2) {
//     return num1 - num2
// }
// arr2.sort(compare);
// console.log(arr2); // [ 1, 2, 6, 10, 23, 111 ]

//ПСЕВДОМАССИВЫ
 //это структура данных котрая просто хранит данные по поряку, у таких массивов не будет никакиъ методов