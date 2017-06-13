export const alerts = {
	state: {
		active: [],
		index: [
			// general
			{
				id: 'general',
				title: 'General Error',
				text: 'An error has occured.'
			},
			// {
			// 	id: 'timeout',
			// 	title: 'Timeout',
			// 	text: 'It\'s taking longer than expected.',
			// 	alert_class: 'alert-danger'
			// },

			// geoservice
			{
				id: 'no-address',
				title: 'Address Not Found',
				text: 'The address appears to be invalid.'
			},
			{
				id: 'no-parcel',
				title: 'No Parcel',
				text: 'No parcel information could be found. Try using another address near you.'
			},

			// hauler
			{
				id: 'no-sw-info',
				title: 'Hmmm… your address isn’t associated with any collection information. Here are some things you can try:',
				text: '<ol><li>Confirm the address and search again.</li><li>Search the City of Tampa\'s <a href="https://apps.tampagov.net/mygovtsvcs_webapp/AddrForm.aspx" target="_blank"><u>Solid Waste Look Up Tool</u></a></li><li>Or, help us improve this service by submitting your address so we can improve our database.</li></ol>',
				feedback: {
					btn_text: 'Submit Address',
					icon: 'fa-share'
				}
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
