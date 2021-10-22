const RobotTracker = module.exports = {};

RobotTracker.track = (...movements) => {
    let position = {x: 0, y: 0};
    let directionTracker = 0;
    for(let movement of movements){
        let direction = directionTracker % 4;
        switch(direction){
            case 0:
                position.y += movement;
                break;
            case 1:
                position.x += movement;
                break;
            case 2:
                position.y -= movement;
                break;
            case 3:
                position.x -= movement;
                break;
        }
        directionTracker++;
    }
    return position;
}