function getSize(obj){
  const objType = typeof (obj) ;

  switch(objType){
    case 'number':
      return 8
    case 'boolean':
      return 4
    case 'string':
      return obj.length * 2
    case 'object':
      if (Array.isArray(obj)) {
        return obj.map((val)=>getSize(val)).reduce((pre,val)=>{
          return pre+val
        },0) 
      }else{
        return getObjSize(obj)
      }
    default: 
    return 0
  }
}

const getObjSize=(object)=>{
  if (object == null) return 0
  const keys = Object.keys(object)
  const kLen = keys.length
  let set = new Set()
  let result = 0
  for (let i = 0; i < kLen; i++){
    result+=getSize(keys[i])
    const valueI = object[keys[i]]
    if ( typeof (valueI)==='object') {
      if (!set.has(valueI)) {
        result+=getSize(valueI)
      }
      set.add(valueI)
    }else{
      result+=getSize(valueI)
    }
  }
  return result
}

let test = {
  '123':'123',
  222:1,
  'test':[1,'3']
}
console.log(getSize(5));
console.log(getSize(test));
// getSize(true)