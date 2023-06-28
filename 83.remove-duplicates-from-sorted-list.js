/*
 * @lc app=leetcode id=83 lang=javascript
 *
 * [83] Remove Duplicates from Sorted List
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
var deleteDuplicates = function (head) {
  const arr = [];
  while (head) {
    arr.unshift(head.val);
    head = head.next;
  }
  const uniqArr = [...new Set(arr)];

  let resList = null;
  for (el of uniqArr) {
    resList = new ListNode(el, resList);
  }
  return resList;
};
// @lc code=end
