/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let result = nums[0] + nums[1] + nums[2];
  const len = nums.length;
  if (len < 3) return result;

  nums.sort((a, b) => a - b);

  for (let i = 0; i < len - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === target) return sum;
      if (Math.abs(sum - target) < Math.abs(result - target)) result = sum;
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return result;
};
// @lc code=end
