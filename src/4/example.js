/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let list = []
    let n1 = 0
    let n2 = 0

    while(n1 < nums1.length && n2 < nums2.length) {
        if(nums1[n1] < nums2[n2]) {
            list.push(nums1[n1])
            n1++
        } else {
            list.push(nums2[n2])
            n2++
        }
    }
    if(n1 < nums1.length) {
        list = list.concat(nums1.slice(n1))
    }

    if(n2 < nums2.length) {
        list = list.concat(nums2.slice(n2))  
    }

    let n = list.length 

    if(n % 2 === 0){
        return (list[Math.floor(n / 2)] + list[Math.floor(n / 2) - 1]) / 2
    } else {
        return list[Math.floor(n / 2)]
    }
};