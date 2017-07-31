// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

Vue.use(VueAnalytics, {
	id: 'UA-63036279-9',
	router
})

var appElem = document.getElementById('app')

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App },
	beforeMount () {
		var qid = appElem.getAttribute('data-selected-question') || window.selected_question || false
		store.dispatch('setQuestion', qid)
	}
})
