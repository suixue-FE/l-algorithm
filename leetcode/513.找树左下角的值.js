/*
 * @lc app=leetcode.cn id=513 lang=javascript
 *
 * [513] 找树左下角的值
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
// var findBottomLeftValue = function(root) {
//   if (!root) return null;
//   let queue = [root],alsp = null
//   while (queue.length){
//     alsp = queue[0].val;
//     const qLen = queue.length
//     for (let i = 0; i < qLen; i++) {
//       const node = queue.shift()
//       if (node.left) queue.push(node.left)
//       if (node.right) queue.push(node.right)
//     }
//   }
//   return alsp
// };
var findBottomLeftValue = function(root) {
  if (!root) return null
  let leftMostLayer = [];
  traverse(root, leftMostLayer, 0);
  return leftMostLayer[leftMostLayer.length - 1];
 };
 
 function traverse(root, leftMost, layer) {
  if (root) {
    leftMost[layer++] = root.val;
    traverse(root.right, leftMost, layer);
    traverse(root.left, leftMost, layer);
  }
}
// @lc code=end

