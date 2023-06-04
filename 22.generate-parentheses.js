/*
 * @lc app=leetcode id=22 lang=javascript
 *
 * [22] Generate Parentheses
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function (n) {
  const ans = [];
  pair("(", n - 1, n);

  function pair(prestr, left, right) {
    if (left === 0 && right === 0) return ans.push(prestr);
    if (left > right) return;
    if (left > 0) pair(prestr + "(", left - 1, right);
    if (right > 0) pair(prestr + ")", left, right - 1);
  }

  return ans;
};
// @lc code=end
