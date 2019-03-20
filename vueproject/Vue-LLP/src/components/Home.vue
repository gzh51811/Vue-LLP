<template>
    <div>
       <div class="bigtop">
            <!-- 顶部 -->
        <div class="sou">
            <van-icon @click="sou" name="search" color= "rgba(0, 0, 0, 1)" size=".653333rem" style=" margin: 8px 0 0 8px"/>
            <van-icon @click="gotocart" name="shopping-cart-o" color= "rgba(0, 0, 0, 1)" size=".653333rem" style="float: right; margin: 8px 8px 0 0;"/>
        </div>
        <!-- 手动轮播 -->
        <van-swipe @change="onChange" class="van_s">
        <van-swipe-item v-for="(item,idx) in imgs" :key="idx">
            <img class="Img" :src="item" alt="">
        </van-swipe-item>
        </van-swipe>
        <!-- 图片加载数量 -->
       <div  class="custom-indicator" slot="indicator">
         <span>{{ current + 1 }}</span>/4
       </div>
       </div>
       <!-- NEW ARRIVAL -->
       <div class="arrival">
           <div class="a_title">NEW ARRIVAL</div>
           <div class="a_content">
               <div class="a_con">
                   <div class="aitems">
                       <div class="a_item" @click="gotogoods(aitem.id)" v-for="(aitem) in listgoods"  :key="aitem.id">
                       <img :src="aitem.featureImage" alt="">
                       <p>{{aitem.name}}</p>
                      </div>
                   </div>
               </div>
           </div>
       </div>
       <!-- 新人券 -->
       <div class="ticket">
           <img :src="ticket_img" alt="">
       </div>
       <!-- 中部重复部分 -->
       <div class="cilten">
           <div class="cilten_item" v-for="(item,idx) in cilcen" :key="idx">
               <img :src="item.cimgs" alt="">
               <div class="cil_fol">
                   <span></span>
                   <p>{{item.title1}}</p>
                   <p>{{item.title2}}</p>
               </div>
           </div>
       </div>
       <!-- 品牌 -->
       <div class="brand"><img v-for="(item,idx) in brandimg" :src="item" alt="" :key="idx"></div>
       <!-- 底部 -->
       <div class="foot">
           <img :src="fotimg" alt="">
       </div>
     </div>
</template>
<script>
import Vue from "vue";
import "vant/lib/index.css";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe).use(SwipeItem);
import { Icon } from "vant";
Vue.use(Icon);

