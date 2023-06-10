/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */

// @lc code=start
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let len = cost.length;

  for (let i = 2; i < len; i++) {
    cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i];
  }

  return Math.min(cost[len - 1], cost[len - 2]);
};
// @lc code=end
