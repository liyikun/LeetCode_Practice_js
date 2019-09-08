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
    
        let stack = []
        dp[i].push(-1)
        if(i === 2) console.log(dp[i])
        for(let k = 0;k < dp[i].length; k++) {
            while(stack.length > 0 && dp[i][k] < dp[i][stack[stack.length - 1]]) {
                let num = stack.pop()
                let width = stack.length > 0 ? k - stack[stack.length - 1] - 1 : k
                max = Math.max(max, width * dp[i][num])
            }
                  
            stack.push(k)
        }
        
    }
    

    return max
};