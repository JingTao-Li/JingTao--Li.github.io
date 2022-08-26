---
title: 持久化vuex
tags: 知识积累
categories:
  - 前端知识积累
  - Vue
abbrlink: 83d9
date: 2022-08-22 15:22:20
---

vue 项目中一般都需要存储用户的信息、用户保存的设置、一些操作的状态等等，大量的信息存储会选择数据库，但是像是用户下单状态、用户音视频通话状态、微信一键登录返回 code 等一些数据存储在数据库无疑是没有意义的。为了防止存储在 vuex 中的数据一经用户刷新页面就丢失导致体验不好的现象，我们可以对 vuex 进行持久化保存，同时可以区分一些数据是存储在 localStorage 中还是 sessionStorage 中。

<!-- more -->

***

> 原理： createStore 也就是创建 vuex 实例时，vuex 向外提供了 plugins 属性，plugins 的值是一个数据，它会向其中所有的元素注入 store 对象，为了方便实时获取到 store，并且会在 store 更新时触发所有 plugins 中的事件，用 subscribe 事件去监听每次 mutation 事件。

```ts
import { createStore } from 'vuex';

export default createStore<RootState>({
  modules: {},
  strict: true, // 是否开启严格模式
  plugins: [], // 元素为函数，并且函数的第一个参数是store对象
});
```

##### 如此一来，可以实时获取到 store，并能够在 store 更新时触发回调，就可以直接操作 store 的存与取了

这个是负责存储和取值的实现：

```ts
interface Socket {
  key: string;
  modules: Modules;
  modulesKeys: ModulesKeys;
}

interface Modules {
  [propName: string]: any;
}

interface ModulesKeys {
  local: string[];
  session: string[];
}

interface Mutation {
  type: any;
  payload: any;
}
const exclude = ['actions', 'getters', 'mutations', 'namespaced'];
export default function Persistent({ key, modules, modulesKeys }: Socket) {
  return (store: any) => {
    const localOldState = JSON.parse(localStorage.getItem(key) || '{}');
    const sessionOldState = JSON.parse(sessionStorage.getItem(key) || '{}');
    let oldState: Modules = {};
    Object.assign(oldState, localOldState, sessionOldState);
    if (Object.keys(oldState).length > 0) {
      for (const oldKey in oldState) {
        modules[oldKey] = oldState[oldKey];
      }
      store.replaceState(modules);
    }
    store.subscribe((mutation: Mutation, state: any) => {
      // 判断是否需要缓存数据至localStorage
      if (modulesKeys.local.length > 0) {
        const localData = setData(store.state, modulesKeys.local);
        localStorage.setItem(key, JSON.stringify(localData));
      } else {
        localStorage.removeItem(key);
      }
      // 判断是否需要缓存数据至sessionStorage
      if (modulesKeys.session.length > 0) {
        const sessionData = setData(store.state, modulesKeys.session);
        sessionStorage.setItem(key, JSON.stringify(sessionData));
      } else {
        sessionStorage.removeItem(key);
      }
    });
  };
}

function setData(state: any, module: string[]) {
  let data: Modules = {};
  for (const i of module) {
    data[i] = state[i];
  }
  return data;
}
```

#### 同时推荐一个 createLogger 的 plugin，可以实时打印 store 的更改

这里我的文档结构为：
```
  | -- store
    | -- modules
      | -- app.ts
      | -- user.ts
    | -- plugins
      | -- persistent.ts
    index.ts
```
最终的 store/index.ts 代码如下：

```ts
import { createStore, createLogger } from 'vuex';
import Persistent from './plugins/persistent';
import { userState } from '@/store/modules/user';
import { appState } from '@/store/modules/app';
const debug = import.meta.env.MODE !== 'production';
const files = import.meta.globEager('./modules/*.ts');

// 这里只是举例： user  app 模块
export interface RootState {
  user: userState;
  app: appState;
}

let modules: any = {};
Object.keys(files).forEach((c: string) => {
  const module = files[c].default;
  const moduleName: string = c.replace(/^\.\/(.*)\/(.*)\.\w+$/, '$2');
  modules[moduleName] = module;
});

// 这是一个vuex本地存储插件，默认把vuex所有数据都做存储了
// local代表存储在localStorage里面，进行永久存储
// session代表存储在sessionStorage里面，进行临时存储
// 都接收Modules的文件名数组，如：['app', 'keepAlive', 'user']
// 用户相关的数据建议直接存储在local里面，session里面会导致打开新窗口时获取不到token值，因为session只针对当前会话
const persistent = Persistent({
  key: 'vuex',
  modules,
  modulesKeys: {
    local: Object.keys(modules).filter(item => item !== 'call'),
    session: ['call'],
  },
});

export default createStore<RootState>({
  modules: {
    ...modules,
  },
  strict: debug,
  plugins: debug ? [createLogger(), persistent] : [persistent],
});
```
