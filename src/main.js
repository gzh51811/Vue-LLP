import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import flexible from 'lib-flexible'
// import 'lib-flexible/flexible.js'
<<<<<<< HEAD

=======
import './assets/font_7ckfk617pvd/iconfont.css'
>>>>>>> fenzhi2
Vue.use(flexible)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
