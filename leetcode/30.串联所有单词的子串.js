/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
  const wLen = words[0].length
  const wArrLen = words.length
  const sLen = s.length
  let map = {},res = []
  words.forEach(word =>{map[word]=(map[word]||0)+1})
  for (let i = 0;i<=sLen-wLen*wArrLen;i++){
    let j=0,mapNow = {}
    while(j<wArrLen){
      let index = s.slice(i+wLen*j,i+wLen*j+wLen)
      mapNow[index]=(mapNow[index]||0)+1
      if (!map[index] || mapNow[index] > map[index]) break
      j++
    }
    // console.log(i,mapNow);
    if (j == wArrLen) res.push(i)
  }
  return res
};
// @lc code=end

