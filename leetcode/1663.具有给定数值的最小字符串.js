/*
 * @lc app=leetcode.cn id=1663 lang=javascript
 *
 * [1663] 具有给定数值的最小字符串
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function(n, k) {
  let arr = new Array(n).fill('a');
  // for (let i = 0; i <)
  let i = n-1
  while((k-n)>25){
    arr[i] = 'z'
    n=n+25
    i=i-1
  }
  arr[i] = String.fromCharCode(97+k-n)
  return arr.join('')
};
// @lc code=end

