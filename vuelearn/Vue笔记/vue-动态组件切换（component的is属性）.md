# vue-动态组件切换（component的:is属性）

步骤：

1.新建一个tabber组件（主要是创建需要绑定点击事件的对象）

  1.1添加点击事件（事件函数需要传参）

  2.1在methods中添加事件

2.在App.vue中实现切换

  2.1利用动态组件实现切换

  2.2在data中设置切换的组件名称

  2.3在methods中添加事件

```vue
//table.vue
<template>
<div id="footer">
<ul>
<li @click="handleClick(1)">首页</li>
<li @click="handleClick(2)">列表页</li>
<li @click="handleClick(3)">详情页</li>
</ul>
</div>
</template>


<script>
export default {
data(){
return{
}
},
methods: {
handleClick(n){
this.$emit("handleToggle",n)//重点理解
}
},
};
</script>


<style lang="scss">
#footer {
width: 100%;
height: 3.75rem;
background: grey;
position: fixed;
top: 0;
left: 0;
}
ul {
width:100%;
height:100%;
display: flex;
align-items: center;
justify-content: space-around;
list-style: none;
}


</style>
```

```vue
<template>
<div id="app">
<!-- <AddCon/>
<ListCon/>
<MmmCon/> -->
<!-- 切换网页时is前有冒号 -->
<component :is="comName"></component><!--:is="comName"-->
<TabberCon @handleToggle="togglePage"/><!--@handleToggle="togglePage"-->
</div>
</template>
<script>
import AddCon from './components/add.vue';
import ListCon from './components/list.vue';
import MmmCon from './components/mmm.vue';
import TabberCon from './components/tabber.vue';


export default {
    name: 'app',
    data(){
        return{
        comName:'AddCon',
    	}
    },
    components: {
        AddCon,
        ListCon,
        MmmCon,
        TabberCon
    },
    methods: {
        togglePage(n){
        switch(n){
        case 1:
        this.comName = "addCon";
        break;
        case 2:
        this.comName = "listCon";
        break;
        case 3:
        this.comName = "mmmCon";
        break;
        }
    }
    },
}
</script>
<style lang="scss">
*{
margin:0;
padding:0;
}
.IndexCon{
  margin-top:3.75rem;
}
</style>
```

