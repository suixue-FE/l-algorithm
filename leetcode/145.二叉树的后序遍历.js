/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal1 = function(root,arr=[]) {
  if (root) {
    postorderTraversal1(root.left,arr);
    postorderTraversal1(root.right,arr);
    arr.push(root.val)
  }
  return arr;
};

var postorderTraversal = function(root){
  if (!root) {return []}
  let res = [], stack = []
  while (root || stack.length) {
    res.unshift(root.val)
    if (root.left) stack.push(root.left)
    if (root.right) stack.push(root.right)
    root = stack.pop()
  }
  return res
}
// @lc code=end

