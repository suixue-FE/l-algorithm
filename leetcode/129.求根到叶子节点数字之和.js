/*
 * @lc app=leetcode.cn id=129 lang=javascript
 *
 * [129] 求根到叶子节点数字之和
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
 * @return {number}
 */
var sumNumbers = function(root) {
  if (!root) return 0;
  let result = 0
  function getNumber(node,num){
    if (!node.left && !node.right) result+=num
    else{
      if (node.left) getNumber(node.left,num*10+node.left.val)
      if (node.right) getNumber(node.right,num*10+node.right.val)
    }
  }
  getNumber(root,root.val)
  return result
};
// @lc code=end

