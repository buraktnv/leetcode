/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestSubString = "";
  let currentSubString = "";
  const sArray = [...s];
  for (let index = 0; index < sArray.length; index++) {
    const element = sArray[index];
    if (currentSubString.includes(element)) {
      if (currentSubString.length > longestSubString.length) {
        longestSubString = currentSubString;
      }
      currentSubString = currentSubString.slice(
        currentSubString.indexOf(element) + 1
      );
    }
    currentSubString += element;
  }
  return currentSubString.length > longestSubString.length
    ? currentSubString.length
    : longestSubString.length;
};
// @lc code=end
