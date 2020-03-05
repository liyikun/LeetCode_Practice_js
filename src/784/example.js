/**
 * @param {string} S
 * @return {string[]}
 */
var letterCasePermutation = function(S) {
  let result = [S];

  for (let i = 0; i < S.length; i++) {
    let len = result.length;
    for (let j = 0; j < len; j++) {
      let str = result[j];
      let pre = str.slice(0, i);
      let cur = str.slice(i, i + 1);
      let end = str.slice(i + 1);
      if (Number(cur) || cur === "0") continue;
      if (IsUpper(cur)) {
        let upper = pre + cur.toLowerCase() + end;
        result.push(upper);
      } else {
        let lower = pre + cur.toUpperCase() + end;
        result.push(lower);
      }
    }
  }

  return result;

  function IsUpper(code) {
    return code === code.toUpperCase();
  }
};
