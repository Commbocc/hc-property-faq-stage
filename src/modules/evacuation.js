var find = require('array.prototype.find')

export const evacuation_zones = {
	state: {
		index: [
			{
				id: 1,
				letter: 'A',
				color: '#FD8081',
				description: '74-85 mph Wind Velocity and up to 11 feet Potential High Tide'
			},
			{
				id: 2,
				letter: 'B',
				color: '#FED285',
				description: '96-110 mph Wind Velocity and up to 17 feet Potential High Tide'
			},
			{
				id: 3,
				letter: 'C',
				color: '#FFFE7D',
				description: '111-130 mph Wind Velocity and up to 22 feet Potential High Tide'
			},
			{
				id: 4,
				letter: 'D',
				color: '#CFF382',
				description: '131-155 mph Wind Velocity and up to 31 feet Potential High Tide'
			},
			{
				id: 5,
				letter: 'E',
				color: '#E7BFFE',
				description: '156 and Over mph Wind Velocity and up to 38 feet Potential High Tide'
			},
		]
	},
	getters: {
		evacZoneById: (state) => (id) => {
			return find(state.index, z => z.id === id)
		}
	}
}
