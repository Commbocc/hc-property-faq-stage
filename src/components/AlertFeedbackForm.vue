<template lang="html">
	<div v-if="feedback_form_shown" class="">
		<br>

		<i class="fa fa-fw" :class="alert.feedback.icon" aria-hidden="true"></i>
		<strong>
			{{ alert.feedback.title }}
		</strong>
		<div v-html="alert.feedback.body"></div>

		<form method="post" action="https://www.formstack.com/forms/index.php" target="_blank">
			<input type="hidden" name="form" :value="formstack.form" />
			<input type="hidden" name="viewkey" :value="formstack.viewkey" />
			<input type="hidden" :name="formstack._app" :value="current_page" />
			<input type="hidden" :name="formstack._field" :value="JSON.stringify(field_value, null, '\t')" />
			<button type="submit" class="btn btn-sm btn-info">
				{{ alert.feedback.btn_text }}
				<i class="fa fa-fw fa-1x" :class="alert.feedback.icon" aria-hidden="true"></i>
			</button>
		</form>
	</div>
</template>

<script>
import _ from 'lodash'

export default {
	props: ['alert'],
	data () {
		return {
			feedback_submitted: false,

			// FormStack
			formstack: {
				form: '2719344',
				viewkey: 'J7qwJEECVj',
				_app: 'application',
				_field: 'application_state',
			}
		}
	},
	computed: {
		feedback_form_shown () {
			return (this.alert.feedback && !this.feedback_submitted)
		},
		current_page () {
			return window.location.href
		},
		field_value () {
			return _.omit(this.$store.state, [
				'questions.index',
				'alerts.index',
				'evacuation_zones.index',
				'hauler.index',
			])
		}
	},
	methods: {
		hideForm () {
			this.feedback_submitted = true
		}
	}
}
</script>

<style scoped>
</style>
