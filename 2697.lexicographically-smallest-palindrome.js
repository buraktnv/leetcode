/*
 * @lc app=leetcode id=2697 lang=javascript
 *
 * [2697] Lexicographically Smallest Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function (s) {
  let arr = s.split``;
  for (let i = 0; i < Math.floor(arr.length / 2); i++)
    if (arr[i] != arr[arr.length - 1 - i])
      if (arr[i].charCodeAt(0) > arr[arr.length - 1 - i].charCodeAt(0))
        arr[i] = arr[arr.length - 1 - i];
      else arr[arr.length - 1 - i] = arr[i];
  return arr.join``;
};
// @lc code=end
