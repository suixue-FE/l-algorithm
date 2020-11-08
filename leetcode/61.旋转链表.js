/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return null
  if (k===0||!head.next) return head
  let len = 1,last = head,nowLast = head
  while(last.next){
    len++
    last = last.next
  }
  let m = len - k%len
  if (m===len) return head
  while(m > 1){
    nowLast=nowLast.next
    m--
  }
  const nowhead = nowLast.next
  nowLast.next = null
  last.next = head
  return nowhead
};
// @lc code=end

