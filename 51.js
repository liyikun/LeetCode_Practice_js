/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let col = new Set(),d1 = new Set(),d2 = new Set()
    let result = []
    let dfs = (level, cur) => {
        if(level >= n) {
            result.push(cur)
            return
        }
        for(let j = 0;j < n; j++) {
            if(col.has(j) || d1.has(j + level) || d2.has(j - level)) {
                continue;
            }
            col.add(j)
            d1.add(j + level)
            d2.add(j - level)
            dfs(level + 1, [...cur, j])
            col.delete(j)
            d1.delete(j + level)
            d2.delete(j - level)
        }
    }
    dfs(0, [])
    return result.map((v) => {
        return [...new Array(n)].map((_, i) => {
            let index = v[i]
            return new Array(index + 1).join('.') + 'Q' + new Array(n - index).join('.')
        })
    })
};