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

    let i = - 1, j = 0, max = 1
   
    while(j < s.length) {
        let str = s[j]

        if(map.has(str) && map.get(str) > i) {
            i = map.get(str)
            map.delete(str)
        }

        map.set(str, j)
        
        max = Math.max(j - i, max)
        j++        
    }

    return max
};


