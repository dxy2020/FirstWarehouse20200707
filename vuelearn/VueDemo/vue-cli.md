# vue-cli

- 通过`@vue/cli`实现的一致的项目脚手架。
- 通过`@vue/cli`+ `@vue/cli-service-global`实现的零配置原型开发。
- 一个运行时依赖（`@vue/cli-service`），该依赖：
  - 可升级；
  - 基于webpack构建，并具有合理的替代配置；
  - 可以通过项目内的配置文件进行配置；
  - 可以通过插件进行扩展。
- 一个丰富的官方插件集合，集成了前端生态中最好的工具。
- 一套完全图形化的创建和管理Vue.js项目的用户界面。

----

## 1.vue-cli2

### 1.1 vue-cli2脚手架

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

### 1.2 创建vue-cli项目

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

### 1.3 自定义首页

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

### 1.4 router实现页面跳转

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

### 1.5 router实现子路由1

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

- - **但这里会将原来A.vue页面的元素也显示出来，也就是父子页面同时显示**，可以应用于某些固定的导航栏页面跳转。

### 1.6 router实现子路由2

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

### 1.7 为什么不使用#号

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

### 1.8 单独安装 eslint

- npm i eslint -S/--save （安装到本地目录，也就是该工程目录下）

- 所有安装好的在package.json文件的dependencies下（或者devDependencies）下都会有相应的添加的项

- eslint是规范检查，应该在开发环境中，生产环境中已经不太需要

- 那我们首先卸载 npm uninstall eslint

- 再重新安装到 dev 下，npm i eslint -D，这样就安装到devDependencies，也就是开发环境下。

- - 不能使用 npm i eslint --dev，这样还是安装到生产环境，使用 npm i eslint --save-dev
  - 可以使用 -D/--save-dev 安装到开发环境，缺一不可

### 1.9 导入其他项目添加依赖并运行

- 怎样导入vue-cli项目
- 进入工程文件夹，npm install 安装相关依赖，部署配置环境，前提是vue和npm都安装
- npm run dev 开始运行

## 2.vue-cli3

**1. CLI**：`@vue/cli` 全局安装的 npm 包，提供了终端里的vue命令（如：vue create 、vue serve 、vue ui 等命令）

