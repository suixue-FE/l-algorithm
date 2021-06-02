/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
// var removeNthFromEnd = function(head, n) {
//   let preHead = new ListNode(null,head)
//   let len = 1,node = head
//   while (node.next) {
//     len++
//     node = node.next
//   }
//   const k = len - n
//     let now = preHead
//     for (let i = 0; i < k; i++) {
//       now = now.next
//     }
//     now.next = now.next.next
//   return preHead.next
// };
var removeNthFromEnd = function(head, n){
  let preHead = new ListNode(null,head)
  let fast = preHead,slow = preHead
  for (let i=0;i<n;i++){
    fast = fast.next
  }
  while(fast.next){
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return preHead.next
}
// @lc code=end

