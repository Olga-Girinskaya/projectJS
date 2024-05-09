"use strict"

function first() {
    //Do something
    setTimeout(function() {
        console.log(1);
    }, 500)
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, collback) {
    console.log(`Я учу: ${lang}`);
    collback();
}

learnJS('JavaScript', function() {     // это колбек функция, (передаем как аргмумент) она может быть анонимная, как здесь или явная
    console.log(`Я прошел этот урок!`);
})

function done() {
    console.log(`Я прошел этот урок!`);
}

learnJS('JavaScript', done); // done , это колбек функция , она так передается в аргументе без скобок

// колбек функция дает гарантию, что код не начнется пока не выполниться необходимое условие(клк по кнопке и прочее)