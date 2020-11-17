/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
var oddEvenList = function(head) {
  if (!head||!head.next) return head;
  let node = head,len = 1,node2 = null,prev = head,node2Head = null
  while (node){
    if (len%2 === 1) {
      prev=node
      node = node.next
    }else{
      prev.next = node.next
      let node2Val = new ListNode(node.val)
      if (node2){
        node2.next = node2Val
        node2 = node2.next
      } 
      else{
        node2 = node2Val
        node2Head = node2
      } 
      node = node.next
    }
    len++;
  }
  prev.next = node2Head
  return head
};
// @lc code=end

