/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let len = nums.length
    
    if(len <= 1) return nums

    let swap = (i, j) => {
        if(i === j) return
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    let adjustHeap = (index, size) => {
        let iMax, left, right

        do {
            iMax = index
            left = index * 2 + 1
            right = index * 2 + 2

            if(left < size && nums[left] > nums[iMax]) {
                iMax = left
            }

            if(right < size && nums[right] > nums[iMax]) {
                iMax = right
            }

            if(iMax !== index) {
                swap(iMax, index)
                index = iMax
                iMax = undefined
            }
        } while(index !== iMax)
    }

    for(let i = Math.floor((len - 1) / 2); i > 0; i--) {
        adjustHeap(i, len)
    }

    for(let i = len - 1; i > 0 ; i--) {
        swap(0, i)
        adjustHeap(0, i)
    }

    return nums
};
