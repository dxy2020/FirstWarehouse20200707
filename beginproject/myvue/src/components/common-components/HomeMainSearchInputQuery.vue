<template>
    <div id="search-input-query">
        <el-input v-model="inputvalues" placeholder="请输入关键字">
            <el-button slot="append" icon="el-icon-search" style="background-color: #4680d1;color: white;" />
        </el-input>
        <el-button plain>
            组合查询
        </el-button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      inputvalues: ''
    };
  }
};
</script>

<style scoped="scoped" lang="scss">
// @import "@/assets/styles/_common-styles.scss"; 
// @import "@/assets/styles/_flex-layout.scss"; 
  ///deep/.el-input__inner {
  //   width: 200px;
  //   height: 40px;
  // }
  .el-input{
    width: 300px;
  }
</style>
