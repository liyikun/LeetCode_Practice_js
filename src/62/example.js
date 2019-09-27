/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let dp = [...new Array(m)].map(_ => [])

    dp[0][0] = 1

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(i === 0) {
                dp[i][j] = 1
            } else if(j === 0) {
                dp[i][j] = 1
            } else {
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
            }
        }
    }

    return dp[m - 1][n - 1]
};