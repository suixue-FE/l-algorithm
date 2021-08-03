// 从扑克牌中随机抽5张牌，判断是不是一个顺子，即这5张牌是不是连续的。2～10为数字本身，A为1，J为11，Q为12，K为13，而大、小王为 0 ，可以看成任意数字。A 不能视为 14。
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var isStraight = function(nums) {
    nums.sort((a,b)=>a-b)
    let hasZero = 0
    let prev = null
    const len = nums.length
    for (let i = 0; i < len; i++) {
        const num = nums[i];
        if (num===0) {
            hasZero++
        }else if (prev) {
            if(num === prev){
                return false
            }
            if ((num  - prev)>1) {
                hasZero = hasZero-(num  - prev - 1 ) 
                if (hasZero<0) return false
            }
        }
        prev = num
    }
    return true
};

console.log(isStraight([1,2,3,4,5]));
console.log(isStraight([0,0,3,4,5]));
console.log(isStraight([0,0,1,4,5]));
console.log(isStraight([0,0,1,6,5]));
console.log(isStraight([0,2,1,4,5]));
console.log(isStraight([1,2,1,4,5]));
console.log(isStraight([0,0,8,5,4]));
