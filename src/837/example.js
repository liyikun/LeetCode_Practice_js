/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
var new21Game = function(N, K, W) {
    if( K == 0) return 1
    if( K === 1)  Math.min(N,W)/W;
    let dp = new Array(N).fill(0)

    dp[0] = 1
    
    let sum = 1

    for(let i = 1; i <= N; i++) {
        let result = 0
        dp[i] = sum / W 
        
        if(i < K) {
            sum += dp[i]
        }
        if( i >= W) {
            sum -= dp[i - W]
        }
    }

    let result = 0
    for(let i = K; i <= N; i++) {
        result += dp[i]
    }

    return result

};