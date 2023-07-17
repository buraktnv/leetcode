/*
 * @lc app=leetcode id=509 lang=javascript
 *
 * [509] Fibonacci Number
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
  let a = 0;
  let b = 1;
  while (n > 0) {
    [a, b] = [b, a + b];
    n--;
  }
  return a;
};
// @lc code=end
