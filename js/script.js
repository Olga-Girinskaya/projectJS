'use strict';

const app = '123';

const number = 1;

// самовызывающаяся функция
(function(){
    let number = 2;
    console.log(number); // 2
    console.log(number + 3); //5
}());

console.log(number); // 1

// 2 использование объектного интерфейса

const user = (function() {
    const privat = function() {
        console.log('I am privat!');
    };

    return {
        sayHello: privat
    };
} ())


user.sayHello(); //I am privat!