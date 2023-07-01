/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  t = t.split("");
  for (let x = 0; x < s.length; x++) {
    let index = t.indexOf(s[x]);
    t.splice(index, 1);
  }
  return t[0];
};
// @lc code=end
