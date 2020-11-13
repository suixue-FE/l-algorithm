function quickSort(array){
  quickSortAss(array,0,array.length)
}
function quickSortAss(array , start , end){
  if (end<=start) return
  const value = array[start]
  let index = start
  for (let i = start; i < end; i++) {
    if (array[i]<value) {
      index++
      [array[index],array[i]]=[array[i],array[index]]
    }
  }
  [array[index],array[start]] = [value,array[index]]
  quickSortAss(array, start,index-1)
  quickSortAss(array, index+1,end)
}
