---
title: 那些开发中的css技巧
layout: post
seo_title: 那些开发中的css技巧
keywords: CSS 开发效率提升
categories: 
  - 前端知识积累
  - CSS
tags:
  - 懒人福音
  - 前端开发
abbrlink: cc46
date: 2021-07-02 12:11:42
top: 1
copyright: true
---

在开发中合理利用 css，可以大大提高开发效率。积累以便 Ctrl + C

<!-- more -->

### 1. 去除 safari 浏览器输入框的小图标以及密码输入的钥匙图标

```css
/* 去掉Safari浏览器下密码输入框自带的小钥匙图标 */
input::-webkit-credentials-auto-fill-button {
  display: none !important;
  visibility: hidden;
  pointer-events: none;
  position: absolute;
  right: 0;
}

/* 去掉safari浏览器input右边的小图标/小按钮 */
input:focus::-webkit-contacts-auto-fill-button {
  opacity: 0;
}
```

---

### 2. 调整浏览器滚动条的样式

```css
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  /* width: 5px;
  height: 5px; */
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  border-radius: 999px;
  border: 0px solid transparent;
  box-shadow: 1px 1px 5px rgba(100, 100, 100, 0.2) inset;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 999px;
  border: 0px solid transparent;
  min-height: 20px;
  background-clip: content-box;
  box-shadow: 0 0 0 5px rgba(100, 100, 100, 0.5) inset;
  -webkit-box-shadow: 0 0 0 5px rgba(100, 100, 100, 0.5) inset;
}

::-webkit-scrollbar-corner {
  background: transparent;
}
```

---

### 3. 毛玻璃效果

```css
div {
  background: hsla(0, 0%, 100%, 0.75);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
```

---

### 4. 手机端点开多选框出现蓝色块

```css
* {
  -webkit-tap-highlight-color: transparent;
}
```

---

### 5. 鼠标放上出现一个白色的框(带动画)

```css
/* 默认样式 -- 不显示 */
.border:before {
  content: '';
  position: absolute;
  left: 10px;
  top: 10px;
  right: 10px;
  bottom: 10px;
  box-sizing: border-box;
  border: 3px solid #ffffff;
  transform: scale(0);
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) 0s;
}

/* hover时改变 */
.border:hover:before {
  transform: scale(1);
  opacity: 1;
}
```

