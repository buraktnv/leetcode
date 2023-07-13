/*
 * @lc app=leetcode id=1636 lang=javascript
 *
 * [1636] Sort Array by Increasing Frequency
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  const map = new Map();
  for (let n of nums) {
    map.set(n, (map.get(n) || 0) + 1);
  }
  return nums.sort((a, b) => {
    if (map.get(a) === map.get(b)) {
      return b - a;
    } else {
      return map.get(a) - map.get(b);
    }
  });
  return nums;
};
// @lc code=end
