/*
 * @lc app=leetcode id=118 lang=javascript
 *
 * [118] Pascal's Triangle
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */

var generate = function (numRows) {
  let result = [[1]];
  for (let i = 1; i < numRows; i++) {
    last = result[result.length - 1];
    let nums = [];
    for (let k = 0; k < i; k++) {
      nums.push(last[k] + (last[k - 1] || 0));
    }
    nums.push(1);
    result.push(nums);
  }
  return result;
};
// @lc code=end
