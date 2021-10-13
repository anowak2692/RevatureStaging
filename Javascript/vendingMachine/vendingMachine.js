let VendingMachine = module.exports = {};

VendingMachine.products = [
    {
        "number": 7,
        "name": "Crackers",
        "price": 120
    },
    {
        "number": 1,
        "name": "Pretzels",
        "price": 100
    }];

VendingMachine.vend = (inputMoney, productNum) => {
    let product;
    let change = [];
    for(prod of VendingMachine.products){
        if(prod.number === productNum){
            product = prod;
            break;
        }
    }
    //If the product doesn't exist return a string asking for a valid number
    if(!product){
        return "Enter a valid product number.";
    }
    if(prod.price > inputMoney){
        return "Not enough money for this product.";
    }
    let changeAmount = inputMoney - prod.price;
    while(changeAmount >= 10){
        let coinValue = 10;
        if(changeAmount >= 500){
            coinValue = 500;
        }
        else if(changeAmount >= 200){
            coinValue = 200;
        }
        else if(changeAmount >= 100){
            coinValue = 100;
        }
        else if(changeAmount >= 50){
            coinValue = 50;
        }
        else if(changeAmount >= 20){
            coinValue = 20;
        }
        let numCoins = Math.floor(changeAmount/coinValue);
        for(let i = 0; i < numCoins; i++){
            change.push(coinValue);
        }
        changeAmount = changeAmount % coinValue;
    }

    return {
        "product": prod.name,
        "change": change
    }
}