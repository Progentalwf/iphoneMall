<template>
  <div class="main">
	  <div class="cat" style="min-height:40rem">
			<p>手机</p>
			
			<router-link tag="div" class="cate" v-for="item of home" :key="item._id"
			:to="{path:'/product',query:{dataName:'home',id:item._id}}"
			>
				<img :src="baseUrl+item.detail.auth_icon" alt="" />
				<p>{{item.title}}</p>
			</router-link>
			
		</div>
		<div class="cat" style="min-height:40rem">
			<p>配件</p>
			<router-link tag="div" class="cate" v-for="item of parts" :key="item._id"
			:to="{path:'/product',query:{dataName:'parts',id:item._id}}"
			>
				<img :src="baseUrl+item.detail.auth_icon" alt="" />
				<p>{{item.title}}</p>
			</router-link>
			
		</div>
		<div class="cat" style="min-height:40rem">
			<p>周边产品</p>	
			<router-link tag="div" class="cate" v-for="item of around" :key="item._id"
			:to="{path:'/product',query:{dataName:'around',id:item._id}}"
			>
				<img :src="baseUrl+item.detail.auth_icon" alt="" />
				<p>{{item.title}}</p>
			</router-link>
			
		</div>
		<div class="cat">
			<p style="text-align:center;border:none;">我也是有底线的</p>
			<img style="text-align:center;margin-bottom:-5rem" src="../assets/img/down.gif" alt="">
		</div>
	</div>

</template>
<script>
import * as types from '../store/types.js'
export default {
	data(){
    return {
      home:[],
      parts:[],
			around:[],
			baseUrl
    }
  },
	created(){
		axios.all([
      axios({
        url: '/api/product',
        params:{dataName:'home',count:10}
      }),
      axios({
        url: '/api/product',
        params:{dataName:'parts',count:10}
			}),
			axios({
        url: '/api/product',
        params:{dataName:'around',count:10}
      }),
    ]).then(
      axios.spread((home,parts,around)=>{
        // this.$store.dispatch(types.VIEW_LOADING,false)
        
        this.home=home.data.page_data
				this.parts=parts.data.page_data
				this.around=around.data.page_data
				this.$store.dispatch(types.UPDATE_PARTS,this.parts);
				this.$store.dispatch(types.UPDATE_AROUND,this.around);
				this.$store.dispatch(types.UPDATE_HOME,this.home);
				
        // console.log(this.home,this.parts,this.around);
      })
    )
	}
}
</script>


<style scoped>
		
    #main .cate{margin-bottom: 4rem;}
    .cate p{height: 1.8rem;}
  </style>

