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

var removeElements = function(head, val) {
  // a=>b=>c=>d=>e=>f
  // 这时候设置一个哨兵元素，放到第一个，只作为辅助使用，目的是少做第head的判断逻辑
  let ele = {next: head}
  let cur = ele,
  while(cur.next) {
    if ( cur.next.val === val) {
      cur.next = cur.next.next
    }else{
      cur = cur.next;
    }
  }
  return ele.next;
};