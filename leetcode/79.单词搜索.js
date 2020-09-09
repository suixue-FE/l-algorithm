/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  // 还有很多可优化的，需要注意，回头看一下
  let str = ''
  let obj = {}
  const row = board.length;
  const col = board[0].length;
  function getStr(i,j){
    if(i >= row || i < 0 || j >=col || j < 0||obj[i+'-'+j]) return false
    str += board[i][j]
    obj[i+'-'+j] = true
    if (word == str) return true
    if (word.indexOf(str)==0) {
      let res = getStr(i,j-1)||getStr(i,j+1)||getStr(i-1,j)||getStr(i+1,j)
      if(res) return true
    }
    str = str.slice(0,-1)
    obj[i+'-'+j] = false
    return false
  }
  for (let i = 0; i < row;i++){
    for (let j = 0; j < col; j++) {
      if(getStr(i,j)){
        return true
      }
    }
  }
  return false
};
// @lc code=end
