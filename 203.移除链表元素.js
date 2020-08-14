/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  let cur = head,
      pre = null;
  while (cur) {
    if (cur == head && cur.val === val) {
      head = head.next
      cur = head
    }else{
      cur.val === val?pre.next = cur.next : pre = cur
      cur = cur.next;
    }
  }
  return head;
};
// @lc code=end

