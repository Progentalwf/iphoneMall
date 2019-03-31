<template>
 <div>
    <div id="HUI_Header" style="height: 47px;">
        <h1>用户中心</h1>
        <div id="HUI_Back"></div>
    </div>
    <div class="HUI_Wrap">
        <div class="center" style="background: #DC143C;padding: 4rem 0 1rem 0;">
          <img :src="icon" alt="" style="width: 20%;margin: 0 auto;display: block;border-radius: 5rem;border: 1px solid #999999;min-height:8rem" />
          <div style="text-align:center;padding-top:.5rem"><router-link to="/icon" style="position: relative;z-index: 10;padding:.5rem;height: 1.6rem;line-height: 3rem;margin: auto;font-size: 1rem;color: #fff!important;border:1px solid #fff;border-radius:0.4rem ;" tag="span">设置头像</router-link></div>
          <div class="text">
            <p style="text-align: center;margin: 2rem;overflow:hidden;margin:.5rem">
              <a style="font-size: 1.5  rem;width:40%;padding: 0 5%;color:#CCC;float:left;text-align:right;">{{user.nikename||'亲,'}}</a>
              <a style="font-size: 1.5  rem;width:40%;padding: 0 5%;color:#CCC;float:left;text-align:left;" >你好</a>
            </p>
          </div>
          <ul>
            
            <li class="HUI_FL" id="unpay"><router-link to="/unpay">待付款</router-link></li>
            <li class="HUI_FL" id="unrecive"><router-link to="/unrecive">待收货</router-link></li>
            <li class="HUI_FL" id="complete"><router-link to="/complete">已完成</router-link></li>
          </ul>
          
        </div>
        <div class="HUI_List" style="background:#FFFFFF;">
            <ul>
                <li id="allList"><a href="javascript:;" class="HUI_Arrow">&nbsp;&nbsp;&nbsp;全部订单</a></li>
                
                <li><router-link to="/address" class="HUI_Arrow">&nbsp;&nbsp;收货地址</router-link></li>
                <li><a href="javascript:;" class="HUI_Arrow">&nbsp;&nbsp;&nbsp;设置</a></li>
            </ul>
        </div>
        <div style="height:20px;"></div>
        <div class="HUI_List out" style="background:#FFFFFF; padding:0px 10px;">
            <ul>
              <li><a href="javascript:;" class="HUI_Arrow HUI_Icons HUI_Icons_exit" @click="logout">&nbsp;&nbsp;&nbsp;退出登录</a></li>
            </ul>
        </div>
    </div>
 </div>
</template>
<script>
import * as types from '../store/types.js';

import {mapGetters} from 'vuex';
export default {
  data(){
    return {
      user:{}
    }
  },
  computed:mapGetters(['icon']),
  methods:{
    logout(){
      axios({
        url:'/api/logout'
      }).then(
        res=>{
          if(res.data.error==0){
            this.$router.push('/home')
          }
        }
      )
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('......user')
    //异步请求
    axios({
      url:'/api/user'
    }).then(
      res=>{
        if(res.data.error==0){
          next(_this=>_this.user=res.data.data);//数据预载
        }else{
          next('/login')
        }
      }
    )
    //next(访问目标组件，把数据传给目标组件)
  }
}
</script>
<style>





</style>

