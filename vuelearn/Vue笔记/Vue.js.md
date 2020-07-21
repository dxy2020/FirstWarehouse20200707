# Vue.js

## 1.环境安装配置

## 2.介绍

1. 构建用户界面的渐进式框架。
2. 自底向上增量开发的设计。
3. 通过尽可能简单的API实现响应的数据绑定和组合的视图组件。
4. Vue做的都是单页应用（<font color=red>解释</font>:**当你的项目准备打包时，运行`npm run build`时，就会生成dist文件夹，这里面只有静态资源和一个index.html页面**）

## 3.Vue实例

1. $mount和le的区别

   >\* 效果一样，将实例化后的vue挂载到指定的dom元素中。
   >
   >\* 如果在实例化vue的时候指定el，则该vue将会渲染在此`el`对应的dom中，反之，若没有指定el，则vue实例会处于一种“未挂载”的状态，此时可以通过`$mount`来手动执行挂载。
   >
   >\* 如果`$mount`没有提供参数，模板将被渲染为文档之外的的元素，并且你必须使用原生DOM API把它插入文档中

   ```javascript
   var MyComponent = Vue.extend({
     template: '<div>Hello!</div>'
   })
   
   // 创建并挂载到 #app (会替换 #app)
   new MyComponent().$mount('#app')
   
   // 同上
   new MyComponent({ el: '#app' })
   
   // 或者，在文档之外渲染并且随后挂载
   var component = new MyComponent().$mount()
   document.getElementById('app').appendChild(component.$el)
   ```

2. 实例属性

   >\* <font color=red>`$options`</font>:获取定义在data外的数据和方法的。如：`this.$options.name`
   >
   >\* 

## 4.模板语法

### 4.1 介绍

1. 声明式地将DOM绑定至底层Vue实例的数据。
2. Vue将模板编译成虚拟DOM渲染函数。
3. 可以直接写渲染（render）函数，JSX语法。

```html
<div class="app">
    <a v-bind:href="url">百度一下</a>
</div>  
<!--简写-->
<a :href="url">百度一下</a>
```

```html

```



---

### 4.2 插值

1. 常见形式:

   ```html
   <span>Message:{{msg}}</span>
   ```

2. v-once指令（执行一次性地插值，数据改变时，插值处内容不会更新）

   ```html
   <span v-once>这个将不会改变：{{msg}}</span>
   ```

   <font color=red>注意</font>：会影响到该节点上的其它数据绑定。

3. v-html指令。

   js:

   ```html
   var app8=new Vue({
   	el:'#app-8',
   	data:{
   		rawHtml:`<span style="color:red">This should be red.</span>`
   	}//实际代码中仅需要一个``,该处的两个有个引号是取消Markdown对标签的影响。
   }
   ```

   html:

   ```html
   <div id='app-8'>
   	<p>Using mustaches:{{rawHtml}}</p>
   	<p>Using v-html directive:<span v-html="rawHtml"></span></p>
   </div>
   ```

   结果：

   `Using mustaches:<span style="color:red">This should be red.</span>`

   `Using v-html directive:This should be red.`

   <font color=red>注意</font>：你的站点上动态渲染的任意HTML可能会非常危险，因为它很容易导致XSS攻击。请只对可信内容使用HTML插值，绝不要随用户提供的内容使用插值。

4. v-bind指令（{{}}不能作用在HTML attribute上）

   ```html
   <div v-bind:id="dynamicId"></div>
   ```

5. JavaScript表达式

   ```html
   {{ number + 1 }}
   {{ ok ? 'YES' : 'NO' }}
   <div v-bind:id="'list-' + id"></div>
   ```

   这些表达式会在<u>**所属Vue实例的数据作用域下作为JavaScript被解析**</u>。但是每个绑定只能包含单个表达式。语句、流程控制不会生效。

   <font color=red>注意</font>：模板表达式都被放在沙盒中，只有访问全局变量的一个白名单，如Math和Data。不能在模板表达式中试图访问用户定义的全局变量。

-----

### 4.3 指令

1. 指令（Directive）是带有v-前缀的特殊属性（attribute）。

2. 一些指令（如：v-bind）可以接收一个“参数”。

   ```html
   <a v-bind:href="url">...</a>	//href为参数。
   <a v-on:click="doSomething">...</a>	  //监听DOM事件。
   ```

3. 动态参数：[]

   `<a v-bind:[attributeName]="url">...</a>`	attributeName作为JS表达式动态求值，作为参数。

   <font color=red>注意</font>：动态参数=null：该值可以被显性地用于移除绑定，任何其他非字符串类型的值都将会触发一个警告。

   `<a v-bind:['foo' +bar]="value">...</a>`	<!--触发编译警告-->

   空格和引号在HTML attribute名里是无效的。

   浏览器会把attribute名全部强制转为小写，不建议用大写字符来命名键名。

4. 修饰符（modifier）：半角句号 . 指明的特殊后缀

   `<form v-on:submit.prevent="onSubmit">...</form>`

5. 缩写:v-bind,v-on

   ```html
   <!-- 完整语法 --> 
   <a v-bind:href="url">...</a>
   <!-- 缩写 -->
   <a :href="url">...</a>
   <!-- 动态参数的缩写-->
   <a :[key]="url"> ... </a>
   <!-- 完整语法 -->
   <a v-on:click="doSomething">...</a>
   <!-- 缩写 -->
   <a @click="doSomething">...</a>
   <!-- 动态参数的缩写-->
   <a @[event]="doSomething"> ... </a>
   ```

------

## 5.方法、计算属性、侦听器

### 5.1 方法

`<p>Reversed message: "{{ reversedMessage() }}"</p>`

<!--在组件中--> 

```html
methods:{
	reversedMessage:function(){
		return this.message.split('').reverse().join('')
}}
```

-----

### 5.2 计算属性

```html
computed: {
	fullName: {    
	// getter
		get: function () {
			return this.firstName + ' ' + this.lastName 
	},  
	// setter
		set: function (newValue) { 
			var names = newValue.split(' ');
			this.firstName = names[0];
			this.lastName = names[names.length - 1]
 } } }
```

------

### 5.3侦听器

```html
watch: { 
	firstName: function (val) {
		this.fullName = val + ' ' + this.lastName   
	}, 
	lastName: function (val) {
		this.fullName = this.firstName + ' ' + val
	}
}

```

-------

