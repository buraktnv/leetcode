/*
 * @lc app=leetcode id=167 lang=javascript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let p1 = 0,
    p2 = numbers.length - 1,
    t = numbers[p1] + numbers[p2];
  while (t - target != 0) {
    t - target > 0 ? p2-- : p1++;
    t = numbers[p1] + numbers[p2];
  }

  return [++p1, ++p2];
};
// @lc code=end
