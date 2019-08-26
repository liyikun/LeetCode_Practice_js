/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export var subarraySum = function(nums, k) {

    let count = 0

    if(nums.length === 0) return 0

    for(let i = 0; i < nums.length; i ++) {
        let sum = 0
        for(let j = i; j < nums.length; j++) {
            sum += nums[j]
            if(sum === k) {
                count++
            }
        }
    }

    return count
    
};
