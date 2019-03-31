<template>
  <div>
        <div id="HUI_Header" style="height: 47px;">
          <h1>已完成订单列表</h1>
          <div id="HUI_Back" style="color: #333333;" @click="goback"></div>
        </div>
        <div class="HUI_Wrap">
          
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

