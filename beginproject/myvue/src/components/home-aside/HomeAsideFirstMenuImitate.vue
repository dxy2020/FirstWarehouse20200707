<!-- 一级菜单：模仿；el-menu-->
<template>
    <div id="home-aside-first-menu">
        <div id="menu-head-collapse" @click="isCollapse=!isCollapse">
            <i v-if="isCollapse" class="el-icon-d-arrow-right"></i>
            <i v-else class="el-icon-d-arrow-left"></i>
        </div>
        <div id="first-menu-item">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
                :collapse="isCollapse"
                :collapse-transition="false"
                @select="handleSelect"
            >
                <el-menu-item
                    v-for="(value,index) in menu_item" :key="index" :index="value.index"
                    :style="{'padding':(isCollapse?'0px 10px':'0px 25px 0px 10px'),}"
                >
                    <router-link
                        :to="{path:value.topath}" tag="div" append
                    >
                        <i :class="value.iclass" :style="{'color':(iColor==index+1?'#ffd04b':'#fff')}"></i>
                        <span>{{ value.name }}</span>
                    </router-link> 
                </el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      isCollapse:true,
      iColor:0,
      activeIndex: '1',
      activeIndex2: '1',
      menu_item:[
        {
          iclass:'el-icon-s-home',
          name:'主界面',
          topath:'/home',
          index:'1'
        },
        {
          iclass:'el-icon-menu',
          name:'通用功能',
          topath:'/home/homeasidesecondmenu',
          index:'2'
        },
        {
          iclass:'el-icon-s-claim',
          name:'规划服务',
          topath:'/home/homeasidesecondmenu',
          index:'3'
        },
        {
          iclass:'el-icon-postcard',
          name:'审批服务',
          topath:'/home/homeasidesecondmenu',
          index:'4'
        },
        {
          iclass:'el-icon-warning',
          name:'监管服务',
          topath:'/home/homeasidesecondmenu',
          index:'5'
        },
        {
          iclass:'el-icon-s-tools',
          name:'决策服务',
          topath:'/home/homeasidesecondmenu',
          index:'6'
        },
      ]
    };
  },
  methods:{
    // sub-menu 展开/收起的回调
    // @open="handleOpen"
    // @close="handleClose"
    // handleOpen(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    // handleClose(key, keyPath) {
    //   console.log(key, keyPath);
    // },
    //菜单激活回调
    handleSelect(key,keyPath){
      this.iColor=key;
      let index=Number(key);
      if(index!==1){
        this.isOpenSecondMenu(index);
      }
    },  
    isOpenSecondMenu(index) {
      if(this.$store.state.openSecondMenu===false){
        this.$store.commit('OpenSecondMenu');
        this.$store.commit('secondMenuSelect',index-2);
      }else{
        if(index-2===this.$store.state.secondMenuSelect){
          this.$store.commit('OpenSecondMenu');
        }else{
          this.$store.commit('secondMenuSelect',index-2);
        }; 
      };    
    },
  }
};
</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_flex-layout.scss"; 
@import "@/assets/styles/_common-styles.scss"; 
  #home-aside-first-menu{
    background-color:#545c64;
    height: 100%;    
  }
  #menu-head-collapse{
    height: 5%;
    @include labelflex(flex,row,nowrap);
    justify-content: center;
    align-items: center;
    background-color: rgb(73, 69, 69);
    color: #fff;
  }
  #first-menu-item{
    .el-menu{
      width: 100%;
      /deep/.el-menu-item{
        font-size: $myFontSize;
      }
    }    
  }
</style>