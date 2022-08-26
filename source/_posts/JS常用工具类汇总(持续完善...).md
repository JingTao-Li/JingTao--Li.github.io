---
title: JS常用工具类汇总（持续完善....）
abbrlink: 535a
date: 2021-06-29 19:41:45
layout: post
seo_title: JS常用知识点总结
keywords: JS javascript
categories: 
  - 前端知识积累
  - Javascript
copyright: true
tags:
  - 前端开发
  - 懒人福音
  - 知识积累
photos: ['https://myblogger-1305472061.cos.ap-shanghai.myqcloud.com/JS%E5%B8%B8%E7%94%A8%E5%B7%A5%E5%85%B7%E7%B1%BB%E6%B1%87%E6%80%BB(%E6%8C%81%E7%BB%AD%E6%9B%B4%E6%96%B0....)/no-code.png']
top: 1
---

整理项目开发中经常使用的Javascript片段, 以便Ctrl + C

<!-- more -->


### 1. 创建a标签,打开新页面

```js
/**
 * 创建a标签,打开新页面 openURL()
 * @param {String} url 目标地址
 * @returns null
 */
function openURL(url) {
  let aLabel = document.createElement('a');
  //设置链接
  aLabel.setAttribute('href', url);
  //新窗口打开链接
  aLabel.setAttribute('target', '_blank');
  //设置标签ID
  aLabel.setAttribute('id', 'reportpoint');
  // 防止反复添加
  if (document.getElementById('reportpoint')) {
    document.body.removeChild(document.getElementById('reportpoint'));
  }
  document.body.appendChild(aLabel);
  aLabel.click();
}
```

***

### 2. 防抖函数

防抖函数的原理就是通过延时器控制用户在短时间内进行重复操作的时候取消上一次操作

```js 防抖函数
/**
 * 防抖函数 debounce()
 * @param {function} fn 事件触发的操作
 * @param {number} delay 多少毫秒内连续触发事件，不会执行
 * @returns {Function}
 */
function debounce(fn, delay) {
  let timer = null ;
  return function() {
    let self = this ; // 注意this指向
    args = arguments; // 拿到函数的入参

    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(self, args);
    }, delay)
  }
}
// 假设现有以下点击事件，clickEvent()
let input1 = document.getElementById('input1');
input1.addEventListener('keyup',debounce(action1,1000))

function action1() {
  console.log(input1.value)
}
```

***

### 3. 节流函数

节流函数的原理就是通过控制延时器,当高频事件触发，n秒内只会执行一次

```js 节流函数
/**
 * 节流函数 throttle()
 * @param {function} fn 事件触发的操作
 * @param {number} delay 多少毫秒内连续触发事件，只会执行一次
 * @returns {Function}
 */
function throttle(fn, delay) {
  let timer = null ;
  let flag = true ; // 当前是否正在执行...
  return function() {
    if (!flag) return
    flag = false; 
    let self = this ; // 注意this指向
    args = arguments; // 拿到函数的入参

    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      flag = true; // 时间到了，可以继续执行下一次事件
      fn.apply(self, args);
    }, delay)
  }
}
```

使用的规则同 <a href='#防抖函数'> 防抖函数 </a>

***

### 4. 将字符串运行成js脚本的几种方式

```js
    1. eval('字符串')
    2. new Function('字符串')

    3. setTimeout('字符串', 1000)
    4. setInterval('字符串', 1000)
```

***

### 5. 浏览器复制内容到剪切板

```js
/**
 * 浏览器复制内容到剪切板 copyText()
 * @param {string} text 需要复制的内容
 * @returns null
 */
const copyText = (text)=>{
  var range = document.createRange();
  var copyDOM = document.createElement('a');
  copyDOM.innerHTML = text;
  window.getSelection().removeAllRanges();
  document.body.appendChild(copyDOM)
  range.selectNode(copyDOM);
  window.getSelection().addRange(range);
  var successful = document.execCommand('copy');
  if(successful){
    // 复制成功到剪切板
  }else{
    // 复制失败，一般是因为浏览器不支持复制
  }
  document.body.removeChild(copyDOM)
}
```

***

### 6. 取随机字符串

取随机字符串根据业务的不同会有不一样的取值方式，用作签名的一部分、用做随机密码....
这里我采用的是获取长度不定、去除容易混淆的字符oOLl,9gq,Vv,Uu,I1的随机位数的随机字符

