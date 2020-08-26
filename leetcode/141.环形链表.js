/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
var hasCycle1 = function(head) {
  // 空间复杂度高，咱换一个
   let stack = new Map();
   let cur = head
   while(cur){
     if (stack.get(cur)) {
       return true;
     }else{
      stack.set(cur, true);
     }
     cur = cur.next;
   }
   return false;
};
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head
  let fast = head
  while(fast && fast.next){
    fast = fast.next.next
    slow = slow.next
    if (fast == slow) {
      return true
    }
  }
  return false
};
// @lc code=end

