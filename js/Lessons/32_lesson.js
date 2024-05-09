'use strict'

// const options = {
//     "name": "test",
//     "width": 1024,
//     "height": 1024,
//     "colors": {
//         "border": "black",
//         "bd": "red"
//     }
// }

// // есть более оптимальный метод подсчитать свойства объекта

// console.log(Object.keys(options)); // Получаем массив из свойств [ 'name', 'width', 'height', 'colors' ]
// console.log(Object.keys(options).length);//4

// // console.log(options.name);
// // delete options.name;
// // console.log(options);
// // console.log(options["colors"]["border"]); 

// // перебор объектов

// for (let key in options) {
//     if(typeof(options[key]) === "object") {
//         for (let i in options[key]) console.log(`Свойство ${i} имеет значение ${options[key][i]}`)
//     } else  {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`); 
// }
// }

// // Свойство name имеет значение test
// // Свойство width имеет значение 1024
// // Свойство height имеет значение 1024
// // Свойство border имеет значение black
// // Свойство bd имеет значение red

// // посчитать кол-во всех свойств в объекте

// let counter = 0;
// for (let key in options) {
//     if(typeof(options[key]) === "object") {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         } 
//     } else  {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`); 
//         counter++;
//     }
// }
// console.log(`Всего свойств в объекте options ${counter}`);

// // Свойство name имеет значение test
// // Свойство width имеет значение 1024
// // Свойство height имеет значение 1024
// // Свойство border имеет значение black
// // Свойство bd имеет значение red
// // Всего свойств в объекте options 5


// // если нужо посчитать свойтва вернего уровня, то 
// let counter = 0;
// for (let key in options) {
//    counter++;
// }
// console.log(`Всего свойств в объекте options ${counter}`);

// //Всего свойств в объекте options 4


//ЧАСТЬ 2

// Объекты в свойствах могут содержать функции
const options = {
    "name": "test",
    "width": 1024,
    "height": 1024,
    "colors": {
        "border": "black",
        "bd": "red"
    },
    "makeTest": function() {
        console.log("Test");
    }
}

//options.makeTest();

// так же есть методы и свойства акцессеры (get И set)


//Деструктиризация объекта 

const {border, bd} = options.colors; // создаем переменную в которой указываем свойства которые хотим вытянуть из объета
                                    // и присваиваем им путь к этому объекту
console.log(border);     //black 

                                    