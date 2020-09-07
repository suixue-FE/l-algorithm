/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function getXN(x, n) {
  if (n===0) return 1
  const dbx = getXN(x,parseInt(n/2))
  return n%2===0 ?  dbx*dbx : dbx*dbx*x
}
var myPow1 = function(x, n) {
  if (n==0) return 1
  if (n>0) {
    return getXN(x,n)
  }
  return 1/getXN(x,-n)
};

var myPow = function(x, n) {
  if (n===0) return 1
  let t = n>0 ? n : -n;
  let dbx = x
  let ans = 1.0
  while(t>0){
    if (t%2===1) {ans *= dbx}
    dbx *= dbx
    t = parseInt(t/2)
  }
  return n>0 ? ans : 1/ans;
};
// @lc code=end

