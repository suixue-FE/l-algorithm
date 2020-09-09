// 控制请求数量，字节算法，三个月前完全不会，现在突然感觉应该写一下
function requestControl(urlArr,num,fn){
  const len = urlArr.length
  const forNum = len > num ? num : len
  let index = 0
  function requestUrl(){
    const url = urlArr[index];
    fetch(url).then(res=>{
      fn(res)
      index++;
      if (index<len) requestUrl()
    })
    // setTimeout(()=>{
    //   fn(url)
    //   index++;
    //   if (index<len) requestUrl()
    // },1000)
  }
  for (let i = 0; i < forNum ;i++) {
    requestUrl()
    index++;
  }
}
// 终究还是稍微有点问题，但是运行调试了一下还是能改好

requestControl(
  ['1','2','3','4','5','6','7','8','9','10','11','12'],
  4,
  (p)=>{
    console.log('0k'+p);
  }
)