/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    if(grid.length === 0) return 0
    
    const d = [[-1, 0], [1 , 0], [0, 1], [0, -1]]
    
    let maxi = grid.length
    let maxj = grid[0].length
    
    let parent = []
    let rank = []

    let findRoot = (i) => {
        if(parent[i] === i) {
            return i    
        }
        return this.find(parent[i])
    }
      
    let count = 0
    
    let union = (i, j) => {
        if(i === j) return

        let i_parent = findRoot(i)
        let j_parent = findRoot(j)
        
        if(i_parent === j_parent) return

        if(rank[i_parent] > rank[j_parent]) {
            parent[j_parent] = i_parent
            rank[i_parent] += rank[j_parent]   
        } else {
            parent[i_parent] = j_parent
            rank[j_parent] += rank[i_parent]   
        }
        count--
    }

    for(let i = 0; i< maxi; i++) {
        for(let j = 0; j < maxj; j++) {
            if(grid[i][j] === '1') {
                parent.push(i * maxj + j)
                count++
            } else {
                parent.push(-1)
            }
            rank.push(1)
        }
    }
    
    for(let i = 0; i < maxi; i ++) {
        for(let j = 0; j < maxj; j++) {
            if(grid[i][j] === '1') {
                for(let [_x, _y] of d) {
                    let x = i + _x, y = j + _y
                    if(x < 0 || x >= maxi || y < 0 || y >= maxj) continue
                    if(grid[x][y] === '0') continue
                    union(i * maxj + j, x * maxj + y)            
                }
            }
        }
    }

    return count
    
};