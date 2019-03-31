<template>
<div id="app-product">
<div id="HUI_Header" style="height: 47px;">
	<h1>{{detail.title}}</h1>
	<div id="HUI_Back" style="color: #333333;" @click="goback"></div>
</div>
<div class="HUI_Wrap" style="background: #FFFFFF;">
	<div  class="banner">
        <!-- <div class="HUI_SlidePrepare">
            <img src="../assets/img/148223361287.jpg" />
        </div> -->
        <ul>
            <li><a href="javascript:;"><img :src=src alt="" /></a></li>
            <li><a href="javascript:;"><img src="../assets/img/147186543053.png" /></a></li>
						<li><a href="javascript:;"><img :src=src alt="" /></a></li>
            <li><a href="javascript:;"><img src="../assets/img/147186543053.png" /></a></li>
						
        </ul>
   </div>
   <div class="desc">
   	<p>{{detail.title}}</p>
   	<span>{{detail.des}}</span>
   	<span>￥{{nowPrice}}</span>
   </div>
	<div style="padding:20px 0px;" class="HUI_TabList" id="TabList">
		<div class="HUI_TabListTitle" style="border-top: 0.1rem solid #DDDDDD;border-bottom: 0.1rem solid #DDDDDD;">
			<div class="HUI_TabListTitleActive">概&nbsp;&nbsp;述</div>
			<div>参&nbsp;&nbsp;数</div>
		</div>
		<!--<div class="HUI_TabListLine"><div></div></div>-->
		<div id="TabList">
			<ul class="HUI_TabListMain">
				<li class="HUI_TabListItems">
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/5804559d3e25a82.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/5804559c8a0c617.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/580605b74819993.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
				</li>
				<li class="HUI_TabListItems">
					<div style="width: 100%;"><img src="../assets/img/5804559d3e25a82.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/5804559c8a0c617.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/580605b74819993.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/5804559d3e25a82.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/5804559c8a0c617.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/580605b74819993.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/5804559d3e25a82.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/5804559c8a0c617.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/580605b74819993.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/5804559d3e25a82.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/5804559c8a0c617.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img src="../assets/img/580605b74819993.jpg" alt="" style="width: 100%;" /></div>
					<div style="width: 100%;"><img :src=src alt="" style="width: 100%;" /></div>
				</li>
			</ul>	
		</div>
		</div>
	</div>
	<div id="" class="product" style="height: 3.5rem;padding-top: 1.2rem;position: fixed;bottom: 1rem;">

			<router-link id="purchase" style="display: inline-block; height: 3rem;margin-left: 3.5%;width: 45%;text-align: center;background: #ED2D22;border-radius: 1rem;"
			:to="{path:'/charge',query:{dataName:dataName,id:id}}"
			>
				<div class="" style="color: #FFFFFF;line-height: 3rem;height: 3rem;font-size: 1.4rem;">立即购买</div>
			</router-link>
	    
	    <a href="javascript:;" id="addCart" style="display: inline-block;height: 3rem;margin-left: 3%;width: 45%;text-align: center;background: #FFD904;border-radius: 1rem;">
	        <div class="" style="color: #FFFFFF;line-height: 3rem;height: 3rem;font-size: 1.4rem;">加入购物车</div>
	    </a>
	</div>
	<div class="gai"></div>
    <div id="info" style="position: fixed;bottom: -400px;background: #FFFFFF;width: 100%;z-index: 100000000000000;padding: 1rem;">
    	<span class="HUI_Icons HUI_Icons_close" style="display: block;width: 15px;height: 15px;border: 1px solid #9E9E9E;border-radius: 8px;position: absolute;top: 20px;right: 40px;"></span>
    	<div class="head">
    		<div style="display: inline-block;vertical-align: top;">
    			<img src="../assets/img/147186543099.png" style="width:150px"/>
    		</div>
    		<div style="display: inline-block;vertical-align: top;font-weight: bold;margin-left: 0.5rem;">
    			<p class="price" style="margin-top: 2.5rem;font-size: 1.6rem;color: #ED2D22;">￥1299</p>
    			<p class="attr1" style="margin-top: 0.5rem;font-size: 1.4rem;color: #000000;">星空灰</p>
    			<p class="attr2" style="margin-top: 0.5rem;font-size: 1.4rem;color: #000000;">64G</p>
    		</div>
    	</div>
    	<div class="attr">
    		<div class="attr1">
    			<div class="title" style="margin-bottom: 0.5rem;">
    				颜色
    			</div>
    			<div class="value">
    				<div class="attribute">
    					<span class="active">星空灰</span>
    				</div>
    				<div class="attribute">
    					<span>星空灰</span>
    				</div>
    				<div class="attribute">
    					<span>星空灰</span>
    				</div>
    				<div class="attribute">
    					<span>星空灰</span>
    				</div>
    				<div class="attribute">
    					<span>星空灰</span>
    				</div>
    			</div>
    		</div>
    		<div class="attr1">
    			<div class="title" style="margin-bottom: 0.5rem;">
    				规格
    			</div>
    			<div class="value">
    				<div class="attribute">
    					<span class="active">32G</span>
    				</div>
    				<div class="attribute">
    					<span>64G</span>
    				</div>
    			</div>
    		</div>
    	</div>
    	<div style="width: 100%;margin-top: 1rem;">
    		<button class="comfirm" style="width: 60%;border-radius: 1.5rem;display: block;height: 3.5rem;text-align: center;background: #ED2D22;margin: 0px auto;border: none;">确定</button>
    	</div>
    </div>
</div>


</template>

