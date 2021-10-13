const IngExtractor = require("../index");

describe('Tests for the IngExtractor', () => {
    it('should return \"coming bringing Letting\" when given \"coming bringing Letting sing\" as input', () => {
        let extractedWords = IngExtractor.extract("coming bringing Letting sing");
        expect(extractedWords).toEqual(["coming", "bringing", "Letting"]);
    })

    it('should return \"going dOing\" when given \"going Ping, king sHrink dOing\" as input', () => {
        let extractedWords = IngExtractor.extract("going Ping, king sHrink dOing");
        expect(extractedWords).toEqual(["going", "dOing"]);
    })

    it('should return an empty array when given \"zing went ring, ding wing SINk\" as input', () => {
        let extractedWords = IngExtractor.extract("zing went ring, ding wing SINk");
        expect(extractedWords).toEqual([]);
    })
})