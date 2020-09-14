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
var exist1 = function(board, word) {
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
var exist = function(board, word) {
  // 1、怎么找
  // 2、什么时候终止
  // 3、内部什么时候终止找下一步 （缓存中间的过程）
  if (board.length===0) return false
  if (word.length===0) return true
  function find(i,j,cur){
    if (i>=row||i<0) return false
    if (j>=col||j<0) return false

    const item = board[i][j]
    if (item!==word[cur]) return false
    if (cur==word.length-1) return true

    board[i][j] = null // 当前路径标记为空，为了不让他同一路径查上一步
    //
    const ret = find(i,j-1,cur+1)||find(i,j+1,cur+1)||find(i-1,j,cur+1)||find(i+1,j,cur+1)
    board[i][j] = item
    return ret
  }
  //怎么找
  const row = board.length
  const col = board[0].length
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const request = find(i,j,0)
      if (request) return true
    }
  }
  return false
}
// @lc code=end
