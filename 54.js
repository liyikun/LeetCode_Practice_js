/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let n = matrix.length;
    if(n === 0) return []
    let rowL = matrix[0].length
    let result = []
    let isMarked = [...new Array(n + 1)].map(_ => [... new Array(rowL + 1)].map(_ => false))
    
    let route = (i, j) => [[i, j + 1],[i + 1, j],[i, j - 1],[i - 1, j]]

    let i = 0, j = 0;

    let index = 0
    
    while(!isMarked[i][j] && i < n && i >= 0 && j < rowL && j >= 0) {
        let row = matrix[i]
        isMarked[i][j] = true    
        result.push(matrix[i][j])
        let [ni, nj] = route(i, j)[index % 4]
        if(!(ni < n && ni >= 0 && nj < rowL && nj >= 0 && !isMarked[ni][nj])) {
            index++
        } 
        [i, j] = route(i, j)[index % 4]
    }

    return result

};
