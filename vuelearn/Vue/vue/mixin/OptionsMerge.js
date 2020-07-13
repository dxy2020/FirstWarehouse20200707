let mixin={
	data:function(){
		return{
			message:'hello',
			foo:'abc'
		}
	}
};
let mixin1={
	created:function(){
		console.log('混入对象的钩子被调用');
	}
};
let mixin2={
	methods:{
		foo:function(){
			console.log('foo');
		},
		conflicting:function(){
			console.log('from mixin');
		}
	}
}
let v1=new Vue({
	/*当组件和混入对象含有同名选项时，这些选项将以恰当的方式进行“合并”。
	比如，数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。*/
	mixins:[mixin],
	data:function(){
		return{
			message:'goodbye',
			bar:'def'
		}
	},
	created:function(){
		console.log(this.$data);
	}
});
let v2=new Vue({
	/*同名钩子函数将合并为一个数组，因此都将被调用。
	    另外，混入对象的钩子将在组件自身钩子之前调用。*/
	mixins:[mixin1],
	created:function(){
		console.log('组件钩子被调用');
	}
});
let v3=new Vue({
	/*
	 值为对象的选项，例如 methods、components 和 directives，
	 将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对
	 * */
	mixins:[mixin2],
	methods:{
		bar:function(){
			console.log('bar');
		},
		conflicting:function(){
			console.log('from self');
		}
	}
});
v3.foo();
v3.bar();
v3.conflicting();
