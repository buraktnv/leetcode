/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits.length) return [];

  const KEYS = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let res = [];

  function backtrack(str, index) {
    if (str.length == digits.length) {
      res.push(str);
    } else {
      const chars = KEYS[digits[index]];
      for (let char of chars) {
        backtrack(str + char, index + 1);
      }
    }
  }

  backtrack("", 0);

  return res;
};
// @lc code=end
