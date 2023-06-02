/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxLen = 0;
  let str = "";
  for (let i = 0; i < s.length; i++) {
    // odd
    let r = i,
      l = i;
    while (l >= 0 && r < s.length && s[r] == s[l]) {
      if (r - l + 1 > maxLen) {
        maxLen = r - l + 1;
        str = s.substring(l, r + 1);
      }
      l -= 1;
      r += 1;
    }

    // even
    (r = i + 1), (l = i);
    while (l >= 0 && r < s.length && s[r] == s[l]) {
      if (r - l + 1 > maxLen) {
        maxLen = r - l + 1;
        str = s.substring(l, r + 1);
      }
      l -= 1;
      r += 1;
    }
  }
  return str;
};
// @lc code=end
