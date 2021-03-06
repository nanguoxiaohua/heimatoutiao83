import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login/index.vue'
import Home from './views/home/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      directive: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/login',
      component: Login
    }
    // {
    // // route level code-splitting
    // // this generates a separate chunk (about.[hash].js) for this route
    // // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
