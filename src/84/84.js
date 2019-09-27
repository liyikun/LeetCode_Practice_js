/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    if(heights.length === 0) return 0
    
    let stack = []
    let max = heights[0]
    heights.push(Number.MIN_SAFE_INTEGER)
    
    for(let i = 0; i < heights.length; i ++) {
        
        while(stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            
            let index = stack.pop()
            let val = heights[index]
            let width = stack.length > 0 ? i - stack[stack.length - 1] - 1 : i
            
            max = Math.max(max, val * width)       
        }
        
        stack.push(i)
    }
    
    return max
    
};