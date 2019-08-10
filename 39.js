/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = []
    
    candidates = candidates.sort((a,b) => a - b)
    
    dfs(candidates,result,[],target,0)
    
    return result
    
};


var dfs = (candidates, result, path, target, num) => {
    if(target === 0) {
        result.push(path)
        return
    }
    if(target < candidates[0]) {
        return
    }
    for(let i = num; i < candidates.length && candidates[i] <= target; i++) {
        let cpath = [...path]
        cpath.push(candidates[i])
        dfs(candidates, result, cpath, target- candidates[i], i)
    }
    
}