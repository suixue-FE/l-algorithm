/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let numMap = new Map()
  for (let i = 0; i < 10; i++) {
    numMap.set(`${i}`,true)
  }
  const len = s.length
  let result = 0
  let needNe = false
  let needAdd = false
  let hasNum = true
  for (let i = 0; i < len; i++) {
    const element = s[i];
    if (numMap.has(element)) {
      result = result*10 + element*1
      hasNum = false
    }else if(element===' '&&result===0&&!needNe&&!needAdd&&hasNum){
      continue
    }else if(element === '-'){
      if (result===0&&!needNe&&!needAdd&&hasNum){
        needNe = true
        continue
      }else{
        break
      }
    }else if(element === '+'){
      if (result===0&&!needNe&&!needAdd&&hasNum){
        needAdd = true
        continue
      }else{
        break
      }
    }else{
      break
    }
  }
  let res = needNe?-result:result
  if (res>=2**31) return 2**31 - 1
  if (res<-(2**31)) return -(2**31)
  return res
};
// @lc code=end

