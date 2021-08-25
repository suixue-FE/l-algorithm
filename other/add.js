function sum(...args){
    let baseFunction = (a,b,c)=> a+b+c
    function currry (fn){
        const len = fn.length
        let realArgs = []
        return function a(){
            realArgs = [...realArgs,...arguments]
            if (realArgs.length===len) {
                return fn(...realArgs)
            }else{
                return a
            }
        }
    }
    return currry(baseFunction)(...args)
}
console.log(sum(1,2,3));
console.log(sum(1)(2)(3));
console.log(sum(1,2)(3));

function add(){
    const bfArg = [...arguments]
    let res = bfArg[0]
    return function a(){
        const args = [...arguments]
        if (args.length===0) {
            return res
        }else{
            res=res+args[0]
            return a
        }
    }
}

console.log(add(1)());
console.log(add(1)(2)());
console.log(add(1)(2)(3)());