---
title: 实用的Vue自定义指令（持续完善...）
tags:
  - 前端开发
  - 知识积累
  - Vue积累
categories: 
  - 前端知识积累
  - Vue
abbrlink: a18d
date: 2022-08-18 17:22:11
---

常用的几个Vue自定义指令收集，持续更新...

<!-- more -->


### 1. 点击元素外部事件
```ts
/**
 * v-clickOutside
 * 点击元素外部事件
 * 接收参数：function类型，点击外面时返回true,点击内部时返回false
 */
import type { Directive, DirectiveBinding } from 'vue';
interface ElType extends HTMLElement {
  __handleClick__: any;
}
const directive: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function';
    }
    el.__handleClick__ = function (e) {
      if (el.contains(e.target)) {
        binding.value(false);
      } else {
        binding.value(true);
      }
    };
    document.addEventListener('click', el.__handleClick__);
  },
  beforeUnmount(el: ElType) {
    document.removeEventListener('click', el.__handleClick__);
  },
};

export default directive;
```

***

### 2. 复制某个值至剪贴板

```ts
/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */
import type { Directive, DirectiveBinding } from 'vue';
import { ElMessage } from 'element-plus';
interface ElType extends HTMLElement {
  copyData: string | number;
  __handleClick__: any;
}
const directive: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value;
    el.addEventListener('click', handleClick);
  },
  updated(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value;
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', el.__handleClick__);
  },
};

function handleClick(this: ElType, ev: MouseEvent) {
  let input = document.createElement('input');
  input.value = this.copyData.toLocaleString();
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
  ElMessage({
    type: 'success',
    message: '复制成功',
  });
}

export default directive;
```

***

### 3. 按钮防抖指令,可扩展至input

```ts
/**
 * v-debounce
 * 按钮防抖指令，可自行扩展至input
 * 接收参数：function类型
 */
import type { Directive, DirectiveBinding } from 'vue';
interface ElType extends HTMLElement {
  __handleClick__: any;
}
const directive: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      console.error('callback must be a function');
      return;
    }
    let timer: NodeJS.Timeout | null = null;
    el.__handleClick__ = function (e: ElType) {
      if (timer) {
        clearInterval(timer);
      }
      timer = setTimeout(() => {
        binding.value();
      }, 200);
    };
    el.addEventListener('click', el.__handleClick__);
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', el.__handleClick__);
  },
};

export default directive;
```

***

### 4. 窗口拖拽