**2.CLI 服务**：`@vue/cli-service`是一个开发环境依赖。构建于 [webpack](http://webpack.js.org/) 和 [webpack-dev-server](https://github.com/webpack/webpack-dev-server) 之上（提供 如：`serve`、`build` 和 `inspect` 命令）

**3.CLI 插件**：给Vue 项目提供可选功能的 npm 包 （如： Babel/TypeScript 转译、ESLint 集成、unit和 e2e测试 等）

### 2.1 手动搭建vue-cli环境

1. 步骤：

- 安装依赖 npm install/ cnpm install
- 初始化 npm init -f/ cnpm init -f
- 安装组件，并查看安装后的内容

2. 具体流程如下：

- 创建文件夹

- 进入文件夹，安装依赖 npm install

- 初始化 npm init -f，会生成 package.json 的文件

- 安装router到开发环境，npn i vue-router -D/--save-dve，就会新增一个 node_modules 的文件夹

- - 如果是全局安装，会安装到nodejs文件夹中的 node_modules文件夹

- cd no*，进入到以 no 开头的文件夹

### 2.2 卸载vue-cli2，并安装vue-cli3

- 重新打开一个控制台，运行 npm uni/uninstall vue-cli -g
- 如果运行 vue -V 仍能查找到版本号，则使用 cnpm 再卸载一次
- 安装vue-cli3
- 普通安装：npm install -g @vue/cli
- 淘宝镜像：cnpm install -g @vue/cli

### 2.3 vue-cli3图形界面

- 在控制台输入 vue ui，便可以进入ui界面

### 2.4 vue-cli3创建项目

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

### 2.5 项目目录结构

- vue-cli3和vue-cli2有较大区别
- 主要源程序还是在 src目录结构下， src下的components主要存放组件，views下主要存放视图

### 2.6 vue-cli3导入其他项目

- 先进入原来的test1工程的文件夹下
- 安装依赖 npm install
- 启动 npm run serve，会出现错误
- 运行 npm run dev，可以正常运行

### 2.7 vue-cli3创建新项目案例

- 进入 test3/test3
- 启动 npm run serve
- 开始修改项目
- 先在 components文件夹下创建新的组件 first.vue

```js
<template>
    <div>
        <router-link to="">转向A组件/页面></router-link>
        <router-link to="">转向B组件/页面></router-link>
    </div>
</template>
```

1. 在router 文件夹下的index.js中导入并使用

```js
import First from '../components/first.vue'

const routes = [
  {
    path: '/',
    //name: 'home',
    component: First
  },
  ... //省略部分代码
]
```

- 要注意注释掉原来 Home 的路由
- 在components文件夹下添加要跳转的 A、B组件

```js
<template>
    <div>AAAAAAAAAAAAA
      <router-link to="/">返回主页</router-link>  //router-link在div标签中
    </div>
</template>
```

- 按照上面同样的方法在 index.js 中导入并使用

```js
import A from '../components/A.vue'
const routes = [
  {
    path: '/a',  //要修改这里的 path
    //name: 'home',
    component: A
  },
  ... //省略部分代码
]
```

1. 原来的first.vue中添加跳转的路径

```js
<template>
    <div>
        <router-link to="/a">转向A组件/页面></router-link>
        <router-link to="/b">转向B组件/页面></router-link>
    </div>
</template>
```

### 2.8 嵌套路由

1. 首先找到要嵌套的页面，这里是在首页，修改router下index.js的内容
2. 在First首页路由中添加 children项，然后把 A，B两个路由项剪切过来

```js
const routes = [
  {
    path: '/',  //要修改这里的 path
    //name: 'first',
    component: First,
    children: [
      {
        path: '/a',  //要修改这里的 path
        //name: 'home',
        component: A
      },
      {
        path: '/b',  //要修改这里的 path
        //name: 'home',
        component: B
      }
    ]
  },
  ... //省略部分代码
]
```

1. 修改主页first.vue中的内容，凡是作为不跳转的页面，都需要设置一个挂载点
2. 添加

```js
<template>
    <div>
        <router-link to="/a">转向A组件/页面></router-link>
        <router-link to="/b">转向B组件/页面></router-link>
        <router-view></router-view>
    </div>
</template>
```

### 2.9 vue-cli3添加样式的三种方式

1. 直接在组件页面中添加`<style>`--内部样式表
2. 使用外部样式表，在public文件夹中创建样式文件ys1.css
3. 在first.vue文件中导入，替换原来内部样式表的部分，为 @import "路径名"

## 3.vue-cli3项目案例需求分析

- 组件及组件间传值
- axios实现读取json数据：商品的数据源存放于json中
- css相关技术进行布局：布局、间距等样式
- 使用views页面级组件，使用router设置页面
- 在testcli文件夹下创建新的工程 proj，vue create proj

### 3.1 页面初始化

- 将img文件夹放在public文件夹下，需要的图片素材放在img中
- 项目结构
- components文件夹放一些小组件
- 将小组件组合起来最终是用view文件夹中的页面去呈现
- 兄弟组件间传值可以使用 **事件总线**
- 在assets/components文件夹下创建事件总线
- 创建名为 msg.vue 的事件总线文件，代码如下：

```js
import Vue from 'vue'
export default new Vue
// 当做是公共的来做参数传递
```

1. 在要放置各个组件的主页面First.vue中，导入各个组件，在末尾添加script标签

```js
<script type="text/javascript">
  import Left from '../components/Left.vue'
  import Right from '../components/Right.vue'
  export default {
    components: {
      Left,
      Right
    }
  }    
</script>
```

1. 然后在 First.vue页面的适当位置使用`<Left>/<Right>`标签插入相关的组件

### 3.2 实现左边固定导航栏，右边页面随不同导航变化

- 因为左侧有多个导航菜单键，右边只有一个页面去显示变化，所以要实现 **组件复用** 的功能。
- 首先给左边导航的li添加事件，`<li @click="menu1">服饰</li><li @click="menu2">家电</li>`
- 然后在Left.vue文件下面写上 script 脚本

```js
<script type="text/javascript">
  import Msg from './msg.vue'
  export default {
    methods: {
      menu1:function() {
        Msg.$emit("val","1");  //通过 emit 触发 Msg的on事件，将1的值赋给val，触发到on
      },
      menu2:function() {
        Msg.$emit("val","2");  //通过 emit 触发 Msg的on事件，将1的值赋给val，触发到on
      }
    }
  }
</script>
```

- vue文件中如果要添加脚本，script放在最后，其中 export default{} 是必须要写的，不然没法显示出来。
- 在 Right.vue 文件中去接受相应的值

```js
<template>
  <div>
    {{kk}}
  </div>
</template>
<script type="text/javascript">
import Msg from './msg.vue'  //左右vue文件都要引入这个事件总线的代码
export default {
  data() {
    return {
      kk: 0
    }
  },
  mouted: function() {
      var _this = this;  //右边的this代表当前vue本身，也就是 kk 的数据，左边是this的副本
      Msg.$on('val',function(m){
        this.kk = m;   //错误，这里this表示的是 on 事件中的内容，不再是当前vue，所以找不到 kk，所以使用 _this
        _this.kk = m;
      })     //使用 on 来接收，val是另一个文件传过来的值，接受的值传给 m
  }
}
</script>
```

- 这里有个坑：事件总线这里命令为 Msg.vue，但其实应该命名为 Msg.js，所以任何引用到该文件的地方都需要修改为 Msg.js

### 3.3 扩展右侧导航栏

- 原来只有一个页面的显示，这里重新修改扩展右侧导航栏

```js
<template>
  <div>
    <div v-if="kk==1">
      1111111111111
    </div>
    <div v-if="kk==2">
      2222222222222
    </div>
    <div v-if="kk==3">
      3333333333333
    </div>
    <div v-if="kk==4">
      4444444444444
    </div>
  </div>
</template>
<script type="text/javascript">
... 同上
</script>
```

### 3.4 axios 处理json数据

- 安装命令 npm i axios -S，这样就安装到生产环境中去了
- 然后在 main.js 中来引用 import axios from 'axios'
- 并全局注册该插件，还是在 main.js 文件中， Vue.prototype.$http = axios，这样以后要使用该插件，就是使用 $http，也可以命名为 $axios
- 然后在 Right.vue 中开始使用。
- 首先准备 json 数据，可以在public文件夹下新建 json 文件夹，新建bjb.json，存放数据如下：

```json
[
  {
    "goodName": "联想1",
    "img": "img/bjb1.jpg"
  },
  {
    "goodName": "联想2",
    "img": "img/bjb2.jpg"
  },
  {
    "goodName": "联想3",
    "img": "img/bjb3.jpg"
  },
]
```

- 在components文件夹下面创建 goodsList.vue

```js
<template>
  <div name="show">
    <ul>
      <li v-for="goods in list">
        <img v-bind:src="goods.img">   //要把json中的数据存放到 list 中 
        <p>{{good.goodName}}</p>    //img和goodName是json数据中的键的名字
      </li> 
    </ul>
  </div>
</template>
<script>
  export default {
    name: "show",
    data() {
      var obj = this;
      this.$http.get("json/bjb.json").then(function(res){
        obj.list = res.data;  // 这里的 list 是上面 v-for 中的list
      })    // $http 是上面注册好的
      return {
        list: []
      }
    }
  }
</script>
```

- goodsList.vue需要在Right.vue中使用，所以在 Right.vue 中编写相关的代码
- 首先导入相关文件 `import GoodList from './goodList.vue'`
- 然后进行组件的注册，在export default中新增一项 `javascript components: [ GoodList ]`
- 使用 `<GoodList>` 替换原来的 11111111111/22222222222等
- **然后在 goodList.vue文件中，添加相应的样式来使得页面正常显示**

### 3.5 多个导航功能实现

- 上一次中，Right.vue是父组件，goodsList.vue是子组件，这里先来实现父子组件的传值
- 在 Right.vue 中添加代码
- `<GoodList :goodId="1"></GoodList>` //在调用 GoodList 的时候，会传递参数 goodId，值为 1
- 在goodsList中接收
- 在export default中添加一项

```js
props: {
  goodId: Number
}
watch: {   //watch 监听父组件到子组件传值的参数,goodId值发生改变，就会被 watch 捕捉到
  goodId() {
    var obj = this;
    var url = "";
    if( obj.goodId == 1) {  // 表示单击的是第一项
      url = "json/bjb.json"
    } else if(obj.goodId == 2) {
      url = "json/shouji.json"   //根据点击导航栏菜单的不同，选择不同的json文件
    }
    this.$http.get(url).then(function(res){  //这里的get就是用变量的写法，url的值传给 res
      obj.list = res.data;
    })
    return {
      list: []
    }
  }
}
```

- 同时要修改上面 data() 部分的代码，增加判断语句然后给 url 赋予不同的 json 数据

### 3.6 解决刷新以及初始化显示的问题

- 上面需要点击导航栏的菜单项才会显示出来，这里给它添加一个默认显示的项
- 只需要在上面的 data 和 watch 函数中添加一个 else

```js
watch: {   //watch 监听父组件到子组件传值的参数,goodId值发生改变，就会被 watch 捕捉到
  goodId() {
    var obj = this;
    var url = "";
    if( obj.goodId == 1) {  // 表示单击的是第一项
      url = "json/bjb.json"
    } else if(obj.goodId == 2) {
      url = "json/shouji.json"   //根据点击导航栏菜单的不同，选择不同的json文件
    } else {  // 上面 goodId==0 就通过这里处理
      url = "json/bji.json"   //这里可以显示默认的页面  
    }
    this.$http.get(url).then(function(res){  //这里的get就是用变量的写法，url的值传给 res
      obj.list = res.data;
    })
    return {
      list: []
    }
  }
}
```

- 然后修改 Right.vue 文件

```js
<template>
  <div>
    <div v-if="kk==1">
      <GoodList :goodId="1"> </GoodList>
    </div>
    <div v-else-if="kk==2">
      <GoodList :goodId="2"> </GoodList>
    </div>
    <div v-else-if="kk==3">
      3333333333333
    </div>
    <div v-else-if="kk==4">
      4444444444444
    </div>
    <div v-else>   //除了以上之外，才是下面0的显示
      <GoodList :goodId="0"></GoodList>
    </div>
  </div>
</template>
<script type="text/javascript">
... 同上
</script>
```

### 3.7 vue-cli3小结

- vue-cli2/vue-cli3安装，卸载，相关插件的安装，卸载。
- 实现页面路由、路由嵌套、插件安装。

-----

## 4.Vue引入Element

1. 打开cmd，进入到当前刚创建的vue项目目录;

2. 在当前目录中运行：

```
npm i element-ui -S
```

3. 顺便安装一下axios：

```
npm install axios -S
```

4. 打开创建的项目文件夹;

5. 改变项目目录中的main.js文件；

6. 修改main.js文件：

```js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false;
```

7. 然后在.vue文件里就直接可以用了

例如：在src/components/Hello.vue做一下修改

```vue
<template>
<div class="hello">
<h1>{{ msg }}</h1>
<h2>Essential Links</h2>
<el-button>默认按钮</el-button>
<el-button type="primary">主要按钮</el-button>
<el-button type="text">文字按钮</el-button>
</div>
</template>
<script>
export default {
name: 'hello',
data () {
return {
msg: 'Welcome to Your Vue.js App'
}
}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
font-weight: normal;
}
ul {
list-style-type: none;
padding: 0;
}
li {
display: inline-block;
margin: 0 10px;
}
a {
color: #42b983;
}
</style>
```

8. 运行：npm run serve

## 5.axios

Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。

### 5.1 安装

```
npm install axios -S
```

### 5.2 配置axios

在项目中新建api/index.js文件，用以配置axios

```
import axios from 'axios';

let http = axios.create({
  baseURL: 'http://localhost:8080/',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  },
  transformRequest: [function (data) {
    let newData = '';
    for (let k in data) {
      if (data.hasOwnProperty(k) === true) {
        newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
      }
    }
    return newData;
  }]
});

function apiAxios(method, url, params, response) {
  http({
    method: method,
    url: url,
    data: method === 'POST' || method === 'PUT' ? params : null,
    params: method === 'GET' || method === 'DELETE' ? params : null,
  }).then(function (res) {
    response(res);
  }).catch(function (err) {
    response(err);
  })
}

export default {
  get: function (url, params, response) {
    return apiAxios('GET', url, params, response)
  },
  post: function (url, params, response) {
    return apiAxios('POST', url, params, response)
  },
  put: function (url, params, response) {
    return apiAxios('PUT', url, params, response)
  },
  delete: function (url, params, response) {
    return apiAxios('DELETE', url, params, response)
  }
}
```

这里的配置了POST、GET、PUT、DELETE方法。并且自动将JSON格式数据转为URL拼接的方式

同时配置了跨域，不需要的话将withCredentials设置为false即可

并且设置了默认头部地址为：[http://localhost:8080/](https://links.jianshu.com/go?to=http%3A%2F%2Flocalhost%3A8080%2F)，这样调用的时候只需写访问方法即可.

注：PUT请求默认会发送两次请求，第一次预检请求不含参数，所以后端不能对PUT请求地址做参数限制

### 5.3 使用axios

首先在main.js文件：

```
import axios from "axios";

Vue.prototype.$axios = axios;
```

然后在需要的地方调用即可 

```js
this.$axios.post('user/login.do(地址)', {
    "参数名": "参数值"
}, response => {
     if (response.status >= 200 && response.status < 300) {
        console.log(response.data);\\请求成功，response为成功信息参数
     } else {
        console.log(response.message);\\请求失败，response为失败信息
     }
});
```

当然也可以不用封装直接调用axios：

```js
//get请求
axios.get('url地址').then( res => {
   console.log(res);
},error =>{
   console.log(error);
})
//带参数
axios.get('url地址',params:{参数}).then( res => {
   console.log(res);
},error =>{
   console.log(error);
})
//post一样
axios.post('url地址',{参数}).then( res => {
   console.log(res);
},error =>{
   console.log(error);
})
```

**不封装，直接axios 发 post 请求，后端接收不到参数的解决方案 ：**

解决方案一：

【用 URLSearchParams 传递参数】

```js
let param = new URLSearchParams()
param.append('username', 'admin')
param.append('pwd', 'admin')
axios({
    method: 'post',
    url: '/api/lockServer/search',
    data: param
})
```

需要注意的是： `URLSearchParams` 不支持所有的浏览器，但是总体的支持情况还是 OK 的，所以优先推荐这种简单直接的解决方案.