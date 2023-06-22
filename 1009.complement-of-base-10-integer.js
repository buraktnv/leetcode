/*
 * @lc app=leetcode id=1009 lang=javascript
 *
 * [1009] Complement of Base 10 Integer
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
  return parseInt(
    n.toString(2).split``.map((x) => (x == "1" ? "0" : "1")).join``,
    2
  );
};
// @lc code=end
