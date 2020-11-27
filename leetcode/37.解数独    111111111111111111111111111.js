/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {
  const cols = [];
  const rows = [];
  const boxes = [];
  let holes = []
  for (let i = 0; i < 9; i++) {
    const term = Array.from({ length: 10 }).fill(0);
    cols.push(term.slice());
    rows.push(term.slice());
    boxes.push(term.slice());
  }

  // 生成3个hashMap
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
      const value = board[i][j];
      if (value !== '.') {
        cols[i][value] = rows[j][value] = boxes[boxIndex][value] = 1;
      }else holes.push([i,j])
    }
  }
  // 从第一个出现 . 的位置进行深搜
  // for (let i = 0; i < 9; i++) {
  //   for (let j = 0; j < 9; j++) {
  //     if (board[i][j] === '.') {
  //       backtrack(i, j);
  //       return board;
  //     }
  //   }
  // }
  const hoLength = holes.length
  backtrack(0);
  return board;
  // 考虑坐标(x, y)
  function backtrack(index) {
    // 递归边界出口
    // if (x >= 9 || y >= 9) {
    //   return true;
    // }
    if (index>=hoLength) return true
        const [x,y] = holes[index]
    // 九宫格编号
    const boxIndex = Math.floor(x / 3) * 3 + Math.floor(y / 3);
    for (let i = 1; i <= 9; i++) {
      if (cols[x][i] === 0 && rows[y][i] === 0 && boxes[boxIndex][i] === 0) {
        cols[x][i] = rows[y][i] = boxes[boxIndex][i] = 1;
        board[x][y] = `${i}`;
        // const [nx, ny] = genNextPos(x, y);
        if (backtrack(++index)) {
          return true;
        } else {
          // 回溯
          board[x][y] = '.';
          cols[x][i] = rows[y][i] = boxes[boxIndex][i] = 0;
        }
      }
    }
  }

  // 获取下一个待处理的坐标
  function genNextPos(x, y) {
    const next = x * 9 + y + 1;
    const nx = Math.floor(next / 9);
    const ny = next % 9;
    return nx >= 9 || board[nx][ny] === '.' ? [nx, ny] : genNextPos(nx, ny);
  }
};
// var solveSudoku = function(board) {
//   // 对我来说有点困难，改个名字留一下，学完这波算法再写
//   let rows = new Array(9)
//   let cols = new Array(9)
//   let parts = new Array(9)
//   let holes = []
//   for (let i = 0; i < 9; i++) {
//     const term =new Array(10).fill(0);
//     cols[i]=term;
//     rows[i]=term
//     parts[i] = term;
//   }
//   for (let i = 0; i <9 ;i++){
//     for (let j = 0; j < 9; j++) {
//       const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
//       const val = board[i][j]
//       if (val!='.') rows[i][val] = cols[j][val] = parts[boxIndex][val]=1
//       else holes.push([i,j])
//     }
//   }
//   const hoLength = holes.length
//   backtrack(0)
//   return board
//   function backtrack(index) {
//     if (index>=hoLength) return true
//     const [x,y] = holes[index]
//     console.log(x,y);
//     const boxIndex = Math.floor(x / 3) * 3 + Math.floor(y / 3);
//     for (let i =1;i<=9;i++){
//       if(rows[x][i] === 0&&cols[y][i] === 0 &&parts[boxIndex][i]===0){
//         board[x][y] = `${i}`
//         rows[x][i]=cols[y][i] = parts[boxIndex][i] = 1
//         if(backtrack(++index)) return true
//         else{
//           board[x][y] = '.';
//           rows[x][i] = cols[y][i] = parts[boxIndex][i] = 0;
//         }
//       }
//     }
//   }
// };
// @lc code=end

