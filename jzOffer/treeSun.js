/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
 var isSubStructure = function(A, B) {
  if(!A||!B) return false
  function isSameTree(tree1,tree) {
      if(!tree1) return false
      const queue = [tree]
      const queue1 = [tree1]
      while(queue.length){
          const node = queue.pop()
          const node1 = queue1.pop()
          if(node.val !== node1.val) return false
          if(node.left){
              if(node1.left&&node.left.val===node1.left.val){
                  queue.unshift(node.left)
                  queue1.unshift(node1.left)
              }else{
                  return false
              }
              
          }
          if(node.right){
               if(node1.right&&node.right.val===node1.right.val){
                  queue.unshift(node.right)
                  queue1.unshift(node1.right)
              }else{
                  return false
              }
              
          }
      }
      return true
  }
  if(isSameTree(A,B)) return true
  return isSubStructure(A.left,B)||isSubStructure(A.right,B)
};