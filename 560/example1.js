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
    let count = 0, sum = 0
    
    if(nums.length === 0) return count
    
    let map = new Map()
    map.set(0, 1)
    
    for(let i = 0;i < nums.length; i++) {
        sum += nums[i]
        if(map.has(sum - k)) {
            count += map.get(sum - k)
        }
        
        let curcount = map.get(sum) ? map.get(sum) : 0
        map.set(sum, curcount + 1)
        
    }
    
    return count
    
};