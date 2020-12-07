/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  let array =[]
  for (let i = 0; i < m; i++) {
    array.push(new Array(n).fill(1))
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i==0&&j>0) {
        array[i][j] = 1
      }else if (j==0&&i>0) {
        array[i][j] = 1
      }else if(i>0&&j>0){
        array[i][j] = array[i-1][j]+array[i][j-1]
      }
    }
  }
  return array[m-1][n-1]
};
// @lc code=end

