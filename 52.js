/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let count = 0
    let dfs = (row,col,d1,d2) => {
        if(row >= n) {
            count++
            return
        }
        
        let bits = (~(col | d1 | d2) & ((1 << n) - 1))
        while(bits > 0) {
             p = bits & -bits
             dfs(row + 1, (col | p), ((d1 | p) << 1), ((d2 | p) >> 1))
             bits &= (bits- 1)
        }
    }
    dfs(0,0,0,0)
        
    return count
};