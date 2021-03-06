# Vue-设置路由导航的两种方法

**1. `<router-link :to="...">`**

1. to里的值可以是一个字符串路径，或者一个描述地址的对象。例如：

```html
// 字符串
<router-link to="apple"> to apple</router-link>
// 对象
<router-link :to="{path:'apple'}"> to apple</router-link>
// 命名路由
<router-link :to="{name: 'applename'}"> to apple</router-link>
//直接路由带查询参数query，地址栏变成 /apple?color=red
<router-link :to="{path: 'apple', query: {color: 'red' }}"> to apple</router-link>
// 命名路由带查询参数query，地址栏变成/apple?color=red
<router-link :to="{name: 'applename', query: {color: 'red' }}"> to apple</router-link>
//直接路由带路由参数params，params 不生效，如果提供了 path，params 会被忽略
<router-link :to="{path: 'apple', params: { color: 'red' }}"> to apple</router-link>
// 命名路由带路由参数params，地址栏是/apple/red
<router-link :to="{name: 'applename', params: { color: 'red' }}"> to apple</router-link>
```

**2.router.push(...)方法**

1. 同样的规则也适用于router.push(...)方法。

```js
// 字符串
router.push('apple')
// 对象
router.push({path:'apple'})
// 命名路由
router.push({name: 'applename'})
//直接路由带查询参数query，地址栏变成 /apple?color=red
router.push({path: 'apple', query: {color: 'red' }})
// 命名路由带查询参数query，地址栏变成/apple?color=red
router.push({name: 'applename', query: {color: 'red' }})
//直接路由带路由参数params，params 不生效，如果提供了 path，params 会被忽略
router.push({path:'applename', params:{ color: 'red' }})
// 命名路由带路由参数params，地址栏是/apple/red
router.push({name:'applename', params:{ color: 'red' }})
```

**3.注意点**

**1、关于带参数的路由总结如下：**

> 无论是直接路由“path" 还是命名路由“name”，带查询参数query，地址栏会变成“/url?查询参数名：查询参数值“;
> 直接路由“path" 带路由参数params params 不生效;
> 命名路由“name" 带路由参数params 地址栏保持是“/url/路由参数值”;

**2、设置路由map里的path值：**

>  带路由参数params时，路由map里的path应该写成: `path:'/apple/:color' `;
>  带查询参数query时，路由map里的path应该写成: path:'/apple' ；

**3、获取参数方法：**

> 在组件中： {{$route.params.color}}
> 在js里： this.$route.params.color