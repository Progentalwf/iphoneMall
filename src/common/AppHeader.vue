<template>
  <header id="app-header">
        <div id="HUI_Header">
            <h1>{{headName}}</h1>
            <input type="text" id="search" placeholder="搜你想搜的" />
        </div>
        
    </header>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    
    computed:mapGetters(['headName']),
    mounted(){
        
    }
}
</script>

<style>
#app-header{overflow: hidden;height: 90px;}
#search{border: none;outline: none;text-align: center}
</style>

