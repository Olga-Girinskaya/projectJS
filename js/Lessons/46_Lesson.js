'use strict'

// // // функция возведения в степень
// // function pow(x, n){
// //     let result = 1;

// //     for(let i=0; i<n; i++){
// //         result *=x;
// //     }
// //     return result;
// // }

// function pow(x, n){
//     if (n==1){  // n==1 Это база рекурсии, на ней сразу завершается функция, оьязательное условие иначе функция будет бесконечна
//         return x;
//     } else {
//         return  x * pow(x, n-1)  // шаг рекурсии - это очередной запуск функции pow(x, n-1)  с n-1, 
                                   // глубина рекурсии (Здесь это число n)- общее кол-во вызовов функции вместе с самым первым
//     } 
// }

// // pow(2,1);//2
//  console.log(pow(4,3)); //64
// // pow(2,3); //8
// // pow(2,4); // 16

////
let students = {
    js: [{
        name: 'John',
        progress: 100
    },
    {
            name: 'Ivan',
            progress: 60
    }],
    
    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        },{
        name: 'Ann',
        progress: 18
    }],
    pro:[{
        name: 'Sam',
        progress: 10
    }]
    //// добавляем объект
    ////Будет работать только с рекурсией, так как в итерацинном способе мы не при=едусмативали такую структуру
    // ,
    // semi: {
    //     students: [{
    //         name: 'Test',
    //         progress: 100  
    //     }]}
}
};

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for(let course of Object.values(data)){
//         if(Array.isArray(course)) { // Проверяем что это массив
//             students +=course.length; // подсчитали студентов у объекта js 

//             for(let i = 0; i < course.length; i++){
//                 total += course[i].progress;
//             }
//         }  else {
//             for(let subCours of Object.values(course)){
//                 students +=subCours.length;

//                 for(let i = 0; i < subCours.length; i++){
//                     total += subCours[i].progress;
//                 }
//         }     
//     }
// }
//     return total/students;

// };

//console.log(getTotalProgressByIteration(students)); // 41.6

//// решение при помощи рекурсии

function getTotalProgressRecursion(data) {
   if(Array.isArray(data)) { 
    let total = 0;
    
    for(let i = 0; i < data.length; i++){
        total += data[i].progress;
    }
    return [total, data.length]
} else {
    let total = [0, 0];

    for(let subData of Object.values(data)) {
        const subDaraArr = getTotalProgressRecursion(subData);
        total[0] += subDaraArr[0];
        total[1] += subDaraArr[1];

    }
    return total;
}
}

const result = getTotalProgressRecursion(students);
console.log(result[0]/ result[1]);