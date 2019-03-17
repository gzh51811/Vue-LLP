<template>
    <div>
        <div class="conten">
            <div class="login-head">
                <img :src="logimg" alt="">
                <p></p>
            </div>
        </div>
    </div>
</template>
<script>
// import Vue from "vue";
export default {
  data() {
    return {
      logimg: require("../assets/loginimg.png")
    };
  }
};
</script>
<style lang="scss" scoped>
.conten {
  overflow: hidden;
  padding: 0.293333rem 0.4rem 0 0.4rem;
  .login-head {
    height: 1.773333rem;
    padding-bottom: 0.533333rem;
  }
}
</style>
