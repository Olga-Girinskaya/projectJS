'use strict';

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);

const compose = (...fns) => 
    (x) => 
    fns.reduceRight((res, fn) => fn(res), x);

const discountCompose = compose(
    normalizePrice,
    divide100,
    multiply20
  );

console.log(discountCompose(200.0));

// 2
const add1 = function(a){return a + 1}
const addAll3 = function(a,b,c){return a + b + c}

const composeWithArgs =  (...fns) => 
    fns.reduceRight((res, fn) => (...args) => fn(res(...args)));  


  console.log(composeWithArgs(3,2,3));