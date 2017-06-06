export const alerts = {
	state: {
		active: [],
		index: [
			// general

			// hauler

		]
	},
	mutations: {
		showAlert (state, id) {
			state.active.unshift( state.index.find(alert => alert.id === id) )
		}
	}
}
