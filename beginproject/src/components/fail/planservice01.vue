<template>
  <el-row v-show="true" class="contain">
    <el-button size="mini">
      <span class="service">规划服务</span>
      <i class="el-icon-arrow-down common"></i>
    </el-button>

    <el-menu
      background-color="#FFF"
      text-color="#808080"
      active-text-color="#3b70c6"
      mode="horizontal"
    >
      <el-menu-item index="1">
        <i class="el-icon-location-outline"></i>
        <span>智能选址</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-data-analysis"></i>
        <span>差异分析</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-edit"></i>
        <span>多规差异冲突检测</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-pie-chart"></i>
        <span>多规控制线检测</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-collection"></i>
        <span>缓存区退让分析</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-wind-power"></i>
        <span>资源环境承载评价</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-s-comment"></i>
        <span>开发适宜性评价</span>
      </el-menu-item>
      <el-menu-item index="8">
        <i class="el-icon-s-data"></i>
        <span>项目合理性分析</span>
      </el-menu-item>
      <el-menu-item index="9">
        <i class="el-icon-scissors"></i>
        <span>规划编制辅助工具</span>
      </el-menu-item>
      <el-menu-item index="10">
        <i class="el-icon-s-cooperation"></i>
        <span>空间规划辅助审查</span>
      </el-menu-item>
      <el-menu-item index="11">
        <i class="el-icon-sunny"></i>
        <span>规划成果管理</span>
      </el-menu-item>
    </el-menu>
    <el-divider direction="horizontal"></el-divider>
    <span class="analysis" @click="showChild">
      <span>合规性分析</span>
      <i class="el-icon-arrow-down ico"></i>
    </span>
    <!-- <rationalityanalysis :mouseClick="isClick"></rationalityanalysis> -->
  </el-row>
</template>

<script>
// import rationalityAnalysis from "./rationalityAnalysis.vue";
export default {
  name: "planServices",
  props: ["activeData"],
  components: {
    // rationalityAnalysis: rationalityAnalysis,
	// rationalityanalysis:rationalityAnalysis
  },
  data() {
    return {
      isClick: false,
    };
  },
  methods: {
    showChild() {
      this.isClick = !this.isClick;
    }
  }
};
</script>

<style scoped>
.contain {
  /*overflow: hidden;*/
  overflow-x: hidden;
  overflow-y: scroll;
  width: 22%;
  height: 100%;
  position: absolute;
  background-color: white;
  left: 62px;
  top: 0;
  z-index: 1;
}
.el-button {
  margin-top: 10px;
}
.service {
  margin-left: -6px;
}
.common {
  margin-left: 120px;
}
.el-menu.el-menu--horizontal {
  border-bottom: none;
}
.el-menu-item {
  width: 50%;
  margin-top: 20px;
  padding: 0;
}
.el-menu-item i {
  position: absolute;
  left: 44px;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}
.analysis {
  font-size: 14px;
}
.ico {
  margin-left: 120px;
}
.ico:hover {
  cursor: pointer;
}
</style>
