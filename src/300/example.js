/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {

    let dp = []
    let max = 0

    for(let i = 0; i < nums.length; i++) {
        dp[i] = 1
        for(let j = i; j >= 0; j--) {
            if(nums[j] < nums[i]) {
                dp[i] = Math.max(dp[j] + 1, dp[i])  
            }
        }

        max = Math.max(dp[i], max)
    }
    return max
};