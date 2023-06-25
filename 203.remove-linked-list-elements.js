/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  // if linked list empty;
  if (!head) return head;
  let cur = head.next,
    prev = head;
  // temp variable for previous node
  while (cur) {
    if (cur.val === val) {
      // if current value is equal to val just link previous to next
      cur = cur.next;
      prev.next = cur;
    } else {
      // otherwise just go for next val
      prev = cur;
      cur = cur.next;
    }
  }
  // checking last node
  if (head.val === val) return head.next;
  return head;
};
// @lc code=end
