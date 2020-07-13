//定义一个混入对象
let myMixin={
	created:function(){
		this.hello()
	},
	methods:{
		hello:function(){
			console.log('hello from mixin!')
		}
	}
};
//定义一个使用混入对象的组件
let Component=Vue.extend({
	mixins:[myMixin]
});
let component=new Component();