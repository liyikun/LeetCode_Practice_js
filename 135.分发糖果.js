/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let len = ratings.length

    let leftcandys = [...new Array(len)].fill(1)

    let rightcandys = [...new Array(len)].fill(1)
    
    for(let i = 1; i < len; i ++) {
        if(ratings[i] > ratings[i - 1]) leftcandys[i] = leftcandys[i - 1] + 1
    }

    for(let i = len - 1; i >= 0; i--) {
        if(ratings[i] > ratings[i + 1]) rightcandys[i] = rightcandys[i + 1] + 1
    }

    let count = 0

    for(let i = 0; i < len;i++) {
        count += Math.max(leftcandys[i],rightcandys[i])
    }

    return count
};
// @lc code=end

