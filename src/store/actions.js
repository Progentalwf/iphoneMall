import * as types from './types';
import router from '../plugins/router.config'

export default {

  [types.VIEW_NAV]:({state,commit},payload)=>{commit(types.VIEW_NAV,payload)},
  [types.VIEW_FOOT]:({state,commit},payload)=>commit(types.VIEW_FOOT,payload),
  [types.VIEW_LOADING]:({state,commit},payload)=>commit(types.VIEW_LOADING,payload),
  [types.UPDATE_HEADNAME]:({state,commit},payload)=>commit(types.UPDATE_HEADNAME,payload),
  [types.UPDATE_HOME]:({state,commit},payload)=>commit(types.UPDATE_HOME,payload),
  [types.UPDATE_PARTS]:({state,commit},payload)=>commit(types.UPDATE_PARTS,payload),
  [types.UPDATE_AROUND]:({state,commit},payload)=>commit(types.UPDATE_AROUND,payload),
  [types.UPDATE_CHARGE]:({state,commit},payload)=>commit(types.UPDATE_CHARGE,payload),
  [types.UPDATE_ICON]:({state,commit},payload)=>commit(types.UPDATE_ICON,payload),
  
 
  [types.UPDATE_FOLLOW]:({state,commit},payload)=>{},
  /* [types.CHECK_USER]:({state,commit},payload)=>{
    console.log('actions',payload);
    commit(types.CHECK_USER,payload)
  } */

  [types.CHECK_USER]:({state,commit},payload)=>{

    //异步处理结束后，给调用方一个回执
    return axios({
      url:'/api/login',
      method:'post',
      data:{username:payload.username,password:payload.password}
    }).then(
      res=>{
        if(res.data.error==0){
          // console.log('...',res.data)
          commit(types.CHECK_USER,res.data.data)
          return {auth:true};
        }else{
          return {auth:false,msg:res.data.msg}
        }
      }
    )
  }

}