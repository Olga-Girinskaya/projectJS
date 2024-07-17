'use strict'

// Напишите функцию, которая вычисляет факториал.
//если в нашу функцию приходит дробное число или не число  - возвращается строка с любым сообщением на ваше усмотрение. 
//Если 0 и меньше - возвращается число 1.
// n! = n * (n - 1) * (n - 2) * ...*1 - это общая формула  факториала

function factorial(n) {
   if (!Number.isInteger(n)) { 
       let string ='Задайте цифру!'; 
       return string ;
   } else  {
           if (n <= 1 ){
               return 1;
           } else { 
              return factorial(n-1) * n
           }
       }
};

console.log(factorial(5));

