<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
export default {
  mounted() {
    // this.screenWidth=document.body.clientWidth;
    // this.$store.commit('getmainwidth',this.screenWidth-108);
    window.addEventListener('resize', this.reload);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.reload);
  },
  methods: {
    reload() {
      // 重新渲染
      this.$nextTick(() => {
      });
    }
  }
};
</script>

<style lang="scss">
  @import "@/assets/styles/_default-styles-clear.scss";
</style>
