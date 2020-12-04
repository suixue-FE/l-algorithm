/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return []
  let queue = [root];
  let result = []
  while (queue.length){
    const qLength = queue.length
    let resultIn = []
    for (let i = 0; i < qLength; i++) {
      const node = queue.shift()
      if(node){
        resultIn.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
      }
    }
    result.push(resultIn)
  }
  return result
};
// @lc code=end

