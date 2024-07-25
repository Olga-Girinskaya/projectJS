'use strict';

////new RegExp('patern', 'flags'); // такой синаксис практичкски не используют

////  /pattern/f //паркнт/флаг - такой синтаксис используют

//const ans = prompt('Введите ваше имя');

//const reg = /n/ig;
//i - без учета регистра
//g - все найденные результаты (используют с match)
//m - 

//console.log(ans.search(reg)); // находит Индекс 1 найденного элемент
//console.log(ans.match(reg)); // Отдает цклый объект по найденному совпадению с регулярко

//const pass = prompt('Password');

//console.log(pass.replace(/\./g, "*"));  // . - означает что все символы, заменить на *

//   \. - обратный слэш, Экранирование точки и других спец.символов

//console.log('12-34-56'.replace(/-/g, ':')); // 12:34:56


// const ans = prompt('Введите ваше имя');
// const reg = /n/ig;
// console.log(reg.test(ans)); // true/false

// классы

//  \d - Дигит - цифры
//  \w - буквы
//  \s - 

//  \D -  НЕ числа
//  \W - Не буква

// const ans = prompt('Введите ваше число');
// const reg = /\d/;
// console.log(ans.match(reg)); // true/false

const str = 'My name is R2D2';

console.log(str.match(/\w\d\w/i)); //букыв, цифрвб буква
