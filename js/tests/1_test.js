'use strict'

// ошибка , так как экспессион функция раньше , чем сама функция
const result = getSum(5,6);
const getSum = function(a, b)
{
    return a + b;
}


// вывод результата
console.log(0 || 1); //1
console.log(0 && 1); // 0
console.log("a" > "b"); // false
console.log(0 || NaN || false || null); //null

//2) что получим
//унарный плюс - это знаю плюс, который ставят перед каким-то типом данных
console.log(typeof(+'4')); //  number

console.log(typeof(NaN)); //  number





