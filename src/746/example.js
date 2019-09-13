/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    if(cost.length < 2) return 0

    let preStep = cost[1]
    let preTwoStep = cost[0]

    cost.push(0)
    
    for(let i = 2; i < cost.length ; i++) {
        let cur = Math.min(preStep, preTwoStep) + cost[i] 
        preTwoStep = preStep
        preStep = cur  
    }

    return preStep
};