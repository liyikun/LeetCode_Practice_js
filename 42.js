/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
    let maxLeft = []
    let maxRight = []
    
    let leftMax = 0, rightMax = 0
    for(let i = 0;i < height.length; i++) {
        if(height[i] > leftMax) leftMax = height[i]
        maxLeft.push(leftMax)
    }
    
    for(let j = height.length - 1;j >= 0; j--) {
        if(height[j] > rightMax) rightMax = height[j]    
        maxRight.unshift(rightMax)
    }
    
    let result = 0
    
    for(let k = 0; k < height.length; k ++) {
        let minLength = Math.min(maxLeft[k],maxRight[k])
        if(minLength > height[k]) {
            result = result + minLength - height[k]
        }
    }
      
    return result
    
};