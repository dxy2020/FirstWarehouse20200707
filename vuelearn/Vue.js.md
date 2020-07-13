# Vue.js

## 1.环境安装配置

## 2.介绍

1. 构建用户界面的渐进式框架。
2. 自底向上增量开发的设计。
3. 通过尽可能简单的API实现响应的数据绑定和组合的视图组件。

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

### 18.4 插件

### 18.5 过滤器



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

## 14.API

### 14.1 vue.extend()

1. vue.extend()方法：vue的一个构造器，继承自vue。

2. Vue构造器：创建一个"子类"。参数是一个包含组件选项的对象。

3. data选项是特例，需要注意-在Vue.extend()中它必须是函数。