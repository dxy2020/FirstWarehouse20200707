//为自定义的选项'myOption'注入一个处理器
/*请谨慎使用全局混入，因为它会影响每个单独创建的 Vue 实例 (包括第三方组件)。
大多数情况下，只应当应用于自定义选项，就像上面示例一样。推荐将其作为插件发布，以避免重复应用混入。*/
Vue.mixin({
	created:function(){
		let myOptions=this.$options.myOption;
		if(myOptions){
			console.log(myOptions);
		}
	}
});
let v5=new Vue({//此处若为v1则：Uncaught SyntaxError: Identifier 'v1' has already been declared。
	myOption:'hello!',
//	created:function(){
//		console.log(this.$options.myOption);
//	}
})
