### 简介
js常用函数合集，支持vue，react，html项目，更新中...
* [npm官网](https://www.npmjs.com/package/js-useful-tools)
```
https://www.npmjs.com/package/js-useful-tools
```
* npm下载
```
npm install js-useful-tools
```
* [cnpm官网](https://npmmirror.com/package/js-useful-tools)
```
https://npmmirror.com/package/js-useful-tools
```
* cnpm下载
```
cnpm install js-useful-tools
```

### 预览地址
1. https://kangleyunju.gitee.io/js_useful_tools
2. https://kangleyunju.github.io/js_useful_tools/
3. https://static-mp-2503170c-6f74-4217-ac1a-43133fb6d1b4.next.bspapp.com/js_useful_tools/index.html

### 现有方法
1. createToken 生成随机位数token
```
createToken(token位数)
```
2. checkWeb 验证网址
```
checkWeb('https://www.baidu.com')
```
3. checkEmail 验证邮箱
```
checkEmail('123456@qq.com')
```
4. checkTelephone 验证手机号
```
checkTelephone('13012345678')
```
5. checkCarNumber 验证车牌号
```
checkCarNumber('沪A12345D')
```
6. dayDiff 两个日期间隔天数
```
dayDiff('2022-09-08','2023-01-09')
```
7. downloadFile 下载文件
```
downloadFile(链接, 名称)
```
8. fileToBlob 文件转blob
```
fileToBlob(file)
```
9. fileToBase64 文件转base64
```
fileToBase64(file)
```
10. urlToBase64 链接转base64
```
urlToBase64(path)
```
11. setStorage 添加缓存
```
setStorage(key,data)
```
12. getStorage 获取缓存
```
getStorage(key)
```
13. removeStorage 删除缓存
```
removeStorage(key)
```
14. shake 震动
```
shake(震动时长)
```
15. copyText 复制文本
```
copyText('npm i js_useful_tools')
```
16. checkIsMobile 检查设备是否手机
```
checkIsMobile()
```
17. arraySort 数组排序,支持二维数组
```
globale.arraySort([{val:1},{val:3},{val:2}],2,'val')
```
18. debounce 防抖
```
debounce(()=>{
  console.log('用户结束操作1秒后执行,比如实时搜索')
},1000)
```
19. throttle 节流
```
throttle(()=>{
  console.log('1秒执行一次操作,比如提交事件')
},1000)
```
20. arrayRandom 从数组中随机取一个数
```
arrayRandom([1, 2, 3])
```
21. encodeStr 字符串加密
```
encodeStr('js_useful_tools')
```
22. decodeStr 字符串解密
```
decodeStr('yÝÒÔèØËÛáËÓãÞÛß')
```
23. stampToTime 时间戳转年月日
```
stampToTime(1680860366194)
```
24. isLeapYear 是否闰年
```
isLeapYear(2023)
```
25. deepClone 深拷贝
```
deepClone([1,2,3])
```
26. rgbToHex rgb颜色转16进制
```
globale.rgbToHex('rgb(255,16,7,0.5)')
```
27. hexToRgb 16进制颜色转rgb
```
globale.hexToRgba('#2ff086', 0.9)
```
28. getJsType 获取js类型
```
globale.getJsType(null)
```
29. getStamp 获取各个日期时间戳
```
global.getStamp('month')
```
30. exportJson 导出json
```
global.exportJson(data)
```
31. importJson 导入json
```
global.importJson(file)
```
32. fullScreen 某个元素全屏
```
global.fullScreen(document.body)
```
33. urlToFile url转file
```
global.urlToFile(url)
```
34. isUrlAble url是否有效
```
global.isUrlAble(url)
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

### 发布
```
npm config set registry https://registry.npmjs.org
npm publish
```