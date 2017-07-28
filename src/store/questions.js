import * as esriLoader from 'esri-loader'

export default {
	state: {
		selected: null,
		isAsking: false,
		// question index
		index: [
			{
				id: 'hauler',
				text: 'What are my Trash Pickup days?',
				// endpoint: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/SW_HAULER_DATA2/MapServer/1'
				endpoint: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/SolidWaste_Viewer/SolidWasteCustomerData/MapServer/1'
			},
			{
				id: 'flood-zone',
				text: 'What is my Flood Zone?',
				endpoint: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/DSD_Viewer_Services/DSD_Viewer_Nature/MapServer/0'
			},
			{
				id: 'commissioner',
				text: 'Who is my Commissioner?',
				endpoint: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/FMEO/CommissionDist/MapServer/0'
			},
			{
				id: 'evacuation-zone',
				text: 'What is my Evacuation Zone?',
				endpoint: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/Heat/Evaczones/MapServer/0'
			},
			{
				id: 'wind-debris',
				text: 'Am I in the 140 MPH Wind Borne Debris area?',
				endpoint: 'https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/infoLayers/MapServer/1'
			}
		]
	},
	mutations: {
		setSelected (state, data) {
			state.selected = data
		},
		setIsAsing (state, data) {
			state.isAsking = data
		}
	},
	actions: {
		setQuestion ({commit, getters}, qid) {
			if (qid) {
				commit('setSelected', getters.questionById(qid))
			}
		},
		askQuestion ({rootState, getters, commit}, questionId) {
			commit('setAnswer', null)
			commit('setIsAsing', true)
			return new Promise( (resolve, reject) => {
				esriLoader.dojoRequire([
					"esri/tasks/QueryTask",
					"esri/tasks/support/Query"
				], (QueryTask, Query) => {
					var query = new Query()

					if (questionId == 'hauler') {
						query.where = 'FolioNo=' + rootState.address.parcel.attributes.FOLIO
					} else {
						query.geometry = rootState.address.parcel.geometry
					}

					query.returnGeometry = false
					query.outFields = ['*']

					var queryTask = new QueryTask({
						url: getters.questionById(questionId).endpoint
					})
					queryTask.execute(query).then(response => {
						if (response.features.length) {
							commit('setAnswer', response.features[0].attributes)
							commit('setIsAsing', false)
							resolve(true)
						} else {
							throw 'no-answer'
						}
					}).otherwise(err => {
						// commit('showAlert', err)
						commit('setIsAsing', false)
						commit('setAnswer', false)
						resolve(false)
					})
				});
			})
		}
	},
	getters: {
		questionById: (state, getters) => (id) => {
			return state.index.find(q => q.id === id)
		}
	}
}
