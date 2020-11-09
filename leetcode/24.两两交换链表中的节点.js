/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
var swapPairs = function(head) {
  if (!head||!head.next) return head;
  const newHead = head.next
  head.next = swapPairs(newHead.next)
  newHead.next = head
  return newHead
};
// var swapPairs = function(head) {
//   if (!head) return null;
//   let list = new ListNode(0,head)
//   let lHead = list
//   while (lHead.next&&lHead.next.next){
//     const node1 = lHead.next
//     const node2 = lHead.next.next
//     lHead.next = node2
//     node1.next = node2.next
//     node2.next = node1
//     lHead = node1
//   }
//   return list.next
// };
// @lc code=end

