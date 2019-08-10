/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let len = nums.length
    
    let switchNum = (from, to) => {    
        [nums[from],nums[to]] = [nums[to], nums[from]]
    }
    
    for(let i = 0;i < len;i ++) {
        while(0 < nums[i] && nums[i] < len && nums[i] !== nums[nums[i] - 1]) {
            switchNum(i, nums[i] - 1)      
        }
    }
    
    let j = 0
    
    while(j <= len) {
        if(nums[j] !== j + 1) {
            return j + 1
        }
        j++
    }
        
    return j + 1
};