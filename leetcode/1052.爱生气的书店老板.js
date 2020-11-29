/*
 * @lc app=leetcode.cn id=1052 lang=javascript
 *
 * [1052] 爱生气的书店老板
 */

// @lc code=start
/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} X
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, X) {
  const length = customers.length
  let allCustomer = 0,result = 0 ,max = 0
  for (let i = 0; i < length;i++){
    if (grumpy[i]==0) allCustomer +=customers[i]
    const guke = grumpy[i]==1?customers[i]:0
    if (i<X) result += guke
    else{
      const gukeBef = grumpy[i-X]==1?customers[i-X]:0
      result = result - gukeBef + guke
    }
    if (result > max) max = result;
  }
  return allCustomer + max
};
// @lc code=end

