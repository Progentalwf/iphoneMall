<template>
<div id="app-cart">
		  <div id="HUI_cart" style="height: 47px;">
				<h1><div id="HUI_Back" style="color: #333333;" @click="goback"></div>购物车<span style="float: right;color: #DC143C;">编辑</span></h1>
			</div>
			<div id="HUI_Bar_cart" class="checkout" style="bottom: 0;background: #FFFFFF;height: 4rem;width: 100%;">
				<div class="HUI_FL" style="vertical-align: top;">
					<span class="HUI_Icons" style="margin-top:1rem !important;line-height: 2.2rem;width: 2rem;height: 2rem;border: 1px solid #999999;border-radius: 1rem; margin-top: 2rem;margin-left: 1rem;display: inline-block;"></span><span id="quanxan" style="display: inline-block;vertical-align:bottom;line-height: 3rem;font-size: 1.4rem;margin-left: 0.5rem;">全选</span>
				</div>
				<div class="HUI_FR" style="width: 60%;margin-top:0.8rem !important;">
					<div class="HUI_FR" style="font-size: 1.4rem;background: #ED2D22;width: 40%;height:3rem;line-height: 3.5rem;text-align: center;margin-right: 0.5rem;border-radius: 1rem;color: #FFFFFF;">
						结算
					</div>
					<div class="HUI_FR" style="height:3.5rem;line-height: 3.5rem;">
						<p style="margin-right: 1rem;font-size: 1.2rem;">总价：<span style="font-size: inherit;color: #ED2D22;">￥1599</span></p>
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
    #HUI_cart h1{font-size:18px; height:46px; line-height:46px; overflow:hidden; padding:0px 38px 0px 38px; text-align:center; color:#000000; font-weight:400; white-space:nowrap; text-overflow:ellipsis; -o-text-overflow:ellipsis;border-bottom:1px solid crimson;}
		#HUI_cart h1 span{float: right;color: #DC143C;}
		#HUI_cart h1 b{font-size:18px;}
		#HUI_Back {width: 38px;height: 46px;font-family: "iconfont";line-height: 46px;color: #FFFFFF;text-align: center;position: absolute;z-index: 20;left: 0px;top: 0px;}
		#HUI_Back:before {content: "\e833";font-size: 22px;}

		#HUI_Bar_cart{width:100%; height:44px; background:#FCFCFC; padding:5px 0px; bottom:0px; left:0px; position:fixed; overflow:hidden; z-index:9; box-shadow:1px -1px 3px #D1D1D1;}
		#HUI_Bar_cart a{display:block; width:20%; float:left;}
		.HUI_Bar_Icons{font-family:"iconfont"; text-align:center; font-size:20px; height:26px; line-height:26px;}
		.HUI_Bar_Text{text-align:center; font-size:12px; height:18px; line-height:18px; padding-top:2px;}
		.HUI_Bar_Active *{color:#DD524D;}
</style>

