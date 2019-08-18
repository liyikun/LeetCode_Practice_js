/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let len = triangle.length
    if(len < 1) return 0
    let mini = triangle[len - 1]
    
    for(let i = len - 2; i >= 0 ; i--) {
        for(let j = 0; j < triangle[i].length; j++) {
            mini[j] = triangle[i][j] + Math.min(mini[j],mini[j + 1])
        }
    }
    
    return mini[0]
};