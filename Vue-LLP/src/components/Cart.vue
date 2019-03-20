<template>
  <div id="box">
    <div class="check">
      <input type="checkbox" class="all">
      <span class="span1">全选</span>
      <span class="span2">满99免邮</span>
    </div>
    <div class="goodDetails" v-for="(item, index) in xuanlist" :key="index">
      <div class="edit-mode-btn" >
        <span class="text">删除</span>
      </div>
      <input type="checkbox" class="all" style>
      <div class="xuan">
        <img :src="item.images[0]">
        <div class="font">
          <span class="goodname">{{item.brand.name}}</span>
          <br>
          <span class="describe" style="margin:0.3em 0;">{{item.name}}</span>
          <br>
          <span class="price" style="margin: 2.5em 0px;font-size: 1.5em;">￥{{item.price}}</span>
        </div>
        <!-- <span class="num">x1</span> -->
        <div class="number">
     <button
            class="jia"
            @click="reduce(index)"
            style="width:1.5em;height:1.5em;border:none;background:rgb(239, 239, 239);"
          >-</button>
         
          <button
            class="jian"
            @click="add(index)"
            style="width:1.5em;height:1.5em;border:none;background:rgb(239, 239, 239);"
          >+</button>
        </div>
      </div>
    </div>

    <div class="bottom">
      <div class="bo">
        <div class="total">
          <span>总计：￥</span>
          <span style="font-weight:bold;"></span>
        </div>
        <div id="submit" class="disabled">
          <span class="total_num">结算()</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// export default {
// } 
//import {mapState, mapMutations,mapGetters, mapActions} from 'vuex'; 
export default{
    data(){
        return{
            goodslist:[],
            xuanlist:[]
        }
    },
 created(){
       // this.sum();  //刷新页面首先执行求和运算
        this.$axios
      .post("http://localhost:1812/cart", {
        title: "推荐"
      })
      .then(res => {
          //console.log(res);
        this.goodslist=res.data.arr;
        for(var i=0;i<this.goodslist.length;i++){
        this.xuanlist.push(this.goodslist[i]);
        }
       console.log(this.xuanlist);
      });
   },
    // computed : {
    //     ...mapState(['todolist'])  //使用对象展开运算符将state混入computed中
    // },
   // methods : {
    //    ...mapMutations(['add', 'reduce', 'delet', 'sum']), //使用对象展开运算符将mutations混入methods中
    //    this.$http
    //   .post("http://localhost:1811/cart", {
    //     title: "购物车"
    //   })

   // },
//     created() {
//     this.sum();

//     this.$http
//       .post("http://localhost:1811/cart", {
//         title: "购物车"
//       })
//     //   .then(res => {
//     //     this.goodslist=res.data.arr;
//     //    // console.log(this.goodslist.length);
//     //     for(var i=0;i<this.goodslist.length;i++){
//     //    // console.log(this.goodslist[i].data);
//     //     this.xuanlist.push(this.goodslist[i].data);
//     //     }
//     //     //console.log(this.xuanlist);
//     //   });
     
//   },
}
</script>


<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
#box {
  width: 100%;
  //  height:100em;
  max-height: 600em;
  margin: 1em auto;
  background: #fff;

  .check {
    width: 100%;
    height: 5.5em;
    position: relative;
    border-bottom: 1px solid #ccc;
    background: #fff;
    input[type="checkbox"] {
      margin-right: 24.5em;
      margin-top: 1.7em;
      cursor: pointer;
      font-size: 14px;
      width: 10px;
      height: 20px;
      position: relative;
    }

    input[type="checkbox"]:after {
      position: absolute;
      width: 15px;
      height: 20px;
      top: 0;
      content: " ";
      background-color: #fff;
      //color: #000;
      display: inline-block;
      visibility: visible;
      padding: 0px 3px;
      border-radius: 50%;
      border: 1px solid #ccc;
      line-height: 20px;
      text-align: center;
    }

    input[type="checkbox"]:checked:after {
      content: "✓";
      font-size: 12px;
      background-color: #000;
      color: #fff;
    }
    .span1 {
      font-size: 0.55rem;
      font-weight: bold;
      position: absolute;
      color: #000;
      left: 2.3em;
      line-height: 3em;
      top: 0.2em;
    }
    .span2 {
      background: #000;
      color: #fff;
      padding: 0.053333333333333rem 0.133333333333333rem;
      font-size: 0.26rem;
      right: 23.5em;
      position: absolute;
      top: 2.3em;
    }
  }
  .goodDetails {
    width: 100%;
    height: 9.8em;
    border-bottom: 1px solid #ccc;
    //background: salmon;
    position: relative;
    .edit-mode-btn {
      // position: fixed;
      position: absolute;
      width: 1.173333333333333rem;
      height: 1.173333333333333rem;
      color: #333;
      background: #fff;
      border-radius: 50% 50%;
      box-shadow: 0 0 10px #838383;
      top: 0.32rem;
      right: 0.32rem;
      opacity: 0.9;
      z-index: 5;
      font-size: 0.373333333333333rem;
      .text {
        line-height: 1.173333333333333rem;
        position: absolute;
        -webkit-transform: translateY(-50%);
        transform: translateY(-50%);
        top: 50%;
        width: 100%;
        text-align: center;
        left: 0;
      }
    }
    input[type="checkbox"] {
      margin-right: 24.5em;
      margin-top: 3.3em;
      cursor: pointer;
      font-size: 14px;
      width: 10px;
      height: 20px;
      position: relative;
    }

    input[type="checkbox"]:after {
      position: absolute;
      width: 15px;
      height: 20px;
      top: 0;
      content: " ";
      background-color: #fff;
      //color: #000;
      display: inline-block;
      visibility: visible;
      padding: 0px 3px;
      border-radius: 50%;
      border: 1px solid #ccc;
      text-align: center;
      line-height: 20px;
    }

    input[type="checkbox"]:checked:after {
      content: "✓";
      font-size: 12px;
      background-color: #000;
      color: #fff;
    }
    .xuan {
      width: 85%;
      height: 8em;
      //background: green;
      position: absolute;
      right: 1em;
      top: 1em;
      img {
          width: 2.266666666666667rem;
    height: 2.373333333333334rem;
        margin-right: 21em;
        margin-top: -0.5em;
      }
      .font {
        width: 40%;
        height: 100%;
        // border: 1px solid red;
        float: right;
        margin-top: -8.5em;
        margin-right: 8em;
        position: relative;
        span {
          position: absolute;
          left: 0;
          font-size: 1.25em;
        }
      }
      .num {
        position: absolute;
        float: right;
        right: 1em;
        top: 5em;
        font-size: 1.3em;
      }
      .number {
        position: absolute;
        right: 0;
        bottom: 0.2em;
        font-weight: bold;
      }
    }
  }
  .bottom {
    width: 100%;
    height: 4em;
    background: #fff;
    border-bottom: 1px solid #ccc;
    height: 5.5em;
    .bo {
      width: 20em;
      height: 5.5em;
      //border: 1px solid red;
      float: right;
      .total {
        float: left;
        background: #fff;
        margin: 1.7em 0;
        span {
          font-size: 1.5em;
        }
      }
      .disabled {
        background: #000;
        color: #fff;
        width: 11em;
        height: 4em;
        float: right;
        border-radius: 0.2em;
        margin-top: 0.7em;
        margin-right: 0.8em;
        line-height: 4em;
        span {
          font-size: 1.5em;
        }
      }
    }
  }
}
</style>


