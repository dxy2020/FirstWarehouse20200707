# 如何修改Element-UI input标签的高度

## 1.按钮修改

```vue
<template>
    <div>
        <el-button type="warning">按我</el-button>
    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped>

</style>
```

1. 自定义一个类名:可行

   ```vue
   <template>
       <div>
           <el-button type="warning" class="btn">按我</el-button>
       </div>
   </template>
   
   <script>
       export default {
   
       };
   </script>
   
   <style scoped>
   
   .btn{
       background-color: blue;
   }
   </style>
   ```

2. 采用样式覆盖的方法，审查元素，拿到类名:可行

   ```vue
   <template>
       <div>
           <el-button type="warning">按我</el-button>
       </div>
   </template>
   
   <script>
       export default {
   
       };
   </script>
   
   <style scoped>
   
   .el-button,.el-button--default{
       background-color: gold;
       height: 50px;
    }
   </style>
   ```

## 2.输入框

```vue
<template>
    <div>
        <el-input></el-input>
    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped>

</style>
```

1. 自定义类名修改样式：高度未生效

   ```vue
   <template>
       <div>
           <el-input class="eit"></el-input>
       </div>
   </template>
   
   <script>
       export default {
   
       };
   </script>
   
   <style scoped>
   div{
       margin: 50px;
   }
   .eit{
       width: 190px;
       height: 500px;
    }
   </style>
   ```

2. 采用样式覆盖的方法，审查元素，拿到类名:自定义的样式全失效。

   ```vue
   <template>
       <div>
           <el-input></el-input>
       </div>
   </template>
   
   <script>
       export default {
   
       };
   </script>
   
   <style scoped>
   div{
       margin: 50px;
   }
   .el-input__inner{//该class类名通过浏览器查看源代码(检查)找到el-input标签查看其自带的class。
       width: 190px;
       height: 500px;
    }
   </style>
   ```

   ```vue
    /deep/.el-input__inner {
       width: 600px;
       height: 70px;
     }
   ```

## 3.原因

1. elementUI 标签的标签名就是类型，例如按钮标签：`<el-button></el-button>` 它的类名使用就能这样 `.el-button{}`

2. 自定义类名覆盖原有样式，例如：`class="cur"`

3. 用了elementUI标签，在控制台审查元素时出现的类名。我们想去修改他的话。这时候如果你直接 copy 类名到 style 里面直接用，我们看到是失效的。因为你这个组件里面没有。如果你非要这么用，当然可以这样写，去掉scoped 变成全局样式：

   ```vue
   <style>
   .el-input__inner{
   
   }
   </style>
   ```

   <font color=red>注意：</font>这种方法存在全局污染。所以使用深度作用选择器。

   上面我们使用控制台的样式失效，就很容易明白了，直接使用组件不存在的类名，这个类选择器只能作用在本地，全局是不会生效的。那为什么使用自定义类名也不行，因为全局对自定义的类名进行了覆盖。

## 4.深度作用选择器

1. 如果你希望 scoped 样式中的一个选择器能够作用得“更深”，例如影响子组件，你可以使用 >>> 操作符。有些像 Sass 之类的预处理器无法正确解析 >>>，这种情况下你可以使用 /deep/ 或 ::v-deep 操作符取而代之——两者都是 >>> 的别名，同样可以正常工作。

2. 注意最后一句话，在 scss 环境下，就是上面高度没有生效的例子，当我们指定 `lang='scss'` 样式就会全部失效。效果如下：

   ```vue
   <template>
       <div>
           <el-input></el-input>
       </div>
   </template>
   
   <script>
       export default {
   
       };
   </script>
   
   <style scoped lang="scss">
       div{
           margin: 50px;
       }
       >>> .el-input__inner{
           width: 190px;
           height: 500px;
       }
   </style>
   ```

3. 去掉 lang 并且高度生效案例如下：

   ```vue
   <template>
       <div>
           <el-input></el-input>
       </div>
   </template>
   
   <script>
       export default {
   
       };
   </script>
   
   <style scoped>
   div{
       margin: 50px;
   }
   >>> .el-input__inner{
       width: 190px;
       height: 500px;
    }
   </style>
   ```

4. 深度作用选择器：

   ```vue
   /deep/ .el-input__inner{
       width: 190px;
       height: 500px;
    }
   ```

## 5.总结

el-input 输入框，自定义类名修改样式，只有高度没生效，覆盖方法，自定义的样式全部失效，在 scss 环境下使用深度作用选择器**`/deep/`**，或不使用 css 预处理器完成高度自定义**`>>>`**。