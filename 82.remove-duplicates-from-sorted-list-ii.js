/*
 * @lc app=leetcode id=82 lang=javascript
 *
 * [82] Remove Duplicates from Sorted List II
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
  let arr = [];
  let duplicates = [];
  while (head) {
    if (arr.includes(head.val)) {
      duplicates.push(head.val);
    } else {
      arr.push(head.val);
    }
    head = head.next;
  }
  duplicates.map((el) => {
    arr = arr.filter((x) => x != el);
  });
  arr = arr.reverse();
  let list = null;
  for (x of arr) {
    list = new ListNode(x, list);
  }
  return list;
};
// @lc code=end
