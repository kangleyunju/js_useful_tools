//生成随机token,max位数
function createToken(max = 10) {
  let token = ''
  for (let i = 1; i <= max; i++) {
    const n = Math.floor(Math.random() * 16).toString(16)
    token += n
  }
  return token
}
//验证网址
function checkWeb(val) {
  const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
  return reg.test(val)
}
//验证邮箱
function checkEmail(val) {
  const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
  return reg.test(val)
}
//验证手机号
function checkTelephone(val) {
  const reg = /^1[3-9]\d{9}$/
  return reg.test(val)
}
//验证车牌号
function checkCarNumber(val) {
  const newReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
  const oldReg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
  if (val.length == 7) {
    return oldReg.test(val)
  } else if (val.length == 8) {
    return newReg.test(val)
  } else {
    return false
  }
}
//两个日期间隔天数
function dayDiff(date1, date2) {
  if (date1 && date2) {
    return Math.ceil(Math.abs(new Date(date1).getTime() - new Date(date2).getTime()) / 86400000)
  }
}
// 下载文件, path路径,name文件名
function downloadFile(path, name) {
  const x = new XMLHttpRequest()
  x.open('GET', path, true)
  x.responseType = 'blob'
  x.onload = function() {
    const url = window.URL.createObjectURL(x.response)
    const a = document.createElement('a')
    a.href = url
    a.download = name
    a.click()
  }
  x.send()
}
//文件转base64
function fileToBase64(file) {
  if (!file) return
  return new Promise(function(resolve, reject) {
    let reader = new FileReader()
    let url = ""
    reader.readAsDataURL(file)
    reader.onload = function() {
      url = reader.result
    }
    reader.onerror = function(error) {
      reject(error)
    }
    reader.onloadend = function() {
      resolve(url)
    }
  })
}
//链接转base64
function pathToBase64(path) {
  return new Promise(function(resolve, reject) {
    if (typeof window === 'object' && 'document' in window) {
      if (typeof FileReader === 'function') {
        var xhr = new XMLHttpRequest()
        xhr.open('GET', path, true)
        xhr.responseType = 'blob'
        xhr.onload = function() {
          if (this.status === 200) {
            let fileReader = new FileReader()
            fileReader.onload = function(e) {
              resolve(e.target.result)
            }
            fileReader.onerror = reject
            fileReader.readAsDataURL(this.response)
          }
        }
        xhr.onerror = reject
        xhr.send()
        return
      }
      var canvas = document.createElement('canvas')
      var c2x = canvas.getContext('2d')
      var img = new Image
      img.onload = function() {
        canvas.width = img.width
        canvas.height = img.height
        c2x.drawImage(img, 0, 0)
        resolve(canvas.toDataURL())
        canvas.height = canvas.width = 0
      }
      img.onerror = reject
      img.src = path
      return
    }
    if (typeof plus === 'object') {
      plus.io.resolveLocalFileSystemURL(getLocalFilePath(path), function(entry) {
        entry.file(function(file) {
          var fileReader = new plus.io.FileReader()
          fileReader.onload = function(data) {
            resolve(data.target.result)
          }
          fileReader.onerror = function(error) {
            reject(error)
          }
          fileReader.readAsDataURL(file)
        }, function(error) {
          reject(error)
        })
      }, function(error) {
        reject(error)
      })
      return
    }
    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      wx.getFileSystemManager().readFile({
        filePath: path,
        encoding: 'base64',
        success: function(res) {
          resolve('data:image/png;base64,' + res.data)
        },
        fail: function(error) {
          reject(error)
        }
      })
      return
    }
    reject(new Error('not support'))
  })
}
//base64转链接
function base64ToPath(base64) {
  return new Promise(function(resolve, reject) {
    if (typeof window === 'object' && 'document' in window) {
      base64 = base64.split(',')
      var type = base64[0].match(/:(.*?);/)[1]
      var str = atob(base64[1])
      var n = str.length
      var array = new Uint8Array(n)
      while (n--) {
        array[n] = str.charCodeAt(n)
      }
      return resolve((window.URL || window.webkitURL).createObjectURL(new Blob([array], { type: type })))
    }
    var extName = base64.match(/data\:\S+\/(\S+);/)
    if (extName) {
      extName = extName[1]
    } else {
      reject(new Error('base64 error'))
    }
    var fileName = Date.now() + '.' + extName
    if (typeof plus === 'object') {
      var bitmap = new plus.nativeObj.Bitmap('bitmap' + Date.now())
      bitmap.loadBase64Data(base64, function() {
        var filePath = '_doc/_temp/' + fileName
        bitmap.save(filePath, {}, function() {
          bitmap.clear()
          resolve(filePath)
        }, function(error) {
          bitmap.clear()
          reject(error)
        })
      }, function(error) {
        bitmap.clear()
        reject(error)
      })
      return
    }
    if (typeof wx === 'object' && wx.canIUse('getFileSystemManager')) {
      var filePath = wx.env.USER_DATA_PATH + '/' + fileName
      wx.getFileSystemManager().writeFile({
        filePath: filePath,
        data: base64.replace(/^data:\S+\/\S+;base64,/, ''),
        encoding: 'base64',
        success: function() {
          resolve(filePath)
        },
        fail: function(error) {
          reject(error)
        }
      })
      return
    }
    reject(new Error('not support'))
  })
}
//添加缓存
function setStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}
//获取缓存
function getStorage(key) {
  return JSON.parse(localStorage.getItem(key))
}
//删除缓存
function removeStorage(key) {
  localStorage.removeItem(key)
}
//震动
function shake(time = 300) {
  const navigator = window.navigator
  if (!("vibrate" in navigator)) return
  navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
  if (!navigator.vibrate) return
  navigator.vibrate(time)
}
//复制文本
function copyText(val = '') {
  navigator.clipboard.writeText(val)
}
//检查设备是否手机
function checkIsMobile() {
  return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? true : false
}
//数组排序,sort=1升序,sort=2降序
function arraySort(arr, sort = 1, field) {
  arr.sort(function(a, b) {
    return field ? a[field] - b[field] : a - b
  })
  if (sort === 2) {
    arr.reverse()
  }
  return arr
}
// 防抖定时器
let debounceTimer
/**
  @name 防抖：在规定时间内只执行最后一次操作,比如实时搜索
  @author xie
  @param fn 回调函数
  @param delay 延时的时间
**/
function debounce(fn, delay = 1000) {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
    debounceTimer = null
  }
  debounceTimer = setTimeout(() => {
    fn()
    clearTimeout(debounceTimer)
    debounceTimer = null
  }, delay)
}
// 节流定时器
let throttleTimer
/**
  @name 节流：一定时间范围内，用户触发多次只会执行一次,比如提交事件
  @author xie
  @param fn 回调函数
  @param delay 延时的时间
**/
function throttle(fn, delay = 1000) {
  if (throttleTimer == null) {
    fn()
    throttleTimer = setTimeout(() => {
      clearTimeout(throttleTimer)
      throttleTimer = null
    }, delay)
  }
}
//从数组中随机取一个数
function arrayRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}
//字符串加密   
function encodeStr(code) {
  if (code) code = code.toString()
  var password = String.fromCharCode(code.charCodeAt(0) + code.length);
  for (var i = 1; i < code.length; i++) {
    password += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
  }
  return password
}
//字符串解密
function decodeStr(code) {
  var password = String.fromCharCode(code.charCodeAt(0) - code.length)
  for (var i = 1; i < code.length; i++) {
    password += String.fromCharCode(code.charCodeAt(i) - password.charCodeAt(i - 1));
  }
  return password
}
//时间戳转年月日时分秒
function numToTime(t) {
  if (!t) t = new Date().getTime()
  let res = {}
  let year = new Date(t).getFullYear()
  let month = (new Date(t).getMonth() + 1 + '').padStart(2, 0)
  let day = (new Date(t).getDate() + '').padStart(2, 0)
  let hour = (new Date(t).getHours() + '').padStart(2, 0)
  let minute = (new Date(t).getMinutes() + '').padStart(2, 0)
  let second = (new Date(t).getSeconds() + '').padStart(2, 0)
  return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
}
export {
  createToken,
  checkWeb,
  checkEmail,
  checkTelephone,
  checkCarNumber,
  dayDiff,
  downloadFile,
  fileToBase64,
  pathToBase64,
  base64ToPath,
  setStorage,
  getStorage,
  removeStorage,
  shake,
  copyText,
  checkIsMobile,
  arraySort,
  debounce,
  throttle,
  arrayRandom,
  encodeStr,
  decodeStr,
  numToTime
}