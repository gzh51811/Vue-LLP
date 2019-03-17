import Vue from 'vue'
import App from './App.vue'
<<<<<<< HEAD
import 'lib-flexible/flexible.js'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
=======
import router from "./router";
import flexible from 'lib-flexible'
// import 'lib-flexible/flexible.js'
<<<<<<< HEAD

=======
import './assets/font_7ckfk617pvd/iconfont.css'
>>>>>>> fenzhi2
Vue.use(flexible)
>>>>>>> 7d1efae37eda9581eb0212f471696d50446b4081

Vue.use(ElementUI);
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
