/*
 * @lc app=leetcode id=190 lang=javascript
 *
 * [190] Reverse Bits
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = (n) => {
  a = [...n.toString(2)];
  return parseInt(
    [...("0".repeat(32 - a.length) + a.join``)].reverse().join``,
    2
  );
};
// @lc code=end
