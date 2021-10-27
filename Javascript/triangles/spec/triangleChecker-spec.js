const Triangles = require("../triangleChecker");

describe("Test suite for Triangle class", () => {
    it('should return true when given [1, 1, 1] and [1, 1, 1]', () => {
        let result = Triangles.checkFit([1, 1, 1], [1, 1, 1]);
        expect(result).toBeTrue();
    })

    it('should return true when given [1, 1, 1] and [2, 2, 2]', () => {
        let result = Triangles.checkFit([1, 1, 1], [2, 2, 2]);
        expect(result).toBeTrue();
    })

    it('should return false when given [1, 2, 3] and [1, 2, 2]', () => {
        let result = Triangles.checkFit([1, 2, 3], [1, 2, 2]);
        expect(result).toBeFalse();
    })

    it('should return false when given [1, 2, 4] and [1, 2, 6]', () => {
        let result = Triangles.checkFit([1, 2, 4], [1, 2, 6]);
        expect(result).toBeFalse();
    })

    it('should return true when given [50, 36, 27] and [30, 40, 50]', () => {
        let result = Triangles.checkFit([50, 36, 27], [30, 40, 50]);
        expect(result).toBeTrue();
    })
})