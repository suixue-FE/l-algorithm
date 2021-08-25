function newSourcecode(fun,...args) {
  // let obj = {}
  // Object.setPrototypeOf(obj,fun.prototype)
  let obj = Object.create(fun.prototype)
  fun.apply(obj,args)
  return obj
}

function myNew(fun,...args){
	let obj = Object.create(fun.prototype)
  // Object.create()方法会创建一个原型指针指向参数的对象,复杂化为以下两步
  //let obj = {}
  //Object.setPrototypeOf(obj,fun.prototype)  // obj.__proto__ = fun.prototype
  fun.apply(obj,args)
  return obj
}
function Person(name,age){
  this.name = name
  this.age = age
}
Person.prototype.say = function(){
  console.log(`我叫${this.name},${this.age}岁`);
}

const person1 = myNew(Person,'lzx','24')
console.log(person1);
person1.say()

for (let index = 0; index < array.length; index++) {
  const element = array[index];
  
}