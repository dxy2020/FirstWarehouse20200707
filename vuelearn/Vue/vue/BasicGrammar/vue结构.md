# vue结构

## 1.说明

1. 每个vue文件中，所有的HTML代码都应该写在同一个dom中，否则会报错。

2. 若`router-view`想通过name属性来指定渲染的组件，则在router.js中，该组件在注册时，必须是components的方式，否则无法加载。

3. vue项目会加载public/index.html，但是index.html中具体的dom都写在App.vue中；而究竟哪些要加载哪些不加载(<font color=red>?:究竟是否加载</font>)，则是在main.js中，通过`new Vue().$mount('#dom_id')`来加载的。

4. 在vue文件的script部分，以及js文件中，可以通过import AAA from ‘BBB’来引入某个文件（或者叫组件），这里的AAA可以随意命名，相当于定义一个叫AAA的变量，变量的类型是BBB这个路径所指向的文件/组件。

5. 每一个vue文件在创建的时候，都有一个默认生成的 export default{}，这是将该文件导出为一个组件；这相当于是这个文件/组件的对外开放的接口，只有经过export的vue，才能被别的文件import。

6. 除了export default之外，还有个export；同一个文件可以有多个export，但是只能有一个export default：类似于public class 与 class 的区别。

7. 在一个组件中，可以在export default中，通过components将其注册为新的标签，然后就可以当做一般的html标签来使用了。

   ```vue
   <template>
       <body>
       <TopVue></TopVue>
       <section class="flexModal fixedLeft">
           <LeftVue></LeftVue>
           <CenterVue></CenterVue>
       </section>
       <BottomVue></BottomVue>
       </body>
   </template>
   <script>
       import LeftVue from './views/frame/left.vue'
       import BottomVue from './views/frame/bottom'
       import TopVue from './views/frame/top'
       import CenterVue from './views/frame/center'
   
       export default {
           name: 'app',
           components: {
               LeftVue,
               BottomVue,
               TopVue,
               CenterVue
           }
       }
   </script>
   ```

   

8. 组件：一个组件就是一个标签，这个标签可以是框架自带的，也可以是components新注册的：换句话说，每个vue文件都是一个组件；

9. 路由：顾名思义，就是指到达这个地方（可以是方法、页面）的路径；有点类似于接口地址，在router.js中定义路由，感觉就像是在定义接口地址。

10. router-link和router-view

    >\* `router-link`就是定义一个跳转的触发点，而`router-view`则用于渲染它请求的dom；
    >
    >\* `router-view`(<font color=red> 更多地</font>)以指定name的方式来渲染；这样的话： `router-link`和`router-view`就不需要写在一起了，甚至都不需要写在同一个vue文件中：`router-link`的to属性会指定路由，而router.js则会定义这个路由并绑定它所路由到的vue文件，`router-view`则会通过name属性来读取router.js中定义好的路由，并将路由到的vue文件渲染在它所在的位置。

    ```vue
    //比如说在某个组件中使用了一个router-link：
    <template>
        <div>
            <router-link to="/hanzi/hanziQuery">汉字查询</router-link>
        </div>
    </template>
    ```

    ```vue
    //然后router.js中相关的路由是这样定义的：
    import Vue from 'vue'
    import Router from 'vue-router'
    import HanziHome from './views/hanzi/hanziHome'
    import HanziQuery from './views/hanzi/hanziQuery'
    Vue.use(Router)
    export default new Router({
      routes: [
      {
          path: '/hanzi/hanziQuery',
          name: 'hanziQuery',
          components: {
              hanziQuery: HanziQuery,
              hanziHome: HanziHome
          }
      }]
    })
    ```

    ```vue
    //在任何一个地方使用router-view来渲染。
    <template>
        <div>
             <router-view name="hanziQuery"></router-view>
        </div>
    </template>
    ```

    <font color=red>需要注意的是</font>：**`router-link`中的to属性要与router.js中路由的path值相同；而router-view中的name属性要与router.js中路由的name属性值相同。**

    <font color=red>或者</font>：如果你不打算通过`router-view`指定name的方式来渲染，那么在router.js中定义路由时，name属性也没必要写。

11. 引入vue.js就代表着不能用import、require之类的引入单文件组件文件，只能在文件中开发，或者多个js文件分先后顺序植入开发