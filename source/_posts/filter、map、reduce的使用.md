---
title: filter、map、reduce的使用
tags:
  - 知识积累
  - 前端开发
categories: 
  - 前端知识积累
  - Javascript
abbrlink: '4109'
date: 2021-10-04 23:20:38
copyright: true
---

记录数组的三个API对比。

<!-- more -->

<!-- ############################################## 1. filter、map、reduce的使用 ############################################## -->

直接使用一个小的案例去说明他们的关系：

```js
const nums = [10, 20, 111, 444, 40, 50];
// 对于数据nums现有三个需求：
// 1.取出所有小于100的数字
// 2.将所有小于100的数字进行转化 --乘以2
// 3.将所有的newNums2数字相加得到最后的结果。
```

## 使用普通 for 循环去处理以上需求

> 需求 1：取出所有小于 100 的数字

```js
let newNums = [];
for (let n of nums) {
  if (n < 100) {
    newNums.push(n);
  }
}
```

> 需求 2： 将所有小于 100 的数字进行转化 --乘以 2

```js
let newNums2 = [];
for (let n of newNums) {
  newNums2.push(n * 2);
}
```

> 需求 3： 将所有的 newNums2 数字相加得到最后的结果。

```js
let total = 0;
for (let n of newNums2) {
  total += n;
}
```

## filter / map / reduce 完成以上需求

```js
//需求1：取出所有小于100的数字
nums.filter(function (n) {
  //filter中的回调函数有一个要求：必须返回一个boolean值
  //当返回true时，函数内部会自动将本次回调的n加入到一个新的数组中
  //当返回为false时，函数内部会过滤掉这次的n
  return n < 100; //这里就可以直接满足第一个需求
});
//这里会返回一个新的数组，就是包含nums中所有值小于100的新数组
let newNums = nums.filter(function (n) {
  return n < 100;
});
console.log(newNums); // [10,20,40,50]
```

```js
//需求2： 将所有小于100的数字进行转化 --乘以2
let newNums2 = newNums.map(function (n) {
  return n * 2;
});
console.log(newNums2); // [20,40,80,100]
```

```js
//需求3：将所有的newNums2数字相加得到最后的结果
//reduce作用：对数组中所有的内容进行汇总
newNums2.reduce(function (preValue, n) {
  //preValue 是上一次返回的值
  //return 100; //对应下面的过程
  return preValue + n;
}, 0);
//reduce(参数1，参数2); 会返回最后汇总的结果; 参数1：整合数据操作、参数2：初始值
//这里面的function会执行4次，
/**
	第一次： preValue->0 ; n -> 20;
	第二次： preValue->100 ; n ->40;
	第二次： preValue->100 ; n ->80;
	第二次： preValue->100 ; n ->100;
*/
```

> 计算最终的结果

```js
let total = nums
  .filter(function (n) {
    return n < 100;
  })
  .map(function (n) {
    return n * 2;
  })
  .reduce(function (preValue, n) {
    return preValue + n;
  }, 0);
```

这样的话就很好的简化了代码，逻辑也会更加清楚。
什么？还是不够简化？那下面的代码呢？

```js
let total = nums
  .filter(n => n < 100)
  .map(n => n * 2)
  .reduce((preValue, n) => preValue + n);
console.log(total); // total = 240;
```

## 总结

> filter: 对数组进行过滤，当返回值为 true 时，才会返回当前处理的元素。

> map: 映射，可以对数组中每个元素进行操作，并逐一返回，生成一个新的数组。

> reduce: 接收一个函数作为累加器，数组中的每个值（从左到右）开始合并，最终返回一个值。
> reduce 可接收的参数: reduce((参数 1,参数 2,参数 3,参数 4) => {}, 参数 5)
> &nbsp;&nbsp;参数 1. previousValue(上一次调用回调函数返回的值，或者是提供的初始值（initialValue）)
> &nbsp;&nbsp;参数 2. currentValue(数组中当前被处理的元素)
> &nbsp;&nbsp;参数 3. index（当前元素在数组中的索引）
> &nbsp;&nbsp;参数 4. array（调用 reduce 的数组）
> 并且 reduce 可以传入一个初始值（参数 5），初始值的格式随意定义，如果不传，默认是 previousValue

<!-- *** -->
<!-- ############################################## 1. end ############################################## -->
