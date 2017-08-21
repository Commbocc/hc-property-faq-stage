<template lang="html">
	<form class="form-inline" method="post" action="https://www.formstack.com/forms/index.php" target="_blank">

		<input type="hidden" name="form" :value="formstack.form" />
		<input type="hidden" name="viewkey" :value="formstack.viewkey" />
		<input type="hidden" :name="formstack.field_address" :value="$store.state.address.input" />
		<input type="hidden" :name="formstack.field_folio" :value="$store.state.address.folio" />
		<input type="hidden" :name="formstack.field_endpoint" :value="endpoint" />
		<input type="hidden" :name="formstack.field_url" :value="currentPage" />
		<input type="hidden" :name="formstack.field_state" :value="JSON.stringify(stateData, null, '\t')" />

		<button type="submit" :class="btnClass">
			<slot></slot>
		</button>

		<!-- <details class="small"><pre class="small" style="background:0;border:0;">{{ stateData }}</pre></details> -->
	</form>
</template>

<script>
import { mapGetters } from 'vuex'
import _ from 'lodash'

export default {
	name: 'feedback-form',
	props: ['btnClass'],
	data () {
		return {
			// FormStack
			formstack: {
				form: '2719344',
				viewkey: 'J7qwJEECVj',
				field_address: 'address',
				field_url: 'url',
				field_folio: 'folio',
				field_endpoint: 'endpoint',
				field_state: 'application_state'
			}
		}
	},
	computed: {
		...mapGetters([
			'questionById'
		]),
		currentPage () {
			return window.location.href
		},
		endpoint () {
			return this.questionById('hauler').endpoint
		},
		stateData () {
			return _.pick(this.$store.state, [
				'answer',
				'alerts.active',
				'address.input',
				'address.folio',
				'address.geoResponse'
			])
		}
	}
}
</script>

<style scoped lang="css">
	.form-inline {
		display: inline;
	}
</style>