## 6.Class与Style绑定

1. 操作元素的class列表和内联样式是数据绑定的一个常见需求。因为它们都是attribute，所以我们可以用`v-bind`处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将`v-bind`用于`class`和`style`时，表达式结果的类型除了字符串之外，还可以是对象或数组。

   ```html
   <div v-bind:class="{active:isActive}"></div><!--active这个class存在与否将取决于数据property isActive的truthiness-->
   ```

   ----

## 7. 条件渲染

1. `v-if`指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回truthy值的时候被渲染。

   ```html
   <h1 v-if="awesome">Vue is awesome!</h1>
   <h1 v-else>Oh no</h1>
   ```

2. `v-if` vs `v-show`

   >\* `v-if`是"真正"的条件渲染，它会确保在切换过程中条件快内的事件监听器和子组件适当地被销毁和重建。
   >
   >\* `v-if`也是__惰性__的：如果在初始渲染时条件为假，则什么也不会做——直到条件第一次变为真时，才会开始渲染条件快。
   >
   >\* `v-show`不管初始条件是什么，元素总是会被渲染，并且只是简单地基于CSS进行切换 。
   >
   >\* `v-if`有更高的切换开销，而`v-show`有更高的初始渲染开销。
   >
   >\* 如果需要非常频繁地切换，则使用`v-show`较好；
   >
   >\* 如果在运行时条件很少改变，则使用`v-if`较好。

## 8.列表渲染

## 9.事件处理

## 10.表单输入绑定

## 11.组件

1. 语法：**全局注册的行为必须在根 Vue 实例 (通过 `new Vue`) 创建之前发生**

   ```javascript
   /*全局注册*/
   Vue.component('my-component-name', { /* ... */ })//全局注册
   //data
   Vue.component('button-counter',{
   				data:function(){//一个组件的data选项必须是一个函数
   					return{
   						count:0
   					}
   				},
   				/*data:{//直接报错
   					count:0
   				},*/
   				template:'<button @click="count++">点击我{{count}}次了</button>'
   //Prop
   Vue.component('prop-text',{
   			props:['post'],//该处变量应该和title传进来的变量一致
   			template:`
   			<div class="blog-post">
   				<h3>{{post.title}}</h3>
   				<div v-html="post.content"></div>
   			</div>`
   		});
   /*在注册之后可以用在任何新创建的 Vue 根实例 (new Vue) 的模板中*/
   /*局部注册*/
   var ComponentA = { /* ... */ }
   var ComponentB = { /* ... */ }
   var ComponentC = { /* ... */ }
   new Vue({
     el: '#app',
     components: {
       'component-a': ComponentA,
       'component-b': ComponentB
     }
   })
   /*对于 components 对象中的每个 property 来说，其 property 名就是自定义元素的名字，其 property 值就是这个组件的选项对象。*/
   //注意：局部注册的组件在其子组件中不可用,例如ComponentA 在 ComponentB 中可用
   var ComponentA = { /* ... */ }
   var ComponentB = {
     components: {
       'component-a': ComponentA
     },
     // ...
   }
   ```

2. 组件名大小写

   >\* kebab-case(短横线分隔命名)
   >
   >```javascript
   >Vue.component('my-component-name', { /* ... */ })
   >/*
   >引用时必须：kebab-case 即：<my-component-name>
   >*/
   >```
   >
   >\* PascalCase(首字母大写命名)
   >
   >```javascript
   >Vue.component('MyComponentName', { /* ... */ })
   >/*
   >引用时两种都可以 即<my-component-name> 和 <MyComponentName>
   >*/
   >```

3. 模块系统

## 12.Prop

1. camelCase(驼峰命名法)

2. HTML中的attribute名是大小写不敏感的，所以浏览器会把所有大写字符解释为小写字符。

   ```javascript
   Vue.component('blog-post', {
     // 在 JavaScript 中是 camelCase 的
     props: ['postTitle'],
     template: '<h3>{{ postTitle }}</h3>'
   })
   /*camelCase (驼峰命名法) 的 prop 名需要使用其等价的 kebab-case (短横线分隔命名) 命名*/
   <!-- 在 HTML 中是 kebab-case 的 -->
   <blog-post post-title="hello!"></blog-post>
   ```

3. 语法

   ```javascript
   //以字符串数组形式列出的 prop
   props: ['title', 'likes', 'isPublished', 'commentIds', 'author']
   //以对象形式列出 prop，这些 property 的名称和值分别是 prop 各自的名称和类型
   props: {
     title: String,
     likes: Number,
     isPublished: Boolean,
     commentIds: Array,
     author: Object,
     callback: Function,
     contactsPromise: Promise // or any other constructor
   }
   ```

4. 传递静态或动态Prop

   ```html
   <!--静态赋值--
   <blog-post title="My journey with Vue"></blog-post>>
   <!-- 动态赋予一个变量的值 -->
   <blog-post v-bind:title="post.title"></blog-post>
   
   <!-- 动态赋予一个复杂表达式的值 -->
   <blog-post
     v-bind:title="post.title + ' by ' + post.author.name"
   ></blog-post>
   ```

5. 传入数字

   ```html
   <!--传入数字-->
   <!-- 即便 `42` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
   <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
   <blog-post v-bind:likes="42"></blog-post>
   
   <!-- 用一个变量进行动态赋值。-->
   <blog-post v-bind:likes="post.likes"></blog-post>
   ```

6. 传入布尔值

   ```html
   <!-- 包含该 prop 没有值的情况在内，都意味着 `true`。-->
   <blog-post is-published></blog-post>
   
   <!-- 即便 `false` 是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
   <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
   <blog-post v-bind:is-published="false"></blog-post>
   
   <!-- 用一个变量进行动态赋值。-->
   <blog-post v-bind:is-published="post.isPublished"></blog-post>
   ```

7. 传入数组

   ```html
   <!-- 即便数组是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
   <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
   <blog-post v-bind:comment-ids="[234, 266, 273]"></blog-post>
   
   <!-- 用一个变量进行动态赋值。-->
   <blog-post v-bind:comment-ids="post.commentIds"></blog-post>
   ```

