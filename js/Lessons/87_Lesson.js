'use strict';

//// filter - отдает отфилтроывнный массив

// const names = ['Ivan' , 'Ann' , 'Ksenia', 'Voldemart'];

// // вернуть имя которое менее 5 символов
// const shortNames = names.filter(function(name) {
//     return name.length < 5;
// });

// console.log(shortNames); // [ 'Ivan', 'Ann' ]

//// map - позволяет взять каждый элемент массива и изменть его значения внутри самого масива

// let answers = ['IvAn', 'AnnA','Hello'];

// // приведем в ниэний регистр
// const result = answers.map(item => item.toLowerCase());

// console.log(result); //[ 'ivan', 'anna', 'hello' ]

// // приведеи к верннему решистру изначальный массив
// answers = answers.map(item => item.toUpperCase());

// console.log(answers); //[ 'IVAN', 'ANNA', 'HELLO' ]


//// every / some - возвращает true или false


// const some = [4, 'qwq', ' dksjldj'];

// //проверить , если внутри нашего масива хотя бы  одно число

// console.log(some.some(item => typeof(item) === 'number')); // true
// console.log(some.some(Number)); // true под вопросом, верно ли так?

// // если все элементы внутри массива , подходят под условие
// console.log(some.every(item => typeof(item) === 'number')); // false


//// reduce - схлопывает или объединяет массив в единое целое

const arr = [4, 5, 1, 3, 2, 6];
        //  sum   current
        //   0    4
        //   4    5
        //   9    1
        //   10   3
        //   13   2
        //   15   6
        //   21  

// const result = arr.reduce((sum, current) => sum + current);

// console.log(result); //21

// const res = arr.reduce((sum, current) => sum + current, 3 ); // в параметр можно добавить изначальное значение и оно буде не  ,а 3

// console.log(res); //24


// const arr = ['apple', 'pear' , 'plum'];
// const result = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(result); //apple, pear, plum


const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

//const newArr2 = Object.entries(obj);

// console.log(newArr2); //[
//                     //     [ 'ivan', 'persone' ],
//                     //     [ 'ann', 'persone' ],
//                     //     [ 'dog', 'animal' ],
//                     //     [ 'cat', 'animal' ]
//                     //   ]
                    

const newArr = Object.entries(obj)
              .filter(item => item[1] === 'persone') // возврашаем все элементы массива ., у котроых 2 элемент равен persone
              .map(item => item[0]); //  возврашаем только имена 

console.log(newArr); //  Только если filter применили[ [ 'ivan', 'persone' ], [ 'ann', 'persone' ] ]
console.log(newArr);   //[ 'ivan', 'ann' ] - итог
