const Triangles = module.exports = {};

Triangles.checkFit = (triangle1, triangle2) => {
    if(!isValidTriangle(triangle1) || !isValidTriangle(triangle2)){
        return false;
    }
    const biggestSide1 = Math.max([...triangle1]);
    const biggestSide2 = Math.max([...triangle2]);
    if(biggestSide1 > biggestSide2){
        return false;
    } 
    for(let i = 0; i < 3; i++){
        if(triangle1[i % 3] <= triangle2[0] && 
            triangle1[(1 + i) % 3] <= triangle2[1] &&
            triangle1[(2 + i) % 3] <= triangle2[2]){
                return true;
        }
    }
    return false;
}

function isValidTriangle(triangle){
    if(triangle[0] + triangle[1] <= triangle[2] ||
        triangle[0] + triangle[2] <= triangle[1] ||
        triangle[1] + triangle[2] <= triangle[0]){
            return false;
    }
    else { return true };
}