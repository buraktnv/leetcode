/*
 * @lc app=leetcode id=1161 lang=javascript
 *
 * [1161] Maximum Level Sum of a Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function (root) {
  const levelToSumMap = {};

  const traverse = (node, level) => {
    if (node.left) {
      traverse(node.left, level + 1);
    }

    if (node.right) {
      traverse(node.right, level + 1);
    }

    levelToSumMap[level] = levelToSumMap[level] + node.val || node.val;
  };

  traverse(root, 1);

  let level;
  let maxSum = -Infinity;

  for (let levelToSum of Object.entries(levelToSumMap)) {
    if (levelToSum[1] > maxSum) {
      [level, maxSum] = [levelToSum[0], levelToSum[1]];
    }
  }

  return level;
};
// @lc code=end
