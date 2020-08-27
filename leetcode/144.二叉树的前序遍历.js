/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal1 = function(root,a=[]) {
  // 递归
    if (root) {
      a.push(root.val);
      preorderTraversal1(root.left,a);
      preorderTraversal1(root.right,a);
    }
    return a
};
var preorderTraversal = function(root) {
  // 迭代
  // 开始遍历，有一个stack存储
  // left入栈，知道left为空
  // 节点出栈，right为目标节点
  let result = [];
  let stack = [];
  let cur = root;
  while(stack.length>0 || cur){
    while (cur){
      result.push(cur.val)
      stack.push(cur)
      cur = cur.left
    }
    // 当前左节点为空，回退到父节点
    cur = stack.pop()
    // 左节点为空看看右节点
    cur = cur.right
  }
  return result
};
// @lc code=end

