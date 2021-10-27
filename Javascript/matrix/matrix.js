const matrixBuilder = function(dimension){
    if(dimension === 0){
        return "[[]]";
    }
    if(dimension < 0 ||
        !Number.isInteger(dimension) ){
            return -1;
        }
    let matrix = [];
    for(let i = 0; i < dimension; i++){
        let row = [];
        if(i === 0 || i === (dimension - 1)){
            for(let j = 0; j < dimension; j++){
                row.push("#");
            }
        }
        else{
            row.push('#');
            for(let j = 1; j < (dimension - 1); j++){
                row.push(",");
            }
            row.push('#');
        }
        matrix.push(row);
    }
    return matrix;
}

const matrixOutput = function(matrix){
    if(!Array.isArray(matrix)){
        console.log(matrix);
    }
    else{
        for(let row of matrix){
            let rowString = "";
            for(let column of row){
                rowString += column + " ";
            }
            console.log(rowString);
        }
    }   
}

const m1 = matrixBuilder(1);
const m2 = matrixBuilder(2);
const m4 = matrixBuilder(4);
matrixOutput(m1);
console.log();
matrixOutput(m2);
console.log();
matrixOutput(m4);
console.log();
matrixOutput(matrixBuilder(0));
matrixOutput(matrixBuilder("4"));
matrixOutput(matrixBuilder(-1));
matrixOutput(matrixBuilder(3.2));