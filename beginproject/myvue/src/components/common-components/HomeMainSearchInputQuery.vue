<template>
    <div id="search-input-query">
        <el-input v-model="inputvalues" placeholder="请输入关键字" class="search-input-query">
            <el-button slot="append" icon="el-icon-search" style="background-color: #4680d1;color: white;" />
        </el-input>
        <el-button plain class="search-input-buttom">
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
$SearchInputHeight:30px;
  .search-input-query{
    width: 250px;
    /deep/.el-input__inner{
      height: $SearchInputHeight;
    }
    /deep/.el-button{
      height: $SearchInputHeight;
      padding: 0px;
      width: 45px;
    } 
  }
  /deep/.search-input-buttom{
    height: $SearchInputHeight;
    padding: 0px 4px;
  }
</style>
