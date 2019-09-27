/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0, j = 0
    let n = s.length

    if(n === 0) return 0
    let max = 0
    while(i < n || j < n) {
        while(s[i] === s[j] && i < j) {
            i++
        }
        max = Math.max(j - i + 1, max)
        j++
    }

    return max
};


