/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {

    if(nums.length === m) return Math.max(...nums)

    let countGroup = (mid) => {
        let val = 0
        let count = 1
        for(let i = 0; i < nums.length; i++) {
            val += nums[i]
            if(val > mid) {
                count++
                val = nums[i] 
            }
        }
        return count
    }

    let left = Math.max(...nums), right = nums.reduce((pre, cur) => {
        return pre + cur
    }, 0)
    while(left < right) {
        let mid = parseInt(left + (right - left) / 2)
        
        let curm = countGroup(mid)

        if(curm > m) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    
    return left
};