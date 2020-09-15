/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
// 确实有点难还得多看看
var solveNQueens = function(n) {
  // 1[1,2,3,4]
  // 2[1,2,3,4]
  // 3[1,2,3,4]
  // 4[1,2,3,4]
// 行不能共存
// 列不能共存
// 斜线不能共存（行+列不能一样）+（行-列不能一样）
  // 一共有n个，证明每一行一个
  let ret = []
  find(0)
  function find(row,item = []){
    //  第几行
    if (row===n) {
      ret.push(
        item.map(value=> {
          let str = '';
            for(let i=0;i<n;i++){
                if(value == i) str += 'Q';
                else str += '.'
            }
          return str
        })
      )
    }
    // item.push(row)
    // 1、如何查找
    for (let j =0;j<n;j++){
      const isCanAdd = item.some((value,index) =>{
        // index是行，value是列 都是已经存起来的数据
        // row,传进来的当前行，j当前列
        return value===j||(value+index)===(j+row)||(value-index)===(j-row)
      })
      if (isCanAdd) {
        // 如果命中证明皇后要打架，执行下一次循环去
        continue 
      }
      // 否则证明没问题，下一行就行
      find(row+1,[...item,j])
    }
    
  }
  return ret
};
// @lc code=end

