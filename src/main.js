import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//配置全局资源
// import './assets/css/style.css';
// import './assets/css/bootstrap.min.css';
// import './assets/css/hui.css';

// import './assets/js/huiSlide';
// import './assets/js/hui';

//配置插件
import'./plugins/axios';

//路由引入
import router from './plugins/router.config'

//配置全局 baseUrl
import config from './config/config';
window.baseUrl = config.baseUrl.localhost_http;
// window.baseUrl = config.baseUrl.localhost_https

//配置全局过滤器
import filters from './filters';
Object.keys(filters).forEach(key=>Vue.filter(key,filters[key]));

//配置loading插件
import loading from './plugins/loading'
Vue.use(loading);

//引入状态管理
import store from './store/index'

//引入全局
import 'animate.css';





new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
