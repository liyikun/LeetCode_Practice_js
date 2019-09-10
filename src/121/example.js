/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let max = 0
    let dp = []
    
    dp[0] = 0

    let min = prices[0]

    for(let i = 1; i < prices.length;i++) {
        dp[i] = Math.max(dp[i - 1], prices[i] - min)

        max = Math.max(dp[i], max)
        min = Math.min(min, prices[i])
    }

    return max
};