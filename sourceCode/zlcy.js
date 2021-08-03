// 智力测试题目
let a = 1000
let b = 1000

while (a >= 3) {
  const newAdd = Math.floor(a/3)
  a=newAdd+a%3
  b += newAdd
}
console.log(b);