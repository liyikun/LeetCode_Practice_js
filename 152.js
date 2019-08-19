/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let n = nums.length
    if(n === 0) return 0
    
    let dp = [0, 0].map(_ => [0,0])
    dp[0][0] = nums[0]
    dp[0][1] = nums[0]
    let max = nums[0]
    
    for(let i = 1;i < nums.length;i++) {
        let num = nums[i]
        let x = i % 2 ,y = (i - 1) % 2
        dp[x][0] = Math.max(dp[y][0] * num, dp[y][1] * num, num)
        dp[x][1] = Math.min(dp[y][1] * num, dp[y][0] * num, num)

        max = Math.max(dp[x][0], max)
    }
    
    return max
};