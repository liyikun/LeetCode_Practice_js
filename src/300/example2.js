/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let len = 0
    let tails = []

    for(let i = 0; i < nums.length; i++) {
        let num = nums[i]    
        let left = 0, right = len
        while(left < right) {
            let mid = left + Math.floor((right - left) / 2)
            if(tails[mid] < num) {
                left = mid + 1
            } else {
                right = mid
            }
        }
        tails[left] = num
        if(right == len) {
            len++
        }
    }

    return len
}