```js
/**
 * 取随机字符串 randomString()
 * @param {number} len 随机字符串的长度
 * @returns null
 */
function randomString(len) {
  len = len || 32; // 默认随机生成32位长度字符串
  var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
  var maxPos = $chars.length;
  var randomStr = '';
  for (var i = 0; i < len; i++) {
    randomStr += $chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return randomStr;
}
```

***

### 7. 异步加载一段js脚本

如： 异步引入网页悬浮脚本、异步引入高德地图、腾讯地图等。

```ts
/**
 * @description 异步加载  一段js放在 header
 * @param {object} url - js 的 url
 * @param {function} callback - 成功回调
 * @returns { promise<any>}} promise
 */
const loadScript = (url: string) => {
  return new Promise(() => {
    try {
      const script: any = document.createElement('script')
      script.type = 'text/javascript'
      if (script.readyState) {
        //IE
        script.onreadystatechange = function () {
          if (
            script.readyState == 'loaded' ||
            script.readyState == 'complete'
          ) {
            script.onreadystatechange = null
            Promise.resolve(0)
          }
        }
      } else {
        //Others: Firefox, Safari, Chrome, and Opera
        script.onload = function () {
          Promise.resolve(0)
        }
      }
      script.src = url
      document.body.appendChild(script)
    } catch (e) {
      Promise.reject(e)
    }
  })
}
```

***

### 8. 获取页面高度

```js
// get page height
const getPageHeight = () => {
  const g = document
  const a = g.body
  const f = g.documentElement
  const d = g.compatMode === 'BackCompat' ? a : g.documentElement
  return Math.max(f.scrollHeight, a.scrollHeight, d.clientHeight)
}
```

***

### 9. 获取页面可视高度

```js
// get page view height
const getPageViewHeight = () => {
  const d = document
  const a = d.compatMode === 'BackCompat' ? d.body : d.documentElement
  return a.clientHeight
}
```

***

### 10. 获取页面可视宽度

```js
// get page view width
const getPageViewWidth = () => {
  const d = document
  const a = d.compatMode === 'BackCompat' ? d.body : d.documentElement
  return a.clientWidth
}
```

***

### 11. 获取页面宽度

```js
// get page width
const getPageWidth = () => {
  const g = document
  const a = g.body
  const f = g.documentElement
  const d = g.compatMode === 'BackCompat' ? a : g.documentElement
  return Math.max(f.scrollWidth, a.scrollWidth, d.clientWidth)
}
```

***

### 12. 判断当前设备

#### 是否为安卓设备

```js
const isAndroidMobileDevice = () => {
  return /android/i.test(navigator.userAgent.toLowerCase())
}
```

#### 是否为苹果设备

```js
const isAppleMobileDevice = () => {
  return /iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase())
}
```

#### 是否为iPhoneX

```js
const isIphonex = () => {
  // X XS, XS Max, XR
  const xSeriesConfig = [
    {
      devicePixelRatio: 3,
      width: 375,
      height: 812
    },
    {
      devicePixelRatio: 3,
      width: 414,
      height: 896
    },
    {
      devicePixelRatio: 2,
      width: 414,
      height: 896
    }
  ]
  if (typeof window !== 'undefined' && window) {
    const isIOS = /iphone/gi.test(window.navigator.userAgent)
    if (!isIOS) return false
    const { devicePixelRatio, screen } = window
    const { width, height } = screen
    return xSeriesConfig.some(
      (item) =>
        item.devicePixelRatio === devicePixelRatio &&
        item.width === width &&
        item.height === height
    )
  }
  return false
}
```

#### 是否为手机设备

```js
const isMobileUserAgent = () => {
  return /iphone|ipod|android.*mobile|windows.*phone|blackberry.*mobile/i.test(
    window.navigator.userAgent.toLowerCase()
  )
}
```

***

### 13. 设置cookie

```ts
/**
 * @description 设置 cookie
 * @params {string} cookie -键名
 * @params {any} value -存入的值
 * @params {Hours} number -有效期限
 */
const setCookie = (name: string, value: any, Hours: number) => {
  const d = new Date()
  const offset = 8
  const utc = d.getTime() + d.getTimezoneOffset() * 60000
  const nd = utc + 3600000 * offset
  const exp = new Date(nd)
  exp.setTime(exp.getTime() + Hours * 60 * 60 * 1000)
  document.cookie =
    name +
    '=' +
    escape(value) +
    ';path=/;expires=' +
    exp.toUTCString() +
    ';domain=360doc.com;'
}
```