8. 传入对象

   ```html
   <!-- 即便对象是静态的，我们仍然需要 `v-bind` 来告诉 Vue -->
   <!-- 这是一个 JavaScript 表达式而不是一个字符串。-->
   <blog-post
     v-bind:author="{
       name: 'Veronica',
       company: 'Veridian Dynamics'
     }"
   ></blog-post>
   
   <!-- 用一个变量进行动态赋值。-->
   <blog-post v-bind:author="post.author"></blog-post>
   <!--将一个对象的所有 property 都作为 prop 传入，使用不带参数的 v-bind (取代 v-bind:prop-name)。例如，对于一个给定的对象 post:
   post: {
     id: 1,
     title: 'My Journey with Vue'
   }
   -->
   <blog-post v-bind="post"></blog-post>
   <!--等价于-->
   <blog-post
     v-bind:id="post.id"
     v-bind:title="post.title"
   ></blog-post>
   ```

9. 单向数据流

   1. 单向下行绑定：所有的prop都使得其父子prop之前形成了一个单向下行绑定。父级prop的更新会向下流动到子组件中，但反过来则不行。

   2. **这个 prop 用来传递一个初始值；这个子组件接下来希望将其作为一个本地的 prop 数据来使用。**

      ```javascript
      props: ['initialCounter'],
      data: function () {
        return {
          counter: this.initialCounter
        }
      }
      ```

   3. **这个 prop 以一种原始的值传入且需要进行转换。**

      ```javascript
      props: ['size'],
      computed: {
        normalizedSize: function () {
          return this.size.trim().toLowerCase()
        }
      }
      /*注意在 JavaScript 中对象和数组是通过引用传入的，所以对于一个数组或对象类型的 prop 来说，在子组件中改变变更这个对象或数组本身将会影响到父组件的状态。*/
      ```

      

10. Prop验证

    ```javascript
    Vue.component('my-component', {
      props: {
        // 基础的类型检查 (`null` 和 `undefined` 会通过任何类型验证)
        propA: Number,
        // 多个可能的类型
        propB: [String, Number],
        // 必填的字符串
        propC: {
          type: String,
          required: true
        },
        // 带有默认值的数字
        propD: {
          type: Number,
          default: 100
        },
        // 带有默认值的对象
        propE: {
          type: Object,
          // 对象或数组默认值必须从一个工厂函数获取
          default: function () {
            return { message: 'hello' }
          }
        },
        // 自定义验证函数
        propF: {
          validator: function (value) {
            // 这个值必须匹配下列字符串中的一个
            return ['success', 'warning', 'danger'].indexOf(value) !== -1
          }
        }
      }
    })
    /*注意那些 prop 会在一个组件实例创建之前进行验证，所以实例的 property (如 data、computed 等) 在 default 或 validator 函数中是不可用的。*/
    
    //自定义构造函数
    function Person (firstName, lastName) {
      this.firstName = firstName
      this.lastName = lastName
    }
    Vue.component('blog-post', {
      props: {
        author: Person
      }
    })
    ```

    

11. 非Prop的Attribute

## 13.自定义事件

## 14.插槽

1. 具名插槽和作用域插槽：`v-slot`;
2. 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的

## 15.动态组件&异步组件



## 16.处理边界情况

## 17.路由

1. `Vue.js` 路由允许我们通过不同的 URL 访问不同的内容。

2. 通过 Vue.js 可以实现多视图的单页Web应用（single page web application，SPA）。

3. SPA(单页应用)的路径管理器。或vue-router就是WebApp的链接路径管理系统。

4. vue的单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来。

5. **路由模块的本质就是建立起URL和页面之间的映射关系。**

6. **vue-router实现原理：**

   SPA(single page application):单一页面应用程序，只有一个完整的页面；它在加载页面时，不会加载整个页面，而是只更新某个指定的容器中内容。**单页面应用(SPA)的核心之一是: 更新视图而不重新请求页面**;vue-router在实现单页面前端路由时，提供了两种方式：Hash模式和History模式；根据mode参数来决定采用哪一种方式。

   **1.Hash模式：**

   >**vue-router 默认 hash 模式 —— 使用 URL 的 hash 来模拟一个完整的 URL，于是当 URL 改变时，页面不会重新加载。** hash（#）是URL 的锚点，代表的是网页中的一个位置，单单改变#后的部分，浏览器只会滚动到相应位置，不会重新加载网页，也就是说**hash 出现在 URL 中，但不会被包含在 http 请求中，对后端完全没有影响，因此改变 hash 不会重新加载页面**；同时每一次改变#后的部分，都会在浏览器的访问历史中增加一个记录，使用”后退”按钮，就可以回到上一个位置；所以说**Hash模式通过锚点值的改变，根据不同的值，渲染指定DOM位置的不同数据。hash 模式的原理是 onhashchange 事件(监测hash值变化)，可以在 window 对象上监听这个事件**。

   **2.History模式：**

   >由于hash模式会在url中自带#，如果不想要很丑的 hash，我们可以用路由的 history 模式，只需要在配置路由规则时，加入"mode: 'history'",**这种模式充分利用了html5 history interface 中新增的 pushState() 和 replaceState() 方法。这两个方法应用于浏览器记录栈，在当前已有的 back、forward、go 基础之上，它们提供了对历史记录修改的功能。只是当它们执行修改时，虽然改变了当前的 URL ，但浏览器不会立即向后端发送请求**。
   >
   >```javascript
   >//main.js文件中
   >const router = new VueRouter({
   >  mode: 'history',
   >  routes: [...]
   >})
   >```

   ><font color=red>注意：</font>**建议在服务端增加一个覆盖所有情况的候选资源：如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面。**
   >
   >```javascript
   > export const routes = [ 
   >  {path: "/", name: "homeLink", component:Home}
   >  {path: "/register", name: "registerLink", component: Register},
   >  {path: "/login", name: "loginLink", component: Login},
   >  {path: "*", redirect: "/"}]
   >/*此处就设置如果URL输入错误或者是URL 匹配不到任何静态资源，就自动跳到到Home页面*/
   >```

7. **使用路由模块来实现页面跳转的方式**

   >- 方式1：直接修改地址栏
   >- 方式2：this.$router.push(‘路由地址’)
   >- 方式3：`<router-link to="路由地址"></router-link>`

8. vue-router使用方式

   >1.下载 `npm i vue-router -S`
   >2.在main.js中引入 `import VueRouter from 'vue-router'`;
   >3.安装插件`Vue.use(VueRouter)`;
   >4.创建路由对象并配置路由规则 `let router = new VueRouter({routes:[{path:'/home',component:Home}]})`;
   >5.将其路由对象传递给Vue的实例，options中加入 `router:router`
   >6.在app.vue中留坑 `<router-view></router-view>`

