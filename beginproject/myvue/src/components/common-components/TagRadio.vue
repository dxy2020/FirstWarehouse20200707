<template>
    <div class="tag-radio">
        <el-tag type="info" style="width:100%">
            {{ tagTitle }}
        </el-tag>
        <el-radio-group v-model="radio">
            <el-radio v-for="(value,index) in radioContent" :key="index" :label="index">
                {{ value }}
            </el-radio>
        </el-radio-group>
    </div>
</template>

<script>
export default {
  name:"TagRadio",
  props:{
    tagTitle:{
      type:String,
      default:'选择分析因子'
    },
    radioContent:{
      type:Array,
      default:()=>{
        return ['请输入内容'];
      }
    },
    radio:{
      type:Number,
      default:2
    }
  },
  data(){
    return{
      // radio:2,
    };
  },
  watch:{
	  radio:function(val){//监听单选框的变化，逻辑写在父组件中
      this.$emit('radioWatch',val);
	  }
  },
};
</script>

<style scoped lang="scss">
 .el-tag{
    margin: 6px 0;
  }
</style>