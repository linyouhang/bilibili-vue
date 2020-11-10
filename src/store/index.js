import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import bannerStore from './modules/bannerStore'
import rankStore from './modules/rankStore'
import promoteStore from './modules/promoteStore'
import liveStore from './modules/liveStore'
import contentStore from './modules/contentStore'

const state = {
	requesting: false,
	error: {},
	isShowGame: false
}

const getters = {
	requesting: state => state.requesting,
	error: state => state.error,
	isShowGame: state => state.isShowGame
}

export default new Vuex.Store({
	state,
	getters,
	modules: {
		bannerStore,
		rankStore,
		promoteStore,
		liveStore,
		contentStore
	},
	mutations: {
		showGame(state){
			state.isShowGame = true
		},
		unShowGame(state){
			state.isShowGame = false
		}
	}
})