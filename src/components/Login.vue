<template>
<<<<<<< HEAD
    <div>
<<<<<<< HEAD
<<<<<<< HEAD
        <div class="conten">
            <div class="login-head">
                <img :src="logimg" alt="">
                <p></p>
            </div>
        </div>
    </div>
=======
    <div>登陆</div>
>>>>>>> b7dc83a0fc70974cc955fc19e333d9bd6df81ea3
</template>
<script>
export default {
<<<<<<< HEAD
  data() {
    return {
      logimg: require("../assets/loginimg.png")
    };
=======
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
                    <el-form-item prop="picVerification">
                          <input type="text" placeholder="请输入验证码"  class="verification_input" v-model="picVerification" /> 
                          <input type="button" @click="createdCode" class="verification" v-model="checkCode" /> 
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
=======
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
                    <el-form-item prop="picVerification">
                          <input type="text" placeholder="请输入验证码"  class="verification_input" v-model="picVerification" /> 
                          <input type="button" @click="createdCode" class="verification" v-model="checkCode" /> 
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
>>>>>>> fenzhi2
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
      code: "",
      checkCode: "",
      picVerification: "",
      fullscreenLoading: false,
      ruleForm: {
        username: "",
        password: "",
        checkPass: ""
      },
      ruleForm2: {
        username: "",
        password: "",
        checkPass: "",
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
   created(){
    this.createdCode()
  },
  methods: {
    createdCode(){
      // 先清空验证码输入
      this.code = ""
      this.checkCode = ""
      this.picVerification = ""
      // 验证码长度
      const codeLength = 4
      // 随机数
      const random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','z','x','c','v','b','n','m','a','s','d','f','g','h','j','k','l','q','w','e','r','t','y','u','i','o','p')
      for(let i = 0;i < codeLength;i++){
        // 取得随机数的索引(0~35)
        let index = Math.floor(Math.random() * 62)
        // 根据索引取得随机数加到code上
        this.code += random[index]
      }
      // 把code值赋给验证码
      this.checkCode = this.code
      // console.log(this.checkCode);
    },
    login() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
          }, 2000);
          //注意使用axios之前 下载并挂再原型上，方便在每个页面上使用使用this.$axios
          this.$axios.post("http://localhost:1817/login", {
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
                 this.$message.error('登陆失败，请重新输入');
              }
            });
        }
      });
    },
    register() {
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          if(this.checkCode==this.picVerification){
          this.fullscreenLoading = true;
          setTimeout(() => {
            this.fullscreenLoading = false;
          }, 2000);
          this.$axios.post("http://localhost:1817/registry", {
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
                 this.$message.error('邮箱已被占用，请重新输入');
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
          else {
            this.$message.error('验证码有误请重新输入');
          }
        }
      });
    }
<<<<<<< HEAD
>>>>>>> fenzhi2
=======
>>>>>>> fenzhi2
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
<<<<<<< HEAD
<<<<<<< HEAD
  }
}
=======
=======
>>>>>>> fenzhi2
    text-align: center;
    img {
      width: 3.2rem;
    }
    p {
      font-size: 0.373333rem;
    }
  }
<<<<<<< HEAD
}
.input {
  padding: 0.293333rem 0.4rem 0 0.4rem;
  // height: 10.806667rem;
  height: 14.806667rem;
  input {
    padding: 0.266667rem 0.233333rem 0.266667rem 0.233333rem !important;
    height: 1.333333rem !important;
    width: 100%;
    box-sizing: border-box !important;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem !important;
    font-size: 0.346667rem !important;
    border: 0.013333rem solid #ccc !important;
  }
  .btn {
    margin-top: 1.5rem;
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
.verification_input{
  font-family: 'Exo 2',sans-serif;
  border: 1px solid #fff;
  color: black;
  outline: none;
  border-radius: 12px;
  letter-spacing: 1px;
  font-size: 17px;
  font-weight: normal;
  background-color: #fff;
  padding: 5px 0 5px 10px;
  height: 30px;
  margin-top: 25px;
  border: 1px solid #e6e6e6;
  width: 4.5rem !important;
}
.verification{
  border-radius: 12px;
  width: 3rem !important;
  letter-spacing: 5px;
  height: 40px;
  margin-left: 1.7rem;
  transform: translate(-15px,0);
}
.captcha{
  height:50px;
  text-align: justify;
}
>>>>>>> fenzhi2
=======
}
.input {
  padding: 0.293333rem 0.4rem 0 0.4rem;
  // height: 10.806667rem;
  height: 14.806667rem;
  input {
    padding: 0.266667rem 0.233333rem 0.266667rem 0.233333rem !important;
    height: 1.333333rem !important;
    width: 100%;
    box-sizing: border-box !important;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem !important;
    font-size: 0.346667rem !important;
    border: 0.013333rem solid #ccc !important;
  }
  .btn {
    margin-top: 1.5rem;
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
.verification_input{
  font-family: 'Exo 2',sans-serif;
  border: 1px solid #fff;
  color: black;
  outline: none;
  border-radius: 12px;
  letter-spacing: 1px;
  font-size: 17px;
  font-weight: normal;
  background-color: #fff;
  padding: 5px 0 5px 10px;
  height: 30px;
  margin-top: 25px;
  border: 1px solid #e6e6e6;
  width: 4.5rem !important;
}
.verification{
  border-radius: 12px;
  width: 3rem !important;
  letter-spacing: 5px;
  height: 40px;
  margin-left: 1.7rem;
  transform: translate(-15px,0);
}
.captcha{
  height:50px;
  text-align: justify;
=======
    
>>>>>>> b7dc83a0fc70974cc955fc19e333d9bd6df81ea3
}
</script>