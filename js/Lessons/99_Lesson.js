'use strict';

// инкапсуляция

// function User(name, age) {
//     this.name = name; // эта переменная доступна снаруди и мы ее значение помем поменять
//     let userAge = age;  // эта переменная не доступна снаруди и поменять мы ее не можем

//     this.say = function() {
//         console.log(`Имя пользователя ${this.name}, возраст ${userAge}`);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if (typeof age === 'number' && age > 0 && age < 110 ) {
//         userAge = age;
//         } else {
//             console.log('Недопустимое значение!');
//         }
//     }
// }

// const ivan = new User('Ivan', 27);
// console.log(ivan.name); //Ivan
// //console.log(ivan.age);  // 27
// console.log(ivan.getAge());  // 277

// // ivan.age = 30;
// // ivan.name = 'Alex';
// // ivan.say(); // Имя пользователя Alex, возраст 27


// ivan.setAge(35); // установил возраст
// ivan.setAge(300); // Недопустимое значение!

// console.log(ivan.getAge()); // 35 , отдаем утановленное значение
// ivan.say();    //Имя пользователя Alex, возраст 35




// классы


class User {
    constructor(name, age) {
    this.name = name; 
    this._age = age;  // делаем переменную недоступной снаружи
    }

    #surname = 'Petrychenko'; // # означает что св-во приватное

    say = () => {
        console.log(`Имя пользователя ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    // свойства акцессера
    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110 ) {
        this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }

}

const ivan = new User('Ivan', 27);
// console.log(ivan.age);  // 27 -  используется гетер

// ivan.age = 99;   // -  используется сетер
// console.log(ivan.age);  // 99 - получае гетером уже измененное

ivan.surname = 'Test';
console.log(ivan.surname);
ivan.say();  // Имя пользователя Ivan Petrychenko, возраст 27
