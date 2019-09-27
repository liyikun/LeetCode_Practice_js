/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var findLength = function(A, B) {
    
    let dp = [...new Array(A.length + 1)].map(_ => [...new Array(B.length + 1)].fill(0))
    let max = 0
    for(let i = 1; i <= A.length; i++) {
        for(let j = 1; j <= B.length; j++) {
            if(A[i - 1] === B[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1
            }
            max = Math.max(dp[i][j], max)
        }
    }
    return max
};