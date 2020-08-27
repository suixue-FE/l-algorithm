/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal1 = function(root,arr=[]) {
  if (root){
    inorderTraversal1(root.left,arr);
    arr.push(root.val);
    inorderTraversal1(root.right,arr);
  }
  return arr;
};

var inorderTraversal = function(root) {
  if (!root) {return []}
  let res = [], stack = []
  while (stack.length || root){
    while(root){
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    res.push(root.val)
    root = root.right
  }
  return res
};
// @lc code=end

