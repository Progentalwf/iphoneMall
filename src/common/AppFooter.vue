<template>
  <header id="header" role="banner">
        <div id="HUI_Bar">
            <router-link to="/home" active-class="HUI_Bar_Active" id="index">
                <div class="HUI_Bar_Icons HUI_Icons_home"></div>
                <div class="HUI_Bar_Text">首页</div>
            </router-link>
            <router-link to="/care" active-class="HUI_Bar_Active" id="cate">
                <div class="HUI_Bar_Icons HUI_Icons_orderlist"></div>
                <div class="HUI_Bar_Text">分类</div>
            </router-link>
            <router-link to="/service" active-class="HUI_Bar_Active" id="service">
                <div class="HUI_Bar_Icons HUI_Icons_phone"></div>
                <div class="HUI_Bar_Text">服务</div>
            </router-link>
            <router-link to="/cart" active-class="HUI_Bar_Active" id="cart">
                <div class="HUI_Bar_Icons HUI_Icons_shoppingcart"></div>
                <div class="HUI_Bar_Text">购物车</div>
            </router-link>
            
             <router-link to="/user" active-class="HUI_Bar_Active" id="user">
                <div class="HUI_Bar_Icons HUI_Icons_myline"></div>
                <div class="HUI_Bar_Text">个人中心</div>
            </router-link>
            
        
	        </div>
    </header>
</template>

<style>





</style>

