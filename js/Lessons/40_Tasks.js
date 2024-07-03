'use strict'

////Какое будет выведено значение: 
let x1 = 5; //alert( x1++ ); //5
let x2 = 5; //alert( ++x2 ); //6

//// Чему равно такое выражение: 
console.log([ ] + false - null + true);  //NaN  пустой массив это строка, строку ссумировать с любым типом =  сринга , отнять от стринги другой тип нельзя, поэтому Nan

//// Что выведет этот код: 
let y = 1; let x = y = 2; //alert(x);  //2
console.log(x);

//// Чему равна сумма 
console.log([ ] + 1 + 2); // 12 , так как пустой массив строка, то мы 1 и 2 не ссумируем а передаем как строка

/// Что выведет этот код:  alert( &quot;1&quot;[0] ); 
console.log("1"[0]); //1 &quot - это двойные кавычки

//// Чему равно 2 &amp;&amp; 1 &amp;&amp; null &amp;&amp; 0 &amp;&amp; undefined ?
console.log(2 && 1 && null && 0 && undefined); // null -  если &&, отдаем то на чем запнулся,
// т.е. 2 это true && 1 это true && null это false  - true не равно false , поэтому отдаем первое где не совпали, null

//// Есть ли разница между выражениями? !!( a &amp;&amp; b ) и (a &amp;&amp; b) 
// да, первое Будет bollean 
console.log(!!(1 && 2) === (1 && 2)) // false

//// Что выведет этот код: alert( null || 2 &amp;&amp; 3 || 4 ); 
console.log(null || 2 && 3 || 4 ); //3, сначало проверяем И 2 && 3 , получили на 3 , Затем проверяем ИЛИ
// null || 3  из сравнения И //здесь запнулись на лди , остается 3 , далее || 3 или 4 , запнулись на правде . это 3

////Правда ли что a == b //Нет
a = [1, 2, 3]; b = [1, 2, 3]; 
if(a==b){console.log("Правда")} else console.log("Ложь"); //Ложь

//// Что выведет этот код: alert( +&quot;Infinity&quot; ); 
console.log(+"Infinity"); // Infinity

//// Верно ли сравнение: &quot;Ёжик&quot; &gt; &quot;яблоко&quot; // не верно
if("Ёжик" > "яблоко"){console.log("Правда")} else console.log("Ложь"); //Ложь

//// Чему равно 0 || &quot;&quot; || 2 || undefined || true || falsе // false
console.log(0 || "" || 2 || undefined || true || falsе ); // 2