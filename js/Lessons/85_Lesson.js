'use strict';


// console.log("Запрос данных...");

// //resolve
// // const req = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log('Подготовка данных ...');

// //         const product = {
// //             name: 'TV',
// //             price: 2000
// //         };

// //         resolve(product);
// //     }, 2000);
// // });

// // req.then((product) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             product.status = 'order';
// //             resolve(product);
// //         }, 2000);
// //     }).then(data => {
// //         data.modify = true;
// //         return data;
// //     }).then(data => {
// //         console.log(data);
// //     });
// // });


// // Получим 
// // Запрос данных...
// // Подготовка данных ...
// // { name: 'TV', price: 2000, status: 'order', modify: true }


// // //reject

// // const req = new Promise((resolve, reject) => {
// //     setTimeout(() => {
// //         console.log('Подготовка данных ...');

// //         const product = {
// //             name: 'TV',
// //             price: 2000
// //         };

// //         resolve(product);
// //     }, 2000);
// // });

// // req.then((product) => {
// //     return new Promise((resolve, reject) => {
// //         setTimeout(() => {
// //             product.status = 'order';
// //             reject();
// //         }, 2000);
// //     }).then(data => {
// //         data.modify = true;
// //         return data;
// //     }).then(data => {
// //         console.log(data);
// //     }).catch(() => {
// //         console.error('Произошла ошибка...')
// //     });
// // });


// // // Запрос данных...
// // // Подготовка данных ...
// // // Произошла ошибка...

// // finally
// const req = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Подготовка данных ...');

//         const product = {
//             name: 'TV',
//             price: 2000
//         };

//         resolve(product);
//     }, 2000);
// });

// req.then((product) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             product.status = 'order';
//             resolve(product);
//         }, 2000);
//     }).then(data => {
//         data.modify = true;
//         return data;
//     }).then(data => {
//         console.log(data);
//     }).catch(() => {
//         console.error('Произошла ошибка...')
//      }).finally(()=> {
//         console.log('finally')
//     });
// });


// // Подготовка данных ...
// // { name: 'TV', price: 2000, status: 'order', modify: true }
// // finally



const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

////1 вариант
// test(1000).then(() => {
//     console.log('1000 ms');
// });

// test(2000).then(() => {
//     console.log('2000 ms');
// })

//// 2 варианс с Проомис - промис ждет, пока выполняться все test и только потом пойжет на функцию за then
 Promise.all([test(1000), test(2000)]).then(()=> {
    console.log('All')
 });


 // rase (райс)- выполняет свои действия(функция за then) После окончания выполнения первого прмиса (test())
 Promise.race([test(1000), test(2000)]).then(()=> {
    console.log('One')
 });
 