***

### 14. 获取字符串对应的字节数

```js
/**
 * @description 获取字节数
 * @param s 字符串
 */
const getBytesLength = (s: string) => {
  return s.replace(/[^\x00-\xff]/gi, '--').length
}
```

***

### 15. 获取本地的时间

```ts
/**
 * 获取本地的时间
 */
const getServerTime = () => {
  var xmlHttp: XMLHttpRequest
  function srvTime() {
    try {
      // FF, Opera, Safari, Chrome
      xmlHttp = new XMLHttpRequest()
    } catch (err1) {
      // IE
      try {
        xmlHttp = new ActiveXObject('Msxml2.XMLHTTP')
      } catch (err2) {
        try {
          xmlHttp = new ActiveXObject('Microsoft.XMLHTTP')
        } catch (eerr3) {
          // AJAX not supported, use CPU time.
          alert('AJAX not supported')
        }
      }
    }
    xmlHttp.open('HEAD', window.location.href.toString(), false)
    xmlHttp.setRequestHeader('Content-Type', 'text/html')
    xmlHttp.send('')
    return xmlHttp.getResponseHeader('Date')
  }

  var st = srvTime()
  var date = new Date(st as string)
  var timestamp = date.getTime()
  return timestamp
}
```

***

### 16. 获取浏览器的Cookie的值

```js
/**
 * 获取浏览器的Cookie的值
 */
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

// 获取token 
cookie('TOKEN')
```

***

### 17. 颜色RGB转十六进制

```js
/**
 * 颜色RGB转十六进制
 */
const rgbToHex = (r, g, b) => "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

rgbToHex(0, 51, 255); 
// Result: #0033ff
```

***

### 18. 复制到剪贴板(新的API)

```js
/**
 * 复制到剪贴板
 */
const copyToClipboard = (text) => navigator.clipboard.writeText(text);
    
copyToClipboard("Hello World");
```

***

### 19. 清除所有Cookie

```js
/**
 * 清除所有Cookie
 */
const clearCookies = document.cookie.split(';').forEach(cookie => document.cookie = cookie.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`));
```

***

### 20. 生成随机十六进制颜色

```js
/**
 * 生成随机十六进制颜色
 */
const randomHex = () => `#${Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0")}`;
    
 console.log(randomHex());
// Result: #92b008
```

***

### 21. 从URL获取查询参数 -- JS

```js
/**
 * 从URL获取查询参数
 */
