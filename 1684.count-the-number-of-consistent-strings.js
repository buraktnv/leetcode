/*
 * @lc app=leetcode id=1684 lang=javascript
 *
 * [1684] Count the Number of Consistent Strings
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
  let countOfConsistentStrings = 0;
  let allowedLetters = allowed.split``;
  words.forEach((word) => {
    let letters = word.split``;
    let uniqLetters = [...new Set(letters)];
    uniqLetters = uniqLetters.filter((el) => !allowedLetters.includes(el));
    if (!uniqLetters.length) countOfConsistentStrings++;
  });
  return countOfConsistentStrings;
};

// @lc code=end
