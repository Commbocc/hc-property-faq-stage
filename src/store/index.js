import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import alerts from './alerts'
import address from './address'
import questions from './questions'
import hauler from './hauler'
import evacuation from './evacuation'

export default new Vuex.Store({
	modules: {
		alerts,
		address,
		questions,
		hauler,
		evacuation
	},
	state: {
		answer: null
	},
	mutations: {
		setAnswer (state, data) {
			state.answer = data
		}
	},
	actions: {
		determineRoute ({state, getters}) {
			var routeName = (state.questions.selected) ? 'Results' : 'Questions'
			var qid = (state.questions.selected) ? state.questions.selected.id : null
			return {
				name: routeName,
				params: {
					folio: state.address.folio,
					question_id: qid
				}
			}
		},
		ensureParcelLoaded ({state, dispatch}, folio) {
			if (state.address.parcel && state.address.folio == folio) {
				return true
			} else {
				return dispatch('fetchParcel', folio).then(bool => {
					return bool
				})
			}
		}
	}
})
