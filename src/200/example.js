/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    if(grid.length === 0) return 0
    
    const di = [-1, 1, 0, 0]
    const dj = [0, 0, 1, -1]
    
    let maxi = grid.length
    let maxj = grid[0].length
    
    let isVisited = new Set()
        
    let validate = (i, j) => {
        if(i < 0 || i >= maxi || j < 0 || j >= maxj)
            return false
        if(grid[i][j] === '0' || isVisited.has(`(${i},${j})`))
            return false
        
        return true
    }
    
    let dfs = (x, y) => {
        if(!validate(x, y))
            return 0
        
        isVisited.add(`(${x},${y})`)
        
        for(let i of Array(4).keys()) {
            dfs(x + di[i], y + dj[i])       
        }
        
        return 1
    }
    let count = 0
    for(let i = 0;i < maxi; i++) {
        for(let j = 0;j < maxj; j++) {
            count += dfs(i, j)  
        }  
    }
    
    return count
    
};