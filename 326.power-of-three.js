/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n == 1) return true;
  if (n < 3) return false;
  // Some Floating point problems...
  return (Math.log(n) / Math.log(3)).toFixed(10) % 1 == 0;
};
// @lc code=end
