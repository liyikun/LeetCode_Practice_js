/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
  nums = nums.sort((a, b) => a - b);

  let result = [];
  let used = [];
  let ans = [];

  let search = () => {
    if (ans.length === nums.length) {
      result.push([...ans]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      used[i] = 1;
      ans.push(nums[i]);
      search();
      ans.pop();
      used[i] = 0;
    }
  };

  search();

  return result;
};
