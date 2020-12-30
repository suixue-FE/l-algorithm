/*
 * @lc app=leetcode.cn id=875 lang=javascript
 *
 * [875] 爱吃香蕉的珂珂
 */

// @lc code=start
/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */
var minEatingSpeed = function(piles, H) {
  piles.sort((a, b)=> b-a)
  let min = 1 , max = piles[0]
  while(max>min){
    let middle = Math.floor((min+max)/2)
    let allPrice = 0
    piles.forEach(val =>{
      allPrice+=Math.ceil(val/middle)
    })
    if (allPrice>H) min = middle+1
    else max = middle
  }
  return min
};
// @lc code=end