/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let maxLeftHeights = []
    
    let maxRightHeights = []

    let maxLeftHeight = 0
    
    let maxRightHeight = 0

    let n = height.length

    for(let i = 0; i < height.length; i++) {
        maxLeftHeights[i] = maxLeftHeight
        maxLeftHeight = Math.max(maxLeftHeight, height[i])          
    }

    for(let j = n - 1; j >= 0; j--) {
        maxRightHeights[j] = maxRightHeight
        maxRightHeight = Math.max(maxRightHeight, height[j])
    }


    let result = 0
    for(let i = 0; i < height.length; i++) {
        let rain = Math.min(maxLeftHeights[i], maxRightHeights[i]) - height[i]
        if(rain > 0) {
            result += rain
        }
    }

    return result
};