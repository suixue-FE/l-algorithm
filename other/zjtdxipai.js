// A-K 共13张牌，分四个花色， 用 0-12代表 ♦ A-K, 13-25代表 ♣ 依次类推。 共52张牌。 
// 随机取7张，其中五张连续即为顺子。
function judge(arr){
    const realArr = arr.map(res=>res%13)
    realArr.sort((a,b)=> a-b);
    for (let i = 0; i < 3; i++) {  
        const first = realArr[i];
        for (let j = 1; j < 5; j++) {
            const now = realArr[i+j];
            if ((first+j)!==now) {
                if (i+j>3) {
                    return false;
                }
                break;
            }
            if (j===4) return true;       
        }
    }
    return false;
}

let arr = [8,2,4,5,16,7,11,19]
let arr2 = [0,4,6,7,8,9,11]
let arr3 = [0,51,11,10,22,8,1]
console.log(judge(arr));
console.log(judge(arr2));
console.log(judge(arr3));