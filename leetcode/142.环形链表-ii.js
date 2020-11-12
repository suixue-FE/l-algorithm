/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
// var detectCycle1 = function(head) {
//   let stack = new Map();
//   let cur = head
//   while(cur){
//     if (stack.get(cur)) {
//       return cur;
//     }else{
//      stack.set(cur, true);
//     }
//     cur = cur.next;
//   }
//   return null;
// };
// 这玩意这是没搞太明白，文字实在难以叙述，
// 先写一下，到时候记不住的了去看官方解答
// https://leetcode-cn.com/problems/linked-list-cycle-ii/solution/huan-xing-lian-biao-ii-by-leetcode/
// 快指针和慢指针再环内相遇的点，到环的起始点的距离和head指针到起始点的距离是一样的,这里有套数学公式计算
// 快指针走的距离 fastLength， 慢指针距离 slowLength，head到环的起始点 F, 环的起始点到相遇点 a, 相遇点到环的起始点 b
// fastLength = 2*slowLength
//  F+a+b+a = 2*(F+a)
//  F=b
  
// var detectCycle = function(head) {
//   let start = head
//   let fast = head
//   let slow = head
//   while(fast && fast.next){
//     fast = fast.next.next;
//     slow = slow.next;
//     if (slow==fast){
//       while(slow != start){
//         slow= slow.next
//         start = start.next
//       }
//       return start
//     }
//   }
//   return null;
// };
var detectCycle = function(head) {
  let start = head
  let fast = head
  let slow = head
  while(fast && fast.next){
    fast = fast.next.next
    slow = slow.next
    if (slow == fast) {
      while (slow != start){
        slow=slow.next
        start = start.next
      }
      return start
    }
  }
  return null
};
// @lc code=end

