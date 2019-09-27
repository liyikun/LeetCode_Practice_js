/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    
    let n = nums.length
    
    if(n < 2) return 0

    let preMax = nums[0]
    let curMax = nums[0]
    let step = 1
    for(let i = 0; i < n; i++) {
        if(i > curMax) {
            step++
            curMax = preMax
        }
        if(nums[i] + i > preMax) preMax = nums[i] + i
    }
  
    return step
};