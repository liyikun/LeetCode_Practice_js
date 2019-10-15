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
    let less = (i, j) => {
        return nums[i] < nums[j]
    }
    let swap = (i, j) => {
        if(i === j) return
        [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    let partition = (lo, hi) => {
        let i = lo, j = hi + 1
        while(true) {
            while(less(++i, lo)) if(i == hi) break
            while(less(lo, --j)) if(j == lo) break
            if(i >= j) break
            swap(i, j)
        }
        swap(lo, j)
        return j
    }
    let sort = (lo, hi) => {
        if(hi <= lo) return
        let j = partition(lo, hi)

        sort(lo, j - 1)
        sort(j + 1, hi)
    }

    sort(0, nums.length - 1)
    
    return nums
};
// @lc code=end

