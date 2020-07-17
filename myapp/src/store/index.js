import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		huiarr: []
	},
	getters: {
		gethuiarr: state => state.huiarr
	},
	mutations: {
		changehuiarr(state, val) {
			state.huiarr = val;
			// console.log(arguments)
		}
	},
	actions: {},
	modules: {}
})
