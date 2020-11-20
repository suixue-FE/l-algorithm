/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let rows = new Array(9)
  let cols = new Array(9)
  let parts = new Array(9)
  for (let i = 0; i < 9; i++) {
    rows[i]=new Array(9).fill(0)
    cols[i]=new Array(9).fill(0)
    parts[i]=new Array(9).fill(0)
  }
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if(board[row][col]!='.') {
        const val = board[row][col]-1
        if (rows[row][val]==1)return false
        rows[row][val] = 1
        if (cols[col][val]==1)return false
        cols[col][val]=1
        let boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3)
        if (parts[boxIndex][val]==1)return false
        parts[boxIndex][val]=1
      }
    }
  }
  return true
};
// @lc code=end

