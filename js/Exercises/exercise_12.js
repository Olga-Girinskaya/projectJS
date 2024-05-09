'use strict'
//3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку 
//и возвращает эту строку в обратном порядке.
//Пример: const someString = 'This is some strange string'; reverse(someString) => 'gnirts egnarts emos si sihT'
//Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

const someString = 'This is some strange string';

function reverse(str) {
    if(typeof str == 'string'){
        return str.split('').reverse().join('');
    }
    else return  "Ошибка!";
}
console.log(reverse(someString));
const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = '';
    if(arr.length == 0) {str = "Нет доступных валют"}
    else {
    str = 'Доступные валюты:\n';
    let newArr = arr.filter((n) => {return n != missingCurr}); 

    for(let i = 0; i < newArr.length; i++){
        str +=  newArr[i] + '\n';
    }
}
return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies]));