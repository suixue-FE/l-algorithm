/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
var maxDepth = function(root) {
  if (root === null) return 0
  let queue = [root],result = 0
  while (queue.length){
    result++
    const qLen = queue.length
    for (let i = 0; i < qLen;i++){
      const node = queue.shift()
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return result
}
// var maxDepth1 = function(root) {
//   if (root === null) return 0
//   // if (!root.left && !root.right) return 1
//   return 1 + Math.max(maxDepth1(root.left),maxDepth1(root.right))
// };

// var maxDepth = function(root) {
//   if (root === null) return 0
//   let stack = [root]
//   let length = 0
//   while (stack.length){
//     const len = stack.length
//     for (let i = 0; i < len; i++) {
//      let res = stack.shift()
//      if (res.left) stack.push(res.left)
//      if (res.right) stack.push(res.right)
//     }
//     length++
//   }
//   return length
// };
// @lc code=end

