/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
  // function get(root,arr=[]){
  //   if(root){
  //     if (arr.length&&root<arr[arr.length]) {
  //       val = false
  //       return
  //     }else{
  //       get(root.left,arr)
  //       arr.push(root.val)
  //       get(root.right,arr)
  //     }
  //   }
  //   return arr
  // }
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST111 = function(root) {
// 中序遍历 左节点-右节点-中节点，遍历完之后应该是递增的
  let stack = [];let pre= -Infinity // 无穷小
  while (stack.length||root){
    while (root){
      stack.push(root)
      root = root.left
    }
    root = stack.pop()
    // pre = root
    if (root.val<=pre){
      return false
    }
    pre = root.val
    root = root.right
  }
  return true
};

function isOkval(root,lower,upper){
  if (root == null) return true
  if (root.val <= lower || root.val>=upper) return false
  return isOkval(root.left,lower,root.val)&&isOkval(root.right,root.val,upper)
}
var isValidBST = function(root) {
  return isOkval(root,-Infinity,Infinity)
}
// @lc code=end

