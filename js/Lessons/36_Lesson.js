'use strict'

const soldier ={
    health: 400,
    armor: 200,
    sayHello: function(){
        console.log("Hello");
    }
}

// создание объекта с прототипом объекта soldier
const jonh2 = Object.create(soldier);

// создание объекта
const jonh = {
    health: 100
}

// присваиваем свойства объекта soldier объекту jonh
// jonh.__proto__ = soldier; // __proto__  уже не используют

// вместо __proto__  сейчас используют
Object.setPrototypeOf(jonh, soldier);

console.log(jonh.health); // 100
console.log(jonh.armor);   //200
jonh.sayHello(); // Hello

