<template>
	<div id="drawerchart01" >
		<button @click="isopen=!isopen">打开/关闭</button>
		<div id="drawerchart02" class="drawer">
			<transition name="fade">
				<!-- <div :class="isopen?'mask':'close'" @click="close"> -->
				<div class="mask" v-show="isopen" transition="fade">
					<div class="header">
						<p class="f1">抽屉</p>
					</div>
					<el-button class="" @click="close">关闭</el-button>
				</div>
			</transition>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				isopen:true
			}
		},
		methods:{
			close(){
				this.isopen=false;
			}
		},
	}
	
</script>
 
<style scoped="scoped">
	#drawerchart01{
		height: 100%;
		width: 100%;
	}
	#drawerchart02{
		width: 70%;
		height: 100%;
		background-color: #42B983;
		position: absolute;
		right: 0;
		bottom: 0;		
	}
	.mask{
		width: 100%;
		height: 50%;
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 10;
		margin-left:0;
		margin-top: 0;
		background-color: #333333;			
	}
	.fade-enter-active,.fade-leave-active{
		transition: opacity .5s;
	}
	.fade-enter,.fade-leave-active{
		opacity: 0;
	}
</style>
