/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
    let n = matrix.length
    if(n === 0) return 0
    let max = 0
    let dp = [...new Array(n)].map(_ => [])
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if(i > 0) {
                dp[i][j] = matrix[i][j] === "0" ? 0 : dp[i - 1][j] + 1
            } else {
                dp[i][j] = Number(matrix[i][j])
            }
        }

        let count = 0
        let stack = []
        for(let k = 0; k < dp[i].length; k++) {
            while(stack.length > 0 && dp[i][stack[-1]] > dp[i][k]) {
                let pre = stack.pop()

                count = Math.max(stack.length === 0 ? pre : (i - stack[-1]) * dp[i][k])

            }
            stack.push(k)
        }
        Math.max(count, max)
    }
    return max
};

