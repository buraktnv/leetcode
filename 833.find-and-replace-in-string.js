/*
 * @lc app=leetcode id=833 lang=javascript
 *
 * [833] Find And Replace in String
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} indices
 * @param {string[]} sources
 * @param {string[]} targets
 * @return {string}
 */
var findReplaceString = function (s, indices, sources, targets) {
  let mixed = [];
  for (k = 0; k < indices.length; k++)
    mixed.push([indices[k], sources[k], targets[k]]);
  mixed = mixed.sort((a, b) => b[0] - a[0]);
  const originalString = s;
  for (i = 0; i < indices.length; i++) {
    let indics = mixed[i][0],
      source = mixed[i][1],
      target = mixed[i][2];
    s =
      originalString.slice(indics, indics + source.length) == source
        ? s.substring(0, indics) + target + s.substring(indics + source.length)
        : s;
  }
  return s;
};

// @lc code=end
