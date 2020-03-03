/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  let result = [];

  let dfs = (index, ans, sum) => {
    if (ans.length === k) {
      if (sum === n) {
        result.push(ans);
      }
      return;
    }
    for (let i = index; i <= 9; i++) {
      dfs(i + 1, [...ans, i], sum + i);
    }
  };

  dfs(1, [], 0);

  return result;
};
