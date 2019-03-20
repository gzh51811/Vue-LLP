<template>
  <div class="L-box">
    <div class="p-tag">
      <div class="p-tag-wrap">
        <div
          v-for="(goods,idx) in xuanlist"
          :key="goods.title"
          @click="goclass(idx,$event)"
          class="p-item"
          :class="activeClass == idx ? 'active':''"
        >{{goods.title}}</div>
      </div>
    </div>
    <div class="nav-wrap p-nav-bar">
      <div class="nav-bar">
        <div class="nav-kinds no-member">
          <div class="nav-item RELEASE DESC">
            上架时间
            <span class="icon-sort">
              <i class @click="ordertime()"></i>
            </span>
          </div>
          <div class="nav-item PRICE">
            商品价格
            <span class="icon-sort">
              <i class @click="orderby()"></i>
            </span>
          </div>
          <div class="nav-item FILTER">
            筛选
            <span class="icon-sort">
              <i class="icon-kinds"></i>
            </span>
          </div>
        </div>
        <div class="j_max_index" style="z-index: 5001;">
          <div
            class="beast-mask"
            style="height: 100%; width: 100%; position: fixed; z-index: 1000; top: 0px; left: 0px; opacity: 0; background: rgb(0, 0, 0); display: none;"
          ></div>
          <div class="beast_slider beast_slide_from_right" style="z-index: 1001; height: 100%;"></div>
        </div>
      </div>
    </div>
    <div class="sm-list">
      <div class="sm-wrap">
        <div class="simple-product" @click="goto(item.id)" v-for="(item) in list" :key="item._id">
          <div class="product-image">
            <img width height :src="item.featureImage" class="lazy-fadeIn">
          </div>
          <div class="product-infos">
            <div class="brand-name">{{item.brand.name}}</div>
            <div class="name">{{item.name}}</div>
            <div class="prices">
              <div class="price discount-price">
                <span>
                  <span class="sign"></span>
                  <span class="symbol">¥</span>
                  <span class="int">{{item.price}}</span>.
                  <span class="decimal">0</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="cart-search">
      <div class="sc"></div>
      <div class="ct" @click="gotocart()"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      lise: [],
      goodslist: [],
      xuanlist: [],
      tit:['推荐'],
      activeClass: 0
    };
  },
  methods: {
    //点击时切换页面  路由
    goto(id) {
      console.log(id);
      //$router.push方法切换组件页面
      // this.$router.push({ name: "Goods" });
      this.$router.push({ name: "Goods", query: { id }, params: { id } });
    },
    gotocart() {
      // console.log(this);
      //$router.push方法切换组件页面
      this.$router.push({ name: "Cart" });
    },
    goclass(idx,e) {
      this.activeClass = idx;
      var tex=e.target.innerHTML;
      this.tit=[],
      this.tit.push(tex);
      this.$axios
      .post("http://localhost:1812/order_list1", {
        title: tex
      })
      .then(res => {
        this.list = res.data.arr;
      });
    },
    orderby() {
      this.$axios
        .post("http://localhost:1812/orderby", {
          title: this.tit[0]
        })
        .then(res => {
          this.list = res.data.arr;
        });
    },
    ordertime() {
      this.$axios
        .post("http://localhost:1812/ordertime", {
         title: this.tit[0]
        })
        .then(res => {
          this.list = res.data.arr;
        });
    }
  },
  created() {
    this.$axios
      .post("http://localhost:1812/order_list1", {
        title: "推荐"
      })
      .then(res => {
        this.list = res.data.arr;
      });
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
  }
};
</script>
<style lang="scss" scoped>
.L-box {
  display: flex;
  flex: 1;
  .p-tag {
    position: relative;
    width: 10rem;
    height: 1.28rem;
    overflow-scrolling: touch;
    overflow-x: scroll;
    overflow-y: hidden;
    .p-tag-wrap {
      white-space: nowrap;
      .p-item {
        display: inline-block;
        height: 1.28rem;
        padding: 0 0.48rem 0 0;
        font-size: 0.373333333333333rem;
        line-height: 1.28rem;
        color: #000;
      }
      .active {
        font-size: 0.373333333333333rem;
        font-weight: 700;
      }
    }
  }
  .nav-bar,
  .nav-bar .nav-kinds {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .nav-wrap {
    position: relative;
    z-index: 1;
    top: 0;
    padding-top: 0.16rem;
    .nav-bar {
      width: 9.093333333333334rem;
      height: 0.96rem;
      margin: 0 0.4rem 0.16rem;
      padding: 0.053333333333333rem 0;
      border: 0.032rem solid #000;
      .no-member {
        width: 9rem;
      }
      .nav-kinds {
        width: 8.533333333333333rem;
        line-height: 0.96rem;
        .nav-item {
          width: 2.933333rem;
          -webkit-box-flex: 1;
          -ms-flex: 1;
          flex: 1;
          border-left: 0.032rem solid #000;
          text-align: center;
          font-size: 0.346666666666667rem;
          font-weight: 700;
          color: #000;
          .icon-sort {
            display: inline-block;
            width: 0.133333333333333rem;
            height: 0.266666666666667rem;
            i {
              display: block;
              width: 0.133333333333333rem;
              height: 0.266666666666667rem;
              background: url(https://img.thebeastshop.com/app/4.0/icon/sort-default.png)
                0 0 no-repeat;
              background-size: 100% 100%;
            }
          }
        }
        .nav-item:first-child {
          border-left: none;
        }
      }
      .nav-kinds.no-member {
        width: 10rem;
      }
    }
  }

  .sm-list.fixed {
    padding-top: 1.44rem;
  }
  .sm-list {
    //width: 10rem;
    overflow: auto;
    flex: 1;
    zoom: 1;
    .sm-wrap {
      display: flex;
      flex: 1;
      flex-direction: row;
      flex-wrap: wrap;
      .simple-product {
        display: flex;
        flex-direction: column;
        width: 4.4rem;
        height: 6.96rem;
        margin-left: .133333rem;
        margin-bottom: 0.906666666666667rem;
        font-size: 0.346666666666667rem;
        .product-infos {
          padding-left: 0.4rem;
          color: #000;
        }
        .product-image {
          position: relative;
          width: 100%;
          height: 5.2rem;
          margin-bottom: 0.186666666666667rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
  .cart-search {
    position: fixed;
    z-index: 3;
    left: 0.426666666666667rem;
    bottom: 1.333333333333333rem;
    width: 2.666666666666667rem;
    height: 1.12rem;
    background: url(https://img.thebeastshop.com/app/4.0/icon/icon-group.png) 0
      0 no-repeat;
    background-size: contain;
    .ct,
    .sc {
      float: left;
      width: 1.333333333333333rem;
      height: 1.12rem;
    }
  }
}
</style>


