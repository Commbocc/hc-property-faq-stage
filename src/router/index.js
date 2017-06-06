import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import HaulerResults from '@/components/results/Hauler'
import WindDebrisResults from '@/components/results/WindDebris'
import EvacuationResults from '@/components/results/Evacuation'
import FloodResults from '@/components/results/Flood'
import CommissionerResults from '@/components/results/Commissioner'

Vue.use(Router)

export default new Router({
	routes: [
		// paths should match question values. See @/modules/questions.js for the list of questions
		{
			path: '/hauler',
			component: HaulerResults
		},
		{
			path: '/wind-debris',
			component: WindDebrisResults
		},
		{
			path: '/evacuation',
			component: EvacuationResults
		},
		{
			path: '/flood-zone',
			component: FloodResults
		},
		{
			path: '/commissioner',
			component: CommissionerResults
		},
		// default
		{
			path: '*',
			component: null
		},
	]
})
