<template>
	<div id="menu01">
		<img src="../img/u24.png" style="margin-top: 10px;margin-bottom: 5px;" />
		<div class="menu02" v-for="(value,index) in menu" :key="index" @click="isopenleftmenu02">
			<router-link :to="value.tolink" tag="div" append style="cursor:pointer">
				<img :src="value.imgsrc" style="width: 35%;"/>
				<p><span>{{value.menucontent}}</span></p>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		name:'leftmenu',
		data(){
			return{
					menu:[
					{
						tolink:'/home/planservice',
						imgsrc:require('../img/u69.png'),//此时需要用require，否则图片无法加载
						menucontent:'通用功能'
					},
					{
						tolink:'/home/planservice',
						imgsrc:require('../img/u72.png'),
						menucontent:'规划服务'
					},
					{
						tolink:'/home/planservice',
						imgsrc:require('../img/u79.png'),
						menucontent:'监管服务'
					},
					{
						tolink:'/home/planservice',
						imgsrc:require('../img/u65.png'),
						menucontent:'监管服务'
					},
					{
						tolink:'/home/planservice',
						imgsrc:require('../img/u67.png'),
						menucontent:'决策服务'
					}
					
				]
			}
		},
		methods:{
			isopenleftmenu02(){
				this.$store.commit('openleftmenu02');
			}
		}
	}
</script>

<style scoped="scoped">
	#menu01{
		width: 108px;
		height: 100%;
		background-color: #505458;
		text-align: center;
		color: #FFFFFF;
	}
	.menu02{
		margin-top:24px;
		padding: 3px 1px 1px 1px;
		border-radius: 4px
	}
	.menu02 p{
		margin-top:1px;
	}
	.menu02:hover{
		background-color: bisque;
	}
</style>
