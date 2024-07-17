'use strict';

//  const shops = [
//    {rice: 500},
//    {oil: 200},
//    {bread: 50}
//  ];

//  const map = new Map([
//    [{paper: 400}, 4000]
//  ]);

// //  // 1  вариант заполнения map
// //  map.set(shops[0], 5000);
// //  map.set(shops[1], 15000);
// //  map.set(shops[2], 25000);



// //  // 2  вариант заполнения map (цепочка)
// //  map.set(shops[0], 5000)
// //     .set(shops[1], 15000)
// //     .set(shops[2], 25000);



// //3 вариант

// const budjet = [5000, 15000, 25000];

// shops.forEach((shop, i) => {
//    map.set(shop, budjet[i]);
// })

//     console.log(map);   // Map(3) {
//                         // { paper: 400 } => 4000, 
//                         // { rice: 500 } => 5000,
//                         // { oil: 200 } => 15000,
//                         // { bread: 50 } => 25000
//                         //}

// // console.log(map.get(shops[0])); //  5000 - получить значение объекта
// // console.log(map.has(shops[0])); // проверяем есть л оюъект 0 в мапке (true/false)
// // map.delete(key); // удалить ключи в мапке
// // map.clear(); // очистить мапку
// // map.size; // 4 - текущий размер
// // map.keys(); //  возвращает объект по ключам // [Map Iterator] { { paper: 400 }, { rice: 500 }, { oil: 200 }, { bread: 50 } }


// // // { paper: 400 }
// // // { rice: 500 }
// // // { oil: 200 }
// // // { bread: 50 }
// // for(let shop of map.keys()) {
// //    console.log(shop);
// // };

// // // получить все товары
// // const goods = [];
// // for (let shop of map.keys()){
// //    goods.push(Object.keys(shop)[0]);
// // }
// // console.log(goods); //[ 'paper', 'rice', 'oil', 'bread' ]


// // // получить значния
// // // 4000
// // // 5000
// // // 15000
// // // 25000
// // for (let price of map.values()){
// //    console.log(price);
// // }


// // // [ { paper: 400 }, 4000 ]
// // // [ { rice: 500 }, 5000 ]
// // // [ { oil: 200 }, 15000 ]
// // // [ { bread: 50 }, 25000 ]
// // for (let price of map.entries()){
// //    console.log(price);
// // }


// // // 4000 { paper: 400 }
// // // 5000 { rice: 500 }
// // // 15000 { oil: 200 }
// // // 25000 { bread: 50 }
// // for (let [shop, price] of map.entries()){
// //    console.log(price, shop);
// // }



// // { paper: 400 } 4000
// // { rice: 500 } 5000
// // { oil: 200 } 15000
// // { bread: 50 } 25000
// map.forEach((value, key, map) => {
//    console.log(key, value);
// });
////////////////////////////////////////////


const user = {
   name: 'Alex',
   surname: 'Smith',
   birthday: '20/04/1993',
   showMtPublicData: function(){
      console.log(`${this.name} ${this.surname}`);
   }
};

 const userMap = new Map(Object.entries(user));
// console.log(userMap);
// // Map(4) {
// //    'name' => 'Alex',
// //    'surname' => 'Smith',
// //    'birthday' => '20/04/1993',
// //    'showMtPublicData' => [Function: showMtPublicData]
// //  }

// получаем обычный объект
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);
// {
//    name: 'Alex',
//    surname: 'Smith',
//    birthday: '20/04/1993',
//    showMtPublicData: [Function: showMtPublicData]
//  }
 