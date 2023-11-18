//生成随机token,max位数
export function createToken(max = 10) {
	let token = ''
	for (let i = 1; i <= max; i++) {
		const n = Math.floor(Math.random() * 16).toString(16)
		token += n
	}
	return token
}
//验证网址
export function checkWeb(val) {
	const reg = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/
	return reg.test(val)
}
//验证邮箱
export function checkEmail(val) {
	const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
	return reg.test(val)
}
//验证手机号
export function checkTelephone(val) {
	const reg = /^1[3-9]\d{9}$/
	return reg.test(val)
}
//验证车牌号
export function checkCarNumber(val) {
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
export function dayDiff(date1, date2) {
	if (date1 && date2) {
		return Math.ceil(Math.abs(new Date(date1).getTime() - new Date(date2).getTime()) / 86400000)
	}
}
// 下载文件, path路径,name文件名
export async function downloadFile(path, name) {
	const x = new XMLHttpRequest()
	x.open('GET', path, true)
	x.responseType = 'blob'
	x.onload = function() {
		if (x.status == 200) {
			const url = window.URL.createObjectURL(x.response)
			const a = document.createElement('a')
			a.href = url
			a.download = name
			a.click()
		} else {
			return false
		}
	}
	x.send()
}
//文件转blob
export function fileToBlob(file) {
	const start = 0;
	const end = file.size - 1;
	const blob = file.slice(start, end + 1, file.type);
	return URL.createObjectURL(blob)
}
//文件转base64
export function fileToBase64(file) {
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
export function urlToBase64(path) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.crossOrigin = 'anonymous';
		img.src = path;
		img.onload = () => {
			const canvas = document.createElement('canvas');
			canvas.width = img.width;
			canvas.height = img.height;
			const ctx = canvas.getContext('2d');
			ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
			const base64 = canvas.toDataURL('image/jpeg');
			resolve(base64)
		}
	})
}
//添加缓存
export function setStorage(key, data) {
	localStorage.setItem(key, JSON.stringify(data))
}
//获取缓存
export function getStorage(key) {
	return JSON.parse(localStorage.getItem(key))
}
//删除缓存
export function removeStorage(key) {
	localStorage.removeItem(key)
}
//震动
export function shake(time = 300) {
	const navigator = window.navigator
	if (!("vibrate" in navigator)) return
	navigator.vibrate = navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate
	if (!navigator.vibrate) return
	navigator.vibrate(time)
}
//复制文本
export function copyText(val = '') {
	navigator.clipboard.writeText(val)
}
//检查设备是否手机
export function checkIsMobile() {
	return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i) ? true : false
}
//数组排序,sort=1升序,sort=2降序
export function arraySort(arr, sort = 1, field) {
	arr.sort(function(a, b) {
		return field ? a[field] - b[field] : a - b
	})
	if (sort === 2) {
		arr.reverse()
	}
	return arr
}
/**
  @name 防抖：在规定时间内只执行最后一次操作,比如实时搜索
  @param fn 回调函数
  @param delay 延时的时间
**/
export function debounce(fn, delay = 300) {
	let timer = null
	return function(...args) {
		if (timer != null) {
			clearTimeout(timer)
			timer = null
		}
		timer = setTimeout(() => {
			fn.call(this, ...args)
		}, delay)
	}
}
/**
  @name 节流：一定时间范围内，用户触发多次只会执行一次,比如提交事件
  @param fn 回调函数
  @param delay 延时的时间
**/
export function throttle(fn, delay = 1000) {
	let timer = null
	return function(...args) {
		if (timer == null) {
			timer = setTimeout(() => {
				fn.call(this, ...args)
				clearTimeout(timer)
				timer = null
			}, delay)
		}
	}
}
//从数组中随机取一个数
export function arrayRandom(array) {
	return array[Math.floor(Math.random() * array.length)]
}
//字符串加密   
export function encodeStr(code) {
	if (code) code = code.toString()
	var password = String.fromCharCode(code.charCodeAt(0) + code.length);
	for (var i = 1; i < code.length; i++) {
		password += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
	}
	return password
}
//字符串解密
export function decodeStr(code) {
	var password = String.fromCharCode(code.charCodeAt(0) - code.length)
	for (var i = 1; i < code.length; i++) {
		password += String.fromCharCode(code.charCodeAt(i) - password.charCodeAt(i - 1));
	}
	return password
}
//时间戳转年月日时分秒
export function stampToTime(t) {
	if (!t) t = new Date().getTime()
	let date = new Date(t)
	let year = date.getFullYear()
	let month = (date.getMonth() + 1 + '').padStart(2, 0)
	let day = (date.getDate() + '').padStart(2, 0)
	let hour = (date.getHours() + '').padStart(2, 0)
	let minute = (date.getMinutes() + '').padStart(2, 0)
	let second = (date.getSeconds() + '').padStart(2, 0)
	return year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second
}
// 是否是闰年
export function isLeapYear(year = new Date().getFullYear()) {
	return (year % 4 == 0 && year % 100 != 0) || year % 400 == 0
}
//深拷贝
export function deepClone(source, map = new Map()) {
	// 非对象直接返回
	if (source instanceof Object === false) return source
	let target = Array.isArray(source) ? [] : {}
	if (map.get(source)) {
		return map.get(source)
	}
	map.set(source, target)
	const type = Object.prototype.toString.call(source)
	let emptyObj
	// 如果是可遍历类型，直接创建空对象
	if (['[object Array]', '[object Object]', '[object Map]', '[object Set]', '[object Arguments]', '[object String]'].includes(type)) {
		emptyObj = new source.constructor()
	}
	if (type === '[object Map]') {
		source.forEach((sourcee, key) => {
			emptyObj.set(key, deepClone(sourcee, map))
		})
		return emptyObj
	}
	if (type === '[object Set]') {
		source.forEach(sourcee => {
			emptyObj.add(deepClone(sourcee, map))
		})
		return emptyObj
	}
	if (type === '[object Date]') return cloneDate(source)
	if (type === '[object RegExp]') return cloneReg(source)
	for (let item in source) {
		if (source.hasOwnProperty(item)) {
			if (typeof source[item] === 'obejct') {
				target[item] = deepClone(source[item], map)
			} else {
				target[item] = source[item]
			}
		}
	}
	return target
}
//rgba转16进制
export function rgbToHex(rgba = 'ragb(0,0,0,0)') {
	const rgbaArray = rgba.match(/\d+(\.\d+)?/g)
	const [r, g, b, a = 1] = rgbaArray
	const hex = '#' + ((1 << 24) + (+r << 16) + (+g << 8) + +b).toString(16).slice(1)
	if (a !== 1) {
		const alpha = Math.round(a * 255).toString(16);
		return `${hex}${alpha.padStart(2, '0')}`
	}
	return hex
}
// 16进制转rgb
export function hexToRgb(hex = '#000', opcity = 1) {
	const rgba = []
	hex = hex.replace('#', '').padEnd(8, 'F');
	for (let i = 0; i < hex.length; i += 2) {
		if (i < 6) {
			rgba.push(parseInt(hex.slice(i, i + 2), 16))
		} else {
			rgba.push(opcity)
		}
	}
	return `rgba(${rgba.toString()})`
}
//获取js类型
export function getJsType(val) {
	return Object.prototype.toString.call(val).match(/\[object(.*)]/)[1].replace(/\s*/g, '')
}
/**
 * @name 获取时间戳
 * @author kangle
 * @value now	当前时间戳
 * @value today	今日0点时间戳
 * @value tomorrow 明天0点时间戳
 * @value month 本月0点时间戳
 * @value year 本年0点时间戳
 * @value 数字 任意天数0点时间戳
 **/
