// 权重选择
var prizes = [
  {"name": "一等奖", "weight": 1},
  {"name": "二等奖", "weight": 5},
  {"name": "三等奖", "weight": 20},
  {"name": "未中奖", "weight": 74}
];
// change prizes
let priceNow = []
let weightAll = 0
let len = prizes.length
for (let i = 0; i < len; i++) {
  const value = prizes[i];
  weightAll+=value.weight
  priceNow.push(weightAll)
}
function lottery(weightAll,priceNow,prizes){
  var random = Math.random()*weightAll;
  const len  = priceNow.length
  for (let i = 0; i < len; i++) {
    const num = priceNow[i];
    if (num>=random) {
      return prizes[i].name
    }
  }
}
// lottery(weightAll,priceNow,prizes)
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));
console.log(lottery(weightAll,priceNow,prizes));