// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import goods from 'views/goods/goods.vue'
import ratings from 'views/ratings/ratings.vue'
import seller from 'views/seller/seller.vue'

import 'common/stylus/index.styl';

Vue.use(VueRouter)
Vue.prototype.$http = axios
let routes = [
  {
    path: '/',
    component: goods
  },
  {
    path: '/goods',
    component: goods
  },
  {
    path: '/seller',
    component: seller
  },
  {
    path: '/ratings',
    component: ratings
  }
]

let router = new VueRouter({
  'linkActiveClass': 'active',
  routes // （缩写）相当于 routes: routes
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
