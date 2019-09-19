import {
    TAGGLE_FOOTERSHOW
} from './mutation-types.js'
import {setStore, getStore,removeStore,setSessionStore, getSessionStore,removeSessionStore,} from '../utils/mUtils'
import cookie from '../utils/cookie'
import store from '.'
import Vue from 'Vue'

export default {
    [TAGGLE_FOOTERSHOW](state,flag){
		state.FooterShow=flag;
	},
}