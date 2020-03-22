/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  if (n === 0) {
    return [];
  }
  let result = [];

  let board = [...new Array(n)].map(() => [...new Array(n)].map(() => "."));

  let valid = (i, j) => {
    for (let k = j; k >= 0; k--) {
      if (board[i][k] === "Q") {
        return false;
      }
    }

    for (let k = i - 1, v = j - 1; k >= 0 && v >= 0; ) {
      if (board[k][v] === "Q") {
        return false;
      }
      k--;
      v--;
    }

    for (let k = i + 1, v = j - 1; k < n && v >= 0; ) {
      if (board[k][v] === "Q") {
        return false;
      }
      k++;
      v--;
    }

    return true;
  };

  let dfs = row => {
    if (row === n) {
      result.push([...board.map(l => l.join(""))]);
    }
    for (let i = 0; i < n; i++) {
      if (!valid(i, row)) {
        continue;
      }
      board[i][row] = "Q";
      dfs(row + 1);
      board[i][row] = ".";
    }
  };

  dfs(0);

  return result;
};

console.log(solveNQueens(4));
