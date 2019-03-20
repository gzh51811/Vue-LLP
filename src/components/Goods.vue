<template>
    <div class="goodimg">
        <i class="star"><img src="../img/star.png"></i>
        <div class="lookimg">
          <img :src="goodsinfo[0].images[0]">
        </div>
         <div class="font-1">{{goodsinfo[0].brand.name}}</div>
        <div class="font-2">{{goodsinfo[0].name}}</div>
        <div class="font-3">{{goodsinfo[0].price}}</div>
        <ul class="note">
          <li>
            <span class="huangou">换购</span>
            <span class="neirong">莫奈拎袋加价购</span>
          </li>
          <li>
              <span class="huangou">换购</span>
             <span class="neirong">线上订单换购莫奈拎袋（中号） </span>
          </li>
          <li>
              <span class="huangou">换购</span>
             <span class="neirong">线上订单换购莫奈拎袋（大号）</span>
          </li>
          <li>
              <span class="huangou">换购</span>
             <span class="neirong">9.9换购 TBH中号购物袋</span>
          </li>
          <li>
              <span class="huangou">换购</span>
             <span class="neirong">￥59换购 - 保湿面膜5片</span>
          </li>
        </ul>
        <div class="true">正品保证&nbsp;&nbsp;-&nbsp;&nbsp;品牌授权</div>
        <div class="details">
          <h2>商品详情</h2>
          <p>比利时创意工匠Helen Blanchaert创造了一系列怪趣的角色、动物和字符，并把他们装饰到了各种瓷器、服饰、布艺品等家居用品上，再日常不过的物件因为可爱的手绘变得生趣盎然。</p>
        </div>
        <div class="menuu">
            <section id="conter">
            <section id="help-left">
            <details class="menu" open>
            <summary>规格参数</summary>
            <ul>
            <li>产地: 立陶宛</li>
            <li>材质: 100%羊毛</li>
            <li>颜色: 白色</li>
            <li>尺寸: 130x170cm</li>
            </ul>
            </details>
            <details class="menu" open>
             <summary>品牌故事</summary>
            <ul>
            <li>helenb是Helen Blanchaert的缩写。她是一个非常具有创意的工匠。思维活跃的她喜欢创造各式各样的东西。就像她的手绘画那样，包含了一系列奇怪而又可爱的角色、小动物、奇珍异兽或是生动的字符。这些形象在她的画板上被赋予了生命，然后被装饰上了她的各种瓷器、服饰以及文具上。</li>
            <li class="go" style="width:10em;height:2em;border:3em soild #000;font-size:1em;color:#000;margin:2em 10em;text-align:center;"><a>去HELEN B主页</a></li>
            </ul>
            </details>
            <details class="menu" open>
             <summary>运输说明</summary>
            <ul>
            <li>普通商品均由上海仓统一出库，付款后24小时内发货，预售或定制商品请参考页面预售发货时间，送达时效以快递公司实际配送为准，详情可以登录官网或者APP查询物流进度。特别提醒：法定节假日店休不发货，如遇店铺大型活动，发货时效稍有延后，具体可咨询在线客服。鲜花由上海仓统一使用联邦快递进行配送（部分特殊产品会由门店配送）。具体配送时间以联邦快递实际配送为准，详情可以登录官网或者APP查询物流进度。</li>
            </ul>
            </details>
            <details class="menu" open>
              <summary>退换货说明</summary>
            <ul>
            <li>普通商品如有质量问题，请在签收后7日内联系客服。鲜花、永生花及高级珠宝产品不接受7天无理由退换货，如有质量问题，请在签收后24小时内联系客服。</li>
            </ul>
            </details>
            </section>
            <section id="help-right"></section>
            </section>

          
        </div>
  
       <div class="bottom">
           <div class="minicart" @click=" gotocart() "></div>
           <div class="btn-buy">立即购买</div>
           <div class="btn-cart" @click="gocart()">加入购物车</div>
      </div>   
    </div>

</template>


<script>
import "../css/element-ui.css";
export default {
    data(){
        return {
            info:{},
            goodsinfo:{}
        }
    },
    watch:{
        $route(to,from){
            console.log('watch:',to,from)
            this.getData()
        }
    },
    methods:{
       gotocart() {
      // console.log(this);
      //$router.push方法切换组件页面
      this.$router.push({ name: "Cart" });
        },
        gocart(){
        let {images,brand,name,price} = this.goodsinfo[0];
       // console.log({images,brand,name,price});
       // console.log(this.goodsinfo[0].name);
        //let {id:goods_id} = this.$route.params;
        let {id:item_id} = this.$route.params;
            console.log(item_id)
           this.$axios
          .post("http://localhost:1812/addcart", {
           id: item_id,
           images:images,
           brand:brand,
           name:name,
           price:price
           })
          .then(res => {
         // console.log(res);
          // this.goodsinfo = res.data.arr;
          //console.log( this.goodsinfo );
        });
        },
        async getData(){
            // 如何获取id
            let {id:item_id} = this.$route.params;
            console.log(item_id)
           this.$axios
          .post("http://localhost:1812/goods", {
           id: item_id
           })
      .then(res => {
          //console.log(res);
          this.goodsinfo = res.data.arr;
          //console.log( this.goodsinfo );
      });    
        },
      
    },
    mounted(){
        this.getData()
        //console.log(this.$store.state.cartlist)
        // this.$store.dispatch('getRecommend',10);
    },
    destroyed(){
        console.log('destroyed');

        clearInterval(this.timer)
    }
}
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
body {
  position: relative;
}
a {
  text-decoration: none;
}
li {
  list-style: none;
}

