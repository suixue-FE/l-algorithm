/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x==1||x==0) return x 
  let pre = x
  let last = 0
  while((pre-last)>1){
    const n = parseInt((pre-last)/2+last)
    if (n*n === x) return n
    if (n*n > x) {pre = n}
    if (n*n < x) {last = n}
  }
  return last
};
// @lc code=end