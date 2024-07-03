'use strict'

const box = document.getElementById('box'),
btns = document.getElementsByTagName('button'),// массив баттонов по тегу
circles = document.getElementsByClassName('circle'), // получаем все элементы по классу
wrapper = document.querySelector('.wrapper'),
hearts = wrapper.querySelectorAll('.heart'), // получаем все элементы с классом heart через css селектор
oneHeart = wrapper.querySelector('.heart'); // получаем первый элементы с классом heart через css селектор


// box.style.backgroundColor = 'blue'; // изменили цвет фона box
// box.style.width = '500px'; // изменили  размер box
// btns[1].style.borderRadius = '100%'; //  кнонка 2 овальная

 circles[0].style.backgroundColor = 'red'; // изменили цвет фона box

// Задачть стили через cssText
box.style.cssText = 'background-color : blue; width : 500px'

// //с переменными
// const num  = 200;
// box.style.cssText = `background-color : blue; width : ${num}px`

// // циклом перебираем все элементы hearts и для всех меняем цвет фона

// for(let i = 0; i < hearts.length; i++){
//     hearts[i].style.backgroundColor = 'black';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
})

// основные методы

const div = document.createElement('div'); //  создаем элемент див внутри JS, не на странице
//const text = document.createTextNode('тут был я') ; // создаем текстовый элемент 
div.classList.add('black');

document.body.append(div); // добавляем элемент в конец Body 
////document.querySelector('.wrapper').append(div); // добавляем элемент в конец wrapper  (1 вариант) - это когда wrapper не был проинициализирован

//wrapper.append(div); // добавляем элемент в конец wrapper 
//wrapper.appendChild(div);// добавляем элемент в конец wrapper 

//wrapper.prepend(div); // добавляем элемент в начало wrapper 

//hearts[0].before(div); // добавляем до hearts[0]
//wrapper.insertBefore(div, hearts[0]); // добавялем div до hearts[0]

//hearts[1].after(div); // добавляем после hearts[1]

//circles[0].remove(); // удаляем circles[0]
//wrapper.removeChild(hearts[2]); // удаляем hearts[0]

//hearts[0].replaceWith(circles[0]); // заменили элемент hearts[0] на circles[0]
//wrapper.replaceChild(circles[0], hearts[0]); //  заменили элемент hearts[0] на circles[0] 

// Добавялем текст в наш тег div 
//div.innerHTML = 'Hello World!'; // как текст
div.innerHTML = '<h3>Hello World!</h3>'; //как html

//div.textContent = 'Hello!!!' ; // Только как текст

// вставть кусок html перед каким-то тегом
//div.insertAdjacentHTML('beforebegin','<h3>Hello</h3>') ; //вставит перед элементом
//div.insertAdjacentHTML("beforeend",'<h3>Hello</h3>') ; //вставит в конец нашего элемента
//div.insertAdjacentHTML('afterbegin','<h3>Hello</h3>') ; //вставит в начало нашего элемента
//div.insertAdjacentHTML('afterend','<h3>Hello</h3>') ; //вставит после нашего элемента