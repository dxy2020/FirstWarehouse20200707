var app=new Vue({
	el:'#app',
	data:{
		message:'Hello Vue!'
	}
})
var app2=new Vue({
	el:'#app-2',
	data:{
		message:'页面加载于'+new Date().toLocaleString()
	}
})
var app3=new Vue({
	el:'#app-3',
	data:{
		seen:true
	}
})
var app4=new Vue({
	el:'#app-4',
	data:{
		todos:[
		{text:'学习JavaScript'},
		{text:'学习Vue'},
		{text:'整个牛项目'}		
		]
	}
});
app4.todos.push({text:'新项目'});
var app5=new Vue({
	el:'#app-5',
	data:{
		message:'Hello Vue.js!'
	},
	methods:{
		reverseMessage:function(){
			this.message=this.message.split('').reverse().join('')
		}
	}
	
})
var app6=new Vue({
	el:'#app-6',
	data:{
		message:'Hello Vue!'
	}
})
//组件化应用构建
Vue.component('todo-item',{
	props:['todo'],
	template:'<li>{{todo.text}}</li>'
})
var app7=new Vue({
	el:'#app-7',
	data:{
		groceryList:[
		{id:0,text:'蔬菜'},
		{id:1,text:'奶酪'},
        {id:2,text:'随便其它什么人吃的东西'}
		]
	}
})
//HTML插值
var app8=new Vue({
	el:'#app-8',
	data:{
		rawHtml:`<span style="color:red">This should be red.</span>`
	}
})
//v-bind
var app9=new Vue({
	el:'#app-9',
	data:{
		dynamicId:'appmind9',
		isButtonDisabled:1
	}
})
//根据父元素id获取子元素的id值
console.log((document.getElementById('app-9').childNodes)[0].id);