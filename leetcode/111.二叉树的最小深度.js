/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
var minDepth1 = function(root) {
  if(!root) return 0

  let stack = [root]
  let deepNum = 1

  while(stack.length) {
      let level = [...stack]
      for(const v of level) {
          const node = stack.shift()
          if(node.left == null && node.right == null) {
              return deepNum
          }
          if(node.left) stack.push(node.left)
          if(node.right) stack.push(node.right)
      }
      deepNum++
  }
  return deepNum
};

// function getMin()
// var minDepth = function(root) {}
// @lc code=end

