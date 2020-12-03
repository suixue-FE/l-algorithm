function lPromise(fn){
  this.status = 'pending'
  this.thenArr = []
  this.catchArr = []
  try{
    fn(_reslove.bind(this),_reject.bind(this))
  }catch(e){
    _reject(e)
  }

  function _reslove(){
    this.status = 'reslove'
    while(this.thenArr.length){
      this.thenArr.pop().call(this,...arguments)
    }
  }

  function _reject(){
    status = 'reject'
    while(this.catchArr.length){
      this.catchArr.pop().call(this,...arguments)
    }
  }
}
lPromise.prototype.then = function(reslovecb,rjectcb){
  this.thenArr.push(reslovecb)
  this.catchArr.push(rjectcb)
}
lPromise.prototype.catch = function(rjectcb){
  this.catchArr.push(rjectcb)
}


let p = new lPromise((reslove,reject) =>{
  console.log('start')
  setTimeout(() =>{reslove(2)},2000)
  
})
p.then(res=>{
  console.log(res,'end');
})