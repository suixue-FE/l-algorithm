// 当前二维数组内有无对应字符串
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
  const len = word.length
  const xLen = board[0].length
  const yLen = board.length
  function isSame(y,x,point){
    if (y>=yLen||y<0||x>=xLen||x<0||board[y][x]===false) {
      return false
    }
    const now = board[y][x];
    if (word[point]===now) {
      const next = point+1
      if (next === len) return true
      board[y][x] = false;
      let res =  isSame(y-1,x,next)||isSame(y+1,x,next)||isSame(y,x-1,next)||isSame(y,x+1,next)
      board[y][x] = now
      return res
    }else{
      return false
    } 
  }
  for (let i = 0; i < yLen; i++) {
    for (let j = 0; j < xLen; j++) {
       if(isSame(i, j, 0)){
         return true;
       }
    }
  }
  return false;
};
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]],"ABCCED"));
// console.log(exist([["a","b"],["c","d"]],"ac"));