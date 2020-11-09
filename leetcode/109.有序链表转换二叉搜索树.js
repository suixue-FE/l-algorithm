/*
 * @lc app=leetcode.cn id=109 lang=javascript
 *
 * [109] 有序链表转换二叉搜索树
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  if (!head) return null
  function getRoot(head,over){
    if (head == over) return null
    let fast = head,slow=head
    while(fast.next&&fast.next!=over){
      fast = fast.next
      if (fast.next&&fast.next!=over) fast = fast.next
      slow= slow.next
    }
    let treeNode = new TreeNode(slow.val);
    treeNode.left = getRoot(head,slow)
    treeNode.right = getRoot(slow.next,over)
    return treeNode
  }
  return getRoot(head,null)
};
// @lc code=end

