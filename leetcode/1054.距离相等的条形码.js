/*
 * @lc app=leetcode.cn id=1054 lang=javascript
 *
 * [1054] 距离相等的条形码
 */

// @lc code=start
/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
  const bLen = barcodes.length
  const map = new Map();
  barcodes.forEach(value => {
    map.set(value,map.has(value) ? map.get(value)+1 : 1)
  })
  let arr = [...map].sort((a,b) => b[1]-a[1])
  let j = 0
  const result = new Array(bLen)
  // console.log(arr);
  // console.log(result);
  for (let i = 0; i < bLen; i+=2) {
    let node = arr[j]
    result[i] = node[0]
    // console.log(node);
    node[1]--
    if (node[1] === 0) j++
  }
  for (let k = 1; k < bLen; k+=2) {
    let node = arr[j]
    result[k] = node[0]
    node[1]--
    if (node[1] === 0) j++ 
  }
  return result
};
// @lc code=end

