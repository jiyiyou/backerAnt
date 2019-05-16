import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/login.vue'
import Layout from './views/layout/layout.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,
    },

  //  Home: () => import('@/views/home/home'),
    {
      path: '',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('@/views/home/home'),
        },
        {
          component: () => import('@/views/exception/404'),
          name: "404",
          path: "/404",
        }, {
          component: () => import('@/views/exception/403'),
          name: "403",
          path: "/403",
        }, {
          component: () => import('@/views/exception/500'),
          name: "500",
          path: "/500",
        }
      ]
    }, {
      path: '*',
      redirect: '/404'
    }
  ]
})

// 前端路由表
const constantRouterComponents = {
  Layout,// 基础页面 layout 必须引入
  // 你需要动态引入的页面组件


  Publish: () => import('@/views/goods/publish'),
  Express: () => import('@/views/goods/express'),
  GoodsList: () => import('@/views/goods/list'),
  Sort: () => import('@/views/goods/sort'),
  Suggest: () => import('@/views/goods/suggest'),

  OrderList: () => import('@/views/order/order'),
  Return: () => import('@/views/order/return'),

  Person: () => import('@/views/access/person'),

  Stock: () => import('@/views/record/stock'),
  Finance: () => import('@/views/record/finance'),

  Coupon: () => import('@/views/market/coupon'),
  Discount: () => import('@/views/market/discount'),
  Fund: () => import('@/views/market/fund'),
  Banner: () => import('@/views/market/banner'),
  Notice_: () => import('@/views/market/notice'),

  Account: () => import('@/views/user/account'),
  Info: () => import('@/views/user/info'),
  Notice: () => import('@/views/user/notice'),
}
const menuData = [
  {
    "path": "",
    "component": "Layout",
    "Ico": "home",
    "name": "",
    "children": [
      {
        "path": "/home",
        "component": "Home",
        "name": "home",
        "title":"首页"
      }
    ]
  },
  {
    "component": "Layout",
    "Ico": "shopping",
    "name": "goods",
    "title":"商品管理",
    "children": [
      {"name": "publish","title":"商品推荐",},
      {"name": "goodsList","title":"商品列表",},
      {"name": "sort","title":"模块一.3",},
      {"name": "express","title":"模块一.4",},
      {"name": "suggest","title":"模块一.5",}
    ],
  },
  {
    "component": "Layout",
    "Ico": "profile",
    "name": "order",
    "title":"模块二",
    "children": [
      {"name": "orderList","title":"模块二.1",},
      {"name": "return","title":"模块二.2",}
    ]
  },
  {
    "component": "Layout",
    "Ico": "lock",
    "name": "access",
  "title":"模块三",
    "children": [
      {"name": "person","title":"模块三.1",}
    ]
  },
  {
    "component": "Layout",
    "Ico": "pie-chart",
    "name": "record",
    "title":"模块四",
    "children": [
      {"name": "stock","title":"模块四.1",},
      {"name": "finance","title":"模块四.2",}
    ]
  },
  {
    "component": "Layout",
    "Ico": "line-chart",
    "name": "market",
    "title":"模块五",
    "children": [
      {"name": "coupon","title":"模块五.1",},
      {"name": "banner","title":"模块五.2",},
      {"name": "discount","title":"模块五.3",},
      {"name": "fund","title":"模块五.4",}
    ]
  },
  {
    "component": "Layout",
    "Ico": "user",
    "name": "user",
    "title":"模块六",
    "children": [
      {"name": "account","title":"模块六.1",},
      {"name": "info","title":"模块六.2",},
      {"name": "notice","title":"模块六.3",}
    ]
  }
]
/*格式化 后端 结构信息并递归生成层级路由表*/
const generator = (routerMap, parent) => {
  return routerMap.map(item => {
    const currentRouter = {
      // 路由地址 动态拼接生成如 /dashboard/workplace
      path: `/${parent && parent.name || ''}/${item.name}`,
      // 路由名称，建议唯一
      name: item.name || item.key || '',
      Ico: item.Ico || '',
      // 该路由对应页面的 组件
      component: constantRouterComponents[item.component || item.name.replace(item.name[0], item.name[0].toUpperCase())],
      // meta: 页面标题, 菜单图标, 页面权限(供指令权限用，可去掉)
      meta: {title: item.title|| ''}
    }
    // 重定向
    item.redirect && (currentRouter.redirect = item.redirect)
    // 是否有子菜单，并递归处理
    if (item.children && item.children.length > 0) {
      // Recursion
      currentRouter.children = generator(item.children, currentRouter)
    }
    // 为了防止出现后端返回结果不规范，处理有可能出现拼接出两个 反斜杠
    currentRouter.path = currentRouter.path.replace('//', '/')
    return currentRouter
  })
}
export {generator, menuData}
