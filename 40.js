/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    
    if(candidates.length === 0) return []
    
    let result = []
    
    candidates = candidates.sort((a,b) => (a - b))
    
    dfs(candidates,result, [], target, 0)
    
    return result
    
    
};


var dfs = (candidates,result,path, target, num) => {
    if(target === 0) {
        result.push(path)
        return
    }
    if(target < candidates[0]) {
        return
    }
    
    for(let i = num; i < candidates.length && target - candidates[i] >= 0; i++) {
        if(i > num && candidates[i] === candidates[i - 1]) {
            continue
        }
        let ppath = [...path, candidates[i]]
        dfs(candidates,result,ppath,  target - candidates[i], i + 1)
    }
}