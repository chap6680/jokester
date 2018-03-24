import Vue from 'vue'
import Vuex from 'vuex'
import { mutations } from './mutation.js'
Vue.use(Vuex)
import * as actions from './action.js'

const state = {
	jokes: []
}

export default new Vuex.Store({
	state,
	mutations,
	actions
})