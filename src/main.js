// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from './router'
import store from './store'

Vue.use(VueResource)

Vue.config.productionTip = false

var appElem = document.getElementById('app')

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App },
	beforeMount () {
		store.state.selected_question = appElem.getAttribute('data-selected-question') || window.selected_question || false
	}
})
