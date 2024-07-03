'use strict';

const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button'); // массив баттонов по тегу
//const btns = document.getElementsByTagName('button')[1];//Обращение сразу с определенному элементу
console.log(btns[1]); // выводит 1 элемент

const circle = document.getElementsByClassName('circle'); // получаем все элементы по классу
console.log(circle); // выводит массив

const hearts = document.querySelectorAll('.heart'); // получаем все элементы с классом heart через css селектор
//console.log(hearts);
// выводим все элементы по одному
hearts.forEach(item=>{
    console.log(item);
})

const oneHeart = document.querySelector('.heart'); // получаем первый элементы с классом heart через css селектор
console.log(oneHeart);