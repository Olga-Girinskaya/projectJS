// // "use strict"
// // //lesson 13 

// // // 1
// // //alert("Hello!");

// // //2
// // //const result = confirm("Are you here?");

// // //3
// // // const answer = +prompt("Сколько тебе лет?","18");
// // // console.log(answer);
// // // console.log(typeof(answer))
// // // console.log(answer + 5);

// // //4
// // //const answer =[];

// // // answer[0]= prompt("Как твое имя?","");
// // // answer[1]= prompt("Как твоя фамилия?","");
// // // answer[2]= prompt("Сколько тебе лет?","");

// // // document.write(answer);
// // // //console.log(answer);

// // //console.log(typeof answer);


// // //lesson 14

// // // const category = "toys";

// // // console.log("https://someurl.com/"+category + "/" + "5" );
// // // console.log(`https://someurl.com/${category}/4`);

// // // const user = "Olga";
// // // alert(`Привет, ${user}`);

// // //lesson 15
// // console.log("arr" + "- object"); // вернет arr- object
// // console.log(4 + "- object");  // вернет 4- object
// // console.log(4 + "5");  // вернет 45
// // console.log(4 + +"5");  // вернет 9 (+ преобразует строку в number)

// // let incr = 10,
// //     decr = 10; 

// // //     //incr++ ; // постфиксный инкремент, увеличение на 1 после
// // //     //decr--; // постфиксный декремент, уменьшение на 1 после 

// // //    // console.log(incr); // вернет 11
// // //    // console.log(decr);  // вернет 9


// // //     ++incr ; // префиксный инкремент, увеличение на 1 до
// // //     --decr; // префиксный декремент, уменьшение на 1 до

// // //     console.log(incr); // вернет 11
// // //     console.log(decr);  // вернет 9

// // console.log(5%2); // вернет остаток от деления , это 1 
// // console.log(2*4==8); //  == равернство, вернет true - верно
// // // со строкой
// // console.log(2*4=="8"); //  == равернство, вернет true - верно, потому что == сравнивает только значение без типа данных

// // console.log(2*4===8); // === строгое равернство,  вернет true - верно, полное совпадение и значение и тип данных
// // console.log(2*4==="8"); //  === строгое равернство, вернет false - ложь, потому что тип данных не совпадает

// // // логическое И , записывается как 2 амперсанта &&
// // // логическое ИЛИ , как 2 вертикальные черточки,  ||
// // const isChecked = true,
// //       isClose = true,
// //       isOpen = false;

// // console.log(isChecked && isClose); // true
// // console.log(isChecked || isClose); // true

// // console.log(isChecked && isOpen);  // false
// // console.log(isChecked || isOpen); // true

// // // оператор отрицания !
// // console.log(isChecked && !isClose);  // false
// // console.log(isChecked || !isOpen); // true

// // // оператор не равенства != , !== - строгое неравенство с типом данных

// // console.log(2+2*2 != '6'); // false
// // console.log(2+2*2 !== '6'); // true, потому что ответ является строкой и тип данных не совпаает, даже если совпадает значение
// // console.log(2+2*2 !== 8); // true
// // console.log(2+2*2 != "8"); // true


// //lesson 20
// const num = 50;

// // if(num<49){ 
// //     console.log("Error")
// // } else if(num>100) {
// // console.log("Много")
// // } else {
// //     console.log("OK!")
// // };

// // // Тернарный оператор
// // (num== 50) ? console.log("OK!") :  console.log("Error");

// // // бинарный оператор это + , например 4+4
// // // унарный оператор , начинается на  +,  +"4" , работает только с одной строкой

// switch(num){
//     case 49: 
//     console.log("Мало!");
//     break;
//     case 100 : 
//     console.log("Много!");
//     break;
//     case 50: 
//     console.log("В точку!");
//     break;
//     default:
//         console.log("Не в этот раз!");
//     break;
// }


