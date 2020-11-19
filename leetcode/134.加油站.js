/*
 * @lc app=leetcode.cn id=134 lang=javascript
 *
 * [134] 加油站
 */

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
// var canCompleteCircuit = function(gas, cost) {
//   const len = gas.length
//   let arr = [],arrAdd = 0,posArr = []
//   for (let i = 0; i < len; i++) {
//     const val = gas[i]-cost[i]
//     arr.push(val)
//     arrAdd+=val
//     if (val>=0) posArr.push(i)
//   }
//   if (arrAdd<0) return -1
//   const posArrLen = posArr.length
//   for (let index = 0; index < posArrLen; index++) {
//     const start = posArr[index];
//     let addval = 0
//     for (let k = 0; k < len; k++) {
//       const trueKey = (start+k)>len?arr[start+k-len-1]:arr[start+k]
//       addval+=trueKey
//       if (addval<0) break
//     }
//     if (addval<0) continue
//     return start
//   }
//   return -1
// };
var canCompleteCircuit = function(gas, cost) {
  const len = gas.length
  let i = 0
  while(i<len){
    let gasSum = 0,costSum = 0
    let cnt = 0;
        while (cnt < len) {
            const j = (i + cnt) % len;
            gasSum += gas[j];
            costSum += cost[j];
            if (costSum > gasSum) break;
            cnt++;
        }
    if (cnt==len) return i
    i = i+cnt+1
  }
  return -1
};
// @lc code=end

