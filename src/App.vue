<template>
  <div id="app">
    <loading v-show="bLoading"></loading>
    <app-header v-show="bNav"></app-header>
    <router-view></router-view>
    <app-footer v-show="bFoot"></app-footer>
  </div>
</template>
<script>
import AppHeader from "./common/AppHeader";
import AppFooter from "./common/AppFooter";

import {mapGetters} from 'vuex';
import * as types from './store/types.js'
export default {
  components: { AppHeader,AppFooter},
  computed:mapGetters(['bNav','bLoading','bFoot']),
  mounted(){
    //  console.log('mapGetters',mapGetters)
          },
  watch:{
    $route:{
      handler(to){
        let path = to.path;
        // console.log(path);
        this.checkPath(path);
      },
       immediate:true 
    }
      
  },
  methods:{
    checkPath(path){
      if(/home|care/.test(path)){
        if(/home/.test(path)){this.$store.dispatch(types.UPDATE_HEADNAME,"主页")}
        if(/care/.test(path)){this.$store.dispatch(types.UPDATE_HEADNAME,"分类")}
        this.$store.dispatch(types.VIEW_NAV,true);
        this.$store.dispatch(types.VIEW_FOOT,true);
      }
      if(/product|cart|login|address|reg|product|icon/.test(path)){
        this.$store.dispatch(types.VIEW_NAV,false);
        this.$store.dispatch(types.VIEW_FOOT,false);
      }
      if(/service|user|unpay|unrecive|complete/.test(path)){
        this.$store.dispatch(types.VIEW_NAV,false);
        this.$store.dispatch(types.VIEW_FOOT,true);
      }
      
    }
  }
};

</script>

<style>
</style>
