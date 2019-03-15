<template>
  <div id="app">
     <router-view class="main"></router-view>
  <footer>
    <nav>
      <li v-for="(nav) in navs" :key="nav.name" @click="goto(nav)">
        <i :class="nav.i"></i>
        <span>{{nav.text}}</span>
        </li>
    </nav>
  </footer>
  </div>
</template>

<script>
// import Vue from "vue";
import "element-ui/lib/theme-chalk/index.css";
// import "assets/download/font_7ckfk617pvd/iconfont.css";

export default {
  data() {
    return {
      navs: [
        {
          text: "首页",
          i: "iconfont icon-shouye",
          name: "Home"
        },
        {
          text: "选购",
          i: "iconfont icon-liebiaoxuanze-",
          name: "Xuan"
        },
        {
          text: "购物车",
          i: "iconfont icon-gouwuche",
          name: "Cart"
        },
        {
          text: "我的",
          i: "iconfont icon-wode",
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
  }
};
</script>

<style lang="scss">
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
  display: flex;
  flex-direction: column;
  .main {
    flex: 1;
    flex-direction: column;
    overflow: auto;
  }
  footer {
    background: pink;
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
        i{
           font-size: .626667rem;
        }
        span{
          font-size: .24rem;
        }
      }
    }
  }
}
</style>
