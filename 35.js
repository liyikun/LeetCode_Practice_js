/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let pre = -1
    
    for( let i = 0; i < nums.length; i++) {  
        if( target === nums[i] ) {
            return i
        } else if( target > nums[i] ){
            pre = i
        } else {
            return pre + 1
        }        
    }
    
    return pre + 1
};