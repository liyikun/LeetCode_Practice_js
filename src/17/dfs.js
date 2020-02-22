/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const enums = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"]
  };

  let result = [];

  let ans = [];

  let dfs = (l, ans) => {
    if (l === digits.length) {
      ans && result.push(ans);
      return;
    }

    const list = enums[digits[l]];

    for (let c of list) {
      dfs(l + 1, ans + c);
    }
  };

  dfs(0, "");

  return result;
};
