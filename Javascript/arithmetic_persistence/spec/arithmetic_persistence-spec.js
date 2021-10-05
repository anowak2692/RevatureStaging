const ArithmeticPersistence = require("../arithmetic_persistence");

describe('Test suite for additive and multiplicative persistence functions', () => {
    it('Should return an array of the digits when getArrayOfDigits is called with an integer argument', () => {
        let result = ArithmeticPersistence.getArrayOfDigits(123456);
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    })

    it('Should return the additive persistence value when additivePersistence is called', () => {
        let result = ArithmeticPersistence.additivePersistince(123456);
        expect(result).toBe(2);
    })

    it('Should return the multiplicative persistence value when multiplicativePersistence is called', () => {
        let result = ArithmeticPersistence.multiplicativePersistince(123456);
        expect(result).toBe(2);
    })
})