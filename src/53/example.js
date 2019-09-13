/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    
    let max = Number.MIN_SAFE_INTEGER
    let result = 0
    for(let i = 0; i < nums.length ; i++) {
        result += nums[i]
        max = Math.max(result, max)
        if(result < 0) result = 0
    }
    return max
};