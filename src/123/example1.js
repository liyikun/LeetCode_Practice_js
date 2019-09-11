/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let n = prices.length
    
    if(n < 2) return 0
    
    let dp = [... new Array(n)].map(_ => [... new Array(3)].map(_ => [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER])) 
    
    dp[0][0][0] = 0 
    dp[0][0][1] = -prices[0]
    let max = 0
    for(let i = 1; i < n; i++) {
        dp[i][0][0] = dp[i - 1][0][0]
        dp[i][0][1] = Math.max(dp[i - 1][0][1], dp[i - 1][0][0] - prices[i])

        dp[i][1][0] = Math.max(dp[i - 1][1][0], dp[i - 1][0][1] + prices[i])
        dp[i][1][1] = Math.max(dp[i - 1][1][1], dp[i - 1][1][0] - prices[i])

        dp[i][2][0] = Math.max(dp[i - 1][2][0], dp[i - 1][1][1] + prices[i])

        max = Math.max(max, dp[i][2][0],dp[i][1][0],dp[i][0][0])
    }

    return max
};