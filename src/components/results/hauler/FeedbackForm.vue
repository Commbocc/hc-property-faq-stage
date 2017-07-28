<template lang="html">
	<form method="post" action="https://www.formstack.com/forms/index.php" target="_blank">

		<input type="hidden" name="form" :value="formstack.form" />
		<input type="hidden" name="viewkey" :value="formstack.viewkey" />
		<input type="hidden" :name="formstack.field_address" :value="$store.state.addr_form_resp_addr" />
		<input type="hidden" :name="formstack.field_url" :value="currentPage" />
		<input type="hidden" :name="formstack.field_state" :value="JSON.stringify(stateData, null, '\t')" />

		<details class="small">
			<pre class="small">{{ stateData }}</pre>
		</details>

		<p class="text-center">
			<button type="submit" class="btn btn-sm btn-info">
				{{ btnText }}
				<i class="fa fa-fw fa-1x fa-share" aria-hidden="true"></i>
			</button>
		</p>

	</form>
</template>

<script>
import _ from 'lodash'

export default {
	name: 'feedback-form',
	data () {
		return {
			btnText: 'Submit Address',
			// FormStack
			formstack: {
				form: '2719344',
				viewkey: 'J7qwJEECVj',
				field_address: 'address',
				field_url: 'url',
				field_state: 'application_state',
			}
		}
	},
	computed: {
		currentPage () {
			return window.location.href
		},
		stateData () {
			return _.pick(this.$store.state, [
				'answer',
				'alerts.active',
				'address.input',
				'address.parcel.attributes',
				'address.geoResponse',
			])
		}
	}
}
</script>
