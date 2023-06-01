/*
 * @lc app=leetcode id=643 lang=javascript
 *
 * [643] Maximum Average Subarray I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let first = nums.slice(0, k).reduce((a, b) => a + b, 0);
  let maxSum = Math.max(-Infinity, first);
  for (let i = 0; i < nums.length - k; i++) {
    let second = first - nums[i] + nums[i + k];
    maxSum = Math.max(maxSum, second);
    first = second;
  }
  return maxSum / k;
};
// @lc code=end
