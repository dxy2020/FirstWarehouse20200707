<template>
    <div id="home-header" @click="postUserInformation">
        <div id="home-header-theme">
            <img src="./img/header.png" style="height:80%;margin-left: 8px;margin-right: 10px;">
            <span style="color: #ffffff;">国土空间基础信息平台</span>
        </div>
        <el-dropdown class="el-dropdown" @command="handleCommand">
            <el-avatar :size="size" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
            <span class="el-dropdown-link">				
                {{ this.$store.state.user }}<i class="el-icon-arrow-down el-icon--right" />
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                    个人信息
                </el-dropdown-item>
                <el-dropdown-item>设置</el-dropdown-item>
                <el-dropdown-item>退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
import axios from 'axios';
import http from "@/api/index.js";
export default {
  name:"HomeHeader",
  data(){
    return{
      size:30
    };
  },
  methods: {
    handleCommand(command) {
      this.$message('click on item ' + command);
    },
    getUserInformation(){
      console.log('我进来了');
      http.get('/data/userform.json',{
        course_id:this.id
      }).then(
        res=>{
          console.log(res);
        }
      );
    },
    postUserInformation(){
      http.post('/data/userform.json',{
        course_id :'戴洗衣'//this.id
      }).then(
        res=>{
          console.log(res);
        });
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_common-styles.scss";
@import "@/assets/styles/_flex-layout.scss";
	#home-header{
		@extend .label-size-default;
		@include labelflex(flex,row,nowrap);
		justify-content: space-between;
		align-items:center;
	}
	#home-header-theme{
		height: 100%;
		@include labelflex(inline-flex,row,nowrap);
		align-items:center;
	}
	.el-dropdown{
		margin-right: 10px;
		height: 100%;
		@include labelflex(inline-flex,row,nowrap);
		align-items:center;
		.el-dropdown-link{
			margin-left: 10px;
			font-size: 12px;
			cursor: pointer;
			color: white;	
	}
	}	
</style>
