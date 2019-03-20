<template>
  <div id="app">
<<<<<<< HEAD
<<<<<<< HEAD
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
=======
     <router-view class="main"></router-view>
=======
     <router-view class="main">
       
     </router-view>
>>>>>>> fenzhi2
  <footer>
    <nav>
<<<<<<< HEAD
      <li v-for="(nav) in navs" :key="nav.name" @click="goto(nav)">{{nav.text}}</li>
=======
      <li v-for="(nav) in navs" :key="nav.name" @click="goto(nav)">
        <i :class="nav.i"></i>
        <span>{{nav.text}}</span>
        </li>
>>>>>>> fenzhi2
    </nav>
  </footer>
>>>>>>> 7d1efae37eda9581eb0212f471696d50446b4081
  </div>
</template>

<script>
<<<<<<< HEAD
import HelloWorld from "./components/HelloWorld.vue";


export default {
  name: "app",
  components: {
    HelloWorld
=======
<<<<<<< HEAD
import HelloWorld from "./components/HelloWorld.vue";
import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
=======
// import Vue from "vue";
<<<<<<< HEAD
<<<<<<< HEAD
import "element-ui/lib/theme-chalk/index.css";
// import "assets/download/font_7ckfk617pvd/iconfont.css";
>>>>>>> fenzhi2
=======
=======
>>>>>>> fenzhi2
// import Vant from "vant";

// import "vant/lib/index.css";
// Vue.use(Vant);
<<<<<<< HEAD
>>>>>>> fenzhi2
=======

import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI);
import VueResource from "vue-resource";
Vue.use(VueResource);
import axios from "axios";
// 把axios设置到Vue的原型对象上，方便在任意组件中使用
Vue.prototype.$axios = axios;
>>>>>>> fenzhi2

export default {
  data() {
    return {
      navs: [
        {
          text: "首页",
<<<<<<< HEAD
=======
          i: "iconfont icon-shouye",
>>>>>>> fenzhi2
          name: "Home"
        },
        {
          text: "选购",
<<<<<<< HEAD
=======
          i: "iconfont icon-liebiaoxuanze-",
>>>>>>> fenzhi2
          name: "Xuan"
        },
        {
          text: "购物车",
<<<<<<< HEAD
=======
          i: "iconfont icon-gouwuche",
>>>>>>> fenzhi2
          name: "Cart"
        },
        {
          text: "我的",
<<<<<<< HEAD
=======
          i: "iconfont icon-wode",
>>>>>>> fenzhi2
          name: "Login"
        }
      ],
      activeIndex: 0
    };
  },
  components: {},
  methods: {
    //点击时切换页面  路由
    goto(nav) {
      // console.log(this);
      //$router.push方法切换组件页面
      this.$router.push({ name: nav.name });
    }
>>>>>>> 7d1efae37eda9581eb0212f471696d50446b4081
  }
};
</script>

<<<<<<< HEAD
<style>
=======
<style lang="scss">
>>>>>>> 7d1efae37eda9581eb0212f471696d50446b4081
* {
  margin: 0;
  padding: 0;
}
<<<<<<< HEAD
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

=======
html,
body {
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    flex-direction: column;
    overflow: auto;
  }
  footer {
    background: #fff;
    height: 1.333333rem;
    nav {
      height: 1.333333rem;
      display: flex;
      justify-content: center;
      align-items: center;
      li {
        display: flex;
        flex-direction: column;
        text-align: center;
        flex: 1;
        color: #a7a7a7;
<<<<<<< HEAD
<<<<<<< HEAD
=======
        i{
           font-size: .626667rem;
=======
        i {
          font-size: 0.626667rem;
>>>>>>> fenzhi2
        }
        span {
          font-size: 0.24rem;
        }
>>>>>>> fenzhi2
      }
    }
  }
>>>>>>> 7d1efae37eda9581eb0212f471696d50446b4081
}
</style>