```ts
/**
 * 可基于窗口各种拖拽使用
 */
import type { Directive } from 'vue';
interface ElType extends HTMLDivElement {
  __mouseDown__: any;
  __mouseUp__: any;
  __mouseMove__: any;
  __sizeChange__: any;
}
interface DataDialog {
  x: number;
  y: number;
  width: number;
  height: number;
  marginTop?: string | number;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}
const drag: Directive = {
  mounted(el: ElType, binding) {
    if (binding.value) {
      handleElShow(el);
    }
  },
  updated(el, binding) {
    if (binding.value) {
      handleElShow(el);
    } else {
      handleElHide(el);
    }
  },
  beforeUnmount(el: ElType) {
    handleElHide(el);
  },
};

function handleElShow(el: ElType) {
  const dialog = el.querySelector('.el-dialog') as HTMLElement;
  if (!dialog) {
    return;
  }
  const header = el.querySelector('.el-dialog__header') as HTMLElement;
  const dialogMask = el.querySelector('.el-overlay') as HTMLElement;
  dialogMask.style.cssText += 'overflow: hidden;';
  header.style.cursor = 'move';
  let dragStatus = false;
  let data = {
    // 数据源，不变部分为：window信息、dialog信息、mouse初始值信息，可变部分为：拖拽坐标位移
    window: {
      // window信息
      width: 0,
      height: 0,
    },
    dialog: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      marginTop: '',
    } as DataDialog, // dialog信息
    mouse: {
      // 鼠标初始信息
      x: 0,
      y: 0,
    },
    drag: {
      // 拖拽过程信息
      x: 0,
      y: 0,
    },
  };
  // 所有的监听只为了修改data数据
  header.addEventListener('mousedown', mouseDown);
  document.addEventListener('mousemove', mouseMove);
  document.addEventListener('mouseup', mouseUp);
  window.addEventListener('resize', sizeChange);
  // 边界处理，防止拖动位置溢出
  function handlePosition() {
    if (data.mouse.x - data.drag.x >= data.dialog.x) {
      data.drag.x = data.mouse.x - data.dialog.x;
    }
    if (data.drag.x - data.mouse.x >= data.window.width - (data.dialog.x + data.dialog.width)) {
      data.drag.x = data.mouse.x + data.window.width - data.dialog.x - data.dialog.width;
    }
    if (data.mouse.y - data.drag.y >= data.dialog.y) {
      data.drag.y = data.mouse.y - data.dialog.y;
    }
    if (data.drag.y - data.mouse.y >= data.window.height - (data.dialog.y + data.dialog.height)) {
      data.drag.y = data.mouse.y + data.window.height - data.dialog.y - data.dialog.height;
    }
    setPosition();
  }
  // 根据data来设置拖动后的位置
  function setPosition() {
    let top = data.drag.y - data.mouse.y + data.dialog.y;
    let left = data.drag.x - data.mouse.x + data.dialog.x;
    dialog.style.cssText += `position: absolute; top: calc(${top}px - ${data.dialog.marginTop}); left: ${left}px;`;
  }
  function mouseDown(e: any) {
    // 获取dialog目前的位置，坐标, 以及屏幕当前的宽高
    // 一切初始数据的获取应该放置于此，避免其他如：宽度修改等一系列的影响
    if (e.button !== 0) {
      return;
    }
    data.window = {
      width: document.body.clientWidth,
      height: document.body.clientHeight,
    };
    data.dialog = dialog.getBoundingClientRect();
    data.dialog.marginTop = window.getComputedStyle(dialog).marginTop;
    data.mouse = {
      x: e.clientX,
      y: e.clientY,
    };
    dragStatus = true;
  }
  function mouseMove(e: any) {
    if (dragStatus) {
      data.drag = {
        x: e.clientX,
        y: e.clientY,
      };
      dialogMask.style.userSelect = 'none';
      handlePosition();
    }
  }
  function mouseUp(e: any) {
    dialogMask.style.userSelect = 'auto';
    dragStatus = false;
  }
  function sizeChange(e: any) {
    // dialog.style.cssText += 'position: static';
  }
  // 方便卸载使用
  el.__mouseDown__ = mouseDown;
  el.__mouseUp__ = mouseUp;
  el.__mouseMove__ = mouseMove;
  el.__sizeChange__ = sizeChange;
}

function handleElHide(el: ElType) {
  // 避免重复开销，卸载所有的监听
  // 解决问题：多次创建新的实例 =》 监听不取消 =》 同时存在多个无用的监听，导致页面卡顿
  document.removeEventListener('mousedown', el.__mouseDown__);
  document.removeEventListener('mousemove', el.__mouseMove__);
  document.removeEventListener('mouseup', el.__mouseUp__);
  window.removeEventListener('resize', el.__sizeChange__);
}

export default drag;
```

***

### 5. 窗口拖拽2，可自定义父级

