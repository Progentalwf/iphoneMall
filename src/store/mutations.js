import * as types from './types';
export default {
  [types.VIEW_NAV]:(state,payload)=>state.bNav=payload,
  [types.VIEW_FOOT]:(state,payload)=>state.bFoot=payload,
  [types.VIEW_LOADING]:(state,payload)=>state.bLoading=payload,
  [types.UPDATE_HOME]:(state,payload)=>state.home=payload,
  [types.UPDATE_FOLLOW]:(state,payload)=>state.follow=payload,
  [types.UPDATE_HEADNAME]:(state,payload)=>state.headName=payload,
  [types.UPDATE_AROUND]:(state,payload)=>state.around=payload,
  [types.UPDATE_PARTS]:(state,payload)=>state.parts=payload,
  [types.UPDATE_CHARGE]:(state,payload)=>state.charge=payload,
  [types.UPDATE_ICON]:(state,payload)=>state.icon=payload,
  
  [types.CHECK_USER]:(state,payload)=>{
    state.user.auth=true
    state.user.data=payload
  },
  [types.CLEAR_USER]:(state)=>{
    state.user.auth=false;
    delete state.user.data;
  }
}