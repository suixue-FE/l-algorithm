/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
  const len = A.length
  if (len<3) return false
  for (var i = 1; i < len-1; i++) {
    if (A[i]<=A[i-1]) break
  }
  for (var j = len-2; j > 0; j--) {
    if (A[j]<=A[j+1]) break
  }
  return i-j==2
};
// @lc code=end

