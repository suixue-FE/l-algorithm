/*
 * @lc app=leetcode.cn id=378 lang=javascript
 *
 * [378] 有序矩阵中第K小的元素
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
  // let Mlen = matrix.length-1,m = 0,n=0,arr = [matrix[0,0]],i = 1
  let Mlen = matrix.length
  let arr = matrix.flat(Mlen).sort((a,b)=>a-b)
  return arr[k-1]
};
// @lc code=end

