/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {

    let n = nums.length
        
    let result = []
     
    let backtrack = (start, nums) => {
    
        if(start === n) {
            result.push(nums)
        }
        
        for (let i = start; i < n; i++) {
            [nums[start],nums[i]] = [nums[i], nums[start]]
            
            backtrack(start + 1, [...nums])

            [nums[start],nums[i]] = [nums[i], nums[start]]
        }
            
    }
    
    backtrack(0, [...nums])
    
    return result
    
};