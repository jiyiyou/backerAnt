<template>
  <a-layout id="components-layout-demo-responsive" >
    <a-layout-sider  breakpoint="lg"   collapsedWidth="0"  >
      <div class="logo" ><img src="../../assets/selection_ioc.png" alt=""></div>
     
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline" :open-keys="openKeys"  @openChange="onOpenChange"
             >
        <template v-for="(item ,index) in menu">
        <a-sub-menu  :key=item.path v-if="item.name!=''"  class="flex" :inlineCollapsed="collapsed">
          <span slot="title"><a-icon :type=item.Ico /><span>{{item.meta.title}}</span></span>
          <a-menu-item :key=items.path @click="gotoRoot(items.path)" v-for="(items , indexs) in item.children">{{items.meta.title}}</a-menu-item>
        </a-sub-menu>
            <a-menu-item :key=item.children[0].path v-else @click="gotoRoot(item.children[0].path)" >
              <a-icon :type=item.Ico />
              <span>{{item.children[0].meta.title}}</span>
            </a-menu-item>

        </template>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" >
<!--        <a-button type="primary" @click="toggleCollapsed" style="margin-bottom: 16px">-->
<!--          <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />-->
<!--        </a-button>-->
        <div class="user" >欢迎您,
          <a-dropdown>  <a class="ant-dropdown-link" href="#">  {{user}} </a>
            <a-menu slot="overlay">
              <a-menu-item @click="userOut">
                退出
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px 0' }">
        <a-breadcrumb :style="{ margin: '0 0 20px 0' }">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <template v-if="this.$route.matched[0].meta.title!=undefined">
          <a-breadcrumb-item>{{this.$route.matched[0].meta.title}}</a-breadcrumb-item>
          <a-breadcrumb-item>{{this.$route.meta.title}}</a-breadcrumb-item>
          </template>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <router-view :key="key"/>
        </div>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
  export default {
    name: "layout",
    data(){
      return{
        menu:this.$store.state.menu,
        openKeys:[],
        collapsed:false,
        user:window.sessionStorage.getItem('userName')
      }
    },
    computed: {
      key() {
        return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
      }
    },
    methods: {
      //用户退出
      userOut(){
        this.$confirm({
          title: '提示',
          content: '是否确认退出？',
          cancelText:"取消",
          okText:"确定",
          onOk: () => {
            sessionStorage.clear();
            this.$router.push({path: "/login"});
          },
          onCancel() {},
        });
      },
      toggleCollapsed () {
        this.collapsed = !this.collapsed
      },
      onCollapse(collapsed, type) {
        console.log(collapsed, type);
      },
      gotoRoot(rootpath){
        this.$router.push({path:rootpath})
      },
      onOpenChange(openKeys) {
        const latestOpenKey = openKeys.find(
          key => this.openKeys.indexOf(key) === -1
        );
        this.openKeys = latestOpenKey ? [latestOpenKey] : [];
      },
      onBreakpoint(broken) {
        console.log(broken);
      }
    },
    mounted() {
      this.openKeys.push("/" + this.$route.path.split("/")[1]);
     // alert(this.$route.matched[0].meta.title)
      console.log(this.$route.params)
    }
  }
</script>

<style scoped>
  #components-layout-demo-responsive .logo {
    height: 32px;
    background: rgba(255,255,255,.2);
    margin: 16px;
  }
  .user{float: right;margin-right: 40px}
  #components-layout-demo-responsive .logo{height:70px;background-color: transparent!important;}
  #components-layout-demo-responsive .logo img{display: block;width: 100%}
  #components-layout-demo-responsive{text-align: left;height: 100%!important;}
</style>
