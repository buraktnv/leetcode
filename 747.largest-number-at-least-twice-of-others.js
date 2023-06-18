/*
 * @lc app=leetcode id=747 lang=javascript
 *
 * [747] Largest Number At Least Twice of Others
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
  copy = Array.from(nums).sort((a, b) => a - b);
  let last = copy.pop();
  if (last / copy[copy.length - 1] >= 2) {
    return nums.indexOf(last);
  }
  return -1;
};
// @lc code=end
