// 股票最大利润
//假设把某股票的价格按照时间先后顺序存储在数组中，请问买卖该股票一次可能获得的最大利润是多少？
// [7,1,5,3,6,4]  ==>  5
/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let preMin = prices[0]
  let result = 0
  const Plen = prices.length
  for(let i=1;i<Plen;i++){
      const now = prices[i]
      if(preMin>now){
          preMin = now
      }else{
         result = Math.max(now-preMin,result) 
      }
  }
  return result
};