```javascript
//main.js文件中引入
import Vue from 'vue';
import VueRouter from 'vue-router';
//主体
import App from './components/app.vue';
import Home from './components/home.vue'
//安装插件
Vue.use(VueRouter); //挂载属性
//创建路由对象并配置路由规则
let router = new VueRouter({
    routes: [
        //一个个对象
        { path: '/home', component: Home }
    ]
});
//new Vue 启动
new Vue({
    el: '#app',
    //让vue知道我们的路由规则
    router: router, //可以简写router
    render: c => c(App),
})
```

```vue
//app.vue中
<template>
    <div>
        <!-- 留坑，非常重要 -->
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        data(){
            return {}
        }
    }
</script>
```

9. vue-router参数传递

   > 声明式的导航`<router-link :to="...">`和编程式的导航`router.push(...)`都可以传参。
   >
   > 1. 用name传递参数：在路由文件src/router/index.js里配置name属性。
   >
   >    ```javascript
   >    routes: [
   >        {
   >          path: '/',
   >          name: 'Hello',
   >          component: Hello
   >        }
   >    ]
   >    /*模板里(src/App.vue)用$route.name来接收 比如：<p>{{ $route.name}}</p>*/
   >    ```
   >
   > 2. 通过<font color=red>`<router-link>`</font>标签中的to传参
   >
   >    ```javascript
   >    <router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>
   >    ```
   >
   >    比如先在src/App.vue文件中:
   >
   >    ```javascript
   >    <router-link :to="{name:'hi1',params:{username:'jspang',id:'555'}}">Hi页面1</router-link>
   >    ```
   >
   >    然后把src/router/index.js文件里给hi1配置的路由起个name,就叫hi1.
   >
   >    ```javascript
   >    {path:'/hi1',name:'hi1',component:Hi1}
   >    ```
   >
   >    最后在模板里(src/components/Hi1.vue)用`$route.params.username`进行接收.
   >
   >    ```javascript
   >    {{$route.params.username}}-{{$route.params.id}}
   >    ```
   >
   > 3. **利用URL传递参数--在配置文件里以冒号的形式设置参数。**
   >
   >    我们在/src/router/index.js文件里配置路由
   >
   >    ```javascript
   >    {
   >        path:'/params/:newsId/:newsTitle',
   >        component:Params
   >    }
   >    ```
   >
   >    ```javascript
   >    /*我们需要传递参数是新闻ID（newsId）和新闻标题（newsTitle）.所以我们在路由配置文件里制定了这两个值。
   >    在src/components目录下建立我们params.vue组件，也可以说是页面。我们在页面里输出了url传递的的新闻ID和新闻标题。*/
   >    <template>
   >        <div>
   >            <h2>{{ msg }}</h2>
   >            <p>新闻ID：{{ $route.params.newsId}}</p>
   >            <p>新闻标题：{{ $route.params.newsTitle}}</p>
   >        </div>
   >    </template>
   >    <script>
   >    export default {
   >      name: 'params',
   >      data () {
   >        return {
   >          msg: 'params page'
   >        }
   >      }
   >    }
   >    </script>
   >    /*在App.vue文件里加入我们的<router-view>标签。这时候我们可以直接利用url传值了
   >    <router-link to="/params/198/jspang website is very good">params</router-link>*/
   >    ```
   >
   > 4. 使用path来匹配路由，然后通过query来传递参数
   >
   >    ```javascript
   >    <router-link :to="{ name:'Query',query: { queryId:  status }}" >
   >         router-link跳转Query
   >    </router-link>
   >    ```
   >
   >    对应路由配置
   >
   >    ```javascript
   >    {
   >         path: '/query',
   >         name: 'Query',
   >         component: Query
   >       }
   >    //获得参数：this.$route.query.queryId
   >    ```

10. vue-router配置子路由（二级路由）

    **如何实现下图效果(H1页面和H2页面嵌套在主页中)**？

    ![image-20200714145410162](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\vue-router-效果页面.gif)

    > 1. 首先用`<router-link>`标签增加了两个新的导航链接
    >
    >    ```javascript
    >    <router-link :to="{name:'HelloWorld'}">主页</router-link>
    >    <router-link :to="{name:'H1'}">H1页面</router-link>
    >    <router-link :to="{name:'H2'}">H2页面</router-link>
    >    ```
    >
    >    
    >
    > 2. 在HelloWorld.vue加入`<router-view>`标签，给子模板提供插入位置
    >
    >    ```vue
    >    <template>
    >      <div class="hello">
    >        <h1>{{ msg }}</h1>
    >        <router-view></router-view>
    >      </div>
    >    </template>
    >    ```
    >
    >    
    >
    > 3. 在components目录下新建两个组件模板 H1.vue 和 H2.vue
    >    两者内容类似，以下是H1.vue页面内容：
    >
    >    ```javascript
    >     <template>
    >      <div class="hello">
    >        <h1>{{ msg }}</h1>
    >      </div>
    >    </template>
    >    <script>
    >      export default {
    >        data() {
    >          return {
    >            msg: 'I am H1 page,Welcome to H1'
    >          }
    >        }
    >      }
    >    </script>
    >    ```
    >
    >    
    >
    > 4. 修改router/index.js代码，子路由的写法是在原有的路由配置下加入children字段。
    >
    >    ```javascript
    >    routes: [
    >        {
    >          path: '/',
    >          name: 'HelloWorld',
    >          component: HelloWorld,
    >          children: [{path: '/h1', name: 'H1', component: H1},//子路由的<router-view>必须在HelloWorld.vue中出现
    >            {path: '/h2', name: 'H2', component: H2}
    >          ]
    >        }
    >      ]
    >    ```
    >
    >    

