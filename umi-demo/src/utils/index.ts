import { getDvaApp } from 'umi'

export const isDev = process.env.NODE_ENV === 'development'

export const isProduction = process.env.NODE_ENV === 'production'

export const isIniframe = self != top

export const isEn: (ns?: string) => boolean = (ns = 'index') => {
  const state = getDvaApp()._store.getState()[ns]
  const locale = state.locale
  return locale === 'en'
}

export const LS = {
  get(name: string) {
    try {
      return window.localStorage.getItem('pwl_' + name)
    } catch (e) {}
  },
  set(name: string, value: string) {
    try {
      window.localStorage.setItem('pwl_' + name, value)
    } catch (e) {}
  },
}

export const getPos: (obj: any) => { left: number; top: number } = obj => {
  const oPos = {
    left: 0,
    top: 0,
  }
  while (obj) {
    oPos.left += obj.offsetLeft
    oPos.top += obj.offsetTop
    obj = obj.offsetParent
  }
  return oPos
}

export const isMobile = () => {
  const uaInfo = navigator.userAgent
  const agents = [
    'Android',
    'iPhone',
    'SymbianOs',
    'Windows Phone',
    'iPad',
    'iPod',
  ]
  const flag = agents.some(item => {
    const res = uaInfo.includes(item)
    return res
  })
  return flag
}

export const urlToObj: () => { [name: string]: string } = () => {
  let search = location.search.slice(1)
  let string = search.split('&')
  let res: { [name: string]: string } = {}
  for (let i = 0; i < string.length; i++) {
    let [key, value] = string[i].split('=')
    if (key != '') {
      res[key] = value
    }
  }
  return res
}

export const scrollto = (target:any, speed = 50) => {
  if (target == undefined || target == null) return
  let position =
      typeof target === 'number'
        ? target
        : getPos(document.getElementById(target)).top,
    scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
    direction = position - scrollTop > 0 ? 1 : -1,
    distance = Math.abs(position - scrollTop),
    split = distance / speed,
    timer:any
  if (position !== scrollTop) {
    split *= direction
    timer = setInterval(function() {
      scrollTop += split
      distance -= Math.abs(split)
      if (0 >= distance) {
        window.scrollTo(0, position)
        clearInterval(timer)
        timer = null
      } else {
        window.scrollTo(0, scrollTop)
      }
    }, 10)
  }
}

export const getUrlParam = (name?:string)=> {
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
  let r = window.location.search.substr(1).match(reg)
  if (r != null) {
      return unescape(r[2])
  } else {
      return ''
  }
}

export const downloadFile = (fileName?:string, content?:any) => {
  let aLink:any = document.createElement('a')
  let blob = base64ToBlob(content) //new Blob([content]);

  let evt = document.createEvent('HTMLEvents')
  evt.initEvent('click', true, true) //initEvent 不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName
  aLink.href = URL.createObjectURL(blob)

  // aLink.dispatchEvent(evt);
  //aLink.click()
  aLink.dispatchEvent(
    new MouseEvent('click', { bubbles: true, cancelable: true, view: window })
  ) //兼容火狐
}
//base64转blob
function base64ToBlob(code:string) {
  let parts = code.split(';base64,')
  let contentType = parts[0].split(':')[1]
  let raw = window.atob(parts[1])
  let rawLength = raw.length

  let uInt8Array = new Uint8Array(rawLength)

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i)
  }
  return new Blob([uInt8Array], { type: contentType })
}

export const formatDate: (time: number, fmt: string) => string = (
  time,
  fmt,
) => {
  var oDate = new Date(time)
  var o: { [key: string]: any } = {
    'M+': oDate.getMonth() + 1, //月份
    'd+': oDate.getDate(), //日
    'h+': oDate.getHours(), //小时
    'm+': oDate.getMinutes(), //分
    's+': oDate.getSeconds(), //秒
    'q+': Math.floor((oDate.getMonth() + 3) / 3), //季度
    S: oDate.getMilliseconds(), //毫秒
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (oDate.getFullYear() + '').substr(4 - RegExp.$1.length),
    )
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length),
      )
    }
  }
  return fmt
}
