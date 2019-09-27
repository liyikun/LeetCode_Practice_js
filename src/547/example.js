/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    let len = M.length
    if(len === 0) return 0
    
    let parent = [...new Array(len).keys()]
    let rank = [...new Array(len)].map(_ => 1)

    let findRoot = (i) => {
        if(parent[i] === i) {
            return i    
        } 
        let t = parent[i]
        while(t !== parent[t]) {
            t = parent[t]
        }
        return t
    }
      
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
    }

    for(let i = 0; i < len; i++) {
        for(let j = 0; j <= i; j++) {
            if(M[i][j] === 1) {
                union(i, j)
            }
        }
    }
    
    let count = parent.reduce((pre,cur, index) => {
        return cur === index ? pre + 1 : pre
    }, 0)
    return count
};