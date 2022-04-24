/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  arr = strs;
  result = "";
  arrLen = arr.length;
  len = arr[0].length;
  for (j = 0; j < len; j++) {
    isFalse = false;
    for (i = 0; i < arrLen; i++) {
      if (arr[0][j] !== arr[i][j]) {
        isFalse = true;
        break;
      }
    }
    if (isFalse) break;
    result += arr[0][j];
  }
  return result;
};
// @lc code=end
