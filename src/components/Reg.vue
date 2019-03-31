<template>
<div>
  <div id="HUI_Header">
      <h1>用户注册</h1>
      <div id="HUI_Back" style="color: #333333;" @click="goback"></div>
  </div>
  <div class="HUI_Wrap" style="background:#FFFFFF; padding-bottom:18px;margin-top: 2rem;">
      <div class="HUI_Inputs" id="form1" style="padding-top:28px;">
        <div class="HUI_Input">
              <label>用&nbsp;&nbsp;户&nbsp;&nbsp;名</label>
              <input type="text" class="HUI_Input_Clear" v-model="username" id="username" checkType="string" checkData="5,20" checkMsg="用户名应该为 5-20个字符" />
          </div>
          <div class="HUI_Input"  style="margin-top: 3rem;">
              <label>昵&nbsp;&nbsp;&nbsp;&nbsp;称</label>
              <input type="text" class="HUI_Input_Clear" v-model="nikename" id="email" checkType="string" checkData="5,20" checkMsg="用户名应该为 5-20个字符" />
          </div>
          <div class="HUI_Input" style="margin-top: 3rem;">
              <label>登陆密码</label>
              <input type="password" class="HUI_Input_Pwd" id="pwd" v-model="password" checkType="string" checkData="6,20" checkMsg="密码应该为 6-20个字符" />
          </div>
          <div class="HUI_Input" style="margin-top: 3rem;">
              <input type="text" class="HUI_Input_Pwd"  v-model="error"  disabled style="color：red"/>
          </div>
      </div>
      <div  style="width: 100%;margin: 0 auto;">
        <div style="width: 90%;margin: 1.5rem auto 0;">
            <button class="HUI_Button HUI_FR" @click="reg" style="width: 40%;margin-left: 10%;">立即注册</button>
        </div>
      </div>
  </div>
</div>

</template>
<script>
export default {
    data(){
        return {
        username:'',
        password:'',
        nikename:'',
        error:'欢迎注册会员'
        }
    },
    methods:{
        goback(){
        this.$router.go(-1)
        },
      reg(){
      // var form_data = new FormData($('#uploadForm')[0]);
      var form_data = new FormData();
      form_data.append('username',this.username);
      form_data.append('password',this.password);
      form_data.append('nikename',this.nikename);
      
      // form_data.append('auth_icon',new FormData($('#uploadForm')[0]));

      axios({
        url:'/api/reg',
        method:'post',
        data:form_data
      }).then(
        res=>{
          
          
          if(res.data.error==0){
              console.log(1,res)
            this.$router.push('/login')
          }else{
              
            this.error=res.data.msg;
            console.log('this.error',this.error)
            
            
          }
        }
      )
    }
  }
}
</script>
<style>
   
  </style>
