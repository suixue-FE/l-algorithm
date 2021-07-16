/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * 
 * @param s string字符串 
 * @return bool布尔型
 */
export function isValid(s: string): boolean {
    // write code here
    let stack = []
    const map = new Map([['(',')'],['{',"}"],['[',"]"]])
//     return true
    
    for(let i=0;i<s.length;i++){
        let n = s[i]
        if(map.has(n)){
            stack.push(n)
        }else {
          const pop = stack.pop()
          const mapN = map.get(pop)
 
          if(n!==mapN){
            return false
        }
        }
    }
    console.log(stack)
    return !stack.length
}