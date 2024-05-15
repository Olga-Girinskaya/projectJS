'use strict'

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}

function isBudgetEnough(data) {
    let square = 0;
    // вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;
    data.shops.forEach(item=>{
        square += item.length * item.width;
    })
    // вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;
    let volume = data.height * square;
    // определение того, хватает ли бюджета на оплату такого объема;
    let sum = volume * data.moneyPer1m3;
    if(sum <= data.budget){
        return 'Бюджета достаточно';;
    }
    else {
        return 'Бюджета недостаточно';
    }
}

console.log(isBudgetEnough(shoppingMallData));