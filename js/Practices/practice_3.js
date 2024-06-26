/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';
let numberOfFilms;

function start() {

    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','').trim();

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { //isNaN() проверка на число
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}

//start();

let personalMovieDB = {
	'count': numberOfFilms,
	'movies':{}, 
	'actors':{},
	'genres':[],
	'privat':false
};

function rememberNyFilms() {
    for(let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?',''),
        b = prompt('На сколько оцените его?','');
        if ( a != "" && b != "" && a != null && b != null && a.length < 50) { 
            personalMovieDB.movies[a]= b;  
        } else {
            i--;}
    }
}

//rememberNyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
        alert("Просмотрено довольно мало фильмов")
    } else if (numberOfFilms <=10 && numberOfFilms < 30) {
        alert("Вы классический зритель")
    } else if (numberOfFilms >= 30) {
        alert("Вы киноман")
    } else {
        alert("Произошла ошибка"); 
    }
}

//detectPersonalLevel();

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы
function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB)
    }
}

//showMyDB(personalMovieDB.privat);

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
       // personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
       personalMovieDB.genres.push(prompt(`Ваш любимый жанр под номером ${i}`));
    }
}
writeYourGenres();

console.log(personalMovieDB);