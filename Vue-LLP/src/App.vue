<template>
  <div id="app">
    <router-view class="main"></router-view>
    <footer >
      <nav>
   <li v-for="(nav) in navs" :key="nav.name" @click="goto(nav)">
          <i :class="nav.i"></i>
          <span  >{{nav.text}}</span>
        </li>
      </nav>
    </footer>
  </div>
</template>
<script>
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios";
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
//import HelloWorld from "./components/HelloWorld.vue";
import VueResource from "vue-resource";
Vue.use(VueResource);
export default {
  data() {
    return {
      navs: [
        {
          text: "首页",
          i: "iconfont icon-shouye",
          name: "Home",
          meta: {
            footShow: true // true显示，false隐藏
          }
        },
        {
          text: "选购",
          i: "iconfont icon-liebiaoxuanze-",
          img: "",
          name: "Xuan",
          meta: {
            footShow: true // true显示，false隐藏
          }
        },
        {
          text: "购物车",
          i: "iconfont icon-gouwuche",
          name: "Cart",
          meta: {
            footShow: false // true显示，false隐藏
          }
        },
        {
          text: "我的",
          i: "iconfont icon-wode",
          name: "Login",
          meta: {
            footShow: false // true显示，false隐藏
          }
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

  }
};
</script>

<style lang="scss">
@import "assets/font_7ckfk617pvd/iconfont.css";
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
 flex: 1;
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    flex-direction: column;
    overflow: auto;
  }
  footer {
    height: 1.333333rem;
    border-top: 1px solid #e6e7e8;
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
        i {
          height: 0.666667rem;
          font-size: 0.626667rem;
        }
        span {
          font-size: 0.24rem;
        }
      }
    }
  }
}
</style>
