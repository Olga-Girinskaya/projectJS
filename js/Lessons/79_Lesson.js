'use strict';

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
}

log('basic', 'rest', 'operator','usage'); // basic rest [ 'operator', 'usage' ] - рест оператор отдает в массиве данные

function calsOrDounle(number, basis = 2) { // =2 говорит о том, что если не придет значение функции, то по дефолту взять 2
    console.log(number * basis);
}

calsOrDounle(3);

function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional)
}
setOptions(400, 500, 'red', 'top'); // 400 500 red top

