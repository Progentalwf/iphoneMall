<template>
  <div class="newsList">
    <div class="new">
	   		<div class="new-big">
	   			<router-link
          :to="'/product?dataName=home&id='+(list[0]&&list[0]._id)"
        	><img :src="list[0]&&baseUrl+list[0].detail.auth_icon" alt="" /></router-link>
	   			<p>{{list[0]&&list[0].title}}</p>
	   			<span>{{list[0]&&'￥'+list[0].detail.price}}</span>
	   		</div>
	   		<div class="new-big">
	   			<div class="new-small" >
	   				<div class="left">
			   			<p>{{list[1]&&list[1].title}}</p>
			   			<span>{{list[1]&&'￥'+list[1].detail.price}}</span>
	   				</div>
	   				<div class="right">
						<router-link
							:to="'/product?dataName=home&id='+(list[1]&&list[1]._id)"
							><img :src="list[1]&&baseUrl+list[1].detail.auth_icon" alt="" /></router-link>
	   					
	   				</div>
	   			</div>
	   			<div class="new-small">
	   				<div class="left">
			   			<p>{{list[2]&&list[2].title}}</p>
			   			<span>{{list[2]&&'￥'+list[2].detail.price}}</span>
	   				</div>
	   				<div class="right">
							 <router-link
							:to="'/product?dataName=home&id='+(list[2]&&list[2]._id)"
							><img :src="list[2]&&baseUrl+list[2].detail.auth_icon" alt="" /></router-link>
	   				</div>
	   			</div>
	   		</div>
	   </div>
	   <div class="list">
	   		<div class="product" v-for="item of list2" :key="item._id">
		   			<p>{{item.title}}</p>
		   			<p><span>￥{{item.detail.price}}</span></p>
						 <router-link
							:to="'/product?dataName=home&id='+item._id"
							><img :src="baseUrl+item.detail.auth_icon" alt="" /></router-link>
		   	  </div>
	   </div>
	</div>
  
</template>
<script>
export default {
	props:['list'],
	data(){return {baseUrl}},
	computed:{
		list2: function () {
      // `this` 指向 vm 实例
      return this.list.slice(3)
    }
	}

}
</script>

<style >
	.product img{margin-top: 0;}
</style>
