
// 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
// 零钱这个，贪心就是找比amount小的里面最大的，这个逻辑算出来不行，有问题的。。有些直接取了较大值，比如[3,2]/4,就算不出了。
var coinChange1 = function(coins, amount) {
  // let amt = amount,i=0,res=0
  // coins.sort((a,b)=>b-a)
  // while(amt>0&&i<coins.length){
  //   if (amt>=coins[i]) {
  //     amt = amt-coins[i]
  //     res++
  //   }else i++
  //   console.log(amt,coins[i]);
  // }
  // console.log(amt);
  // return amt===0?res:-1  // 写的什么玩意，根本不对

  let subResultMap = {};// (备忘录消除重复子问题) 要是不用这个那要卡死了

  // 这种属于递归，直接查结果查不出，然后递归调用同一方法委托给下一个值计算。
  
  function getMinCount(number){
    if (subResultMap[number] !== undefined) return subResultMap[number];
    if (number === 0) return 0; // 截止条件1
    if (number < 0) return -1; // 截止条件2
    let result = Infinity;
    for (let coin of coins) {
        // 计算子问题
        const subResult = getMinCount(number - coin);
        // 子问题无解
        if (subResult === -1) continue;
        // 个数为 1 + 子问题的解
        result = Math.min(result, 1 + subResult);
    }
    subResultMap[number] = result === Infinity ? -1 : result;
    
    return subResultMap[number]
  }
  if (amount<1) return 0;
  return getMinCount(amount)
};

/*
 * @lc app=leetcode.cn id=322 lang=javascript
 *
 * [322] 零钱兑换
 */
// @lc code=start
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
//F(S)：组成金额 S 所需的最少硬币数量
// 假如最后一枚硬币面值是C，则 F(S-C) + 1 = F(s)
// 下面试一试动态规划，有人说动态规划相当于递推，按照那个思路试一试
var coinChange = function(coins, amount) {
  // 递归是委托给下一个值直到边界，动态规划我现在的理解是直接找到 边界 这里是金额边界
  // 然后 金额 往上一步一步推动，每一步都找最小值
  let dp = Array(amount+1).fill(Infinity)
  dp[0] = 0
  // dp[i]: 表示总金额为 i 的时候最优解法的硬币数
  // 按逻辑来讲这双循环好理解，是动态规划的正常套路，一般是先写出这种语法
  // for (let i = 1; i <= amount; i++) {
  //   for (let coin of coins) {
  //     if (i-coin>=0) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
  //   }
  // }
  // 优化循环的逻辑，写出上面的循环之后再优化成下面的
  for (let coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - coin] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
// @lc code=end
