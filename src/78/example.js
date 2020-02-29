/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let result = [];

  let dfs = (cur, path) => {
    result.push([...path]);

    for (let i = cur; i < nums.length; i++) {
      path.push(nums[i]);
      dfs(i + 1, path);
      path.pop();
    }
  };

  dfs(0, []);

  return result;
};
