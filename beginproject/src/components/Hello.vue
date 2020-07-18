<template>
	<div class="hello">
		<router-link to="newcontact"><h1>{{msg}}</h1></router-link>
		<h2>Essential Links</h2>
		<el-button>默认按钮</el-button>
		<el-button type="primary">主要按钮</el-button>
		<el-button type="text">文件按钮</el-button>
	</div>
</template>

<script>
	export default{
		neme:"hello",
		data(){
			return{
				msg:"Welcome to Your Vue.js App"
			};
		}
	};
</script>

<style scoped>
	h2{
		font-weight: normal;
	}
</style>