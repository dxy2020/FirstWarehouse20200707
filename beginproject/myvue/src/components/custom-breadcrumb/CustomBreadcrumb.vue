<template>
    <div id="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(values,index) in breadcrumb_item" :key="index" :to="{path:values.topath}">
                {{ values.content }}
            </el-breadcrumb-item>
        </el-breadcrumb>
        <i class="el-icon-arrow-left" style="font-size: 16px;" @click="isOpenSecondMenu" />
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
    $route(to, from) {
      if (to.path === '/' && from.path === '/home/planservice') {
        this.$store.commit('openleftmenu02');
      }
    },
    // $route:{
    //   handler:function(val,oldVal){
    //     console.log(val.name,oldVal.path);
    //   }
    // }
  },
  methods:{
    isOpenSecondMenu() {
      this.$store.commit('OpenSecondMenu');
    },			
  }
};
</script>

<style scoped lang="scss">
  #breadcrumb{
      width: auto;
      display: inline-flex;
      justify-content: space-between;
      margin: {
        top: 5px;
        bottom:5px;
      }
  }

</style>