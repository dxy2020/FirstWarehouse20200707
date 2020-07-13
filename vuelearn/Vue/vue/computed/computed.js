let v1=new Vue({
	el:'#v1',
	data:{
		message:'hello'
	},
	computed: {
		leftMessage:function(){
			return this.message.split('').reverse().join('');
		}
	}
})

let v2=new Vue({
	el:'#v2',
	data:{
		isActive:true
	}
})

let v3=new Vue({
	el:'#v3',
	data:{
		one:false,
		ok:0,
		randommath:Math.random()
	}
})

let v4=new Vue({
	el:'#v4',
	data:{
		logintype:true
	},
//	computed:{
//		qiehuan:function(){
//			return this.logintype=!this.logintype;
//		}
//	}
	methods:{
		qiehuan:function(){
			return this.logintype=!this.logintype;
		}
	}
})

let v5=new Vue({
	el:'#v5',
	data:{
		url:'https://www.baidu.com'
	}
})
