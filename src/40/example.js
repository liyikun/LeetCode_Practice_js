/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if (candidates.length === 0) return [];

  let searchSpace = candidates.sort((a, b) => a - b);

  let result = [];

  let path = [];

  let dfs = (remain, index) => {
    if (remain < 0) {
      return;
    }
    if (remain === 0) {
      result.push([...path]);
      return;
    }

    for (let i = index; i < searchSpace.length; i++) {
      if (i > index && searchSpace[i] === searchSpace[i - 1]) {
        continue;
      }
      let n = searchSpace[i];
      path.push(n);
      dfs(remain - n, i + 1);
      path.pop(n);
    }
  };
  dfs(target, 0);

  return result;
};
