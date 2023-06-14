/*
 * @lc app=leetcode id=530 lang=javascript
 *
 * [530] Minimum Absolute Difference in BST
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
var getMinimumDifference = function (root) {
  let prev = null;
  let minDifference = Infinity;

  const inOrderTraversal = (node) => {
    if (!node) return;

    // Left subtree
    inOrderTraversal(node.left);

    // Process current node
    if (prev !== null) {
      minDifference = Math.min(minDifference, node.val - prev);
    }
    prev = node.val;

    // Right subtree
    inOrderTraversal(node.right);
  };

  inOrderTraversal(root);

  return minDifference;
};
// @lc code=end
