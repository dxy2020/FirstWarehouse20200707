<template>
<el-menu unique-opened router :default-active="$route.path"
      class="left-menu"  :collapse="leftMenu.isCollapse" >
    <component class="menu-item" v-for="(value) in leftMenu.navList" :key="value.title+value.url"
      :index="value.url" :is="(value.children&&value.children.length>0)?'el-submenu':'el-menu-item'">
        <template slot="title">
            <i :class="[value.icon]"></i>
            <span>{{value.title}}</span>
        </template>
        <template v-if="value.children&&value.children.length>0">
            <div>
                <el-menu-item class="menu-item" v-for="(v,i) in value.children" :key="v.url+i" :index="v.url">
                    <i :class="[v.icon]"></i>
                    <span slot="title">{{v.title}}</span>
                </el-menu-item>
            </div>
        </template>
    </component>
</el-menu>    
</template>

<script>
export default {
  data(){
    return {
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
          url: 'suibianxie',
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
