/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    if(n === 0) return 0
    if(n === 1) return 1
    if(n === 2) return 2

    let preStep = 2
    let pre2Step = 1

    for(let i = 3; i <= n ; i++) {
        let curStep = preStep + pre2Step
        pre2Step = preStep 
        preStep = curStep
    }

    return preStep
    
};