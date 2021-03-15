// 01背包问题
// 背包最大容量为W
//  物品重量[1,3,5,2]
//  物品价格[2,2,4,1]
// 求能装进的物品最大价值

function getMaxPrice(w,arrPrice,arrWeight){
  const len = arrPrice.length
  const dp = []
  for(let i = 0; i <= len; i++){
    dp.push(new Array(w+1).fill(0))
  }
  for(let i = 1; i <= len; i++){
    for(let j = 0; j <= w; j++){
      // console.log(i,j);
      // 当前背包容量大于当前物品重量的情况进行计算
      if (j-arrWeight[i-1]>=0) {
        // 不装这个物品，，价格就是 dp[i-1][j]
        // 装这个物品就是，， 容量为 当前容量-当前重量时的最大价格  + 当前价格 ，而此时dp里存储的都是最大价格，所以可以直接取
        // 取最大的
        dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j - arrWeight[i-1]]+arrPrice[i-1])
      }else{
        // 否则直接等于加入前一个物品的状态
        dp[i][j] = dp[i-1][j]
      }
    }
  }
  return dp[len][w]
}


console.log(getMaxPrice(10,[10,3,8,9],[2,4,5,5]));