<template>
    <div id="breadcrumb">
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(values,index) in breadcrumb_list" :key="index" :to="{path:values.topath}">
                {{ values.name }}
            </el-breadcrumb-item>
        </el-breadcrumb>
        <i class="el-icon-arrow-left" style="font-size: 16px;" @click="isOpenSecondMenu" />
    </div>
</template>

<script>
export default {
  data(){
    return{
      breadcrumb_item:[
        {
          'name':'首页',
          'topath':'/home'
        },
        {
          'name':this.$store.state.secondMenuName,
          'topath':'/home/homeasidesecondmenu'
        }
      ]
    };
  },
  computed:{
    secondMenuName(){
      return this.$store.state.secondMenuName;
    },
    breadcrumb_list(){
      if(this.$store.state.addBreadcrumb.length===0){
        return this.breadcrumb_item;
      }else{
        return this.breadcrumb_item.concat(this.$store.state.addBreadcrumb);
        
      }
    }
  },
  watch:{
    breadcrumb_list(newdata,olddata){
      console.log(newdata,olddata);
    },
    secondMenuName(newval,oldVal){
      this.breadcrumb_item[1].name=newval;
    },
    // $route:'getBreadcrumb',
    '$route'(to, from) {
      console.log(to.path,from.path);
      if (to.path === '/home' && from.path === '/home/homeasidesecondmenu') {
        this.$store.commit('openDrawerChart');
      }
    },
    $route:{
      handler:function(val,oldVal){
        console.log(this.$route.path);
        if(val.name==='HomeAsideSecondMenu'){
          console.log(val.name);
        }
      },
      deep:true
    }
  },
  methods:{
    isOpenSecondMenu() {
      this.$store.commit('OpenSecondMenu');
    },
    getBreadcrumb(){
      console.log(this.$route.path);
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
        top: 5px;
        bottom:5px;
      }
  }

</style>