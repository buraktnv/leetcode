/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  if (x < 0) {
    x = [...x.toString()];
    minus = x.shift();
    x = parseInt("-" + x.reverse().join``);
  } else {
    x = [...x.toString()];
    x = parseInt(x.reverse().join``);
  }
  if (x > 2 ** 31 - 1 || x < -1 * 2 ** 31) return 0;
  return x;
};
// @lc code=end
