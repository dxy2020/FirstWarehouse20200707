<template>
    <div id="home-aside-first-menu" :style="{width:first_menu_width+'px'}">
        <img :src="top_img_switch?top_img_src01:top_img_src02" @click="removeDescription">
        <div
            v-for="(value,index) in menu" :key="index" class="menu-button"
            :style="{'background-color':(changeIndex===index?changeBackgroundColor:'')}" @click="isOpenSecondMenu(index)"
        >
            <router-link
                :to="{path:value.tolink,query:value.query}" tag="div" append
                style="cursor:pointer"
            >
                <img :src="value.imgsrc" style="width: 35%;">
                <p v-show="isShowDescription">
                    <span>{{ value.menucontent }}</span>
                </p>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeAsideFirstMenu',
  data() {
    return {
      first_menu_width:60,
      top_img_switch:true,
      top_img_src01:require('./img/u24.png'),
      top_img_src02:require('./img/u65.png'),
      clickcount:0,
      isShowDescription:true,
      changeIndex:10,
      menu: [
        {
          tolink: '/home/homeasidesecondmenu',
          query:{
            secondmenu_id:0
          },
          imgsrc: require('./img/u69.png'), // 此时需要用require，否则图片无法加载
          menucontent: '通用功能'
        },
        {
          tolink: '/home/homeasidesecondmenu',
          query:{
            secondmenu_id:1
          },
          imgsrc: require('./img/u72.png'),
          menucontent: '规划服务'
        },
        {
          tolink: '/home/homeasidesecondmenu',
          query:{
            secondmenu_id:2
          },
          imgsrc: require('./img/u79.png'),
          menucontent: '审批服务'
        },
        {
          tolink: '/home/homeasidesecondmenu',
          query:{
            secondmenu_id:3
          },
          imgsrc: require('./img/u65.png'),
          menucontent: '监管服务'
        },
        {
          tolink: '/home/homeasidesecondmenu',
          query:{
            secondmenu_id:4
          },
          imgsrc: require('./img/u67.png'),
          menucontent: '决策服务'
        }

      ]
    };
  },
  computed:{
    changeBackgroundColor(){
      //二级菜单关闭时背景颜色默认
      if(this.$store.state.openSecondMenu===false){
        return '';
      }else{
        return 'bisque';
      }
    }
  },
  methods: {
    isOpenSecondMenu(index) {
      if(this.$store.state.openSecondMenu===false){
        this.$store.commit('OpenSecondMenu');
        this.$store.commit('secondMenuSelect',index);
      }else{
        if(index===this.$store.state.secondMenuSelect){
          this.$store.commit('OpenSecondMenu');
        }else{
          this.$store.commit('secondMenuSelect',index);
        };
        //改变背景颜色
        this.changeIndex=index;        
      };    
    },
    removeDescription(){
      this.top_img_switch=!this.top_img_switch;
      this.isShowDescription=!this.isShowDescription;      
      this.first_menu_width=this.top_img_switch?60:40;   
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
	#home-aside-first-menu{
    height: 100%;
		background-color: #505458;
		text-align: center;
    color: #FFFFFF;
  }
  #home-aside-first-menu{
    img{
      width: 45%;
      padding-top: 8px;
      cursor:pointer;
    }
    .menu-button{
      font-size: 12px;
      margin-top:8px;
		  // padding: 12px auto;
      border-radius: 4px;
      &:hover{
        background-color:bisque;
      }
    }
  }
</style>
