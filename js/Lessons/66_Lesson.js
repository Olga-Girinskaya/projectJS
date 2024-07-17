'use strict';

//  let user = {name: 'Ivan'};

// //  let map = new Map();
// // map.set(user,'data');
// // user = null;

// // console.log(map.keys()); // [Map Iterator] { { name: 'Ivan' } }
//                             // Map не почистился 

//  let map = new WeakMap();
//  map.set(user,'data');
//  user = null;

//  console.log(map.has(user)); //false - т.к. WeakMap почистился

// Пример, пользователи которые онлайн в чате

let cache = new WeakMap();

// кешируем пользователя, который зашел в чат и его нет в кеше
function cacheUser(user) {
    if(!cache.has(user)) {
        cache.set(user, Date.null);
    }
    return cache.get(user);
}

let lena = {name: "Lena"};
let alex = {name: "Alex"};


cacheUser(lena);
cacheUser(alex);

lena = null ; // Лена вышла из чата

console.log(cache.has(lena)); // false  - Лены уже нет в чате и она почистилась в weakMap
console.log(cache.has(alex)); // true


//WeakSet (add, has, delete)

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'World', from: 'Alex'},
    {text: '....', from: 'M'}
];

let readMessages = new WeakSet();

// Добавим сособщения в чат
readMessages.add(messages[0]);
//readMessages.add(messages[1]);

readMessages.add(messages[0]); // пытается повторно добавить такое же сообщение, оно не добавляется, так как Set содержит уникальные данные

console.log(readMessages.has(messages[0])); // true - проверяем что сообзение есть в массиве massages
 messages.shift(); // удалим message[0] из массива; - при этом если есть другие сообщения в мссиве, то индекса смещаются на минус 1
 console.log(readMessages.has(messages[0])); // false // - проверяем что сообщение почстилось в массиве massages

 