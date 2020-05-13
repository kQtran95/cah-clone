import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		blackCards: [],
		discardedBlackCards: [],
		whiteCards: [],
		discardedWhiteCards: []
	},
	mutations: {
		setBlackCards(state, blackCards) {
			state.blackCards = blackCards
		},
		setWhiteCards(state, whiteCards) {
			state.whiteCards = whiteCards
		},
		discardBlackCard(state, card) {
			state.discardedBlackCards.push(card)
		}
	}
})

store.commit('increment')

console.log(store.state.count)

export default new Vue({
	store,
	vuetify,
	router,
	render: h => h(App)
}).$mount('#app')
