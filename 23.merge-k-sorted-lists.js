/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let list = [];
  for (let i = 0; i < lists.length; i++) {
    while (lists[i]) {
      list.push(lists[i].val);
      lists[i] = lists[i].next;
    }
  }
  list = list.sort((a, b) => b - a);
  let newList = null;
  list.forEach((el) => (newList = new ListNode(el, newList)));
  return newList;
};
// @lc code=end
