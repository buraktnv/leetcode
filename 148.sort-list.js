/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  arr.sort((a, b) => b - a);
  let nodeList = null;
  for (x of arr) {
    nodeList = new ListNode(x, nodeList);
  }
  return nodeList;
};
// @lc code=end
