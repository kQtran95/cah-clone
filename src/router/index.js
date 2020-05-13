import Vue from 'vue'
import VueRouter from 'vue-router'
import ListBlackCards from '../views/ListBlackCards'
import ListWhiteCards from '../views/ListWhiteCards'
import GameTable from '../views/GameTable'

Vue.use(VueRouter)
export default new VueRouter({
	routes: [
		{
			path: '/listBlackCards',
			name: 'ListBlackCards',
			component: ListBlackCards
		},
		{
			path: '/listWhiteCards',
			name: 'ListWhiteCards',
			component: ListWhiteCards
		},
		{
			path: '/play',
			name: 'GameTable',
			component: GameTable
		}
	]
})