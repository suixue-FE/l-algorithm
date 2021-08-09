/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// var lowestCommonAncestor = function(root, p, q) {
//     // 这个完全没想出来，看了大佬的半天，试着写一下
//     if (root == null||root==p||root==q) {
//       return root
//     }
//     const left = lowestCommonAncestor(root.left, p, q);
//     const right = lowestCommonAncestor(root.right,p,q);
//     if (left&&right) {
//       return root
//     }
//     return left?left:right
//     // else if (left){
//     //   return left
//     // }else if(right){
//     //   return right
//     // }
// };
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return root
  if (root===p||root===q) return root
  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)
  if (right&&left) return root
  return left || right
}
// @lc code=end

