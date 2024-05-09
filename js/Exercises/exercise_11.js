'use strict'

// Напишите функцию showFamily, которая будет принимать в себя массив строк 
//и возвращать сообщение в нужном формате. showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
//Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str ='';
    if(arr.length > 0){
        let name ='';
        for (let i=0; i< arr.length; i++)
        {
            name +=  " " +arr[i];
        }
        str =  `Семья состоит из:${name}`;

    } else str = 'Семья пуста';
   return str;
}
console.log(showFamily(family));

//напишите функцию standardizeStrings, которая будет принимать в себя массив строк 
//и будет выводить в консоль эти строки в нижнем регистре.
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(name => {
        console.log(name.toLowerCase())
    })
}

standardizeStrings(favoriteCities);