/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let result = []

    let map = new Map()

    for(let i = 0; i < nums.length; i++) {
        if(map.has(target - nums[i])) {
            let start = map.get(target - nums[i])
            return [start, i]
        }
        map.set(nums[i], i)
    }

    return result
};

//test

console.log(twoSum([2, 7, 11, 15], 9))