**效果图**
![边框效果图](https://myblogger-1305472061.cos.ap-shanghai.myqcloud.com/%E9%82%A3%E4%BA%9B%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84css%E6%8A%80%E5%B7%A7/border-animation.gif)

---

### 6. flex 布局实现简单的瀑布流

**html 部分**

```html
<!-- 这里需要将文档结构处理成类似的结构 -->
<div class="container">
  <div class="container-item">
    <img src="*&^%^%&%*&*" />
    <h4>标题1</h4>
    <p>这是item1的描述信息</p>
  </div>
  <div class="container-item">
    <img src="*&^%^%&%*&*" />
    <h4>标题2</h4>
    <p>这是item2的描述信息</p>
  </div>
  <div class="container-item">
    <img src="*&^%^%&%*&*" />
    <h4>标题3</h4>
    <p>这是item3的描述信息</p>
  </div>
  <div class="container-item">
    <img src="*&^%^%&%*&*" />
    <h4>标题4</h4>
    <p>这是item4的描述信息</p>
  </div>
</div>
```

**css 部分**

```scss
.container {
  width: 750rpx;
  margin: 0 auto;
  column-count: 4; /* 瀑布流的列数 */
  column-gap: 0; /* 每列之间的间距 如： 10px;*/

  &-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
```

### 7. 一个交错动画案例（加载...）

**html 部分**

```htm
<div class="loading">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```

**scss 部分**

```scss
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #222;
}

.loading {
  $colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
  display: flex;

  .dot {
    position: relative;
    width: 2em;
    height: 2em;
    margin: 0.8em;
    border-radius: 50%;

    &::before {
      position: absolute;
      content: '';
      width: 100%;
      height: 100%;
      background: inherit;
      border-radius: inherit;
      animation: wave 2s ease-out infinite;
    }

    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        background: nth($colors, $i);

        &::before {
          animation-delay: $i * 0.2s;
        }
      }
    }
  }
}

@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}
```

![交错动画演示](https://myblogger-1305472061.cos.ap-shanghai.myqcloud.com/%E9%82%A3%E4%BA%9B%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84css%E6%8A%80%E5%B7%A7/loading_animation.gif)

---

### 8. 利用伪类实现按钮边框特效

**html 部分**

```html
<button data-text="Start" class="btn btn-primary btn-ghost btn-border-stroke  btn-text-float-up">
  <div class="btn-borders">
    <div class="border-top"></div>
    <div class="border-right"></div>
    <div class="border-bottom"></div>
    <div class="border-left"></div>
  </div>
  <span class="btn-text">Start</span>
</button>
```

**scss 部分**

```scss
@import url(https://fonts.googleapis.com/css?family=Lato);

body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1a1e23;
}

.btn {
  --hue: 190;
  --ease-in-duration: 0.25s;
  --ease-in-exponential: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  --ease-out-duration: 0.65s;
  --ease-out-delay: var(--ease-in-duration);
  --ease-out-exponential: cubic-bezier(0.19, 1, 0.22, 1);
  position: relative;
  padding: 1rem 3rem;
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  text-decoration: none;
  background-color: hsl(var(--hue), 100%, 41%);
  border: 1px solid hsl(var(--hue), 100%, 41%);
  outline: transparent;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  transition: 0.25s;

  &:hover {
    background: hsl(var(--hue), 100%, 31%);
  }

  &-primary {
    --hue: 171;
  }

  &-ghost {
    color: hsl(var(--hue), 100%, 41%);
    background-color: transparent;
    border-color: hsl(var(--hue), 100%, 41%);

    &:hover {
      color: white;
    }
  }

  &-border-stroke {
    border-color: hsla(var(--hue), 100%, 41%, 0.35);

    .btn-borders {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      .border-top {
        position: absolute;
        top: 0;
        width: 100%;
        height: 1px;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleX(0);
        transform-origin: left;
      }

      .border-right {
        position: absolute;
        right: 0;
        width: 1px;
        height: 100%;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleY(0);
        transform-origin: bottom;
      }

      .border-bottom {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleX(0);
        transform-origin: left;
      }

      .border-left {
        position: absolute;
        left: 0;
        width: 1px;
        height: 100%;
        background: hsl(var(--hue), 100%, 41%);
        transform: scaleY(0);
        transform-origin: bottom;
      }

      // when unhover, ease-out left, bottom; ease-in right, top

      .border-left {
        transition: var(--ease-out-duration) var(--ease-out-delay) var(--ease-out-exponential);
      }
      .border-bottom {
        transition: var(--ease-out-duration) var(--ease-out-delay) var(--ease-out-exponential);
      }

      .border-right {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }
      .border-top {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }
    }

    &:hover {
      color: hsl(var(--hue), 100%, 41%);
      background: transparent;

      .border-top,
      .border-bottom {
        transform: scaleX(1);
      }
      .border-left,
      .border-right {
        transform: scaleY(1);
      }

      // when hover, ease-in left, bottom; ease-out right, top

      .border-left {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }
      .border-bottom {
        transition: var(--ease-in-duration) var(--ease-in-exponential);
      }

      .border-right {
        transition: var(--ease-out-duration) var(--ease-out-delay) var(--ease-out-exponential);
      }
      .border-top {
        transition: var(--ease-out-duration) var(--ease-out-delay) var(--ease-out-exponential);
      }
    }
  }

  &-text-float-up {
    &::after {
      position: absolute;
      content: attr(data-text);
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transform: translateY(35%);
      transition: 0.25s ease-out;
    }

    // when hover, ease-in top-text; ease-out bottom-text

    .btn-text {
      display: block;
      transition: 0.75s 0.1s var(--ease-out-exponential);
    }

    &:hover {
      // when hover, ease-in bottom-text; ease-out top-text

      .btn-text {
        opacity: 0;
        transform: translateY(-25%);
        transition: 0.25s ease-out;
      }

      &::after {
        opacity: 1;
        transform: translateY(0);
        transition: 0.75s 0.1s var(--ease-out-exponential);
      }
    }
  }
}
```

![按钮动画](https://myblogger-1305472061.cos.ap-shanghai.myqcloud.com/%E9%82%A3%E4%BA%9B%E5%BC%80%E5%8F%91%E4%B8%AD%E7%9A%84css%E6%8A%80%E5%B7%A7/button_animation.gif)

---

### 9. 更换旧的网格系统

```scss
$minColumnWidth: 10rem; // 最小宽度
$gridGap: 15px; // 网格之间的上下间距
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax($minColumnWidth, 1fr));
  grid-gap: 2rem;

  & + .grid {
    margin-top: $gridGap;
  }
}
```

---

### 10. 媒体查询适配刘海屏

```css
// iphone x/xs/11 pro
@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
}

//  iphone xr/11
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) {
}

// iphone x/xs/11pro max
@media only screen and (device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) {
}

// iphone 12mini
@media only screen and (device-width: 360px) and (device-height: 780px) and (-webkit-device-pixel-ratio: 3) {
}

// iphone 12/12pro
@media only screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) {
}

// iphone 12pro max
@media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
}
```

---

### 11. Ios 新特性适配带有小横条的机型

```scss
body {
  padding-bottom: constant(safe-area-inset-bottom) !important;
  padding-bottom: env(safe-area-inset-bottom) !important;
}
```
