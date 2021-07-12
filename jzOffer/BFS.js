// 树层序遍历，BFS广度优先遍历
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
 var levelOrder = function(root) {
  let res = []
  let queue  = [root]
  while(queue.length){
      let node = queue.pop()
      if(node){
          res.push(node.val)
          queue.unshift(node.left)
          queue.unshift(node.right)
      } 
  }
  return res
};