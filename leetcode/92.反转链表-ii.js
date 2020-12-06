/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (!head||n==1) return head
  let i = 1,node = head,fNode = null,fNodeNext = head,prev = null
  while(i<=n){
    let next = node.next
    i++
    if (i==m){
      fNode = node
      fNodeNext = next
    }else if (i>m) {
      node.next = prev
      prev = node
    }
    node = next
  }
  if (fNode) fNode.next = prev
  fNodeNext.next = node
  return fNode?head:prev
};
// @lc code=end

