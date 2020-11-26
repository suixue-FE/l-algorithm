/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
  const arr = matrix.flat()
  let l = 0 ,r = arr.length - 1
  while (l<=r) {
    const middle = Math.floor((l+r)/2);
    const value = arr[middle]
    if (value == target) return true
    if (value<target){
      l = middle + 1
      continue
    } 
    if (value>target){
      r = middle - 1
      continue
    } 
  }
  return false
};
// @lc code=end

