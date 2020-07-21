# Vue.use()

## 1.axios不能使用Vue.use()

### 1.问题：

​	在用Vue使用别人的组件时，会用到 <font color=red>`Vue.use()`</font> 。例如：<font color=red>`Vue.use(VueRouter)`</font>,<font color=red>`Vue.use(MintUI)`</font>。但用 <font color=red>`axios`</font> 时不需要用 <font color=red>`Vue.use(axios)`</font> 。

### 2.答案：

​	因为<font color=red>`axios`</font> 没有<font color=red>`install`</font> 。

```
//目录结构：在components目录下
├── components
│	|--loading
|		|--index.js
|		|--loading.vue
|--App.vue
|--main.js    
```

```vue
//loading.vue
//定义一个组件
<template>
	<div>
        Loading...
    </div>
</template>
```

```js
//index.js
//引入Loading.vue,并导出
// 引入组件
import LoadingComponent from './loading.vue'
// 定义 Loading 对象
const Loading={
    // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
    install:function(Vue){
        Vue.component('Loading',LoadingComponent)
    }
}
// 导出
export default Loading
```

```js
//在 main.js 中引入 loading 文件下的 index
// 其中'./components/loading/index' 的 /index 可以不写，webpack会自动找到并加载 index 。如果是其他的名字就需要写上。
import Loading from './components/loading/index'
// 这时需要 use(Loading)，如果不写 Vue.use()的话，浏览器会报错，大家可以试一下
Vue.use(Loading)
```

```vue
//在App.vue里面写入定义好的组件标签 <Loading></Loading>
<template>
  <div id="app">
    <h1>vue-loading</h1>
    <Loading></Loading>
  </div>
</template>
```

