function leftpad(str,len,ch) {
  if (!ch){
    ch = ''
  }
  const length = len - str.length
  return ch + Array(length).join(ch) + str
}

// leftpad('hello',20,'a')
console.log(leftpad('hello',20,'a'))

// 二分法
// 这个是别人写的，说实话有点看不懂
function leftpad2(str,len,ch){
  if (!ch){ ch = '' }
  let length = len - str.length
  // 二分
  let left = ''  // 字符串左边的需要加的
  while (length){
    // left += ch;
    if(length%2 === 1){
      left += ch
    }
    if(length === 1) {return left + str}
    ch+=ch
    length = parseInt(length/2)
  }
}

console.log(leftpad2('hello',20,'a'));


// 二分法
function quickMul(le,c){
  if (le == 0){
    return ''
  }
  const chLen2 = quickMul(parseInt(le/2),c);
  return le % 2 == 0 ? chLen2+chLen2 : chLen2+chLen2+c
}
function leftpad3(str,len,ch) {
  if (!ch){ ch = '' }
  let length = len - str.length
  // 二分
  let left = ''  // 字符串左边的需要加的
  left = quickMul(length,ch)
  return left + str
}


console.log(leftpad3('hello',20,'a'));