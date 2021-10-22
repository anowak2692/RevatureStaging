const RobotTracker = require("../robotTracker");

describe("Test suite for RobotTracker", () => {
    it('should return {-10, 10} when given 20, 30, 10, 40 as input', () => {
        let result = RobotTracker.track(20, 30, 10, 40);
        expect(result).toEqual({x: -10, y: 10});
    })

    it('should return {0, 0} when given nothing as input', () => {
        let result = RobotTracker.track();
        expect(result).toEqual({x: 0, y: 0});
    })

    it('should return {20, -20} when given -10, 20, 10 as input', () => {
        let result = RobotTracker.track(-10, 20, 10);
        expect(result).toEqual({x: 20, y: -20});
    })
})