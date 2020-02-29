/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  let result = [];

  let path = [];
  let dfs = cur => {
    if (path.length === k) {
      result.push([...path]);
      return;
    }
    if (n - cur + 1 + path.length < k) {
      return;
    }
    for (let i = cur; i <= n; i++) {
      path.push(i);
      dfs(i + 1);
      path.pop();
    }
  };
  dfs(1);
  return result;
};
