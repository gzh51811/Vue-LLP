<template>
    <div>
      <!-- 没登陆前 -->
        <div class="conten">
            <div class="login-head">
                <img :src="logimg" alt="">
                <p>亲爱的居民，欢迎回来</p>
            </div>
        </div>
        <div class="input">
            <van-tabs>
              <van-tab title="登陆">
          <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm">
              <el-form-item prop="username">
                <input type="text" v-model="ruleForm.username" placeholder="请输入邮箱账号">
              </el-form-item>
              <el-form-item prop="password">
                <input type="password" v-model="ruleForm.password" placeholder="请输入密码">
              </el-form-item>
              <el-form-item>
                <input class="btn" type="button" value="登陆" v-loading.fullscreen.lock="fullscreenLoading"  @click="login">
              </el-form-item>
          </el-form>
              <div class="register">
                  <p>还不是居民? <a href="">去注册></a></p>
              </div>
             </van-tab>

              <van-tab title="注册">
                 <el-form
                    :model="ruleForm2"
                    :rules="rules"
                    ref="ruleForm2"
                    class="demo-ruleForm">
                    <el-form-item prop="username">
                      <input type="text" v-model="ruleForm2.username" placeholder="请输入邮箱账号">
                    </el-form-item>
                    <el-form-item prop="password">
                      <input type="password" v-model="ruleForm2.password" placeholder="请输入密码">
                    </el-form-item>
                    <el-form-item prop="checkPass">
                      <input type="password" v-model="ruleForm2.checkPass" placeholder="请确认密码">
                    </el-form-item>
                </el-form>
                     <input class="btn" type="button" value="注册" v-loading.fullscreen.lock="fullscreenLoading"  @click="register">
              </van-tab>
            </van-tabs>
            
        </div>
      

        <!--  -->
    </div>
</template>
<script>
import Vue from "vue";
import { Field } from "vant";
Vue.use(Field);
import { Tab, Tabs } from "vant";
Vue.use(Tab).use(Tabs);

export default {
  data() {
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      fullscreenLoading: false,
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      ruleForm2: {
        username: "",
        password: "",
        checkPass: ""
      },

      rules: {
        username: [
          {
            type: "email",
            required: true,
            message: "请输入正确邮箱账号",
            trigger: "blur"
          },
          { min: 3, max: 15, message: "长度在 3 到 15 个字符", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        checkPass: [
          {
            required: true,
            validator: validatePass2,
            message: "确认密码是否一致",
            trigger: "blur"
          }
        ]
      },
      logimg: require("../assets/loginimg.png"),
      active: 0
    };
  },
  methods: {
    // openFullScreen() {

    //   },
    login() {
      this.$refs.ruleForm.validate(valid => {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
        if (valid) {
          //注意使用axios之前 下载并挂再原型上，方便在每个页面上使用使用this.$axios
          this.$axios
            .post("http://localhost:1817/login", {
              //请求路径 方式post
              params: {
                //请求参数
                emil: this.ruleForm.username,
                password: this.ruleForm.password
              }
            })
            .then(res => {
              //成功返回
              if (res.data.code != 100) {
                // 保存用户名密
                localStorage.setItem("username", res.data.emil);
                this.$router.push("/home");
                if (this.$route.params.from) {
                  this.$router.push(this.$route.params.from);
                } else {
                  this.$router.push("/home");
                }
              } else {
                alert("登陆失败");
              }
            });
        }
      });
    },
    register() {
      this.$refs.ruleForm2.validate(valid => {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
        if (valid) {
          this.$axios
            .post("http://localhost:1817/registry", {
              //请求路径 方式post
              params: {
                //请求参数
                emil: this.ruleForm2.username,
                password: this.ruleForm2.password
              }
            })
            .then(res => {
              //成功返回
              if (res.data == "no") {
                // 保存用户名密
                alert("邮箱已被占用，请重新输入");
              } else {
                var prom = res.config.data;
                var pr = JSON.parse(prom);
                localStorage.setItem("username", pr.params.emil);
                this.$router.push("/home");
                if (this.$route.params.from) {
                  this.$router.push(this.$route.params.from);
                } else {
                  this.$router.push("/home");
                }
              }
            });
        }
      });
    }
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
    text-align: center;
    img {
      width: 3.2rem;
    }
    p {
      font-size: 0.373333rem;
    }
  }
}
.input {
  padding: 0.293333rem 0.4rem 0 0.4rem;
  height: 10.806667rem;
  input {
    padding: 0.266667rem 0.133333rem 0.266667rem 0.133333rem !important;
    height: 1.333333rem !important;
    width: 100%;
    box-sizing: border-box !important;
    margin-top: 0.633333rem !important;
    margin-bottom: 0.666667rem !important;
    font-size: 0.346667rem !important;
  }
  .btn {
    background: chocolate;
    border: none;
    font-size: 0.373333rem;
    color: #fff;
  }
}

.register {
  position: absolute;
  font-size: 0.346667rem;
  right: 0.466667rem;
  a {
    color: black;
  }
}
</style>