```ts
/**
 * 支持父级，自定义父级，以及window作为父级
 * 使用示例：
 * 1. v-dragable
 * 2. v-dragable="'father'" // 使用父级作为父级
 * 3. v-dragable="'body'" // 使用body对象作为父级
 * 4. v-dragable="'#app'" // 使用id作为父级
 * 5. v-dragable="'.list'" // 使用class名作为父级
 * 3-5代表所有可被document.querySelector()解析的参数值
 **/
import type { Directive, DirectiveBinding } from 'vue';
interface Position {
  x: number;
  y: number;
}
interface Mouse {
  down: Position;
  move: Position;
}
interface ElType extends HTMLElement {
  __mouseDown__: any;
  __mouseUp__: any;
  __mouseMove__: any;
  __parentDom__: HTMLElement;
  __position__: Position;
}
const directive: Directive = {
  mounted: (el: ElType, binding: DirectiveBinding) => {
    setParentDom(el, binding, false);
    // 子级元素位置处理
    // 1. 获取父子元素当前位置
    let parentDomRect: DOMRect;
    let elDomRect: DOMRect;
    let mouseData: Mouse = {
      down: { x: 0, y: 0 },
      move: { x: 0, y: 0 },
    };
    let mouseDown: boolean = false;
    el.__position__ = {
      x: 0,
      y: 0,
    };
    let bodyUserSelect: string = 'text';

    function handleMouseDown(e: MouseEvent) {
      if (e.button !== 0) {
        return;
      }
      mouseData.down = {
        x: e.clientX,
        y: e.clientY,
      };
      mouseDown = true;
      parentDomRect = el.__parentDom__.getBoundingClientRect();
      elDomRect = el.getBoundingClientRect();
      bodyUserSelect = document.querySelector('body')!.style.userSelect;
      document.querySelector('body')!.style.userSelect = 'none';
    }
    function handleMouseMove(e: MouseEvent) {
      if (!mouseDown) {
        return;
      }
      mouseData.move = {
        x: e.clientX,
        y: e.clientY,
      };
      setPosition();
    }
    function handleMouseUp(e: MouseEvent) {
      if (mouseDown) {
        mouseDown = false;
        document.querySelector('body')!.style.userSelect = bodyUserSelect;
      }
    }
    // 用于设置el元素的Position位置
    function setPosition() {
      // 通过几何图形计算更佳，我就是通过几何画图计算出来的当前数据，使用者可以自行计算，得到这两个值
      const x = mouseData.move.x + elDomRect.x - parentDomRect.x - mouseData.down.x;
      const y = mouseData.move.y + elDomRect.y - parentDomRect.y - mouseData.down.y;
      // 进行x,y坐标边界处理判断
      if (x < 0) {
        el.__position__.x = 0;
      } else if (x > parentDomRect.width - elDomRect.width) {
        el.__position__.x = parentDomRect.width - elDomRect.width;
      } else {
        el.__position__.x = x;
      }
      if (y < 0) {
        el.__position__.y = 0;
      } else if (y > parentDomRect.height - elDomRect.height) {
        el.__position__.y = parentDomRect.height - elDomRect.height;
      } else {
        el.__position__.y = y;
      }
      // 渲染到真实dom属性上
      el.style.cssText += `
        position: absolute;
        z-index: 100;
        left: ${el.__position__.x}px;
        top: ${el.__position__.y}px;
      `;
    }
    el.__mouseDown__ = handleMouseDown;
    el.__mouseMove__ = handleMouseMove;
    el.__mouseUp__ = handleMouseUp;
    // 2. 监听拖拽事件
    el.addEventListener('mousedown', el.__mouseDown__);
    document.addEventListener('mousemove', el.__mouseMove__);
    document.addEventListener('mouseup', el.__mouseUp__);
  },
  updated(el, binding) {
    setParentDom(el, binding, true);
  },
  beforeUnmount(el: ElType) {
    // 避免重复开销，卸载所有的监听
    // 解决问题：多次创建新的实例 =》 监听不取消 =》 同时存在多个无用的监听，导致页面性能变差
    document.removeEventListener('mousedown', el.__mouseDown__);
    document.removeEventListener('mousemove', el.__mouseMove__);
    document.removeEventListener('mouseup', el.__mouseUp__);
  },
};
// 设置parentDom，供mounted和update使用
function setParentDom(el: ElType, binding: DirectiveBinding, updated: boolean) {
  const array = [{ name: 'father', dom: el.parentElement }];

  // 获取父级元素
  let parentDom: HTMLElement | HTMLBodyElement;
  // 以下if操作用于确保一定有一个parentDom
  if (binding.value) {
    const findArr = array.find((arr) => {
      return arr.name === binding.value;
    });
    if (findArr && findArr.dom) {
      parentDom = findArr.dom;
    } else {
      parentDom =
        document.querySelector(binding.value) || (array[0].dom as HTMLElement) || array[1].dom;
    }
  } else {
    parentDom = (array[0].dom as HTMLElement) || array[1].dom;
  }
  const parentDomRect = parentDom.getBoundingClientRect();
  const elDomRect = el.getBoundingClientRect();
  // 把以前的样式重置一下
  if (el.__parentDom__) {
    el.__parentDom__.style.position = 'static';
  }
  el.__parentDom__ = parentDom;
  el.__parentDom__.style.position = 'relative';

  if (updated) {
    el.__position__ = {
      x: elDomRect.x - parentDomRect.x,
      y: elDomRect.y - parentDomRect.y,
    };
    // return
    el.style.cssText += `
      position: absolute;
      z-index: 100;
      left: ${el.__position__.x}px;
      top: ${el.__position__.y}px;
    `;
  }
}
export default directive;
```

