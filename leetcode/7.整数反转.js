/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let arr = `${x}`.split('').reverse()
  while (arr[0]===0){
    arr.shift()
  }
  if (arr[arr.length-1]==='-'){
    arr.unshift(arr.pop())
  } 
  const res = arr.join('')
  if(res > (2**31-1) || res < Math.pow(-2, 31)) return 0;
  return res
};
// var reverse = function(x) {
//   let flag = 0
//   if(x < 0) {
//     x = -x
//     flag = 1
//   }
//   x = Number.parseInt(x.toString().split("").reverse().join(""))
//   if(x > 2**31-1) return 0
//   if(flag == 1) return -x
//   return x
// };
// @lc code=end

// var reverse = function(x) {
//   let res = 0;
//   while(x){
//       res = res * 10 + x % 10;
//       if(res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
//       x = ~~(x / 10);
//   }
//   return res;
// };