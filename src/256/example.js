/**
 * @param {number[][]} costs
 * @return {number}
 */
var minCost = function(costs) {
    let preRed = 0
    let preGreen = 0
    let preBlue = 0

    for(let i = 0; i < costs.length; i++) {
        let cost = costs[i]
        let [p1, p2, p3] = [preRed, preBlue, preGreen]
        preRed = Math.min(p2, p3) + cost[0]
        preBlue = Math.min(p1, p3) + cost[1]
        preGreen = Math.min(p1, p2) + cost[2]
    }

    return Math.min(preBlue, preGreen, preRed)
};