/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const set = new Set();
  let sum = n;

  while (sum !== 1) {
    let newSum = 0;
    sum
      .toString()
      .split("")
      .forEach((v) => (newSum += v * v));

    if (set.has(newSum)) return false;
    set.add(newSum);
    sum = newSum;
  }

  return true;
};
// @lc code=end
