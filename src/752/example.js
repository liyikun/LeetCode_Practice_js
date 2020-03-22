/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
  if (isDead("0000")) {
    return -1;
  }

  let visited = {};

  let queue = ["0000"];
  let step = -1;

  while ((() => queue.length > 0)()) {
    step++;
    let list = [...queue];
    queue = [];
    for (let i = 0; i < list.length; i++) {
      let cur = list[i];

      if (cur === target) {
        return step;
      }

      for (let next of neighbors(cur)) {
        if (visited[next]) {
          continue;
        }
        if (isDead(next)) {
          continue;
        }
        visited[next] = true;
        queue.push(next);
      }
    }
  }

  return -1;

  function isDead(str) {
    return deadends.some(s => str === s);
  }

  function neighbors(str) {
    let list = [];
    for (let i = 0; i <= 3; i++) {
      let n = Number(str[i]);
      let add = str.split("");
      add.splice(i, 1, (n + 10 + 1) % 10);
      let reduce = str.split("");
      reduce.splice(i, 1, (n + 10 - 1) % 10);
      list.push(add.join(""), reduce.join(""));
    }
    return list;
  }
};
