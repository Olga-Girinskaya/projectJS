'use strict'

//  // function setOptions(height, width, ...additional) {
//     console.log(height, width, ...additional)
// }
// setOptions(400, 500, 'red', 'top'); // 400 500 red top


// //
// function getSum(a, b) {
//     function sum() {
//         console.log(this.a);
//         return a + b;
//     }
 
//     console.log(sum());
// }
 
// getSum(4, 5); // будет ошибка

// //
// class Slider {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
 
//     showSliderWidth() {
//         console.log(this.width);
//     }
// }
 
// const slider = new Slider('500px', '150px');
 
// slider.showSliderWidth(); // 500px

// //
// const urlObj = {
//     protocol: 'https',
//     domain: 'mysite.com',
//     showCurrentURL: function() {
//         const extractCurrDomain = () => {
//             return this.domain;
//         }
//         const extractCurrProtocol = () => {
//             return this.protocol;
//         }
 
//         console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
//     }
// }
 

//     urlObj.showCurrentURL(); //https://mysite.com

    //
    const urlObj = {
        protocol: 'https',
        domain: 'mysite.com'
    }
     
    function showCurrentURL() {
        const extractCurrDomain = () => {
            return this.domain;
        }
        const extractCurrProtocol = () => {
            return this.protocol;
        }
     
        console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
    }
     
    const url = showCurrentURL.bind(urlObj);
     
    console.log(url);