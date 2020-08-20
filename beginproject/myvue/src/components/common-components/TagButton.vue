<template>
    <div id="tag-button">
        <el-tag type="info" style="width:100%">
            {{ tagTitle }}
        </el-tag>
        <div class="btn-content">
            <el-button v-for="(value,index) in btnContent" :key="index">
                {{ value }}
            </el-button>
        </div>
    </div>
</template>

<script>
export default {
  name:"TagButton",
  props:{
    tagTitle:{
      type:String,
      default:'选择分析范围'
    },
    btnContent:{
      type:Array,
      default:()=>{
        return ['请输入内容'];
      }
    }
  },
  data(){
    return{
    };
  }
};
</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_common-styles.scss";
@import "@/assets/styles/_flex-layout.scss";
 .el-tag{
    margin: 6px 0;
  }
 #tag-button{    
    .btn-content{
      @include labelflex(flex,row,wrap);
        justify-content: space-between;
        .el-button{
        width: 48%;
        padding: 12px 0;
        margin:2px 0;
      }
      // /deep/.el-button--default{//没必要，可舍
      //   width: 48%;
      //   padding: 12px 0;
      //   margin:2px 0;
      // }      
    }
  }
</style>