"use strict"


////String
// const str ="teSt";
// const arr = [1, 2, 5];

// console.log(str[2]); //  в ответе s
// console.log(str.length); // 4
// console.log(arr.length); //3

// console.log(str[3] = "d"); // пытаемся поменять символ t на d , это не верно, так нельзя поменять!!!
// console.log(str);  
        // test ,  как видим ничего не поменялось

//         //методы передают со скобками ()
// console.log(str.toUpperCase()); // приводим всю строку к верхнему регистру
// console.log(str.toLowerCase()); // приводим всю строку к нижнему регистру

// // поиск подстроки
// const fruit = "Some fruit and other fruits";
// console.log(fruit.indexOf("fruit")) ; // 5, найдем индекс с которого начинается первое совпадние подстроки(индекса считаются с 0)
// console.log(fruit.indexOf("q")) ; // -1  , не найдена подстрока

//const logg = "Hello World!";
// console.log(logg.slice(6, 11)) ; //World , выводим подстроку с 7 по 11 индекс
// console.log(logg.slice(6)); // World! , выводим строку, начиная с 6 индекса
// console.log(logg.slice(0, 5)) ; //Hello , выводим подстроку с 0 по 5 индекс
// console.log(logg.slice(-6, -1)) ; //World , выводим подстроку с 1 по 6 индекс с конца 

// //похож на метод slice() , но нельзя задавать отрицательные значения, 
// //но можно указывать индекса сначао большиий потом меньшийц. результат будет одинаковым
// console.log(logg.substring(6, 11));//World , выводим подстроку с 7 по 11 индекс 
// console.log(logg.substring(11, 6));//World , выводим подстроку с 7 по 11 индекс 
// console.log(logg.substring(-6, 11));//World , выводим подстроку с 0 по 11 индекс , так как отрицательное значение это 0 в этом методе

// //substr 
// console.log(logg.substr(6, 5)); // World , выводим от 6 индекса 5 символов

// //Number
// const num = 12.5;
// console.log(Math.round(num)); // 13, округлим до ближайшего целого, если 0.5 и более, то в большую, если меньше, то в меньшию

const test = "12.5px  15";
console.log(parseInt(test)); // 12 - выводит первое целое число без округления (int значение)
console.log(parseFloat(test)); // 12.5 - выводит первое дробное число