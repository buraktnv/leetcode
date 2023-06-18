/*
 * @lc app=leetcode id=1137 lang=javascript
 *
 * [1137] N-th Tribonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
  let a = 0,
    b = 1,
    c = 1;

  if (n == 0) return 0;

  if (n == 1 || n == 2) return 1;

  for (let i = 2; i < n; i++) {
    temp = a + b + c;
    a = b;
    b = c;
    c = temp;
  }

  return c;
};
// @lc code=end
