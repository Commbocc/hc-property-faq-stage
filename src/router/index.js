import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import store from '../store'

import Hello from '@/components/Hello'
import Results from '@/components/results/index'
import Questions from '@/components/Questions'
import HaulerNotFound from '@/components/results/hauler/NotFound'

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: null
	},
	{
		path: '/search',
		name: 'Search',
		beforeEnter (to, from, next) {
			store.dispatch('determineRoute').then(routeResult => {
				next(routeResult)
			})
		}
	},
	{
		path: '/:folio',
		name: 'Questions',
		component: Questions,
		props: true,
		beforeEnter (to, from, next) {
			store.dispatch('ensureParcelLoaded', to.params.folio).then(hasParcel => {
				(hasParcel) ? next() : next({name: 'Home'})
			})
		},
		children: [
			{
				path: '/:folio/:question_id',
				name: 'Results',
				component: Results,
				props: true
			},
			{
				path: '/:folio/hauler/not-found',
				name: 'HaulerNotFound',
				component: HaulerNotFound
			}
		]
	}]
})
