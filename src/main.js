import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		blackCards: [],
		discardedBlackCards: [],
		whiteCards: [],
		discardedWhiteCards: [],
		drawnCard: {},
		users: []
	},
	mutations: {
		setBlackCards(state, blackCards) {
			state.blackCards = blackCards
		},
		discardBlackCard(state, card) {
			state.discardedBlackCards.push(card)
		},
		setDrawnCard(state, card) {
			state.drawnCard = card
		},
		setWhiteCards(state, whiteCards) {
			state.whiteCards = whiteCards
		}
	}
})

axios
	.get("http://localhost:8000/listBlackCards")
	.then(response => {
		store.commit("setBlackCards", response.data.cards[0])
	})
	.catch(error => {
		console.log(error)
	});
axios
	.get("http://localhost:8000/listWhiteCards")
	.then(response => {
		store.commit("setWhiteCards", response.data.cards[0])
	})
	.catch(error => {
		console.log(error)
	});

export default new Vue({
	store,
	vuetify,
	router,
	render: h => h(App)
}).$mount('#app')
