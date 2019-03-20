import Vue from 'vue'
import App from './App.vue'

import 'lib-flexible/flexible.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from "./router";
import flexible from 'lib-flexible'

// import 'lib-flexible/flexible.js'



import './assets/font_7ckfk617pvd/iconfont.css'

import './assets/font_7ckfk617pvd/iconfont.css'



import './assets/font_7ckfk617pvd/iconfont.css'



Vue.use(flexible)


Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