11. 单页面多路由区域操作

    在一个页面里我们有两个以上`<router-view>`区域，我们通过配置路由的js文件，来操作这些区域的内容

    >1. App.vue文件，在`<router-view>`下面新写了两行`<router-view>`标签,并加入了些CSS样式.
    >
    >   ```vue
    >   <template>
    >     <div id="app">
    >       <img src="./assets/logo.png">
    >          <router-link :to="{name:'HelloWorld'}"><h1>H1</h1></router-link>
    >          <router-link :to="{name:'H1'}"><h1>H2</h1></router-link>
    >       <router-view></router-view>
    >       <router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"/>
    >       <router-view name="right" style="float:right;width:50%;background-color:yellowgreen;height:300px;"/>
    >     </div>
    >   </template>
    >   ```
    >
    >2. 需要在路由里配置这三个区域，配置主要是在components字段里进行.
    >
    >   ```javascript
    >   export default new Router({
    >       routes: [
    >         {
    >           path: '/',
    >           name: 'HelloWorld',
    >           components: {default: HelloWorld,
    >             left:H1,//显示H1组件内容'I am H1 page,Welcome to H1'
    >             right:H2//显示H2组件内容'I am H2 page,Welcome to H2'
    >           }
    >         },
    >         {
    >           path: '/h1',
    >           name: 'H1',
    >           components: {default: HelloWorld,
    >             left:H2,//显示H2组件内容
    >             right:H1//显示H1组件内容
    >           }
    >         }
    >       ]
    >     })
    >   ```

