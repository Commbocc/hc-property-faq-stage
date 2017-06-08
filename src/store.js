import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import router from './router'

// init esri
import * as esriLoader from 'esri-loader'
if (!esriLoader.isLoaded()) {
	esriLoader.bootstrap((err) => {
		if (err) { console.error(err) }
	}, {
		url: 'https://js.arcgis.com/4.3'
	})
}

import { questions } from '@/modules/questions'
import { alerts } from '@/modules/alerts'
import { hauler } from '@/modules/hauler'
import { evacuation_zones } from '@/modules/evacuation'

export const store = new Vuex.Store({
	modules: {
		questions,
		alerts,
		hauler,
		evacuation_zones
	},
	state: {
		//
		inputAddress: '',
		inputAddressPlaceholder: 'Your Address...',
		is_address_loading: false,
		is_result_loading: false,

		// responses
		addr_form_resp_addr: null,
		addr_form_resp_location: null,
		addr_form_resp_parcel: null,

		//
		selected_question: false,
		show_questions: true,
		answer: null
	},
	actions: {
		findAddress ({commit, state}) {
			return new Promise((resolve, reject) => {
				commit('setIsAddressLoading', true)
				esriLoader.dojoRequire([
					"esri/tasks/Locator"
				], (Locator) => {
					var hcLocator = new Locator({
						url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/DBO_composite_address_locator/GeocodeServer"
					})
					hcLocator.addressToLocations({
						address: { SingleLine: state.inputAddress },
						maxLocations: 1
					}).then( response => {
						if (response.length) {
							commit('setAddress', response[0])
							resolve()
						} else {
							throw 'no-address'
						}
					}).otherwise( err => {
						commit('showAlert', err)
						commit('setIsAddressLoading', false)
						resolve()
					})
				});
			})
		},
		fetchParcel ({commit, state}) {
			return new Promise((resolve, reject) => {
				esriLoader.dojoRequire([
					"esri/tasks/QueryTask",
					"esri/tasks/support/Query"
				], (QueryTask, Query) => {
					var queryTask = new QueryTask({
						url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/HC_Parcels/MapServer/0"
					})
					var query = new Query()
					query.geometry = state.addr_form_resp_location
					query.outFields = ['FOLIO']

					queryTask.execute(query).then( response => {
						if (response.features.length) {
							commit('setParcel', response.features[0].attributes)
							resolve()
						} else {
							throw 'no-parcel'
						}
					}).otherwise( err => {
						commit('setParcel', false)
						commit('showAlert', err)
						resolve()
					})
				});
			})
		},
		askQuestion ({commit, state, getters}) {
			if (state.selected_question && state.addr_form_resp_location) {
				return new Promise((resolve, reject) => {
					commit('setIsResultsLoading', true)
					if (getters.theQuestion.within) {
						esriLoader.dojoRequire([
							"esri/tasks/QueryTask",
							"esri/tasks/support/Query"
						], (QueryTask, Query) => {
							var queryTask = new QueryTask({
								url: getters.theQuestion.endpoint
							})
							var query = new Query()
							query.geometry = state.addr_form_resp_location
							query.returnGeometry = false
							query.outFields = ['*']

							return queryTask.execute(query).then( response => {
								if (response.features.length) {
									commit('answerQuestion', response.features[0])
									resolve()
								} else {
									commit('answerQuestion', false)
								}
							}).otherwise( err => {
								commit('showAlert', err)
								resolve()
							})
						})
					} else {
						commit('answerQuestion', false)
						resolve()
					}
				})
			} else {
				return false
			}
		},
		updateQuestion ({commit, getters}, question) {
			var potential_question = getters.findQuestion(question)
			if (potential_question) {
				commit('setQuestion', potential_question.value)
			}
		}
	},
	mutations: {
		setIsAddressLoading (state, bool) {
			state.is_address_loading = bool
		},
		setIsResultsLoading (state, bool) {
			state.is_result_loading = bool
		},
		setAddress (state, data) {
			state.addr_form_resp_addr = data.address
			state.addr_form_resp_location = data.location
			state.is_address_loading = false
		},
		setParcel (state, data) {
			state.addr_form_resp_parcel = data
		},
		answerQuestion (state, data) {
			state.answer = data
			state.is_result_loading = false
			router.push({ path: `/${state.selected_question}` })
		},
		setQuestion (state, data) {
			state.selected_question = data
		}
	},
	getters: {
		askWatcher (state, getters) {
			return [
				state.selected_question,
				state.addr_form_resp_addr,
				Date.now()
			]
		},
		findQuestion: (state) => (question) => {
			return state.questions.index.find(q => q.value === question)
		},
		theQuestion (state, getters) {
			return getters.findQuestion(state.selected_question)
		}
	}
})
