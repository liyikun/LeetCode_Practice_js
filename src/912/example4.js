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

    if(len < 2) return nums


    let mergesort = (start, end) => {
        if(start >= end) {
            return
        }
        let helf = start + Math.floor((end - start) / 2)
        mergesort(start , helf)
        mergesort(helf + 1, end)

        merge(start, helf, end)
    }


    let merge = (lo, helf, hi) => {
        let i = lo
        let j = helf + 1

        let aux = []
        for(let k = lo; k <= hi ; k++) {
            aux[k] = nums[k]
        }
        
        for(let k = lo; k <= hi; k++) {
            if(i > helf) nums[k] = aux[j++]
            else if(j > hi) nums[k] = aux[i++]
            else if(aux[i] < aux[j]) nums[k] = aux[i++]
            else nums[k] = aux[j++]
        }
    }
    
    mergesort(0, len - 1)

    return nums
};
// @lc code=end