***

### 6. 长按指令，长按时触发事件

```ts
/**
 * v-longpress
 * 长按指令，长按时触发事件
 */
import type { Directive, DirectiveBinding } from 'vue';

const directive: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    if (typeof binding.value !== 'function') {
      throw 'callback must be a function';
    }
    // 定义变量
    let pressTimer: any = null;
    // 创建计时器（ 2秒后执行函数 ）
    let start = (e: MouseEvent | TouchEvent) => {
      if (e.button) {
        if (e.type === 'click' && e.button !== 0) {
          return;
        }
      }
      if (pressTimer === null) {
        pressTimer = setTimeout(() => {
          handler(e);
        }, 1000);
      }
    };
    // 取消计时器
    let cancel = (e) => {
      if (pressTimer !== null) {
        clearTimeout(pressTimer);
        pressTimer = null;
      }
    };
    // 运行函数
    const handler = (e: MouseEvent | TouchEvent) => {
      binding.value(e);
    };
    // 添加事件监听器
    el.addEventListener('mousedown', start);
    el.addEventListener('touchstart', start);
    // 取消计时器
    el.addEventListener('click', cancel);
    el.addEventListener('mouseout', cancel);
    el.addEventListener('touchend', cancel);
    el.addEventListener('touchcancel', cancel);
  },
};

export default directive;
```

***

### 7. 设置水印效果

```ts
/**
 * v-waterMarker可接收参数，均为非必填
 * { text: 'vue-admin-box', font: '16px Microsoft JhengHei', textColor: '#000' }
 */
import { Color, FontFamilyProperty, FontProperty } from 'csstype';
import type { Directive, DirectiveBinding } from 'vue';

const directive: Directive = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    binding.value ? binding.value : (binding.value = {});
    addWaterMarker(binding.value.text, el, binding.value.font, binding.value.textColor);
  },
};

function addWaterMarker(
  str: string,
  parentNode: HTMLElement,
  font: FontProperty,
  textColor: Color
) {
  // 水印文字，父元素，字体，文字颜色
  var can = document.createElement('canvas') as HTMLCanvasElement;
  parentNode.appendChild(can);
  can.width = 300;
  can.height = 225;
  can.style.display = 'none';
  var cans = can.getContext('2d') as CanvasRenderingContext2D;
  cans.rotate((-20 * Math.PI) / 180);
  cans.font = font || '16px Microsoft JhengHei';
  cans.fillStyle = textColor || 'rgba(180, 180, 180, 0.3)';
  cans.textAlign = 'left';
  cans.textBaseline = 'middle';
  cans.fillText(str || 'vue-admin-box', can.width / 10, can.height / 2);
  parentNode.style.backgroundImage = 'url(' + can.toDataURL('image/png') + ')';
}

export default directive;
```

***