/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let max = 0
    let maxStr = ''
    let dp = [...new Array(s.length)].map(_ => Array(s.length).fill(false))

    for(let len = 1; len <= s.length; len++) {
        for(let start = 0; start < s.length; start++) {
            let end = start + len - 1
            if(end >= s.length) {
                break
            }

            dp[start][end] = (len === 1 || len === 2 || dp[start + 1][end - 1]) && s.charAt(start) === s.charAt(end)
       
            if(dp[start][end] && len > max) {
                max = len
                maxStr = s.substring(start, end + 1)
            }
        }
    }

    return maxStr
};