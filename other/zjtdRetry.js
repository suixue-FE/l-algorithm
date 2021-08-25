//模拟请求函数
function getUser(args) {
    return new Promise((resolve, reject) => {
        const result = Math.floor(Math.random() * 10);
        return result < 5 ? resolve({
            id: result,
            userName: args
        }) : reject(new Error('请求失败'))
    })
}

function retry(fun,times,interval){
    return function fn(...args) {
        const that = this
        return new Promise((resolve, reject) => {
            const request = function (){
                fun.apply(that, args).then(res=>resolve(res)).catch((error)=>{
                    times--
                    console.log(times);
                    if (times>0) {
                        setTimeout(request,interval)
                    }else{
                        reject(error)
                    }
                })
            }
            request()
        })
    }
}


//调用如下
const guaranteed = retry(getUser, 4, 1000);
console.log(guaranteed);
guaranteed('我是一个参数').then(console.log).catch((error)=>console.error(error));