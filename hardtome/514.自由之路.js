/*
 * @lc app=leetcode.cn id=514 lang=javascript
 *
 * [514] 自由之路
 */

// @lc code=start
/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
var findRotateSteps = function(ring, key) {
  let strObj = {},rlen = ring.length ,klen = key.length,stepNow=0,result = 0
  for (let i = 0; i < rlen; i++) strObj[ring[i]]=strObj[ring[i]]?[...strObj[ring[i]],i]:[i]
  for (let j = 0; j < klen; j++) {
    const need = strObj[key[j]], nlen = need.length
    let step = Infinity,k=0,node = stepNow
    while(k<nlen){    
      let min = Math.min(Math.abs(need[k]-stepNow) ,rlen - Math.abs(need[k]-stepNow))
      console.log(Math.abs(need[k]-stepNow) ,rlen - Math.abs(need[k]-stepNow));
      if (min<step) {
        step = min
        node = need[k]
      }
      k++
    }
  
    stepNow = node
    result += step+1
  }
  return result
};
// @lc code=end