.goodimg {
 width: 100%;
  height: 220em;
  max-height: 800em;

  position: relative;
  left: 0;
}
.star {
  z-index: 999;
}
.star img {
  position: absolute;
  right: -0.5rem;
  top: 0.5rem;
  width: 0.6rem;
  height: 0.6rem;
}
.lookimg {
  width: 10rem;
  height: 10.4rem;
}
.lookimg img {
  width: 10rem;
  height: 10.4rem;
}
.font-1 {
  font-size: 0.373333333333333rem;
  position: absolute;
  left: 1.5em;
  margin-top: 2em;
}
.font-2 {
  font-size: 0.533333333333333rem;
  font-weight: 700;
  position: absolute;
  left: 1em;
  margin-top: 2.3em;
}
.font-3 {
  font-size: 0.64rem;
  font-weight: 700;
  position: absolute;
  left: 0.7em;
  margin-top: 2.8em;
}
.note {
  width: 28em;
  max-height: 15em;
  border-top: 1px solid #e1e1e1;
  border-bottom: 1px solid #e1e1e1;
  /* position: absolute; */
  margin-top: 10em;
  margin-left: 2em;
}
.note li {
  /* border: 1px solid; */
  text-align: left;
  margin-top: 0.5em;
  margin-bottom: 0.7em;
}
.note .huangou {
  display: inline-block;
  margin-right: 0.133333333333333rem;
  height: 0.453333333333333rem;
  padding: 0 0.106666666666667rem;
  line-height: 0.453333333333333rem;
  text-align: center;
  color: #fff;
  background: #000;
  font-size: 0.266666666666667rem;
}
.note .neirong {
  font-size: 0.373333333333333rem;
}
.true {
  width: 22em;
  height: 3.5em;
  line-height: 3em;
  /* border-top: 1px solid #e1e1e1; */
  border-bottom: 1px solid #e1e1e1;
  text-align: left;
  margin-top: 1em;
  margin-left: 1.5em;
  font-size: 0.373333333333333rem;
}
.details {
  width: 23em;
  height: 15em;
  border-bottom: 1px solid #e1e1e1;
  text-align: left;
  margin-top: 1em;
  margin-left: 1.5em;
  font-size: 0.373333333333333rem;
}
.details h2 {
  color: #dd4f14;
}
.details p {
  line-height: 2;
  margin-top: 1em;
  font-size: 0.373333333333333rem;
}
.menuu {
  width: 29.4em;
  /* height: 70em; */
  max-height: 200em;
  /* border-bottom: 1px solid #e1e1e1; */
  margin-top: 1em;
  margin-left: 2em;
  background: sandybrown;
}
.me-1 {
  margin: 0 0.4rem;
  padding: 0.48rem 0;
  border-bottom: 1px solid #e1e1e1;
  max-height: 10em;
}

#conter {
  width: 1000px;
  margin: auto;
}
#help-left {
  /* width: 200px; */
  width: 20em;
  max-height: 500em;
  font-family: "microsoft YaHei";
  float: left;
}
.menu summary {
  height: 4em;
  width: 20em;
  line-height: 4em;
  text-align: left;
  /* outline: none; */
  font-size: 0.4rem;
  font-weight: 700;
  /* border-top: 1px solid #ddd; */
  background: rgb(245, 194, 194);
  cursor: pointer;
  position: relative;
  margin-left: 0.5em;
}

.menu summary::-webkit-details-marker {
  display: none;
}

/*可用图片或字符,如果使用图片，请把content的值设置成空字符*/
.menu summary:after {
  position: absolute;
  content: "﹀";
  display: inline-block;
  width: 16px;
  height: 16px;
  /* margin-left:10em; */
  right: 1em;
  font-size: 18px;
  font-weight: 700;
}
.menu[open] summary:after {
  content: "︿";
}
.menu ul {
  padding: 10px 0;
}

.menu ul li {
  list-style: none;
  /* text-indent: 25px; */
  font-size: 1.4em;
  max-height: 50em;
  width: 15em;
  line-height: 2em;
  margin-left: 2em;
  text-align: left;
}

.menu ul li a {
  display: block;
}
.menu ul li a:hover {
  text-decoration: underline;
  cursor: pointer;
}
.go {
  border: 2px solid #000;
}

.bottom {
  width: 100%;
  height: 6em;
  background: #fff;
  position: absolute;
  bottom: 0;
  margin: auto;
  position: fixed;
  border-top: 1px solid #e1e1e1;
}
.minicart {
  position: absolute;
  z-index: 1000;
  top: 0.56rem;
  left: 0.56rem;
  width: 0.586666666666667rem;
  height: 0.586666666666667rem;
  background: url(../img/mini-cart.png) 100% 100%;
  background-size: cover;
}
.btn-buy {
  display: inline-block;
  width: 3.093333333333333rem;
  height: 1.12rem;
  font-size: 0.4rem;
  text-align: center;
  line-height: 1.12rem;
  border: 1px solid #000;
  border-radius: 0.053333333333333rem;
  background: #fff;
  color: #000;
  cursor: pointer;
margin-left: 7.2em;
}
.btn-cart {
  background: #000;
  color: #fff;
  display: inline-block;
  width: 3.093333333333333rem;
  height: 1.12rem;
margin-left: 0.7em;
  font-size: 0.4rem;
  text-align: center;
  line-height: 1.12rem;
  border: 1px solid #000;
  border-radius: 0.053333333333333rem;
  cursor: pointer;
 margin-top:0.8em;
}
</style>
