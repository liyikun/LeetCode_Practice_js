/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (s, p) {
    if (p === s) return true

    let dp = [...new Array(s.length + 1)].map(() => [...new Array(p.length + 1)].map(() => false))
    dp[0][0] = true
    
    for (let i = 0; i < p.length; i++) {
        if (p.charAt(i) == '*' && dp[0][i-1]) {
            dp[0][i+1] = true;
        }
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < p.length; j++) {
            if (s.charAt(i) === p.charAt(j) || (p.charAt(j) === '.')) {
                dp[i + 1][j + 1] = dp[i][j]
            }
            if (p.charAt(j) === '*') {
                if (p.charAt(j - 1) !== s.charAt(i) && p.charAt(j - 1) !== '.') {
                    dp[i + 1][j + 1] = dp[i + 1][j - 1]
                } else {
                    dp[i + 1][j + 1] = (dp[i][j + 1] || dp[i + 1][j] || dp[i + 1][j - 1])
                }
            }
        }
    }

    return dp[s.length][p.length];
};