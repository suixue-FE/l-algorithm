// 一、 给定一个数组和一个数字，找出数组中两数之和等于给定的数字。

const arr = [1, 2, 3, 5, 6, 8]
const sum = 7

// 1、暴力破解，双层循环  复杂度On2
function twoSum(arr, sum) {
    // for(let key in sum)
    let res = null
    const leng = arr.length
    for (let i = 0; i < leng; i++) {
        for (let k = i + 1; k < leng; k++) {
            if (arr[i] + arr[k] === sum) {
                return [i, k]
            }
        }
    }
    return res
}
console.log(twoSum(arr, 4));


// 2、空间换时间 复杂度 On
// function twoSumNice(arr, sum) {
//     // for(let key in sum)
//     let res = null
//     const leng = arr.length
//     for (let i = 0; i < leng; i++) {
//         let needNum = sum - arr[i]
//         const k = arr.indexOf(needNum)
//         if (k > -1 && k !== i) {
//             return [i, k]
//         }
//     }
//     return res
// }
console.log(twoSumNice(arr, 8));



// 二 、 变种 三数之和=sum
// 1 暴力破解，三层循环  复杂度On3
function threeSum(arr, sum) {
    // for(let key in sum)
    let res = null
    const leng = arr.length
    if (leng >= 3) {
        for (let i = 0; i < leng - 2; i++) {
            for (let k = i + 1; k < leng - 1; k++) {
                for (let j = k + 1; j < leng; j++) {
                    if (arr[i] + arr[k] + arr[j] === sum) {
                        return [i, k, j]
                    }
                }
            }
        }
    }
    return res
}
console.log(threeSum(arr, 8));


// 这里就是上面sum2的空间换时间的算法 复杂度O 下面sum3要用
function threeSumNiceIn(arr, sum) {
    let res = null
    const leng = arr.length
    for (let i = 0; i < leng; i++) {
        let needNum = sum - arr[i]
        const k = arr.indexOf(needNum)
        if (k > -1 && k !== i) {
            return [i, k]
        }
    }
    return res
}
// 2.循环一次，内部调用sum2里的算法，本质上循环了两次
function threeSumNice(arr, sum) {
    let res = null
    const leng = arr.length
    for (let i = 0; i < leng; i++) {
        let needNum = sum - arr[i]
        let result = threeSumNiceIn(arr, needNum)
        if (result && !result.includes(i)) {
            res = [i, result[0], result[1]]
        }
    }
    return res
}
console.log(threeSumNice(arr, 8));
