<template>
    <div id="app-login">
      <div id="HUI_Header">
          <h1>用户登录</h1>
          <div id="HUI_Back" style="color: #333333;" @click="goback"></div>
      </div>
      <div class="HUI_Wrap" style="background:#FFFFFF; padding-bottom:18px;margin-top: 2rem;">
          <div class="HUI_Inputs" id="form1" style="padding-top:28px;">
              <div class="HUI_Input">
                  <label>用&nbsp;&nbsp;户&nbsp;&nbsp;名</label>
                  <input type="text" class="HUI_Input_Clear" v-model="username" id="email" checkType="string" checkData="5,20" checkMsg="邮箱应该为 5-20个字符" />
              </div>
              <div class="HUI_Input" style="margin-top: 3rem;">
                  <label>登陆密码</label>
                  <input type="password" class="HUI_Input_Pwd" id="pwd" v-model="password" checkType="string" checkData="6,20" checkMsg="密码应该为 6-20个字符" />
              </div>
              <div class="HUI_Input" style="margin-top: 0rem;">
                  <input type="text" class="HUI_Input_Pwd" v-model="error"  disabled/>
              </div>
          </div>
          <div  style="width: 100%;margin: 0 auto;">
            <div style="width: 90%;margin: 1.5rem auto 0;">
                <router-link to="/reg" style="width: 40%;margin-left: 10%;" class="HUI_Button HUI_FR" tag="button">立即注册</router-link>
                <!-- <button class="HUI_Button HUI_FR" onclick="register();" style="width: 40%;margin-left: 10%;">立即注册</> -->
                <button class="HUI_Button HUI_FR" style="width: 40%;margin-right: 10%;" @click="login">登陆</button>
            </div>
          </div>
          <div>
            <a href="#" style="display: block;text-align: center;margin-top: 2rem;">忘记密码？</a>
          </div>
      </div>
    </div>
</template>
<script>
// import store from '../store'
import {mapActions} from 'vuex'
import * as types from '../store/types.js'
export default {
    data(){
      return {
        username:'',
        password:'',
        error:''
      }
    },
    methods:{
        goback(){
        this.$router.go(-1)
        },
        login(){
          console.log(this.$store)
          this.$store.dispatch(
            types.CHECK_USER,
            {username:this.username,password:this.password}
          ).then(
            // res=>console.log('login回执',res)
            res=> res.auth ? this.$router.push('/user') : this.error=res.msg
          )
       }
    }
}
</script>
<style>
    
  </style>