<script>
import $ from  'jquery';
import Swipe from '../assets/js/swipe.js';
import store from "../store/index.js"
import * as types from '../store/types.js';

import {mapGetters} from 'vuex';
export default {
		data(){return {
			detail:{},
			baseUrl:baseUrl,
			// src:"data:image/gif;base64,R0lGODlhgACAAPfrAGbU/9Tx/9/1/6Pj/yPI/z3M/+r4/7zq/4bb/5Xf//X8/3fX/wrG/7Dm/1PQ//L8/3vg/3zh/wTF/wLE/wXF/wvH/zzS/wbF/0LT/9X1/xnK/zLQ/0HT/9P1/yPM/wzH/yLM/9r2/933/9j2/zbQ/6nr/8nz//X9/ynN/yTM//7///3///H8/xDI/yXN/wfG/xjK/9f2/973/8jt/+P5/8Tx/+H4/870/6zs/7Ht/xrK/xPI/xXJ/9H0/9D0/xvK/5Tm/5ro/wjG/63s/+b5/z/T/+L4/zfR/7Lt/z7S/8/0/zDP/+X5//T8/x3L/77w/8Lx/xLI/zXQ/6/s/2Lb/9/4/4Xj/7nv/1zZ/6Pq//n+//f9/wHE/0vV/xHI//v+/yrO/+37/+77/27d/w7H/0nV/9b2/yzO/+/7/3/h/17a/xbJ/0XU//z+/5Lm//D8/xTJ/zHP/+D4/xzK/67s/0PU/8by/2Tb/1LX/+z7/+v6/1rZ/43l/47l/3Le/2Ha/y7P/w3H/1HX//r+/7/w/5/p/3bf/8zz/7fu/1fY/4bj/83z/7Dt/7jv/0/W/2Xb//j9/4/l/5Pm/3He/0fU/6Xq/8jy/8rz/0zW//b9/7Xu/5jn/3Xf/yHM/3rg/wnG/7bu/1bY/8Xy/8Px/yDL/4Hi/4fj/yvO/1PX/y3O/03W/9n2/1nZ/1DX/2rd/6vs/4rk/5zo/8Hx/yjN/5bn/3Pf/23d//P8/0bU/8fy/1vZ/+r6/0TU/2vd/2zd/zTQ/13a/2jc/5Dl/2/e/5fn/yfN/zrR/5Hm/wPF/0DT/3De/4Di/3Tf/2Da/2nc/7Tu/y/P/0rV/57p/+f5/1XY/z3S/9v3/ybN/1TX/4Pi/6Tq/5nn/4Tj/2Pb/07W/4zk/73w/1/a/w/H/xfJ/+j6/3ng/7vv/37h/x/L/wDE/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkNzA2ODJiZC1kMzdjLTQxNGUtOGEzNS1kZWZhYmNmM2NkMjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Q0ZEMDg3NDEzRUIzMTFFN0FGMEVFRTc4MTY0QjY2MjkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Q0ZEMDg3NDAzRUIzMTFFN0FGMEVFRTc4MTY0QjY2MjkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjU3ZTczOTQxLTU4NDUtY2I0My1hNzMxLTBjZjU3MTdmMGJmNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpkNzA2ODJiZC1kMzdjLTQxNGUtOGEzNS1kZWZhYmNmM2NkMjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LBwL++vby7urm4t7a1tLOysbCvrq2sq6qpqKempaSjoqGgn56dnJuamZiXlpWUk5KRkI+OjYyLiomIh4aFhIOC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",
			src:"",
			nowPrice:"",
			dataName:"",
			id:"",
			// home:[],
			// parts:[],
			// around:[]
		}},
		computed:mapGetters(['home','parts','around']),
    methods:{
        goback(){
        this.$router.go(-1)
				},
				find(dataName,id){
					if(this[dataName]){
						var i=this[dataName].length;
						while (i--) {
							
							if(this[dataName][i]._id==id){
									this.detail=this[dataName][i];
									// console.log(this.detail)
									this.src=baseUrl+this.detail.detail.auth_icon;
									this.nowPrice=this.detail.detail.price;
									// console.log(this.$store,types.UPDATE_CHARGE)
									this.$store.dispatch(types.UPDATE_CHARGE,this.detail);
							}
						}
					}
					  
				}
    },
  mounted(){
		this.id = this.$route.query.id;
		// console.log(this.$route)
		this.dataName = this.$route.query.dataName;
		this.find(this.dataName,this.id);
    var mySwipe=new Swipe($('.banner')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('.banner ol li').removeClass('active');
        $('.banner ol li').eq(index).addClass('active');
      }
    })
	
	},
	// beforeRouteEnter(to,from,next){

	// } 
  
}


</script>
<style>
.banner ul li{width:6.4rem;float:left;position: relative;}
.banner ul li img{width:100%; display:block;}
.banner ul li .text-box{width:5.8rem; padding:0 0.3rem;height:1.24rem; position:absolute; left:0; bottom:0; color:#fff; background:rgba(0,0,0,0.5);}
.text-box h2{ font-size:0.3rem; font-weight:normal; margin-top:0.22rem; line-height:100%; margin-bottom:0.22rem; overflow:hidden;white-space:nowrap;text-overflow:ellipsis;}
.text-box p{ line-height:100%;}

.banner ol{position:absolute; right:0.2rem;bottom:0.2rem;}
.banner ol li{width:0.15rem;height:0.15rem; background:#5477b2; float:left; border-radius:50%; margin-right:0.08rem;}
.banner ol li.active{ background:#fff;}




</style>

