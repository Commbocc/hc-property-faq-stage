<template>
	<div id="app">

		<address-form></address-form>

		<select-questions v-if="$store.state.show_questions"></select-questions>

		<alert v-for="item in $store.state.alerts.active" :item="item" :key="item"></alert>

		<router-view v-if="!$store.state.is_result_loading"></router-view>
		<div v-else class="text-center">
			<p class="h1">
				<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
			</p>
		</div>

		<!-- <hr class="visible-xs-block"> -->

	</div>
</template>

<script>
import AddressForm from '@/components/AddressForm'
import SelectQuestions from '@/components/SelectQuestions'
import Alert from '@/components/Alert'

export default {
	name: 'app',
	components: {
		'address-form': AddressForm,
		'select-questions': SelectQuestions,
		'alert': Alert,
	},
	data () {
		return {}
	},
	methods: {
		checkIfAnswerable () {
			if (!this.$store.state.selected_question && !this.$store.state.addr_form_resp_location) {
				this.$store.dispatch('updateQuestion', this.$route.path.substring(1)).then(()=>{
					this.$router.replace({ path: '/', query: this.$route.query })
				})
				return false
			} else {
				return true
			}
		}
	},
	watch: {
		'$route': function() {
			this.checkIfAnswerable()
			this.$store.commit('clearAlerts')
		},
		'$store.getters.askWatcher': function() {
			// console.log('askWatcher')
			if ( this.checkIfAnswerable() ) {
				this.$store.dispatch('askQuestion')
			}
		}
	},
	mounted () {
		this.checkIfAnswerable()

		//
		if (window.selected_question) {
			this.$store.state.show_questions = false
			this.$store.state.selected_question = window.selected_question
		} else if (parseInt(this.$route.query.qs) === 0) {
			this.$store.state.show_questions = false
		} else {
			this.$store.state.show_questions = true
		}
	}
}
</script>

<style media="screen">
	body {
		background: #fff;
	}
</style>
