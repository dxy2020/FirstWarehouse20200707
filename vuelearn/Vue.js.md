# Vue.js

## 1.环境安装配置

## 2.介绍

1. 构建用户界面的渐进式框架。
2. 自底向上增量开发的设计。
3. 通过尽可能简单的API实现响应的数据绑定和组合的视图组件。

## 3.Vue实例

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
2. 

## 15.动态组件&异步组件



## 16.处理边界情况

## 17.过渡&动画

1. 操作css的trasition或animation

2. vue会给目标元素添加/移除特定的class

3. 过渡的相关类名

   xxx-enter-active：指定显示的transition

   xxx-leave-active：指定隐藏的transition

   xxx-enter/xxx-leave-to：指定隐藏时的样式

## 18.可重复性&组合

## 19.工具

## 20.规模化

## 21.内在

## 22.迁移

## 12.MVVM设计思想

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



## 13.生命周期

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

