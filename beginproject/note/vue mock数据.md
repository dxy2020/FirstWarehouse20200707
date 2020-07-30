# Vue mock数据

## 1.使用Mock模拟Ajax请求

### 1.安装mockjs

进入项目文件夹，执行命令`npm install mockjs --save-dev`，将mockjs安装到项目中。

不好的安装方式：~~npm install mockjs --save~~
 正确的安装方式：npm install mockjs --save-dev

正确的安装方式：npm install mockjs --save-dev

> 2020-6-24日修改：将--save更新--save-dev，原因是：mockjs只在开发环境中使用，在真正的接口没出来之前，我自己mock一些假数据，来方便开发；在生产环境肯定不能使用mock数据，所以，只需要将mockjs安装到开发环境中即可~

### 2.main.js中引入index.js

```jsx
if(process.env.NODE_ENV !== "production") require("./mock")  // 只在开发环境中引入，生产环境不引入mock。mock文件夹与main.js同等级。
```

**mock文件夹**
 在`src目录`下，创建`mock文件夹`，mock文件夹下创建response文件夹，在该文件夹下创建class.js文件

```jsx
import Mock from 'mockjs'

export const getClassInfomation = (options) => {
  const template = {
    'name|2-4': 'fujingwen',
    'parent|10': "fujingwen111",
  }
  return Mock.mock(template)
}
```

在`src目录`下，创建`mock文件夹`，mock文件夹下创建`index.js文件`

```jsx
import Mock from 'mockjs'
import { getClassInfomation } from './response/class'

// about
Mock.mock(/\getClassInfomation/, "post", getClassInfomation)

export default Mock
```

**views文件夹下about.vue文件**

```xml
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="getClassInfo">获取学生信息</button>
  </div>
</template>

<script>
import {getClassInfomation} from '@/api/class'
export default {
  methods: {
    getClassInfo () {
      getClassInfomation({ userName: 21 }).then(res => {
        console.log('res: ', res.data)
      })
    },
  }
}
</script>
```

**请求结果**

```css
{
age: 24
email: "o.tjypkyhwv@kxdwuzvzkq.do"
name: "Kenneth Young"
}
```

**各目录结构如下**

```css
.
├── README.md
├── babel.config.js
├── id_rsa_fujingwen
├── id_rsa_fujingwen.pub
├── package-lock.json
├── package.json
├── postcss.config.js
├── public
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── App.vue
│   ├── api
│   │   ├── app.js
│   │   ├── class.js
│   │   ├── data.js
│   │   ├── index.js
│   │   └── user.js
│   ├── assets
│   │   ├── fonts
│   │   ├── images
│   │   └── logo.png
│   ├── components
│   │   ├── FInput.vue
│   │   ├── FShow.vue
│   │   ├── HelloWorld.vue
│   │   ├── count-to
│   │   │   ├── count-to.less
│   │   │   ├── count-to.vue
│   │   │   └── index.js
│   │   ├── edit-table
│   │   │   ├── edit-table.vue
│   │   │   └── index.js
│   │   ├── list
│   │   │   ├── index.js
│   │   │   ├── list.less
│   │   │   └── list.vue
│   │   ├── menu
│   │   │   ├── a-menu-item.vue
│   │   │   ├── a-menu.vue
│   │   │   ├── a-submenu.vue
│   │   │   └── index.js
│   │   ├── render-dom.js
│   │   ├── side-menu
│   │   │   ├── index.js
│   │   │   ├── re-dropdown.vue
│   │   │   ├── re-submenu.vue
│   │   │   └── side-menu.vue
│   │   └── split-pane
│   │       ├── index.js
│   │       └── split-pane.vue
│   ├── config
│   │   └── index.js
│   ├── directive
│   │   └── index.js
│   ├── doc
│   │   ├── vue-cli3.md
│   │   └── explain.md
│   ├── lib
│   │   ├── axios.js
│   │   ├── bus.js
│   │   ├── tools.js
│   │   └── util.js
│   ├── main.js
│   ├── mock
│   │   ├── index.js
│   │   └── response
│   │       ├── class.js
│   │       ├── data.js
│   │       └── user.js
│   ├── router
│   │   ├── index.js
│   │   └── router.js
│   ├── store
│   │   ├── actions.js
│   │   ├── getters.js
│   │   ├── index.js
│   │   ├── module
│   │   │   └── user.js
│   │   ├── mutations.js
│   │   ├── plugin
│   │   │   └── saveInLocal.js
│   │   └── state.js
│   └── views
│       ├── About.vue
│       ├── Argu.vue
│       ├── Child.vue
│       ├── Email.vue
│       ├── Error.vue
│       ├── Home.vue
│       ├── Login.vue
│       ├── Parent.vue
│       ├── Tel.vue
│       ├── count-to.vue
│       ├── father.vue
│       ├── kid.vue
│       ├── layout.vue
│       ├── menu-page.vue
│       ├── re-submenu.vue
│       ├── render-page.vue
│       ├── split-pane.vue
│       ├── store.vue
│       └── table.vue
└── vue.config.js
```