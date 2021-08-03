function isStraight(arr) {
    const len = arr.length
    if (len<5) {
        return false
    }
    arr.sort((a,b)=>a-b)
    function isStraightFive(index) {
        let prev = arr[index]
        let i = 1
        while (i<5){
            const a = arr[i+index]
            if ((a-prev)!==1) {
                return false
            }
            prev = a
            i++
        }
        return true
    }
    for (let i = 0; i <= len-5; i++) {
        if (isStraightFive(i)) return true
    }
    return false
}
console.log(isStraight([8,2,4,5,6,7,18,11]));
console.log(isStraight([0,4,6,7,9,8,11]));
    // 