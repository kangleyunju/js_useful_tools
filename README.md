### 简介
js常用函数合集，支持vue，react，html项目，更新中...
* npm官网
```
https://www.npmjs.com/package/js-useful-tools
```
* npm下载
```
npm install js-useful-tools
```
* cnpm官网
```
https://npmmirror.com/package/js-useful-tools
```
* cnpm下载
```
cnpm install js-useful-tools
```

### 预览地址
https://kangleyunju.github.io/js_useful_tools/

https://static-mp-2503170c-6f74-4217-ac1a-43133fb6d1b4.next.bspapp.com/js_useful_tools/index.html


### 现有方法
* 生成随机token
```
createToken(token位数)
```
* 验证网址
```
checkWeb('https://www.baidu.com')
```
* 验证邮箱
```
checkEmail('123456@qq.com')
```
* 验证手机号
```
checkTelephone('13012345678')
```
* 验证车牌号
```
checkCarNumber('沪A12345D')
```
* dayDiff 两个日期间隔天数
```
dayDiff('2022-09-08','2023-01-09')
```
* downloadFile 下载文件
```
downloadFile(链接, 名称)
```
* fileToBase64 文件转base64
```
fileToBase64(file)
```
* pathToBase64 链接转base64
```
pathToBase64(path)
```
* base64ToPath base64转链接
```
base64ToPath(base64)
```
* setStorage 添加缓存
```
setStorage(key,data)
```
* getStorage 获取缓存
```
getStorage(key)
```
* removeStorage 删除缓存
```
removeStorage(key)
```
* shake 震动
```
shake(震动时长)
```
* copyText 复制文本
```
copyText('哈哈哈你好')
```
* checkIsMobile 检查设备是否手机
```
checkIsMobile()
```
* arraySort 数组排序,支持二维数组
```
globale.arraySort([{val:1},{val:3},{val:2}],2,'val')
```
* debounce 防抖
```
debounce(()=>{
  console.log('用户结束操作1秒后执行,比如实时搜索')
},1000)
```
* throttle 节流
```
throttle(()=>{
  console.log('1秒执行一次操作,比如提交事件')
},1000)
```
* arrayRandom 从数组中随机取一个数
```
arrayRandom([1, 2, 3])
```
* encodeStr 字符串加密
```
encodeStr('js_useful_tools')
```
* decodeStr 字符串解密
```
decodeStr('yÝÒÔèØËÛáËÓãÞÛß')
```
* numToTime 时间戳转年月日
```
numToTime(1680860366194)
```
* isLeapYear 是否闰年
```
isLeapYear(2023)
```
* deepClone 深拷贝
```
deepClone([1,2,3])
```
* rgbToHex rgb颜色转16进制
```
globale.rgbToHex('rgb(255,16,7)')
```
* hexToRgb 16进制颜色转rgb
```
globale.hexToRgba('#2ff086', 0.9)
```
* getJsType js类型
```
globale.getJsType(null)
```

### 使用方法
* vue项目
```
//单个方法引入
improt {createToken} from 'js-useful-tools'
createToken(8)
```
```
//全部方法引入
improt * as global from 'js-useful-tools'
global.createToken(8)
```
* html项目
```
//单个方法引入
<script type="module">
  import {createToken} from 'js-useful-tool'
  createToken(8)
</script>
```
```
//全部方法引入
<script type="module">
  import  * as globale from 'js-useful-tool'
  global.createToken(8)
</script>
```

### 仓库
| gitee | github |
| --- | --- |
| [js_useful_tools](https://gitee.com/kangleyunju/js_useful_tools) | [js_useful_tools](https://github.com/kangleyunju/js_useful_tools) |

### 邮箱
有问题可以提Issue，或者发邮件：249042680@qq.com，觉得不错可以点个赞