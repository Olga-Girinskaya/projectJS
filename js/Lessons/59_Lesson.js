'use strict';
//1 пример
//  const arr = [1, 1, 2, 2, 4, 5, 6, 5];

//  const set = new Set(arr);
//  console.log(set); // Set(5) { 1, 2, 4, 5, 6 } - отдает уникальные значения

// 2 пример
const arr = ['Alex', 'Ann', 'Oleg', 'Alex'];

const set = new Set(arr);

// console.log(set); //Set(3) { 'Alex', 'Ann', 'Oleg' }

set.add('Ivan') // добавить элементы в set
   .add('Oleg');

// console.log(set); // добавился только новый Ivan, Set(4) { 'Alex', 'Ann', 'Oleg', 'Ivan' }

// // базовые команды SET-а
// set.delete(value);
// set.has(value);
// set.clear();
// set.size;

// а также мы может набор данных set перебирать

// // Alex
// // Ann
// // Oleg
// // Ivan
// for(let value of set){
//    console.log(value);
// }

// // Alex Alex
// // Ann Ann
// // Oleg Oleg
// // Ivan Ivan
// set.forEach((value, valueAgaing, set)=> {
//    console.log(value, valueAgaing);
// });


//    //console.log(set.values()); // [Set Iterator] { 'Alex', 'Ann', 'Oleg', 'Ivan' }
//   // console.log(set.keys()); // [Set Iterator] { 'Alex', 'Ann', 'Oleg', 'Ivan' }

//   console.log(set.entries()); 
// //[Set Entries] {
// //    [ 'Alex', 'Alex' ],
// //    [ 'Ann', 'Ann' ],
// //    [ 'Oleg', 'Oleg' ],
// //    [ 'Ivan', 'Ivan' ]
// //  }

// получить коассический отфильтрованный на уникальные значения массив
function unique(arr) {
   return Array.from(new Set(arr));
}

console.log(unique(arr)); // [ 'Alex', 'Ann', 'Oleg' ]
