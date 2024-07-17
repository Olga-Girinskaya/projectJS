// 'use strict';


// //1)
// // function showThis(a, b) {
// //     console.log(this);
// //     function sum() {
// //         console.log(this);
// //         return a + b
// //     }
// //     console.log(sum());
// // }

// // showThis(4, 5);


// //2)
// // const obj = {
// //     a: 20,
// //     b: 15,
// //     sum: function() {
// //         console.log(this);
// //     }
// // };

// // obj.sum(); //{a: 20, b: 15, sum: ƒ}

// // const obj = {
// //     a: 20,
// //     b: 15,
// //     sum: function() {
// //         function shout() {
// //         console.log(this);
// //         }
// //         shout();
// //     }
// // };

// // obj.sum(); // undefined


// // //3)
// // function User(name, id) {
// //     this.name = name; 
// //     this.id = id;
// //     this.human = true;
// //     this.hello = function() {
// //         console.log(`Hello ${this.name}`);
// //     }
// // }

// // let ivan =  new User('Ivan', 28);

// // 4)
// function sayName(surname, year) {
//     console.log(this);
//     console.log(this.name + " " + surname + " " + year);
// }

// const user = {
//     name: 'John'
// };

// // ручное присвоение контекста, чтоб не получить undefind
// sayName.call(user, 'Smith' , '28'); // аргументы передаем через запятую
// sayName.apply(user, ['Smith', '30']); // аргументы передаем в массиве

// // bind
// function count(num) {
//     return this*num;
// }

// const double =  count.bind(2); // присваиваем функции double значение this  ( в данном случае - 2 )из функции count
// console.log(double(13)); // передаем функцию double число которое нужно удвоить

// // 1) Обычная функция: this = window, но если use strict - undefined
// // 2) Контекст у методов объекта - это сам объект
// // 3) this в конструкторах и классах  - это новый экземпляр обекта
// // 4) ручное присвоение (привязка) this  (контекста) при помощи call , apply или bind (баинд)


//  Пример
const btn = document.querySelector('button');

// если на обработчике события будет функция в классическом режиме function(),
// то this это будет сам элемент на котором произошло событие 
btn.addEventListener('click', function() {
    console.log(this); // <button>1</button>
    this.style.backgroundColor = 'red'; // по клику на кнопку , она перекрасилась в красный цвет
})

// стрелочные функции
// у стрелочной функции нет своего контекста, она его будет брать у совего родителя

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
           // console.log(this); // т.к. это стрелочная функция, то контекст возьмет у родителя ,  у самого объекта obj
           console.log(this.num); // 5
        }
        say();
    }
};

 obj.sayNumber(); // {num: 5, sayNumber: ƒ}


 // 2 пример

//  //3 варианта синтаксиса одной и той же функции
// //  const double = (a) => {
// //     return a * 2;
// //  } ;

//  const double = (a) => a * 2;
 const double = a => a * 2;