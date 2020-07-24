import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		huiarr: [],
		goodsarr:[]
	},
	getters: {
		gethuiarr: state => state.huiarr,
		getgoodsarr: state => state.goodsarr
	},
	mutations: {
		changehuiarr(state, val) {
			state.huiarr = val;
			// console.log(arguments)
		},
		changegoodsarr(state, val) {
			state.goodsarr = val;
			// console.log(arguments)
		}
	},
	actions: {},
	modules: {}
})
