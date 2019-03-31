import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const Home = () => import('@/components/Home.vue')
const Care = () => import('@/components/Care.vue')
const Cart = () => import('@/components/Cart.vue')
const Charge = () => import('@/components/Charge.vue')
const Comfirm = () => import('@/components/Comfirm.vue')
const Product = () => import('@/components/Product.vue')
const Service = () => import('@/components/Service.vue')
const Unpay = () => import('@/components/Unpay.vue')
const Unrecive = () => import('@/components/Unrecive.vue')
const Address = () => import('@/components/Address.vue')
const Complete = () => import('@/components/Complete.vue')
const Icon = () => import('@/components/Icon.vue')
const User = () => import('@/components/User.vue')
const Login = () => import('@/components/Login.vue')
const Reg = () => import('@/components/Reg.vue')

// import Home from '@/components/Home'
// import Care from '@/components/Care'
// import Cart from '@/components/Cart'
// import Charge from '@/components/Charge'
// import Comfirm from '@/components/Comfirm'
// import Product from '@/components/Product'
// import Service from '@/components/Service'
// import Unpay from '@/components/Unpay'
// import Unrecive from '@/components/Unrecive'
// import Address from '@/components/Address'
// import Complete from '@/components/Complete'
// import Icon from '@/components/Icon'
// import User from '@/components/User'
// import Login from '@/components/Login'
// import Reg from '@/components/Reg'

// import Column from '@/components/Column'

// import Detail from '@/components/Detail'
// import AppError from '@/common/AppError'

let routes=[
  {path:'/home',component:Home},
  {path:'/care',component:Care},
  {path:'/cart',component:Cart},
  {path:'/charge',component:Charge},
  {path:'/comfirm',component:Comfirm},
  {path:'/product',component:Product},
  {path:'/service',component:Service},
  {path:'/unpay',component:Unpay},
  {path:'/unrecive',component:Unrecive},
  {path:'/address',component:Address},
  {path:'/complete',component:Complete},
  {path:'/icon',component:Icon},
  {path:'/user',component:User},
  {path:'/login',component:Login},
  {path:'/reg',component:Reg},
  {path:'/',redirect:'/home'},
  

  // {path:'/column',component:Column},
  // {path:'/detail/:id',component:Detail},
  
  // {path:'*',component:AppError}
];

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到 顶部
    return {x:0,y:0}
  }
});
export default router;