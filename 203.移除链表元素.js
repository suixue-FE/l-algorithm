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
// var removeElements = function(head, val) {
//   let cur = head,
//       pre = null;
//   while (cur) {
//     if (cur == head && cur.val === val) {
//       head = head.next
//       cur = head
//     }else{
//       cur.val === val?pre.next = cur.next : pre = cur
//       cur = cur.next;
//     }
//   }
//   return head;
// };
var removeElements = function(head, val) {
  // a=>b=>c=>d=>e=>f
  // 这时候设置一个哨兵元素，放到第一个，只作为辅助使用，目的是少做第head的判断逻辑
  let prev = new ListNode();
  prev.next = head;
  let curr = prev;
  while(curr.next !== null) {
      if(curr.next.val === val) {
          curr.next = curr.next.next;
      } else {
          curr = curr.next;
      }
  }
  return prev.next;
};
// @lc code=end
