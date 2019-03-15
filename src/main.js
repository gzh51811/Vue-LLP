import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import flexible from 'lib-flexible'
// import 'lib-flexible/flexible.js'
import './assets/font_7ckfk617pvd/iconfont.css'
Vue.use(flexible)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
