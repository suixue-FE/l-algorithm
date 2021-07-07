// 数组中的偶数放后面 奇数放前面
// let exchange=(nums)=>{
//   const len = nums.length
//   let left = 0
//   let right = len-1
//   let result = []
//   while(left <= right){
//     if (nums[left]%2===0) {
//       result.push(nums[left])
//     }else{
//       result.unshift(nums[left])
//     }
//     if (left!==right) {
//       if (nums[right]%2===0) {
//         result.push(nums[right])
//       }else{
//         result.unshift(nums[right])
//       }
//     }
    
//     left++
//     right--
//   }

//   return result
// }

let exchange=(nums)=>{
  const len = nums.length
  let left = 0
  let right = len-1
  while(left < right){
    while (nums[left]%2!==0&&left<right) {
      left++;
    }
    while (nums[right]%2===0&&left<right) {
      right--;
    }
    [nums[left],nums[right]] = [nums[right],nums[left]] 
  }

  return nums
}
console.log(exchange([2,3,1,4]));