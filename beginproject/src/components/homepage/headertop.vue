<template>
	<div id="header02">
		<img src="../img/header.png" style="vertical-align: middle;height: 80%;margin-left: 10px;margin-right: 10px;" />
		<span style="font-size: 24px;color: #ffffff;">国土空间基础信息平台</span>
		<el-dropdown class="el-dropdown"  @command="handleCommand">
			<el-avatar style="vertical-align:middle;" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
			<span class="el-dropdown-link">				
				user<i class="el-icon-arrow-down el-icon--right"></i>
			</span>
			<el-dropdown-menu slot="dropdown">
				<el-dropdown-item>个人信息</el-dropdown-item>
				<el-dropdown-item>设置</el-dropdown-item>
				<el-dropdown-item>退出</el-dropdown-item>
			</el-dropdown-menu>
		</el-dropdown>
	</div>
</template>

<script>
	export default {
	    methods: {
	      handleCommand(command) {
	        this.$message('click on item ' + command);
	      }
	    }
	  }
</script>

<style scoped="scoped">
	#header02{
		width: 100%;
		height: 100%;
		position: relative;
		/* background-color: #0000FF; */
	}
	#header02:before,.el-dropdown:before{
		content:'';
		display: inline-block;
		vertical-align: middle;
		height: 100%;
	}
	.el-dropdown{
		position: absolute;
		right: 20px;
		top: 0;
		height: 100%;
		width: 150px;
		font-size: 24px;
	}
	.el-dropdown-link{
		cursor: pointer;
		color: #409EFF;	
	}
	.el-icon-arrow-down{
		font-size: 24px;
	}
</style>
