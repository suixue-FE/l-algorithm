/*
 * @lc app=leetcode.cn id=987 lang=javascript
 *
 * [987] 二叉树的垂序遍历
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
var verticalTraversal = function(root) {
  if(!root) return []
  function verticalObj(node,obj,index=0,y = 0){
    if(obj[index]) obj[index].push({key:y,val:node.val})
    else obj[index]=[{key:y,val:node.val}]
    if (node.left) verticalObj(node.left,obj,index-1,y-1)
    if (node.right) verticalObj(node.right,obj,index+1,y-1)
  }
  let object = {}
  verticalObj(root,object)
  let arr = Object.keys(object)
  arr.sort((a,b)=>a-b)
  const aLen = arr.length
  let result = new Array(aLen)
  for (let i = 0; i < aLen; i++) {
    result[i] = object[arr[i]].sort((a,b)=>{
      if (a.key==b.key) return a.val-b.val
      return b.key-a.key
    }).map(val=>val.val)
  }
  return result
};
// @lc code=end

