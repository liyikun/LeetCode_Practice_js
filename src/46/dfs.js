/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  let result = [];

  let dfs = (path, nums) => {
    if (nums.length === 0) {
      result.push(path);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      dfs([...path, nums[i]], nums.slice(0, i).concat(nums.slice(i + 1)));
    }
  };

  dfs([], nums);

  return result;
};
