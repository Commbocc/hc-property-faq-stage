import * as esriLoader from 'esri-loader'

export default {
	state: {
		input: '',
		geoResponse: {
			address: null,
			location: null
		},
		parcel: null
	},
	actions: {
		findAddress ({state, commit, dispatch}) {
			commit('clearAlerts')
			return new Promise((resolve, reject) => {
				esriLoader.dojoRequire([
					"esri/tasks/Locator"
				], (Locator) => {
					var hcLocator = new Locator({
						url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/Geocoding/DBO_composite_address_locator/GeocodeServer",
						outSpatialReference: {wkid: 102100}
					})

					hcLocator.addressToLocations({
						address: { SingleLine: state.input },
						maxLocations: 1
					}).then( response => {
						if (response.length) {
							commit('setAddress', response[0])
							resolve(true)
						} else {
							throw 'address-not-found'
						}
					}).otherwise( err => {
						// console.error(err)
						resolve(false)
					})

				});
			})
		},
		fetchParcel ({state, commit, dispatch}, folio=null) {
			return new Promise((resolve, reject) => {
				esriLoader.dojoRequire([
					"esri/tasks/QueryTask",
					"esri/tasks/support/Query"
				], (QueryTask, Query) => {
					var query = new Query()
					// query.outFields = ['*']
					query.outFields = ['FOLIO', 'SITE_ADDR']
					query.outSpatialReference = {wkid: 102100}
					query.returnGeometry = true
					if (folio) {
						query.where = `FOLIO = '${folio}'`
					} else {
						query.geometry = state.geoResponse.location
					}

					var queryTask = new QueryTask({
						url: "https://maps.hillsboroughcounty.org/arcgis/rest/services/InfoLayers/HC_Parcels/MapServer/0"
					})
					queryTask.execute(query).then( response => {
						if (response.features.length) {
							commit('setParcel', response.features[0])
							resolve(true)
						} else {
							throw 'parcel-not-found'
						}
					}).otherwise( err => {
						// console.error(err)
						resolve(false)
					})
				});
			})
		}
	},
	mutations: {
		setAddress (state, data) {
			state.geoResponse.address = data.address
			state.geoResponse.location = data.location
		},
		setParcel (state, data) {
			state.parcel = data
			state.input = data.attributes.SITE_ADDR
		}
	}
}
