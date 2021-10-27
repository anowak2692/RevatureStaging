const Hashtags = require("../hashtags");

describe('Tests for the Hashtags', () => {
    it('should return ["#avocado", "#became", "#global"] when given "How the Avocado Became the Fruit of the Global Trade" as input', () => {
        let hashtags = Hashtags.getHashTags("How the Avocado Became the Fruit of the Global Trade");
        expect(hashtags).toEqual(["#avocado", "#became", "#global"]);
    })

    it('should return ["#christmas", "#probably", "#will"] when given "Why You Will Probably Pay More for Your Christmas Tree This Year" as input', () => {
        let hashtags = Hashtags.getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year");
        expect(hashtags).toEqual(["#christmas", "#probably", "#will"]);
    })

    it('should return ["#surprise", "#parents", "#fruit"] when given "Hey Parents, Surprise, Fruit Juice Is Not Fruit" as input', () => {
        let hashtags = Hashtags.getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit");
        expect(hashtags).toEqual(["#surprise", "#parents", "#fruit"]);
    })

    it('should return ["#visualizing", "#science"] when given "Visualizing Science" as input', () => {
        let hashtags = Hashtags.getHashTags("Visualizing Science");
        expect(hashtags).toEqual(["#visualizing", "#science"]);
    })

    it('should return ["#visualizing", "#science"] when given "Visualizing: Science" as input', () => {
        let hashtags = Hashtags.getHashTags("Visualizing: Science");
        expect(hashtags).toEqual(["#visualizing", "#science"]);
    })
})