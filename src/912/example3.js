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

    let swap = (i , j) => {
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }

    let partition = (lo, hi) => {
        let left = lo, right = hi + 1
        let v = nums[lo]

        while(true) {
            while(nums[++left] < v) if(left === hi) break
            while(v < nums[--right]) if(right === lo) break
            if(left >= right) break
            swap(left, right)
        }

        swap(lo, right)

        return right
    }

    let sort = (lo, hi) => {
        if(lo >= hi) return
        
        let j =  partition(lo, hi)

        sort(lo, j)
        sort(j + 1, hi)
    }

    sort(0, len - 1)

    return nums
};
// @lc code=end

