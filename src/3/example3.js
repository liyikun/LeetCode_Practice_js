/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length
    let ans = 0
    let map = new Map()

    for(let i = 0, j = 0; j < n;j ++) {
        if(map.has(s[j])) {
            i = Math.max(map.get(s[j]), i)
        }
        ans = Math.max(j - i + 1, ans)
        map.set(s[j], j + 1)
    }

    return ans
};