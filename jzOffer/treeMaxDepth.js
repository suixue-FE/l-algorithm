/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 二叉树的深度
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  if(!root) return null
  let now = [root]
  let level = 0
  while(now.length){
      let arr = []
      for(let node of now){
          if(node.left){
              arr.push(node.left)
          } 
          if(node.right){
              arr.push(node.right)
          }
      }
      now = arr
      level++
  }
  return level
};