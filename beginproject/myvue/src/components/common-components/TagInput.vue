<template>
    <div id="tag-input">
        <el-tag type="info" style="width:100%">
            {{ tagTitle }}
        </el-tag>                                
        <span>{{ inputTips }}</span>
        <el-input v-model="inputContent" placeholder="请输入内容"></el-input>
        <span>{{ markUnit }}</span>
        <el-button type="primary" @click="btnClick">
            {{ btnTitle }}
        </el-button>
    </div>
</template>

<script>
export default {
  name:"TagRadio",
  props:{
    tagTitle:{
      type:String,
      default:'是否进行缓冲区分析'
    },
    inputTips:{
      type:String,
      default:'缓冲距离：'
    },
    markUnit:{
      type:String,
      default:'米'
    },
    btnTitle:{
      type:String,
      default:'开始分析'
    }
  },
  data(){
    return{
      inputContent:'',
    };
  },
  methods:{
	  btnClick(){//按钮点击事件
      this.$emit('btnClick');
		  // this.$store.commit('openDrawerChart');
		  // this.$store.commit('selectanalysisfactor',this.radata[this.radio]);
	  }
  }
};
</script>

<style scoped="scoped" lang="scss">
@import "@/assets/styles/_common-styles.scss";
@import "@/assets/styles/_flex-layout.scss";
 .el-tag{
    margin: 6px 0;
  }
 #tag-input{
    .el-input{
      width: 50%;
      margin:0px 5px;
    }
    .el-button{
      margin-top: 5px;
      position: relative;
      left: 25%;
    }
  }
</style>