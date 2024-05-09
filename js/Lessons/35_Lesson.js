// 'use strict'

// // let a = 5,
// //     b = a;
    
// // b = b + 5;
// // console.log(b); //10
// // console.log(a); // 5

// // const obj = {
// //     a: 5,
// //     b: 1
// // }

// // const copy = obj; // Передаем ссылку на объект, а не сам объект
// // copy.a = 10;
// // console.log(copy); //{ a: 10, b: 1 }
// // console.log(obj); // { a: 10, b: 1 }
// //_______________________
// // 1 способ
// // создаем поверхностную копию объекта (работает только с объектами первого уровня , в примере а и b)

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for(key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }

// const newNumbers = copy(numbers); 
// console.log(newNumbers); //{ a: 2, b: 5, c: { x: 7, y: 4 } }

// newNumbers.a = 10;
// console.log(newNumbers); //{ a: 10, b: 5, c: { x: 7, y: 4 } }
// console.log(numbers); //{ a: 2, b: 5, c: { x: 7, y: 4 } } 

// newNumbers.c.x = 10;
// console.log(newNumbers); //{ a: 10, b: 5, c: { x: 10, y: 4 } }
// console.log(numbers); //{ a: 2, b: 5, c: { x: 10, y: 4 } } - x: 10, изначальный объект тоже изменился при таком поверхностном копировании объекта

// //2 способ

// const add = {
//     d: 17,
//     e: 20
// }

// console.log(add); //{ d: 17, e: 20 }
// console.log(Object.assign(numbers, add)); //Добавляем к объекту numbers объект add - { a: 2, b: 5, c: { x: 10, y: 4 }, d: 17, e: 20 }
// console.log(Object.assign({}, add)); //Добавляем к gecnjve объекту  объект add  - { d: 17, e: 20 }

// const clone = Object.assign({}, add);
// clone.d = 20;
// console.log(add); // d add ничего не заменилось { d: 17, e: 20 }
// console.log(clone); // а в clone заменилось значение d { d: 20, e: 20 }


// const oldArray = ['a', 'b' , 'c'];
// const newArray = oldArray.slice(); // создаем копию массива

// console.log(oldArray); // [ 'a', 'b', 'c' ]
// console.log(newArray);// [ 'a', 'b', 'c' ]

// newArray[1] =  'hfffffff';
// console.log(oldArray); // [ 'a', 'b', 'c' ]
// console.log(newArray);//[ 'a', 'hfffffff', 'c' ]

// // 3 способ
// //спрэт оператор ... разворачивает структуру массивово на отдельные значения
// const video = ['youtube','vimeo','rutube'],
//       blogs = ['wordpress','livejournal','blogger'],
//       internet =[...video, ...blogs, 'vk', 'facebook']; // Добавляем значения массивов video и blogs и другие значения

// console.log(internet);
// ////получили
// // [
// //     'youtube',
// //     'vimeo',
// //     'rutube',
// //     'wordpress',
// //     'livejournal',
// //     'blogger',
// //     'vk',
// //     'facebook'
// //   ]


// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num); // передаем значения массива num как оделтные значения
// //// получим
// // 2
// // 5
// // 7


// const array = ['a','b'];
// const newArray2 = [...array]; // копируем массив при помощи сплет оператора
// console.log(array); // [ 'a', 'b' ]
// console.log(newArray2); // [ 'a', 'b' ]

// const q = {
//     one: 1,
//     two: 2
// }

// const newObj2 = {...q};
// console.log(newObj2); // { one: 1, two: 2 }

