/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  candidates = candidates.sort((a, b) => a - b);

  let result = [];

  let dfs = (index, nums, num) => {
    if (num === 0) {
      result.push(nums);
      return;
    }

    for (let i = index; i < candidates.length; i++) {
      let n = candidates[i];

      let next = num - n;

      if (next < 0) {
        break;
      }

      dfs(i, [...nums, n], next);
    }
  };

  dfs(0, [], target);

  return result;
};
