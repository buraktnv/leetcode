/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  s = [...s].map((x) =>
    x == "("
      ? 1
      : x == ")"
      ? -1
      : x == "["
      ? 2
      : x == "]"
      ? -2
      : x == "{"
      ? 3
      : -3
  );
  lastAddedNumbers = [];
  let count = 0;
  for (x of s) {
    x = parseInt(x);
    if (x > 0) {
      lastAddedNumbers.push(x);
      count += x;
      continue;
    }

    if (lastAddedNumbers.pop() != Math.abs(x)) return false;
    count += x;
  }
  return count == 0 ? true : false;
};
// @lc code=end