export default {
  data() {
    return {
      current: 0,
      imgs: [
        require("../assets/banrun/75c01fba8aa30d0c6e20d314aa3707f7.jpg"),
        require("../assets/banrun/235477e9e1a05bdc55ebf7b88b026f84.jpg"),
        require("../assets/banrun/b19c2bc0796cdbe30ec56a0625c9635d.jpg"),
        require("../assets/banrun/c534a78bfdcc088284f3cacedf17c851.jpg")
      ],
      ticket_img: require("../assets/69c1c3a193c7b53d0b0de1b97561b717.jpg"),
      cilcen: [
        {
          title1: "把春日种在家中",
          title2: "春日单品点亮你的心情",
          cimgs: require("../assets/b25171803c05e40bfe37e148e08f7054.jpg@0o_0l_750w_90q.jpg")
        },
        {
          title1: "白色情人节你敢白白收礼？",
          title2: "回送女生这些就对了",
          cimgs: require("../assets/2a87be3f367581ac12efbc6daf419b28.jpg@0o_0l_750w_90q.jpg")
        },
        {
          title1: "TUBE SHOWROOM X STAFFONLY",
          title2: "轻松居家服 在家悠闲躺",
          cimgs: require("../assets/e76e79355c99fc85da2b4ebec2f6cb9a.jpg@0o_0l_750w_90q.jpg")
        },
        {
          cimgs: require("../assets/973e3a4a033b45b8d62bf80f6bf8927e.jpg@90q.jpg")
        },
        {
          title1: "成双成对才登对",
          title2: "情侣款的高阶演绎",
          cimgs: require("../assets/322c7511079e954c81751307b1c8f294.jpg@0o_0l_750w_90q.jpg")
        },
        {
          title1: "让肌肤天天泡温泉",
          title2: "OMOROVICZA皇后醒肤限定礼盒",
          cimgs: require("../assets/31de0f4d580f699aff26b57a209c01f0.jpg@0o_0l_750w_90q.jpg")
        },
        {
          title1: "定制心意",
          title2: "送TA独一无二的爱意",
          cimgs: require("../assets/b17778a9e7c0572b8a60b15380cb1037.jpg@0o_0l_750w_90q.jpg")
        },
        {
          cimgs: require("../assets/2bb7967fdf9625b7e90cd29e0140521d.jpg@0o_0l_750w_90q.jpg")
        },
        {
          title1: "你看着很好吃",
          title2: "做一个水果系小可爱",
          cimgs: require("../assets/84f89d0dfb5f49683286e10209156f4a.jpg@0o_0l_750w_90q.jpg")
        },
        {
          title1: "CHARLOTTE TILBURY",
          title2: "那支口红像她刚被吻过的唇",
          cimgs: require("../assets/6747221e397cae10d73f838ddc755e42.jpg@0o_0l_750w_90q.jpg")
        },
        {
          cimgs: require("../assets/6bd750b8afe41abd1f9a715cd8bca451.gif")
        },
        {
          title1: "让生活即刻“闪亮”",
          title2: "限时打折 3.11-3.24",
          cimgs: require("../assets/1e95f8c899655e1669d34aceec8f991c.png@0o_0l_750w_90q.png")
        },
        {
          title1: "双鱼座礼物",
          title2: "给爱幻想的双鱼梦幻暴击",
          cimgs: require("../assets/90a9f374832eacd99c3cf8d3b55e6b58.jpg@0o_0l_750w_90q.jpg")
        },
        {
          title1: "一本正经的Emoji月亮脸首饰盒",
          title2: "把你的首饰晒在月光下",
          cimgs: require("../assets/10ee6be7b1e301fe53d1751df7ad9974.jpg@0o_0l_750w_90q.jpg")
        },
        {
          title1: "切蛋糕的重要时刻必须更上镜！",
          title2: "蛋糕托盘与它的朋友们",
          cimgs: require("../assets/b5ea18b816ad42b936bfd04e0563241f.jpg@0o_0l_750w_90q.jpg")
        }
      ],
      brandimg: [
        require("../assets/a85e112ad2ba8ee9bac717a8105b5a06.png@0o_0l_750w_90q.png"),
        require("../assets/f8f32144285e94d02be39fb2965f79fd.png@0o_0l_750w_90q.png"),
        require("../assets/2bc72fb3ce0a07b4f2d8f3b54fc62c9f.png@0o_0l_750w_90q.png"),
        require("../assets/d28857f4c67c79785bbc6820471f600e.png@0o_0l_750w_90q.png"),
        require("../assets/d7275cf4bcfc62a5fab460ecd5c68a19.jpg@0o_0l_750w_90q.jpg"),
        require("../assets/c9e8398df7d9be8d5c07a93554e35b4f.jpg@0o_0l_750w_90q.jpg")
      ],
      fotimg: require("../assets/19b3af48d4f1fe9f4eb85ad4a1f9bc30.jpg@0o_0l_750w_90q.jpg"),
      listgoods:{}
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    sou() {
      this.$router.push("/xuan");
    },
    gotocart() {
      this.$router.push("/cart");
    }
    ,
    gotogoods(id){
      this.$router.push({name:'Goods',query:{id},params:{id}});
    }
  },
  created(){
    this.$axios.post("http://localhost:1812/order_list4",{
       title: "推荐"
    })
     .then(res => {
        this.listgoods=res.data.arr;
    });
  }

};
</script>
<style lang="scss" scoped>
.bigtop {
  overflow: hidden;
  position: relative;
}
.sou {
  height: 1.066667rem;
  position: absolute;
  width: 100%;
  z-index: 1;
}
.van_s {
  height: 13.333333rem;
  .van-swipe-item {
    width: 100%;
    height: 100%;
    .Img {
      width: 100%;
      height: 100%;
    }
  }
}
.custom-indicator {
  position: relative;
  top: -90px;
  right: -86%;
  width: 80px;
  color: #fff;
  font-weight: bold;
  span{
    font-size: .6rem;
  }
}
.arrival {
  height: 4.853333rem;
  padding: 0.333333rem 0 0.746667rem 0;
  .a_title {
    height: 0.733333rem;
    color: black;
    font-size: 0.64rem;
    margin-bottom: 0.32rem;
    text-align: center;
  }
  .a_content {
    width: 100%;
    height: 3.8rem;
    overflow: hidden;
    .a_con {
      width: 100%;
      height: 100%;
      -webkit-overflow-scrolling: touch;
      overflow-x: scroll;
      overflow-y: hidden;
      text-align: center;
      .aitems {
        display: inline-block;
        white-space: nowrap;
        text-align: center;
        .a_item {
          display: inline-block;
          width: 3.8rem;
          margin-right: 0.053333333333333rem;
          overflow: hidden;
          img {
            width: 3.333333rem;
            height: 3.066667rem;
          }
        }
      }
    }
  }
}
.ticket {
  height: 2.96rem;
  img {
    width: 100%;
    height: 100%;
  }
}
.cilten {
  overflow: hidden;
  .cilten_item {
    position: relative;
    overflow: hidden;
    max-height: 13.333333rem;
    height: 10rem;
    width: 100%;
    box-sizing: border-box;
    img {
      width: 100%;
    }
    .cil_fol {
      padding: 0.453333rem 0 0 0.533333rem;
      height: 1.213333rem;
      width: 9.466667rem;
      position: absolute;
      z-index: 2;
      top: 0;
      p {
        font-size: 0.4rem;
        color: #fff;
        font-weight: bold;
      }
      span {
        width: 0.266667rem;
        height: 0.4rem;
        background: #fff;
        display: inline-block;
        position: absolute;
        top: 40px;
        left: 0;
      }
    }
  }
}
.brand {
  overflow: hidden;
  img {
    width: 100%;
  }
}
.foot {
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
  }
}
</style>


