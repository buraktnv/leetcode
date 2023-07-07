/*
 * @lc app=leetcode id=8 lang=javascript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  return Math.min(
    Math.pow(2, 31) - 1,
    Math.max(
      parseInt(s.match(/^\s*([-+]?\d+)/)?.[1] ?? "0", 10),
      -Math.pow(2, 31)
    )
  );
};
// @lc code=end
