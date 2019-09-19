import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
// import actions from './actions'
import getters from './getters'
import {setStore,getStore,removeStore} from '@/utils/mUtils.js'

Vue.use(Vuex)

const state = {
	userInfo: JSON.parse(getStore('userInfo')) || null, //用户信息
	FooterShow:false,
	isLogin: getStore('userInfo')!=null?true : false,//是否登录
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
})