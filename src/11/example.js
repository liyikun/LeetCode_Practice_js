/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let l = 0, r = height.length - 1; max = 0;

    while(l < r) {
        let area = Math.min(height[r],height[l]) * (r - l)
        max = Math.max(max, area)
        if(height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    return max
};