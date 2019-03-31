<template>
 <div>
   <div id="HUI_Header">
        <h1>收货地址</h1>
        <div id="HUI_Back" style="color: #333333;" @click="goback"></div>
    </div>
    <div class="HUI_Wrap" style="background:#FFFFFF; padding-bottom:18px;margin-top: 2rem;">
        <div class="HUI_Inputs" id="form1" style="padding-top:28px;">
          <div class="HUI_Input">
                <label>收货人姓名：</label>
                <input type="text" class="HUI_Input_Clear" value="" id="username" checkType="string" checkData="*" checkMsg="收货人姓名不能为空" />
            </div>
        </div>
        <div class="HUI_Inputs" id="form1" style="padding-top:28px;">
          <div class="HUI_Input">
                <label>联系人电话：</label>
                <input type="text" class="HUI_Input_Clear" value="" id="phone" checkType="string" checkData="11" checkMsg="手机号码应该为 11位" />
            </div>
        </div>
        <div class="HUI_Inputs" id="form1" style="padding-top:28px;">
          <div class="HUI_Input">
                <label>收货地址：</label>
                <input type="text" class="HUI_Input_Clear" value="" id="address" checkType="string" checkData="*" checkMsg="收货地址不能为空" />
            </div>
        </div>
        <div  style="width: 100%;margin: 0 auto;">
          <div style="width: 90%;margin: 1.5rem auto 0;">
              <button class="HUI_Button HUI_FR" @click="goback" style="width: 40%;margin-left: 10%;">确&nbsp;&nbsp;定</button>
          </div>
        </div>
    </div>
 </div>
</template>
<script>
export default {
    methods:{
        goback(){
        this.$router.go(-1)
        }
  }
}
</script>
<style>





</style>

