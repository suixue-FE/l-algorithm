// 根据前序数组、中序数组输出原树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
  const len = preorder.length
  if(!len) return null
  const root = preorder[0]
  let result = new TreeNode(preorder[0])
  const rootIndex = inorder.indexOf(root)
  const leftInorder = inorder.slice(0,rootIndex)
  const rightInorder = inorder.slice(rootIndex+1,len)
  const leftPreorder = preorder.slice(1,leftInorder.length+1)
  const rightPreorder = preorder.slice(leftInorder.length+1,len)
  result.left = buildTree(leftPreorder,leftInorder)
  result.right = buildTree(rightPreorder,rightInorder)
  return result
};