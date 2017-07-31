export default {
	state: {
		active: [],
		index: [
			{
				id: 'address-not-found',
				title: 'Address Not Found',
				text: 'The address appears to be invalid.'
			},
			{
				id: 'parcel-not-found',
				title: 'No Parcel',
				text: 'No parcel information could be found. Try using another address near yours.'
			}
		]
	},
	mutations: {
		showAlert (state, id) {
			state.active.unshift( state.index.find(alert => alert.id === id) )
		},
		removeAlert (state, alert) {
			state.active.splice( state.active.indexOf(alert), 1 )
		},
		clearAlerts (state) {
			state.active = []
		}
	}
}
