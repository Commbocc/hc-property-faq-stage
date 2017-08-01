import * as esriLoader from 'esri-loader'
import _ from 'underscore'

export default {
	state: {
		index: [
			{
				id: null,
				ids: ['REPUBLIC WASTE'],
				name: 'Republic Services',
				address: '5210 W Linebaugh Ave,<br> Tampa, Fl 33624',
				phone: '(813) 265-0292',
				fax: '(813) 961-3534',
				email: 'republicservicesCSR@repsrv.com',
				website: 'http://republicservices.com'
			},
			{
				id: null,
				ids: ['WASTE CONNECTIONS', 'PROGRESSIVE WASTE SOLUTIONS'],
				name: 'Waste Connections, Inc.',
				address: '5135 Madison Ave,<br> Tampa, Fl 33619',
				phone: '(813) 248-3802',
				fax: '(813) 248-3606',
				email: 'cs-tampa@progressivewaste.com',
				website: 'http://progressivewaste.com'
			},
			{
				id: 4,
				ids: ['WASTE MANAGEMENT', 'WASTE MANAGEMENT OF TAMPA'],
				name: 'Waste Management of Tampa',
				address: '3411 N 40th St,<br> Tampa, Fl 33605',
				phone: '(813) 621-3053',
				fax: '(813) 740-8210',
				email: 'CentralFloridaService@wm.com',
				website: 'http://wm.com'
			}
		]
	},
	getters: {
		myProvider: (state, getters, rootState) => {
			if (rootState.answer) {
				return _.chain(state.index).filter( provider => {
					return _.contains(provider.ids, rootState.answer.Provider)
				}).first().value()
			} else {
				return null
			}
		},
		daysOfWeek: (state, getters) => (str) => {
			var milidays = _.map(strToDowIntsArr(str), (dow) => {
				return nextXday(dow)
			})
			var dows = _.map(milidays, (d) => {
				var date = new Date(d)
				var options = { weekday: 'long' }
				var date_str = date.toLocaleDateString('en-US', options)
				return date_str.split(',')[0]+'s'
			})
			return dows.join(' & ')
		},
		nextPickupDays: (state, getters) => (search_str, is_recycling=false) => {
			var milidays = _.map(strToDowIntsArr(search_str), (dow) => {
				return nextXday(dow)
			}).sort()

			return _.map(milidays, (d) => {
				var date = new Date(d)
				var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
				var date_str = date.toLocaleDateString('en-US', options)
				if (isHoliday(date, is_recycling)) { date_str = "HOLIDAY - NO PICKUP: " + date_str }
				return date_str
			})
		}
	}
}

// helpers

var strToDowIntsArr = function(search_str='') {
	var dows = [
		{str: 'sun', dow: 0},
		{str: 'mon', dow: 1},
		{str: 'tue', dow: 2},
		{str: 'wed', dow: 3},
		{str: 'thu', dow: 4},
		{str: 'fri', dow: 5},
		{str: 'sat', dow: 6}
	]
	return _.chain(dows).map((dow_obj) => {
		return (search_str.toLowerCase().indexOf(dow_obj.str) >= 0) ? dow_obj.dow : false
	}).compact().value()
}

var nextXday = function(dow) {
	var d = new Date()
	// var d = new Date('5/24/2017')
	// var d = new Date('6/28/2017')
	return d.setDate(d.getDate() + (dow + 7 - d.getDay()) % 7)
}

var isHoliday = function(test_date, is_recycling=false) {
	var temp_date, date_d, date_m, date_w, date_wnum, date_str1, date_str2, date_str3

	// new years, independence, christmas
	date_d = test_date.getUTCDate()
	date_m = test_date.getUTCMonth() + 1
	date_str1 = [date_m, date_d].join('/')
	if (date_str1 === '1/1' && is_recycling) {
		return false
	}
	if (date_str1 === '1/1' || date_str1 === '7/4' || date_str1 === '12/25') {
		return true
	}

	// labor, thanksgiving
	date_w = test_date.getUTCDay()
	date_wnum = Math.floor((date_d - 1) / 7) + 1
	date_str2 = [date_m, date_wnum, date_w].join('/')
	if (date_str2 === '9/1/1' || date_str2 === '11/4/4') {
		return true
	}

	// memorial
	temp_date = new Date(test_date)
	temp_date.setDate(1)
	temp_date.setMonth(temp_date.getMonth() + 1)
	temp_date.setDate(temp_date.getDate() - 1)
	date_wnum = Math.floor((temp_date.getDate() - date_d - 1) / 7) + 1
	date_str3 = [date_m, date_wnum, date_w].join('/')
	if (date_str3 === '5/1/1') {
		return true
	}

	// else
	return false
}
