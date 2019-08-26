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
    if(s.length === 0) return 0
    let map = new Map()
    let max = 0
    let i = 0
    for(let j = 0;j < s.length; j++) {
        let c = s[j]
        if(map.has(c)) {
            i = Math.max(map.get(c), i)
        }
        max = Math.max(max, j - i + 1)
        map.set(c, j + 1)
    }

    return max
};


