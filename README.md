### 简介
js常用函数合集, 更新中...
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
* demo演示
```
https://static-mp-2503170c-6f74-4217-ac1a-43133fb6d1b4.next.bspapp.com/js_useful_tools/demo.html
```

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
* arraySort 数组排序
```
arraySort([1,3,2])
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