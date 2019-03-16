import Vue from 'vue'
import Router from 'vue-router'
import config from './config/index'
import pages from './pages/index'

Vue.use(Router)

var route = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: "/admin/index"
    },
    ...pages,
  ]
})

// //全局路由前置守卫
// route.beforeEach((to, from, next) => {
//   // console.log(to, from)
//   document.title = to.meta.title ? to.meta.title : config.title; //设置标题
//   next();
// });
// //全局路由后置守卫
// route.afterEach((to, from) => {
//   // console.log(to, from)
//   if (process.env.NODE_ENV === 'production' && /micromessenger/.test(navigator.userAgent.toLowerCase())) {
//   }
// });

export default router;
