<template>
    <div>
        <div class="me">
          <div class="m1">
            <a href="javascript:;">{{user}}</a>
          </div>
           <div class="m1">
            <a href="javascript:;" @click="quit">退出登陆</a>
          </div>
          <div class="m2">
            <a href="">我的订单</a>
            <a href="">优惠卡券</a>
            <a href="">我的收藏</a>
            <a href="javascript:;" @click="gotocart">我的购物车</a>
            <a href="">积分<span>0</span></a>
            <a href="">积分兑换特权</a>
          </div>
          <div class="m3">
            <p>个人资料</p>
            <p>电话客服 400-9200-108</p>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
      user: localStorage.getItem("username")
    };
  },
  methods: {
    quit() {
      this.$message({
        message: "退出成功",
        type: "success"
      });
      setTimeout(() => {
        localStorage.removeItem("username");
        this.$router.push("/home");
      }, 1000);
    },
    gotocart() {
      this.$router.push("/cart");
    }
  }
};
</script>
<style lang="scss" scoped>
.me {
  height: 10.666667rem;
  padding: 0.666667rem;
  .m1 {
    height: 1.333333rem;
    a {
      color: black;
      font-size: 0.373333rem;
      font-weight: bold;
    }
  }
  .m2 {
    height: 528px;
    padding-bottom: 0.426667rem;
    a {
      font-size: 0.506667rem;
      height: 1.173333rem;
      display: block;
      color: black;
      font-weight: bold;
      span {
        color: chocolate;
      }
    }
  }
  .m3 {
    height: 1.813333rem;
    p {
      margin-top: 0.133333rem;
      font-size: 0.4rem;
    }
  }
}
</style>

