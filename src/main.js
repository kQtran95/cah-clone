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
		}
	},
	getters: {
		drawBlackDeck() {
			const index = Math.floor(Math.random() * this.deck.length)
			const drawnCard = this.blackCards[index]
			this.blackCards.splice(index, 1)
			return drawnCard
		},
		// drawWhiteDeck(number) {
			
		// }
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
