import Vue from 'vue'
import App from './App.vue'
import './plugins/ant-design-vue.js'
import store from './store'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.config.productionTip = false

import {generator, menuData} from './router'

/*路由守卫*/
store.state.menu = generator(menuData)
router.addRoutes(store.state.menu)
console.log(store.state.menu)
router.beforeEach((to, form, next) => {
  NProgress.start()
  if (!window.sessionStorage.getItem('userName') && to.path !== '/login') {
    return next({path: '/login'})
  } else {
    next()
  }
})
router.afterEach(() => {
  NProgress.done()
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