const getParameters = (URL) => {
  URL = JSON.parse(
    '{"' +
      decodeURI(URL.split("?")[1])
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
  return JSON.stringify(URL);
};

// 调用
getParameters(window.location);
// Result: { search : "easy", page : 3 }
```

或者： 

```js
/**
 * 从URL获取查询参数
 */
Object.fromEntries(new URLSearchParams(window.location.search))
```

***

### 22. 检查用户的设备是否在暗黑模式

```js
/**
 * 检查用户的设备是否在暗黑模式
 * @return Boolean
 */
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
```

***

### 23. 下载一个Excel文档

```js
/**
 * 下载一个链接
 */ 
function download(link, name) {
	if(!name){
		name = link.slice(link.lastIndexOf('/') + 1)
	}
	let eleLink = document.createElement('a')
	eleLink.download = name
	eleLink.style.display = 'none'
	eleLink.href = link
	document.body.appendChild(eleLink)
	eleLink.click()
	document.body.removeChild(eleLink)
}

//下载excel
download('http://111.229.14.189/file/1.xlsx')
```

***

### 24. 浏览器中下载一些DOM内容/JSON文件

```js
/**
 * 浏览器下载静态文件
 * @param {String} name 文件名
 * @param {String} content 文件内容
 */
function downloadFile(name, content) {
	if (typeof name == 'undefined') {
		throw new Error('The first parameter name is a must')
	}
	if (typeof content == 'undefined') {
		throw new Error('The second parameter content is a must')
	}
	if (!(content instanceof Blob)) {
		content = new Blob([content])
	}
	const link = URL.createObjectURL(content)
	download(link, name)
}

// 调用下载
downloadFile('1.txt','lalalallalalla')
downloadFile('1.json',JSON.stringify({name:'hahahha'}))
```

***

### 25. 浏览器下载MP4/PDF/图片等

```js
/**
 * 浏览器下载MP4/PDF/图片等
 */
import axios from 'axios'
//提供一个link，完成文件下载，link可以是  http://xxx.com/xxx.xls
function downloadByLink(link,fileName){
	axios.request({
		url: link,
		responseType: 'blob' // 关键代码，让axios把响应改成blob
	}).then(res => {
    const link = URL.createObjectURL(res.data)
		download(link, fileName)
  })
}
```

注意：会有同源策略的限制，需要配置转发

***

### 26. 去除对象中的空元素

给后端发送数据的时候，要判断某个属性是不是空字符串，然后给后端拼参数，这块逻辑抽离出来就是`cleanObject`，代码实现如下：

```js
/**
 * cleanObject 去除对象中的空元素
 */
export const cleanObject = (object) => {
  // Object.assign({}, object)
  if (!object) {
    return {};
  }
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

// 判断是否为空
export const isVoid = (value) =>
  value === undefined || value === null || value === "";
```

使用：

```js
let res = cleanObject({
    name:'',
    pageSize:10,
    page:1
})
console.log("res", res) // 输出 { page:1,pageSize:10 }
```

***

### 27. 常用的正则验证

```js
/**
 * 常用的正则验证
 */
const checkStr = function(str, type) { // 常用正则验证，注意type大小写
  switch (type) {
    case 'phone': // 手机号码
      return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str)
    case 'tel': // 座机
      return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str)
    case 'card': // 身份证
      return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str)
    case 'pwd': // 密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
      return /^[a-zA-Z]\w{5,17}$/.test(str)
    case 'postal': // 邮政编码
      return /[1-9]\d{5}(?!\d)/.test(str)
    case 'QQ': // QQ号
      return /^[1-9][0-9]{4,9}$/.test(str)
    case 'email': // 邮箱
      return /^[\w-]+(.[\w-]+)*@[\w-]+(.[\w-]+)+$/.test(str)
    case 'money': // 金额(小数点2位)
      return /^\d*(?:.\d{0,2})?$/.test(str)
    case 'URL': // 网址
      return /(http|ftp|https)://[\w-_]+(.[\w-_]+)+([\w-.,@?^=%&:/~+#]*[\w-@?^=%&/~+#])?/.test(str)
    case 'IP': // IP
      return /((?:(?:25[0-5]|2[0-4]\d|[01]?\d?\d)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d?\d))/.test(str)
    case 'date': // 日期时间
      return /^(\d{4})-(\d{2})-(\d{2}) (\d{2})(?::\d{2}|:(\d{2}):(\d{2}))$/.test(str) ||
        /^(\d{4})-(\d{2})-(\d{2})$/.test(str)
    case 'number': // 数字
      return /^[0-9]$/.test(str)
    case 'english': // 英文
      return /^[a-zA-Z]+$/.test(str)
    case 'chinese': // 中文
      return /^[\u4E00-\u9FA5]+$/.test(str)
    case 'lower': // 小写
      return /^[a-z]+$/.test(str)
    case 'upper': // 大写
      return /^[A-Z]+$/.test(str)
    case 'HTML': // HTML标记
      return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str)
    default:
      return true
  }
}
```

***

### 28. 阿拉伯数字转中文大写数字

```js
/**
 * 阿拉伯数字转中文大写数字
 */
const numberToChinese = function(num) { // 将阿拉伯数字翻译成中文的大写数字
  let AA = new Array('零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十')
  let BB = new Array('', '十', '百', '仟', '萬', '億', '点', '')
  let a = ('' + num).replace(/(^0*)/g, '').split('.')
  let k = 0
  let re = ''
  for (let i = a[0].length - 1; i >= 0; i--) {
    switch (k) {
      case 0:
        re = BB[7] + re
        break
      case 4:
        if (!new RegExp('0{4}//d{' + (a[0].length - i - 1) + '}$').test(a[0])) {
          re = BB[4] + re
        }
        break
      case 8:
        re = BB[5] + re
        BB[7] = BB[5]
        k = 0
        break
    }
    if (k % 4 === 2 && a[0].charAt(i + 2) !== 0 && a[0].charAt(i + 1) === 0) {
      re = AA[0] + re
    }
    if (a[0].charAt(i) !== 0) {
      re = AA[a[0].charAt(i)] + BB[k % 4] + re
    }
    k++
  }
  if (a.length > 1) { // 加上小数部分(如果有小数部分)
    re += BB[6]
    for (let i = 0; i < a[1].length; i++) {
      re += AA[a[1].charAt(i)]
    }
  }
  if (re === '一十') {
    re = '十'
  }
  if (re.match(/^一/) && re.length === 3) {
    re = re.replace('一', '')
  }
  return re
}
```

***

### 29. base64图片下载功能

```js
/**
 * base64图片下载功能
 */
