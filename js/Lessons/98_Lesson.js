'use strict';

const persone = {
    name: 'Alex',
    age: 25,

    get userAge() {
       return this.age;
    },

    set userAge(num) {
        this.age = num;
    }
};

console.log(persone.userAge);      // 25 , взываем гетер
console.log(persone.userAge = 30); //30  - устанавливаем возраст  = 30б те. вызываем сетер
console.log(persone.userAge);      // 30 - вызываем гетер, послн установки возраста сетером

