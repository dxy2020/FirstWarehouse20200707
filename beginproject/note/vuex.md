# vuex

## 1.vuex

1. 对vue应用中多个组件的共享状态进行集中式的管理(读/写)。

   ```vue
   View(界面)——>Actions(行为：方法/函数)——>State(状态)——>View(界面)——>....
   ```

   >\* state：驱动应用的数据源
   >
   >\* view：以声明方式将state映射到视图
   >
   >\* actions：响应在view上的用户输入导致的状态变化(包含n个更新状态的方法)。

## 2.多组件共享状态的问题

1. 多个视图依赖于同一状态；

2. 来自不同视图的行为需要更新为同一状态；

3. 以前的解决方法：

   >\* 将数据以及操作数据的行为都定义在父组件；
   >
   >\* 将数据以及操作数据的行为传递給需要的各个子组件(有可能需要多级传递)。

### 2.1 state

1. vuex管理的状态对象

2. 它应该是唯一的

   ```js
   const state={xxx:initValue}
   ```

### 2.2 mutations

1. 包含多个直接更新state的方法(回调函数)的对象

2. 谁来触发：action中的commit('mutation名称')

3. 只能包含同步的代码，不能写异步代码

   ```js
   const mutations={
   	yyy(state,data){
   	//更新state的某个属性
   	}
   }
   ```

### 2.3 ations

1. 包含多个事件回调函数的对象

2. 通过执行：commit()来触发mutation的调用，间接更新state

3. 谁来触发：组件中：$store.dispatch('action 名称')

4. 可以包含异步代码(定时器，ajax)

   ```js
   const actions={
   	zzz({commit,state},data1{
   	commit('yyy',data2)
   	})
   }
   ```

### 2.4 getters

1. 包含多个计算属性(get)的对象

2. 谁来读取：组件中：$store.getters.xxx

   ```js
   const getters={
   	mmm(state){
   		return...
   	}
   }
   ```

### 2.5 modules

1. 包含多个module
2. 一个module是一个store的配置对象
3. 与一个组件(包含有共享数据)对应

### 2.6 向外暴露store对象

```js
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})
```





