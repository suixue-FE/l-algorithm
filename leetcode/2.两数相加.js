/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode()
  let head = new ListNode(0,result)
  let node1 = l1,node2 = l2
  let needAdd = 0
  while(node1||node2){
    let val1 = node1?node1.val:0
    let val2 = node2?node2.val:0
    let add = val1+val2+needAdd
    needAdd = add>9?1:0
    result.next = new ListNode(add%10)
    result = result.next 
    node1 = node1?node1.next:null
    node2 = node2?node2.next:null
  }
  if (needAdd) {
    result.next = new ListNode(1)
  }
  return head.next.next
};
// @lc code=end