export function getStamp(value = 'now') {
	let now = new Date()
	if (value == 'now') {
		return now.getTime()
	}
	if (value == 'today') {
		now.setHours(0, 0, 0, 0)
		return now.getTime()
	}
	if (value == 'tomorrow') {
		now.setHours(0, 0, 0, 0)
		now.setDate(now.getDate() + 1)
		return now.getTime()
	}
	if (value == 'month') {
		now.setDate(1)
		now.setHours(0, 0, 0, 0)
		return now.getTime()
	}
	if (value == 'year') {
		now.setMonth(0, 1)
		now.setHours(0, 0, 0, 0)
		return now.getTime()
	}
	if (typeof(value) == 'number') {
		now.setHours(0, 0, 0, 0)
		now.setDate(now.getDate() + value)
		return now.getTime()
	}
}
/**
 * @name 导出json
 * @author kangle
 * @data 导入的数据,可以是数组、对象、字符串等
 * @name 导出的文件名
 **/
export function exportJson(data, name) {
	if (data) {
		const url = `data:text/csv;charset=utf-8,\ufeff${JSON.stringify(data)}`
		const link = document.createElement("a")
		link.href = url
		link.download = `${name||'file'}.json`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
}
//导入json
export function importJson(file) {
	if (!file) return
	return new Promise(function(resolve, reject) {
		let reader = new FileReader()
		reader.readAsText(file)
		reader.onload = function(res) {
			try {
				let data = JSON.parse(res.target.result)
				resolve(data)
			} catch (error) {
				resolve(res.target.result)
			}
		}
	})
}
//元素全屏
export function fullScreen(e) {
	let element = e || document.body
	if (document.fullscreenElement) {
		if (document.exitFullscreen) {
			document.exitFullscreen();
		} else if (document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if (document.msExitFullscreen) {
			document.msExiFullscreen();
		} else if (document.webkitCancelFullScreen) {
			document.webkitCancelFullScreen();
		}
	} else {
		if (element.requestFullscreen) {
			element.requestFullscreen();
		} else if (element.mozRequestFullScreen) {
			element.mozRequestFullScreen();
		} else if (element.msRequestFullscreen) {
			element.msRequestFullscreen();
		} else if (element.webkitRequestFullscreen) {
			element.webkitRequestFullScreen();
		}
	}
}
//url转file
export function urlToFile(url, name = "文件名") {
	return new Promise(async (resolve) => {
		const response = await fetch(url);
		const blob = await response.blob()
		let file = new File([blob], name, { type: blob.type });
		resolve(file)
	})
}
//url是否有效
export function isUrlAble(url) {
	return new Promise((resolve) => {
		fetch(url).then(() => {
			resolve(true)
		}).catch((err) => {
			resolve(false)
		})
	})
}
//获取视频封面,width视频宽度
export function getVideoPoster(file, width) {
	return new Promise((resolve) => {
		const video = document.createElement("video");
		video.style.display = "none";
		document.body.appendChild(video);
		const videoURL = URL.createObjectURL(file);
		video.src = videoURL;
		video.controls = true;
		video.onloadeddata = function() {
			video.currentTime = 1;
		};
		video.onseeked = function() {
			const canvas = document.createElement("canvas");
			canvas.style.display = "none";
			document.body.appendChild(canvas);
			const context = canvas.getContext("2d");
			if (width) {
				canvas.width = width;
				canvas.height = width * video.videoHeight / video.videoWidth;
			} else {
				canvas.width = video.videoWidth;
				canvas.height = video.videoHeight;
			}
			context.drawImage(video, 0, 0, canvas.width, canvas.height);
			const dataUrl = canvas.toDataURL("image/jpg");
			document.body.removeChild(video);
			document.body.removeChild(canvas);
			resolve(dataUrl);
		};
	});
}
//图片压缩
export function compressImg(file, width = 300) {
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = function(event) {
			const img = new Image();
			img.src = event.target.result;
			img.onload = function() {
				const canvas = document.createElement('canvas');
				if (img.width < width) {
					canvas.width = img.width
					canvas.height = img.height
				} else {
					canvas.width = width;
					canvas.height = width * img.height / img.width;
				}
				const ctx = canvas.getContext('2d');
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
				const compressedImage = canvas.toDataURL('image/jpeg', 1);
				resolve(compressedImage);
			}
		};
	})
}
//秒数转时分秒
export function formatSeconds(num = 0) {
	let day = Math.floor(num / 3600 / 24)
	let hours = Math.floor(num / 3600);
	let minutes = Math.floor((num % 3600) / 60);
	let seconds = num % 60;
	hours = hours.toString().padStart(2, '0')
	minutes = minutes.toString().padStart(2, '0')
	seconds = seconds.toString().padStart(2, '0')
	if (day > 0) {
		return day + ":" + hours + ":" + minutes + ":" + seconds;
	} else if (hours > 0) {
		return hours + ":" + minutes + ":" + seconds;
	} else {
		return minutes + ":" + seconds;
	}
}
//获取文件大小
export function getFileSize(fileSize = 0) {
	const KB = 1024;
	const MB = 1024 * KB;
	const GB = 1024 * MB;
	const TB = 1024 * GB;
	if (fileSize >= TB) {
		return (fileSize / TB).toFixed(1) + "TB";
	} else if (fileSize >= GB) {
		return (fileSize / GB).toFixed(1) + "GB";
	} else if (fileSize >= MB) {
		return (fileSize / MB).toFixed(1) + "MB";
	} else if (fileSize >= KB) {
		return (fileSize / KB).toFixed(1) + "KB";
	} else {
		return fileSize + "B";
	}
}