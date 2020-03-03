/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  nums = nums.sort((a, b) => a - b);

  let result = [];

  let ans = [];

  let dfs = num => {
    result.push([...ans]);
    if (num === nums.length) {
      return;
    }

    for (let i = num; i < nums.length; i++) {
      if (i > num && nums[i] === nums[i - 1]) continue;
      ans.push(nums[i]);
      dfs(i + 1);
      ans.pop();
    }
  };

  dfs(0);

  return result;
};
