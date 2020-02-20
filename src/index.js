
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if ( !Array.isArray(matrix) ||  matrix.length === 0) return [];
    let array = [];

    for ( let i = 1; i < matrix.length; i += 2 ) {
      matrix[i].reverse();
    }
  
    for ( let i = 0; i < matrix.length; i++ ) {
        for ( let j = 0; j < matrix[i].length; j++ ) {
            array.push(matrix[i][j]);
        }
    }

    return array;
}
