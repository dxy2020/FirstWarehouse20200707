<template>
    <div>
        <NavMenu :navList="leftMenu.navList"></NavMenu>
    </div>
</template>


<script>
import NavMenu from '@/components/homepage/homepage1.vue';

export default {
  components: {NavMenu},
  data(){
    return {
      userInfo:{
        username: '',
      },
      leftMenu:{
        isCollapse: false,
        navList: [{
          icon: 'el-icon-document',
          title: '订单管理',
          url: '/OrderManage'
        },{
          icon: 'el-icon-dish',
          title: '菜单管理',
          url: '/ProductManage'
        },{
          icon: 'el-icon-suitcase',
          title: '店铺管理',
          url: "suibianxie",
          children: [{
            icon: 'el-icon-tickets',
            title: '店铺资料',
            url: '/StoreProfile'
          },{
            icon: 'el-icon-picture-outline',
            title: '轮播图管理',
            url: '/BannerPicture'
          },{
            icon: 'el-icon-s-grid',
            title: '桌台管理',
            url: '/TableManage'
          },{
            icon: 'el-icon-s-grid',
            title: '测试',
            url: "suibianxie2",
            children: [{
              icon: 'el-icon-s-grid',
              title: '测试1',
              url: '/TableManage'
            }]
          }]
        },{
          icon: 'el-icon-setting',
          title: '账号管理',
          url: '/AccountManage'
        },{
          icon: 'el-icon-user',
          title: '个人资料',
          url: '/PersonProfile'
        }]
      }
    }
  }
}

</script>
