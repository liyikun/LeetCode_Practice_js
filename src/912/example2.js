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

    let swap = (a, b) => {
        if(a === b) return
        [nums[a], nums[b]] = [nums[b], nums[a]]
    }

    let adjustHeap = (index, heapSize) => {
        let Imax, Left, Right

        do {
            Imax = index
            Left = index * 2 + 1
            Right = index * 2 + 2

            if(Left < heapSize && nums[Left] > nums[Imax]) {
                Imax = Left
            }

            if(Right < heapSize && nums[Right] > nums[Imax]) {
                Imax = Right
            }

            if(Imax !== index) {
                swap(Imax, index)
                index = Imax
                Imax = undefined
            } 
        } while(Imax !== index)
    }

    for(let i = Math.floor((len - 1) / 2); i >= 0; i--) {
        adjustHeap(i, len)
    }

    for(let i = len - 1; i >= 0; i--) {
        swap(0, i)
        adjustHeap(0, i)
    }

    return nums
};
