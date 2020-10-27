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
// var preorderTraversal = function(node,array=[]){
//     if (!node) return []
//     if (node.val) array.push(node.val)
//     if (node.left) preorderTraversal(node.left,array)
//     if (node.right) preorderTraversal(node.right,array)
//     return array
// };
var preorderTraversal = function(node){
      if (!node) return []
      let result = [],stack = [],cur = node
      while(cur||stack.length){
        result.push(cur.val)
        if(cur.right) stack.push(cur.right)
        if(cur.left) cur = cur.left
        else cur = stack.pop()
      }
      return result
  };
// @lc code=end

