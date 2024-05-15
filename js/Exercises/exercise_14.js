'use strict'

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi','Tom','Olga','Igor'];

function sortStudentsByGroups(arr) {
    let groupArr = [];
    let strArr = [];
    let str = '';
    //let index = Math.floor(arr.length/3)*3; // так как групп только 3, то этот расчет не актуален

    for (let i = 0; i < arr.sort().length; i+=3){
        if(i < 9) // задаем сразу кол-во игроков в 3-х командах 3*3
        groupArr.push(arr.slice(i, i + 3)); }

    for (let i = 9; i < arr.sort().length; i++){
     strArr.push(arr[i]);         
    };
    str += `Оставшиеся студенты: ${strArr.length === 0 ? '-' : strArr.join(', ')}`;

   groupArr.push(str);
   return groupArr;
}

//sortStudentsByGroups(students);
console.log(sortStudentsByGroups(students));