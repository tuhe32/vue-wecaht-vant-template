import Vue from 'vue'
import App from './App.vue'
import router from './router'
import FastClick from 'fastclick'
import store from './store'
import { sync } from 'vuex-router-sync'
import Carousel3d from 'vue-carousel-3d'

import './permission'
import baseUtil from "@/utils/baseUtil";
import qUtil from "@/utils/queryUtil";
import "@/assets/styles/public.css";
import "@/assets/styles/iconfont.css";
import 'normalize.css';

Vue.use(Carousel3d);

Vue.prototype.baseUtil = baseUtil;
Vue.prototype.qUtil = qUtil;

sync(store, router);
FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