12. `$route` 和 `$router` 的区别

    **$route 是“路由信息对象”，包括 path，params，hash，query，fullPath，matched，name 等路由信息参数。**

    **① `$route.path`**
     字符串，对应当前路由的路径，总是解析为绝对路径，如 "/order"。

    **② `$route.params`**
     一个 key/value 对象，包含了 动态片段 和 全匹配片段，
     如果没有路由参数，就是一个空对象。

    **③ `$route.query`**
     一个 key/value 对象，表示 URL 查询参数。
     例如，对于路径 /foo?user=1，则有 $route.query.user为1，
     如果没有查询参数，则是个空对象。

    **④ `$route.hash`**
     当前路由的 hash 值 (不带 #) ，如果没有 hash 值，则为空字符串。

    **⑤ `$route.fullPath`**
     完成解析后的 URL，包含查询参数和 hash 的完整路径。

    **⑥ `$route.matched`**
     数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。

    **⑦ `$route.name`   当前路径名字**

    **$router 是“路由实例”对象，即使用 new VueRouter创建的实例，包括了路由的跳转方法，钩子函数等。**

    ```html
    <!--$router常见跳转条件-->
    <button @click="goToMenu" class="btn btn-success">Let's order！</button>
    .....
    <script>
      export default{
        methods:{
          goToMenu(){
            this.$router.go(-1)//跳转到上一次浏览的页面
            this.$router.replace('/menu')//指定跳转的地址
            this.$router.replace({name:'menuLink'})//指定跳转路由的名字下
            this.$router.push('/menu')//通过push进行跳转
            this.$router.push({name:'menuLink'})//通过push进行跳转路由的名字下
          }
        }
      }
    </script>
    ```

    **`$router.push`和`$router.replace`的区别**：

    - 使用push方法的跳转会向 history 栈添加一个新的记录，当我们点击浏览器的返回按钮时可以看到之前的页面。
    - 使用replace方法不会向 history 添加新记录，而是替换掉当前的 history 记录，即当replace跳转到的网页后，‘后退’按钮不能查看之前的页面。

13. 如何设置404页面

    用户会经常输错页面，当用户输错页面时，我们希望给他一个友好的提示页面，这个页面就是我们常说的404页面。vue-router也为我们提供了这样的机制。

    >1. 设置我们的路由配置文件（/src/router/index.js）
    >
    >   ```javascript
    >   {
    >      path:'*',
    >      component:Error
    >   }
    >   //这里的path:'*'就是输入地址不匹配时，自动显示出Error.vue的文件内容
    >   ```
    >
    >2. 在/src/components/文件夹下新建一个Error.vue的文件。简单输入一些有关错误页面的内容。
    >
    >   ```javascript
    >   <template>
    >       <div>
    >           <h2>{{ msg }}</h2>
    >       </div>
    >   </template>
    >   <script>
    >   export default {
    >     data () {
    >       return {
    >         msg: 'Error:404'
    >       }
    >     }
    >   }
    >   </script>
    >   //此时我们随意输入一个错误的地址时，便会自动跳转到404页面
    >   ```

    -------

## 17.过渡&动画

1. 操作css的trasition或animation

2. vue会给目标元素添加/移除特定的class

3. 过渡的相关类名

   xxx-enter-active：指定显示的transition

   xxx-leave-active：指定隐藏的transition

   xxx-enter/xxx-leave-to：指定隐藏时的样式

## 18.可重复性&组合

### 18.1 混入

1. 混入(mixin):来分发 Vue 组件中的可复用功能。一个混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被“混合”进入该组件本身的选项。

   ```javascript
   // 定义一个混入对象
   var myMixin = {
     created: function () {
       this.hello()
     },
     methods: {
       hello: function () {
         console.log('hello from mixin!')
       }
     }
   }
   
   // 定义一个使用混入对象的组件
   var Component = Vue.extend({
     mixins: [myMixin]
   })
   
   var component = new Component() // => "hello from mixin!"
   ```

2. 选项合并:当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。

   ```javascript
   //数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
   var mixin = {
     data: function () {
       return {
         message: 'hello',
         foo: 'abc'
       }
     }
   }
   
   new Vue({
     mixins: [mixin],
     data: function () {
       return {
         message: 'goodbye',
         bar: 'def'
       }
     },
     created: function () {
       console.log(this.$data)
       // => { message: "goodbye", foo: "abc", bar: "def" }
     }
   })
   ```

3. 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子**之前**调用。

   ```javascript
   var mixin = {
     created: function () {
       console.log('混入对象的钩子被调用')
     }
   }
   
   new Vue({
     mixins: [mixin],
     created: function () {
       console.log('组件钩子被调用')
     }
   })
   
   // => "混入对象的钩子被调用"
   // => "组件钩子被调用"
   ```

4. 值为对象的选项，例如 `methods`、`components` 和 `directives`，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。

   ```javascript
   var mixin = {
     methods: {
       foo: function () {
         console.log('foo')
       },
       conflicting: function () {
         console.log('from mixin')
       }
     }
   }
   
   var vm = new Vue({
     mixins: [mixin],
     methods: {
       bar: function () {
         console.log('bar')
       },
       conflicting: function () {
         console.log('from self')
       }
     }
   })
   
   vm.foo() // => "foo"
   vm.bar() // => "bar"
   vm.conflicting() // => "from self"
   ```

5. 全局混入：一旦使用全局混入，它将影响**每一个**之后创建的 Vue 实例。使用恰当时，这可以用来为自定义选项注入处理逻辑。请谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 (包括第三方组件)。大多数情况下，只应当应用于自定义选项，就像上面示例一样。推荐将其作为[插件](https://cn.vuejs.org/v2/guide/plugins.html)发布，以避免重复应用混入。

   ```javascript
   // 为自定义的选项 'myOption' 注入一个处理器。
   Vue.mixin({
     created: function () {
       var myOption = this.$options.myOption
       if (myOption) {
         console.log(myOption)
       }
     }
   })
   
   new Vue({
     myOption: 'hello!'
   })
   // => "hello!"
   ```

6. 自定义选项合并策略：自定义选项将使用默认策略，即简单地覆盖已有值。如果想让自定义选项以自定义逻辑合并，可以向 `Vue.config.optionMergeStrategies` 添加一个函数

   ```javascript
   Vue.config.optionMergeStrategies.myOption = function (toVal, fromVal) {
     // 返回合并后的值
   }
   ```

### 18.2 自定义指令

1. 全局自定义指令

   ```javascript
   // 注册一个全局自定义指令 `v-focus`
   Vue.directive('focus', {
     // 当被绑定的元素插入到 DOM 中时……
     inserted: function (el) {
       // 聚焦元素
       el.focus()
     }
   })
   ```

2. 局部自定义指令

   ```javascript
   directives: {
     focus: {
       // 指令的定义
       inserted: function (el) {
         el.focus()
       }
     }
   }
   ```

3. 钩子函数：一个指令定义对象可以提供如下几个钩子函数 (均为可选)

   >- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
   >- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
   >- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
   >
   >- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
   >- `unbind`：只调用一次，指令与元素解绑时调用。

4. 钩子函数参数

   >- `el`：指令所绑定的元素，可以用来直接操作 DOM。
   >- `binding`：一个对象，包含以下 property：
   >  - `name`：指令名，不包括 `v-` 前缀。
   >  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
   >  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
   >  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
   >  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
   >  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
   >- `vnode`：Vue 编译生成的虚拟节点。
   >- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

   ```html
   <div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
   <script type="text/javascript">
       Vue.directive('demo', {
     bind: function (el, binding, vnode) {
       var s = JSON.stringify
       el.innerHTML =
         'name: '       + s(binding.name) + '<br>' +
         'value: '      + s(binding.value) + '<br>' +
         'expression: ' + s(binding.expression) + '<br>' +
         'argument: '   + s(binding.arg) + '<br>' +
         'modifiers: '  + s(binding.modifiers) + '<br>' +
         'vnode keys: ' + Object.keys(vnode).join(', ')
     }
   })
   
   new Vue({
     el: '#hook-arguments-example',
     data: {
       message: 'hello!'
     }
   })
   </script>
   ```

5. 动态指令参数

   > - 指令的参数可以是动态的。例如：在<font color=red>`v-mydirective:[argument]="value"` </font>中，<font color=red>`argument` </font>参数可以根据组件实例数据进行更新！

   ```html
   <!--例如你想要创建一个自定义指令，用来通过固定布局将元素固定在页面上。我们可以像这样创建一个通过指令值来更新竖直位置像素值的自定义指令：-->
   <div id="baseexample">
     <p>Scroll down the page</p>
     <p v-pin="200">Stick me 200px from the top of the page</p>
   </div>
   <script type="text/javascript">
       Vue.directive('pin', {
         bind: function (el, binding, vnode) {
           el.style.position = 'fixed'
           el.style.top = binding.value + 'px'
         }
       })
   
   new Vue({
     el: '#baseexample'
   })
   </script>
   ```

   ```html
   <!--这会把该元素固定在距离页面顶部 200 像素的位置。但如果场景是我们需要把元素固定在左侧而不是顶部又该怎么办呢？这时使用动态参数就可以非常方便地根据每个组件实例来进行更新。-->
   <div id="dynamicexample">
     <h3>Scroll down inside this section ↓</h3>
     <p v-pin:[direction]="200">I am pinned onto the page at 200px to the left.</p>
   </div>
   <script type="text/javascript">
   Vue.directive('pin', {
     bind: function (el, binding, vnode) {
       el.style.position = 'fixed'
       var s = (binding.arg == 'left' ? 'left' : 'top')
       el.style[s] = binding.value + 'px'
     }
   })
   
   new Vue({
     el: '#dynamicexample',
     data: function () {
       return {
         direction: 'left'
       }
     }
   })
   </script>
   ```

6. 函数简写

   <font color=red> `bind`</font> 和<font color=red> `update` </font>时触发相同行为，而不关心其它的钩子。

   ```javascript
   Vue.directive('color-swatch', function (el, binding) {
     el.style.backgroundColor = binding.value
   })
   ```

7. 对象字面量

   如果指令需要多个值，可以传入一个 JavaScript 对象字面量。记住，指令函数能够接受所有合法的 JavaScript 表达式。

   ```html
   <div v-demo="{ color: 'white', text: 'hello!' }"></div>
   <script type="text/javascript">
       Vue.directive('demo', function (el, binding) {
     console.log(binding.value.color) // => "white"
     console.log(binding.value.text)  // => "hello!"
   })
   </script>
   ```

### 18.3 渲染函数&JSX

1. render：createElement、render、vm.$slot

   > \* createElement接收3个参数：
   >
   > 1. 第一个参数可以是HTML标签名，组件或者函数都可以；此参数是必须的；
   >
   > 2. 第二个为数据对象（可选）;
   >
   > 3. 第三个为子节点（可选），实际就是加个东西进去。

   

   

### 18.4 插件

### 18.5 过滤器

1. 对显示的数据进行格式化。



## 19.工具

## 20.规模化

## 21.内在

## 22.迁移

## 23.MVVM设计思想

1.前端视图层概念，视图层分离。：MVVM把前端的视图层，分为了三部分 `Model`，`View` ，`VM ViewModel`

>\* Model 数据层 Vue 中 数据层 都放在 data 里面
>
>\* view 视图层 Vue 中 view 即 我们的HTML页面
>
>\* vm （view-model） 控制器 将数据和视图层建立联系 vm 即 Vue 的实例 就是 vm

![image-20200709094110660](C:\Users\asus\AppData\Roaming\Typora\typora-user-images\image-20200709094110660.png)

说明：数据的响应式（数据的变化导致页面内容的变化）,通过对Model 数据层的数据的改变来让页面发生变化 ,而不再像JavaScript那样直接操作DOM,非常麻烦。

vue通过数据驱动 ,只要改变数据通过改变Data Bindings指令 ,当数据发生变化时 ,会通过数据指令去修改对应DOM

Vue还会对事件进行监听 ,当我们改变视图(view)的时候 ,通过DOM Listeners来改变数据 ,从而实现双向数据绑定



## 24.生命周期

1. 初始化显示——>更新显示——>死亡

2. 生命周期回调函数=钩子函数

3. mounted：挂载

4. 内存泄露，分配内存

5. vue对象的生命周期

   1. 初始化显示

      >\* beforeCreate()
      >
      >\* created()
      >
      >\* beforeMount()
      >
      >\* mounted()

   2. 更新显示：this.xxx=value

      >\* beforeUpdate()
      >
      >\* updated()

   3. 销毁vue实例：vm.$destory()

      >\* beforeDestory()
      >
      >\* destoryed()

6. 常用的生命周期方法

   created()/mounted():发送ajax请求，启动定时器等异步任务

   beforeDestroy():做首尾工作，如：清除定时器

## 25.API

### 25.1 vue.extend()

1. vue.extend()方法：vue的一个构造器，继承自vue。
2. Vue构造器：创建一个"子类"。参数是一个包含组件选项的对象。
3. data选项是特例，需要注意-在Vue.extend()中它必须是函数。
4. extend创建的是一个组件构造器，<font color=red>而不是一个具体的组件实例</font>，最终还是要通过Vue.component注册才可以使用。
5. 组件构造器相当于Vue.component()方法的第二个参数部分。

## 26.Ajax(axios)

1. axios 是一个基于Promise 用于浏览器和 nodejs 的 HTTP 客户端。

   >\* 从浏览器中创建 XMLHttpRequest
   >
   >\* 从 node.js 发出 http 请求
   >
   >\* 支持 Promise API
   >
   >\* 拦截请求和响应
   >
   >\* 转换请求和响应数据
   >
   >\* 取消请求
   >
   >\* 自动转换JSON数据
   >
   >\* 客户端支持防止 CSRF/XSRF

## 27.Vue-cli

- 通过`@vue/cli`实现的一致的项目脚手架。
- 通过`@vue/cli`+ `@vue/cli-service-global`实现的零配置原型开发。
- 一个运行时依赖（`@vue/cli-service`），该依赖：
  - 可升级；
  - 基于webpack构建，并具有合理的替代配置；
  - 可以通过项目内的配置文件进行配置；
  - 可以通过插件进行扩展。
- 一个丰富的官方插件集合，集成了前端生态中最好的工具。
- 一套完全图形化的创建和管理Vue.js项目的用户界面。

-----

### 27.1 vue-cli2脚手架

1. nodejs/npm环境安装

- 常用dos命令：

- - cd 打开文件夹、md创建新文件夹、dir 查看文件夹内容、cd .. 返回上一级文件夹、cls清屏

2. vue-cli2安装：

- npm(node package manager)是nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）

- cnpm 因为npm安装插件是从国外服务器下载，受网络影响大，可能出现异常，所以淘宝团队分享了使用国内镜像来代替国外服务器

- 参数

- - -g 参数，全局安装
  - -S, `--save`安装包信息将加入到dependencie(生产阶段的依赖)
  - -D, `--save --dev` 安装包信息将加入到devDependencie(开发阶段的依赖)
  - i, 是 install 的缩写（前面没有 -）
  - -gd/-gD/-g -d，综合上面两个参数，将开发华环境和生成环境都加进来
  - npm root -g,查看全局安装的位置

- npm install -g cnpm --registrys=[https://registry.npm.taobao.org](https://link.zhihu.com/?target=https%3A//registry.npm.taobao.org)

- 为了避免每次安装都需要 --registry参数，可以使用如下命令进行永久设置

- - npm config set registry [https://registry.npm.taobao.org](https://link.zhihu.com/?target=https%3A//registry.npm.taobao.org)

- 安装 cnpm install -gd vue-cli，使用 `vue -V`，版本号为2.9.6

### 27.2 创建vue-cli项目

- 语法：vue init webpack projectName，这里使用的是webpack,projectName是工程名，注意工程名字一般小写
- 创建过程的配置
- - 是否安装vue-router，要安装
  - 是否使用ESLint管理代码，代码风格管理工具，用来统一代码，不是项目的话，可以选择n
  - 其他默认
- 进入D盘，md vuecli/ cd vuecli
- 初始化，vue init webpack test1，test1是子文件夹名字，如果初始化失败，重新安装
- - 初始化后生成的目录主要有 build/config/node_modules/src
  - src下包括有 assets/components/router/App.vue/main.js
- 按照系统提示
- - cd test1
  - npm run dev
- 然后就会进入 8080 本地界面

### 27.3 自定义首页

- 在components组件文件夹创建 first.vue
- 编写代码：

```js
<template>
    <div>
        first.vue
    </div>
</template>
```

- 进入router文件夹下的 index.js，用来控制页面路由，添加代码，

- - 首先引入 `import First from '@/components/first'`
  - 然后重新执行，npm run dev

### 27.4 router实现页面跳转

- 在首页，可以通过链接进入a,b两个“页面”，其实是进入components中的vue页面
- 修改 first.vue

```js
<template>
    <div>
        <router-link to="">转向A</router-link>
        <router-link to="">转向B</router-link>
    </div>
</template>
```

1. 新创建两个components下的vue文件 A.vue/B.vue

```js
<template>
    <div>
        <p>我是A/B页面</p>
        <p><router-link to="/">返回</router-link></p>  //这里直接返回根目录
    </div>
</template>
```

1. 在index.js中引入

```js
import A from '@/components/A
import B from '@/components/B

export default new Router({
  export default new Router({
  routes: [
    {
      path: '/',
      //name: 'HelloWorld',
      //component: HelloWorld
      name: 'First',
      component: First
    },
    {
      path: '/a',  //定义路径名字
      component: A
    },
    {
      path: '/b',  //定义路径名字
      component: B
    }
  ]
})
})
```

1. 进入跳转的页面 first.vue
2. 在to后面添加路径名字，"/a"，"/b"

### 27.5 router实现子路由1

- 实现嵌套路由的效果：`children:[{},{}]`
- 实现多层路由
- 创建A1.vue作为A的子路由

```js
<template>
    <div>
        <p>我是A1页面</p>
        <p><router-link to="/a">返回上一级<router-link></p>
        <p><router-link to="/">返回首页</router-link></p>
    </div>
</template>
```

- 首先引入：`import A1 from '@/components/A1`
- 作为子路由：

```js
export default new Router({
  export default new Router({
  routes: [
    {
      path: '/',
      //name: 'HelloWorld',
      //component: HelloWorld
      name: 'First',
      component: First
    },
    {
      path: '/a',  //定义路径名字
      component: A,
      children: [
        {
            path:'/A1',
            component: A1
        }
      ]
    },
    {
      path: '/b',  //定义路径名字
      component: B
    }
  ]
})
})
```

- 在A.vue中添加 `<p><router-link to:"/A1">转向A1</router-link></p>`

- 这时候还不能进入到子路由A1页面，需要将路由挂载进来，在A.vue中添加`<router-view></router-view>`

- - **但这里会将原来A.vue页面的元素也显示出来，也就是父子页面同时显示**，可以应用于某些固定的导航栏页面跳转

### 27.6 router实现子路由2

- 上一个子路由是父子的关系，这里要使用平级的功能
- 只要将上一部分的children去掉，并将里面的内容提取到平级的部分

```js
{
    path: '/a',  //定义路径名字
    component: A,
},
{
    path:'/A1',
    component: A1
}
```

### 27. 7 为什么不使用#号

- 路由两种显示模式

- - hash模式：地址栏包括#符号，且#后面的不被后台获取
  - history模式：具有对url历史记录进行修改的功能（使用较多）

- 在微信支付，分享url作为参数传递时，#不能满足需求

- history需要后台配合，处理404问题

- 去掉#符号，在index.js文件中修改

```js
export default new Router({
  mode: 'history',   //这里添加 history的模式
  routes: [
    {
        ...
```

### 27.8 单独安装 eslint

- npm i eslint -S/--save （安装到本地目录，也就是该工程目录下）

- 所有安装好的在package.json文件的dependencies下（或者devDependencies）下都会有相应的添加的项

- eslint是规范检查，应该在开发环境中，生产环境中已经不太需要

- 那我们首先卸载 npm uninstall eslint

- 再重新安装到 dev 下，npm i eslint -D，这样就安装到devDependencies，也就是开发环境下。

- - 不能使用 npm i eslint --dev，这样还是安装到生产环境，使用 npm i eslint --save-dev
  - 可以使用 -D/--save-dev 安装到开发环境，缺一不可

### 27.9 导入其他项目添加依赖并运行

- 怎样导入vue-cli项目
- 进入工程文件夹，npm install 安装相关依赖，部署配置环境，前提是vue和npm都安装
- npm run dev 开始运行

### 27.10 居中如何实现（主组件的样式设置）

- 主页面的V logo 是怎么设置的？
- 在 App.vue 的style样式设置中

## 28.vue-cli3

### 28.1 手动搭建vue-cli环境

- 步骤

- 安装依赖 npm install/ cnpm install

- 初始化 npm init -f/ cnpm init -f

- 安装组件，并查看安装后的内容

- 具体流程如下：

- 创建文件夹

- 进入文件夹，安装依赖 npm install

- 初始化 npm init -f，会生成 package.json 的文件

- 安装router到开发环境，npn i vue-router -D/--save-dve，就会新增一个 node_modules 的文件夹

- - 如果是全局安装，会安装到nodejs文件夹中的 node_modules文件夹

- cd no*，进入到以 no 开头的文件夹

### 28.2 卸载vue-cli2，并安装vue-cli3

- 重新打开一个控制台，运行 npm uni/uninstall vue-cli -g
- 如果运行 vue -V 仍能查找到版本号，则使用 cnpm 再卸载一次
- 安装vue-cli3
- 普通安装：npm install -g @vue/cli
- 淘宝镜像：cnpm install -g @vue/cli

### 28.3 vue-cli3图形界面

- 在控制台输入 vue ui，便可以进入ui界面

### 28.4 vue-cli3创建项目

1. 首先创建新的文件夹，md test3，然后进入 cd test3
2. 创建新的工程 vue create test3
3. 用上下键来选择 default(babel,eslint)或者(Manually select features)
4. 我们选择后面的一项，然后可以进入选择更多的插件
5. 用上下键选择到某一个项，然后按空格键选择，去掉Linter（这里的eslint规范，初期先不加进去，不然会有很多格式的报错），选择后回车
6. 选择history mode for router为 yes
7. placing config for Babel,ESLint,etc,选择 package.json，这里需要按方向键调整
8. 回车到开始安装
9. 安装结束后，系统系统， cd test3, npm run serve
10. App running at:
11. Local: http://localhost:8080/
12. Network: [http://172.31.226.37:8080/](https://link.zhihu.com/?target=http%3A//172.31.226.37%3A8080/)
13. 上面是localhost
14. 下面是本机配置的局域网IP地址

### 28.5 项目目录结构

- vue-cli3和vue-cli2有较大区别
- 主要源程序还是在 src目录结构下， src下的components主要存放组件，views下主要存放视图

### 28.6 vue-cli3导入其他项目

- 先进入原来的test1工程的文件夹下
- 安装依赖 npm install
- 启动 npm run serve，会出现错误
- 运行 npm run dev，可以正常运行



## 28.VueX(Vue状态管理模式)

1. `Vue`为这些被多个组件频繁使用的值提供了一个统一管理的工具——`VueX`。在具有`VueX`的Vue项目中，我们只需要把这些值定义在VueX中，即可在整个Vue项目的组件中使用。

2. 安装:转至vue-cli搭建的项目文件目录下

   >1. Npm安装Vuex
   >
   >   ```
   >   npm i vuex -s
   >   ```
   >
   >2. 在项目的根目录下新增一个`store`文件夹，在该文件夹内创建index.js，项目的src文件夹结构如下：
   >
   >   ```
   >   │  App.vue
   >   │  main.js
   >   │
   >   ├─assets
   >   │      logo.png
   >   │
   >   ├─components
   >   │      HelloWorld.vue
   >   │
   >   ├─router
   >   │      index.js
   >   │
   >   └─store
   >          index.js
   >   ```
   >
   >   
   >
   >   