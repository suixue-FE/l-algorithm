// 防抖的本质就是延迟触发,如果再点击，重新计时
function debounce(func,delay) {
  let timer = null
  return function(){
    const self = this
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(()=>{func.apply(self, arguments)},delay)
  }
}

// 节流本质是一段时间内只触发一次
// 属于尾节流，不管第一次，顾尾不顾头
function throttle(func, delay){
  let timer = null
  return function(){
    const self = this
    if (!timer) {
      timer = setTimeout(()=>{
        func.apply(self, arguments)
        clearTimeout(timer)
      },delay)
    }
  }
}

// 第一次肯定能触发，但是后面就不一定了
function throttleHead(func, delay){
  let dateNow = 0
  return function(){
    const date = Date.now()
    if (date-dateNow>delay) {
      dateNow = date
      func(...arguments)
    }
  }
}

// 最开始先触发一次
function throttleAll(func, delay){
  let dateNow = 0
  let timer = null
  return function(){
    const self = this
    const date = Date.now()
    if (date-dateNow>delay) {
      dateNow = date
      func(...arguments)
    }else{
      clearTimeout(timer);
      timer = setTimeout(function() {
        func.apply(self, arguments)
      }, delay);
    }
  }
}