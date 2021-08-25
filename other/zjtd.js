// 字节题目
const list = [1,2,3,4]
const square = num =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve(num*num)
        },1000)
    })
}
// function test(){
//     list.forEach(async num=>{
//         const res = await square(num)
//         console.log(res);
//     })
// }
async function test(){
    for (const num of list) {
        const res = await square(num)
        console.log(res);
    }
}
test()


var length = 10
function fn(){
    return this.length+1
}
var obj = { 
    length:5,
    test1:function(){
        return fn()
    }
}
obj.test2 = fn
console.log(obj.test1());
console.log(obj.test2()===fn());