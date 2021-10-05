let ArithmeticPersistence = module.exports = {};

ArithmeticPersistence.additivePersistince = function(num, counter = 0){
    let digits = this.getArrayOfDigits(num);
    let sum = digits.reduce((prev, current) => prev + current);
    counter++;
    if(sum >= 10){
        return this.additivePersistince(sum, counter);
    }
    else{
        return counter;
    }
}

ArithmeticPersistence.multiplicativePersistince = function(num, counter = 0){
    let digits = this.getArrayOfDigits(num);
    let product = digits.reduce((prev, current) => prev * current);
    counter++;
    if(product >= 10){
        return this.multiplicativePersistince(product, counter);
    }
    else{
        return counter;
    }
}

ArithmeticPersistence.getArrayOfDigits = function(num){
    let numString = num.toString();
    return Array.from(numString, (char) => parseInt(char));
}