const downloadFile = function(base64, fileName) { //base64图片下载功能
  let base64ToBlob = function(code) {
    let parts = code.split(';base64,');
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
      type: contentType
    });
  };
  let aLink = document.createElement('a');
  let blob = base64ToBlob(base64); //new Blob([content]);
  let evt = document.createEvent("HTMLEvents");
  evt.initEvent("click", true, true); //initEvent不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
}
```

***

### 30. 获取div高度

```js
/**
 * 获取div高度
 */
const div = document.querySelector('');
window.getComputedStyle(div).getPropertyValue('height');
```


***

### 31. 将base64转化成可用formData提交的文件

```ts
/**
 * convertBase64UrlToBlob 将base64转化成可用formdata提交的文件
 * @param {string} urlData base64位的url
 * @returns
 */
const convertBase64UrlToBlob = (urlData) => {
  //去掉url的头，并转换为byte
  const split = urlData.split(',');
  const bytes = window.atob(split[1]);
  //处理异常,将ascii码小于0的转换为大于0
  const ab = new ArrayBuffer(bytes.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], { type: split[0].match(/:(.*?);/)[1] });
};
```

***

### 32. 找到对象中所有可能存在的字符串，并替换掉其中的<, >, (, )分别为全角的＜＞（）

```ts
/**
 * 找到对象中所有可能存在的字符串，并替换掉其中的<, >, (, )分别为全角的＜＞（）
 * 可以自定义拓展更多的规则
 * @param {object} obj 需要处理的对象
 * @return {object} aim obj
 */
export const formatString = (obj) => {
  for (const key in obj) {
    if (!obj.hasOwnProperty(key)) return; // 排除掉原型继承而来的属性
    if (typeof obj[key] == 'string') {
      obj[key] = obj[key]
        .replace(/</g, '＜')
        .replace(/>/g, '＞')
        .replace(/\(/g, '（')
        .replace(/\)/g, '）');
    }
    if (typeof obj[key] == 'object' || typeof obj[key] == 'function') {
      formatString(obj[key]);
    }
  }
  return obj;
};
```

***

### 33. 将对象格式转化为get请求所需要的参数

```ts
/**
 * getParams 将对象格式转化为get请求所需要的参数
 * @param {object} params 需要处理的对象
 * @return {object} aim obj
 */
export function getParams(params) {
  let paramStr = '';
  Object.keys(params).forEach((item) => {
    if (paramStr === '') {
      paramStr = `${item}=${params[item]}`;
    } else {
      paramStr = `${paramStr}&${item}=${params[item]}`;
    }
  });
  return paramStr;
}
```

***

### 34. 获取图片真实的宽高（非真实渲染）

```ts
/**
 * getImageSize 获取图片的宽高
 * @param {string} url 需要处理的图片路径
 * @return {object} { width: number, height: number }
 */
export function getImageSize(url: string): Promise<any> {
  return new Promise(function (resolve, reject) {
    const image = new Image();
    image.onload = function () {
      resolve({
        width: image.width, // 或naturalWidth
        height: image.height, // 或naturalHeight
      });
      // 注释中这两个属性在Firefox/Chrome/Safari/Opera及IE9+里已经实现
    };
    image.onerror = function () {
      reject(new Error('error'));
    };
    image.src = url;
  });
}
```

***

### 35. 递归拿出对象数组中所有指定的字段项，并返回新数组

```ts
/**
 * 递归拿出所有指定的字段项
 * @param {Array} list
 * @param {string} key
 * @param {string} child
 * @returns {Array} 返回所有key的集合
 */
export function getKeyList(list: Array<any>, key: string, child = 'children') {
  const result: any[] = [];
  list.forEach((listItem) => {
    listItem[key] && result.push(listItem[key]);
    if (listItem[child] && listItem[child].length) {
      result.push(...getKeyList(listItem[child], key, child));
    }
  });
  return result;
}
```