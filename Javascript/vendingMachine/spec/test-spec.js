const VendingMachine = require("../vendingMachine");

describe("Tests for VendingMachine", () => {
    it('should return an object with the properties of \"product\": Crackers and \"change\": [50, 20, 10] when given 200 cents and product number 7 as input', () => {
        let result = VendingMachine.vend(200, 7);
        expect(result).toEqual({
            "product" : "Crackers",
            "change" : [50, 20, 10]
        });
    })

    it('should return an \"Enter a valid product number.\" when given an invalid product number as input', () => {
        let result = VendingMachine.vend(500, 0);
        expect(result).toBe("Enter a valid product number.");
    })

    it('should return an \"Not enough money for this product.\" when given an amount of money that is less than the product price as input', () => {
        let result = VendingMachine.vend(90, 1);
        expect(result).toBe("Not enough money for this product.");
    })
})