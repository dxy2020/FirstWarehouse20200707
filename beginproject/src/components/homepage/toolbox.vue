<template>
	<div id="toolbox02">
		<div class="toolbox03"><i class="el-icon-s-grid"></i><span>辖区</span></div>
		<div class="toolbox03"><i class="el-icon-place"></i><span>要素拾取</span></div>
		<div class="toolbox03"><i class="el-icon-setting"></i><span>工具</span></div>
		<div class="toolbox03"><i class="el-icon-menu"></i><span>分屏</span></div>
		<div class="toolbox03" style="border: none;"><i class="el-icon-delete"></i><span>清理</span></div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped="scoped">
	#toolbox02{
		width: 100%;
		height: 100%;
		position: relative;
		background-color: white;
		padding: 4px 0 4px;
		border-radius: 4px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
	}
	/* #toolbox02:before{
		content:'';
		display: inline-block;
		vertical-align: middle;
		height: 100%;
	} */
	.toolbox03{
		height: 100%;
		/* width: 60px; */
		padding-left: 8px;
		border-right:0.2px dotted #2C3E50;
		float: left;
		font-size: 20px;
		cursor: pointer;
		border-radius: 4px;
	}
	.toolbox03:before{
		content:'';
		display: inline-block;
		vertical-align: middle;
		height: 100%;
	}
	.toolbox03:hover{
		background-color: #409EFF;
	}
	.toolbox03 span{
		padding-left: 8px;
		margin-right: 8px;
	}
</style>
