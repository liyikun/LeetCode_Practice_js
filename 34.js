var searchRange = function(nums, target) {
    let left = binarySearch(nums, target, false)
    let right = binarySearch(nums, target, true)
    
    return [left, right]
};

var binarySearch = function(nums, target, isMax) {
    let start = 0, end = nums.length - 1

    while(start <= end) {
        let mid = start + Math.floor((end - start) / 2)
        let notmaxborder = isMax && mid < nums.length - 1 & nums[mid + 1] === target
        let notminborder = !isMax && nums[mid] === target && mid >= 1 & nums[mid - 1] === target
        if(nums[mid] > target) {
            end = mid - 1
        } else if(nums[mid] < target){
            start = mid + 1
        } else if(nums[mid] === target) {
            if(notmaxborder) {
                start = mid + 1
            } else if(notminborder) {
                end = mid - 1
            } else {
                return mid
            }  
        }
    }

    return -1
}
