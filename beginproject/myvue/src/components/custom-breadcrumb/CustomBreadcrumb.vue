<template>
    <div id="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(values,index) in breadcrumb_item" :key="index" :to="{path:values.topath}">
                {{ values.content }}
            </el-breadcrumb-item>
        </el-breadcrumb>
        <i class="el-icon-arrow-left" style="font-size: 40px;" @click="isOpenThirdMenu" />
    </div>
</template>

<script>
export default {
  data(){
    return{
      // breadcrumb_item_data:{},
      breadcrumb_item:[
        {
          'content':'首页',
          'topath':'/'
        },
        {
          'content':'规划服务',
          'topath':'#'
        }
      ]
    };
  },
  watch:{
    $route:{
      handler:function(val,oldVal){
        console.log(val.name,oldVal.path);
      }
    }
  },
  methods:{
    isOpenThirdMenu(){
      this.$store.commit('openleftmenu02');
    }
			
  }
};
</script>

<style scoped lang="scss">
  #breadcrumb{
      width: auto;
      display: inline-flex;
      justify-content: space-between;
      margin: {
        top: 12px;
        bottom:24px;
      }
  }

</style>