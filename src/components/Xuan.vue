<template>
  <div class="B_box">
    <div class="line-search-wrap">
      <div class="line-search-box">
        <div class="search-pa search-icon">
          <img src="../assets/img/fangda.png">
        </div>
        <div class="search-pa search-text">香氛</div>
      </div>
    </div>
    <div class="carts-icon">
      <i class="iconfont icon-gouwuche" @click=" gotocart()"></i>
    </div>
    <div class="list-wrap">
      <div class="item-left">
        <div class="main-item-box">
          <div class="main-item" v-for="(goods,idx) in xuanlist" :key="goods.title">
            <div class="main">
              <span
                class="main-text"
                :class="activeClass == idx ? 'cur':''"
                @click="goclick($event,idx)"
              >{{goods.title}}</span>
              <span :class="activeClass == idx ? 'line':''"></span>
            </div>
          </div>
        </div>
      </div>
      <div class="item-right">
        <div class="sub-item-box list-flex j_sub_item">
          <div class="sub-item" v-for="(list) in photolist" :key="list.title" @click="goto()">
            <img :src="list.image.src" class="image">
            <div class="sub-text">{{list.title}}</div>
            <div class="sub-press"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
// ElementUI以插件的形式来扩展Vue的功能
Vue.use(ElementUI);
// 把axios设置到Vue的原型对象上，方便在任意组件中使用
Vue.prototype.$axios = axios;
export default {
  data() {
    return {
      navs: [
        {
          text: "列表",
          i: "iconfont icon-shouye",
          name: "List"
        }
      ],
      goodslist: [],
      xuanlist: [],
      photo: [],
      photolist: [],
      activeClass: 0,
      activeIndex: 0
    };
  },

  components: {},
  methods: {
    //点击时切换页面  路由
    goto() {
      // console.log(this);
      //$router.push方法切换组件页面
      this.$router.push({ name: "List" });
    },
    gotocart() {
      // console.log(this);
      //$router.push方法切换组件页面
      this.$router.push({ name: "Cart" });
    },
    goclick(e, idx) {
      this.activeClass = idx;
      var tex = e.target.innerHTML;
      this.$axios
        .post("http://localhost:1812/order_list2", {
          title: tex
        })
        .then(res => {
          this.photo = [];
          this.photolist = [];
          this.photo = res.data.arr;
          for (var i = 0; i < this.photo.length; i++) {
            this.photolist = this.photo[i].data.subCategory;
          }
        });
    }
  },
  created() {
    this.$axios
      .post("http://localhost:1812/order_list", {
        title: "推荐"
      })
      .then(res => {
        this.goodslist = res.data.arr;
        for (var i = 0; i < this.goodslist.length; i++) {
          this.xuanlist.push(this.goodslist[i].data);
        }
      });
    this.$axios
      .post("http://localhost:1812/order_list2", {
        title: "推荐"
      })
      .then(res => {
        this.photo = [];
        this.photolist = [];
        this.photo = res.data.arr;
        for (var i = 0; i < this.photo.length; i++) {
          this.photolist = this.photo[i].data.subCategory;
        }
      });
  }
};
</script>
<style lang="scss" scoped>
.B_box {
  display: flex;
  flex: 2;
  box-sizing: border-box;
  img {
    border: 0;
    display: block;
  }
  position: relative;
  .list-wrap {
    position: relative;
    .item-left {
      float: left;
      width: 2.133333rem;
      padding: 0 0.4rem 0 0.533333333333333rem;
      .main-item {
        width: 100%;
        height: 1.226666666666667rem;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        position: relative;
        .main {
          display: inline-block;
          color: #000;
          font-size: 0.4rem;
          font-weight: 700;
          position: absolute;
          top: 50%;
          -webkit-transform: translateY(-50%);
          transform: translateY(-50%);
          .main-text.cur {
            float: left;
            font-size: 0.533333333333333rem;
          }
          .line {
            float: left;
            width: 100%;
            height: 0.08rem;
            background: #000;
            margin-top: 0.08rem;
          }
        }
      }
    }
    .item-right {
      width: 6.933333rem;
      float: left;
      height: 14.666667rem;
      overflow: auto;
      .list-flex {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .sub-item {
          width: 3.44rem;
          height: 4.586666666666667rem;
          margin-bottom: 0.053333333333333rem;
          position: relative;
          img {
            width: 100%;
            height: 100%;
          }
          image {
            width: 100%;
            height: 100%;
          }
          .sub-text {
            position: absolute;
            top: 0.266666666666667rem;
            left: 0;
            width: 100%;
            padding-left: 0.373333333333333rem;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #fff;
            font-size: 0.373333333333333rem;
            font-weight: 700;
          }
          .sub-press {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            opacity: 0;
          }
        }
      }
    }
  }
  .iconfont,
  .icon-gouwuche {
    width: 0.48rem;
    height: 0.48rem;
  }
  .carts-icon {
    position: absolute;
    z-index: 3;
    top: 0.266667rem;
    right: 0.426666666666667rem;
    i {
      display: block;
      width: 0.48rem;
      height: 0.48rem;
      font-size: 0.666667rem;
      background-size: contain;
    }
  }
  .line-search-wrap {
    width: 100%;
    height: 1.573333333333333rem;
    padding: 0 1.333333333333333rem 0.32rem 0.533333333333333rem;
    box-sizing: border-box;
    .line-search-box {
      width: 100%;
      height: 1.253333333333333rem;
      border-bottom: 0.053333333333333rem solid #000;
      box-sizing: border-box;
      position: relative;
      zoom: 1;
      .search-pa.search-icon {
        width: 0.586666666666667rem;
        height: 0.586666666666667rem;
        .image {
          width: 100%;
          height: 100%;
        }
        img {
          display: block;
          width: 100%;
        }
      }
      .search-pa {
        position: absolute;
        left: 0;
        top: 50%;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
      }
      .search-text {
        width: 100%;
        padding-left: 0.8rem;
        box-sizing: border-box;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 0.373333333333333rem;
        color: #000;
        font-weight: 700;
        line-height: 0.586666666666667rem;
      }
    }
  }
}
</style>
