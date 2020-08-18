<template>
    <div id="custom-menu">
        <div
            v-for="(value,index) in menuContent" :key="index"
            class="custom-menu-btn"
            :style="{'border-right':(index%2===0?'1px solid #dedfe4':'none'),'border-bottom':(index<menuContent.length-borderThink?'1px solid #dedfe4':'none'),}"
        >
            <img :src="value.img">
            <span>{{ value.notes }}</span>
        </div>
    </div>
</template>
<script>
export default {
  name:"CustomMenuButton",
  props:{//camelCase (驼峰命名法)
    menuContent:{
      type:[Array,Object],
      default:function(){
        return [{notes:'请传入值'}];
      }
    }
  },
  data(){
    return {
      
    };
  },
  computed:{
    borderThink(){//判断菜单块是偶数还是奇数-影响最后一行的下边框
      if(this.menuContent.length%2===0){
        return 2;
      }else return 1;
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_common-styles.scss";
@import "@/assets/styles/_flex-layout.scss";
  #custom-menu{
    @include labelflex(flex,row,wrap);
    padding: 5px;
    border-bottom:$myBorderColor solid 1px;    
  }
  .custom-menu-btn{
    width: 50%;
    @include labelflex(inline-flex,column,nowrap);
    @include label-box-sizing(border-box);
    align-items: center;
    justify-content: flex-end;
    padding: 5px 0;
    cursor: pointer;
    &:hover{
        color:red;
      }
    img{
      width: 35%;
    }
  }

</style>