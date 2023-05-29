/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let maxArea = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    let leftElement = height[left],
      rightElement = height[right];
    let h = Math.min(leftElement, rightElement);
    let w = right - left;
    let area = w * h;
    if (area > maxArea) maxArea = area;
    height[left] > height[right] ? right-- : left++;
  }

  return maxArea;
};
// @lc code=end
