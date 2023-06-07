/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
var swapPairs = function (head) {
  let arr = [];
  let res = new ListNode();
  let copy = res;
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let len = arr.length % 2 == 0 ? arr.length : arr.length - 1;

  for (let i = 0; i < len; i++) {
    if (i % 2 == 0) copy.next = new ListNode(arr[i + 1]);
    else copy.next = new ListNode(arr[i - 1]);
    copy = copy.next;
  }
  if (arr.length % 2 == 1) {
    copy.next = new ListNode(arr[arr.length - 1]);
    copy = copy.next;
  }
  return res.next;
};
// @lc code=end
