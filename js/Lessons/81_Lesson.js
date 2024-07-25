'use strict';

// const persone = {
//     name: "Alex",
//     tel: "+75552222222"
// };

// //Преобразуем в JSON 
// console.log(JSON.stringify(persone)); // {"name":"Alex","tel":"+75552222222"}

// //Преобразуем из JSON в объект
// console.log(JSON.parse(JSON.stringify(persone))); //  { name: 'Alex', tel: '+75552222222' }

const persone = {
    name: "Alex",
    tel: "+75552222222",
    parens: {
        mom: 'Olga',
        dad: 'Mile'
    }
};

// можно сделать клон объекта и его изменять
const clone =  JSON.parse(JSON.stringify(persone));
clone.parens.mom = 'Ann';

console.log(persone);   // {
                        // name: 'Alex',
                        //  tel: '+75552222222',
                        //    parens: { mom: 'Olga', dad: 'Mile' }
                        //   }

 console.log(clone);    // {
                        //     name: 'Alex',
                        //     tel: '+75552222222',
                        //     parens: { mom: 'Ann', dad: 'Mile' }
                        //   }
                        

