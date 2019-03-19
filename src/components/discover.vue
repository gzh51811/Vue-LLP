<template>
    <div>
<van-tabs  v-model="active" swipeable>
  <van-tab  line-height="2rem" v-for="index in 3" :title="'选项 ' + index" :key="index">
    内容 {{ index }}
  </van-tab>
</van-tabs>
    </div>
</template>
<script>
import Vue from "vue";
import { Tab, Tabs } from "vant";

Vue.use(Tab).use(Tabs);
export default {
  data() {
    return {
      active: 2
    };
  }
};
</script>
<style lang="scss" scoped>
.van-tab__pane{
    height: 5rem;
}
</style>

