/*
 * @lc app=leetcode.cn id=821 lang=javascript
 *
 * [821] 字符的最短距离
 */

// @lc code=start
/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
  let list = [],index = 0,result = []
  for (let i = 0; i < S.length; i++) {
    if (C === S[i]) {
      list.push(i)
    }
  }
  const listLast = list.length - 1
  for (let j = 0; j < S.length; j++) {
    if (index === 0 )result.push(list[0]-j)
    else if(index > listLast)result.push(j-list[listLast])
    else result.push(Math.min(list[index]-j,j-list[index-1]))
    
    if (j===list[index]) index++
  }
  return result
};
// @lc code=end

