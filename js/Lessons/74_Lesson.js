'use strict';

// функция стала конструктором, т.к this указывает. что это свойство будет у конкретного объекта
function User(name, id) {
    this.name = name; 
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    }
}


const ivan = new User('Ivan' , 28);
const alex = new User('Alex', 20);

ivan.hello(); //Hello Ivan
alex.hello(); //Hello Alex

console.log(ivan); // User { name: 'Ivan', id: 28, human: true }
console.log(alex); // User { name: 'Alex', id: 20, human: true }


User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
}
alex.exit(); // Пользователь Alex ушел