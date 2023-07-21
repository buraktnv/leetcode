/*
 * @lc app=leetcode id=1455 lang=javascript
 *
 * [1455] Check If a Word Occurs As a Prefix of Any Word in a Sentence
 */

// @lc code=start
/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
var isPrefixOfWord = function (sentence, searchWord) {
  sentence = sentence.split(" ");

  for (let i = 0; i < sentence.length; i++) {
    if (!sentence[i].indexOf(searchWord)) return i + 1;
  }

  return -1;
};
// @lc code=end
