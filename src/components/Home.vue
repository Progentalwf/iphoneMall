<template>
  <div class="home">
    <Slider :banner="banner"></Slider>
    <List :list="list" :dataName="dataName"></List>
  </div>
</template>
<script>
import Slider from './Slider'
import List from './List'
import {mapGetters} from 'vuex';
import * as types from '../store/types.js'
// import * as types from '../store/types.js'
export default {
  components:{Slider,List},
    data(){
    return {
      list:[],
      dataName:'home',
      banner:[]
    }
  },
    created(){
    
    //前端的多并发

    //并行无关联
    // axios.all([]).then(res=>数组)
    // axios.all([]).then(axios.spread((res1,res2)=>{}))

    // this.$store.dispatch(types.VIEW_LOADING,true)
    axios.all([
      axios({
        url: '/api/product',
        params:{dataName:this.dataName,count:20}
      }),
      axios({
        url:'/api/banner',
        params:{dataName:'banner',count:4}
      })
    ]).then(
      axios.spread((product,banner)=>{
        // this.$store.dispatch(types.VIEW_LOADING,false)
        
        // console.log('baseUrl',baseUrl)
        this.list=product.data.page_data
        this.banner=banner.data.page_data
        this.$store.dispatch(types.UPDATE_HOME,this.list);
       
        // console.log(this.list,this.banner);
      })
    )
     
  
    /* axios({
      url: '/api/product',
      params:{dataName:this.dataName,count:20}
    }).then(
      res=>this.list=res.data.page_data
    )

    axios({
      url:'/api/banner',
      params:{dataName:'banner'}
    }).then(
      res=>this.banner=res.data.page_data
    ) */

    //串行有关联
    // axios({}).then(res=>return axios(res.数据)).then


  }
}
</script>

