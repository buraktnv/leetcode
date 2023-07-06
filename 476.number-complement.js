/*
 * @lc app=leetcode id=476 lang=javascript
 *
 * [476] Number Complement
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  return parseInt(
    num.toString(2).split``.map((x) => (x == "0" ? "1" : "0")).join``,
    2
  );
};
// @lc code=end
