let Cookies =  {
  get:()=>{
    return {}
  },
  set:(key,val)=>{
    console.log(key,'=====>',val)
  },
}
let getCookieT =()=>{
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      let admin = Cookies.get()
      resolve(admin.t)
    },100)
  })
} 

function setCookie() {
  let admin = Cookies.get()
  for(let i in admin) {
      Cookies.set(i,admin[i])
  }
}
async function getCookie(callback) {
  for (let i = 1; i < 25; i++) {
    const res = await getCookieT()
    console.log(Date.now());
    if (res) {
      setCookie()
      callback()
      return
    }
  }
}
setTimeout(function() {
  Cookies.get = ()=>{
    return {t:{
      a:'1',
      b:'2'
    }}
  }
},600)
getCookie()