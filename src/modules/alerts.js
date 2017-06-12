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
			// {
			// 	id: 'esri-ie',
			// 	title: 'Browser Error',
			// 	text: 'Stop using internet explorer.'
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
				title: 'No Solid Waste Information',
				text: 'There is no collection information for that address. Please confirm the address and search again, or search the City of Tampa\'s <a href="https://apps.tampagov.net/mygovtsvcs_webapp/AddrForm.aspx" target="_blank"><u>Solid Waste Look Up Tool</u></a>.',
				feedback: {
					title: 'Submit your usage data to help us improve this service',
					body: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>',
					btn_text: 'Send Data',
					icon: 'fa-bullhorn'
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
