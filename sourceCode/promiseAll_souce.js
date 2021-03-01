let promise1 = new Promise((resolve) =>{
  resolve(1)
})
let promise2 = new Promise((resolve) =>{
  resolve(2)
})
Promise.all([
  promise1,
  promise2,
  3
]).then(res=>{
  console.log(res);
})
function myPromiseAll(promiseArr){
	return new Promise((resolve)=>{
    if(Array.isArray(promiseArr)){
      const promiseLen = promiseArr.length
      let result = []
      let count = 0
      for(let i=0;i<promiseLen;i++){
        Promise.resolve(promiseArr[i]).then(promiseRes=>{
          result[i] = promiseRes
          count++
          if(count===promiseLen){
          	resolve(result)
          }
        })
      }
    }else{
      throw new Error('参数必须为数组')
    }
  })
}
myPromiseAll([
  promise1,
  promise2,
  3
]).then(res=>{
  console.log(res);
}).catch(err=>{console.log(err,111);})