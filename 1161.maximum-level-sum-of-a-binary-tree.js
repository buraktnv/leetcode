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
  const sumMap = new Map();

  const sumOfLevel = (node, level) => {
    if (node.left) {
      sumOfLevel(node.left, level + 1);
    }
    if (node.right) {
      sumOfLevel(node.right, level + 1);
    }

    sumMap.set(level, node.val + sumMap.get(level) || node.val);
  };

  sumOfLevel(root, 1);
  console.log(sumMap);
  let max = [...sumMap.entries()].reduce((a, e) => (e[1] >= a[1] ? e : a));
  return max[0];
};
// @lc code=end
