<template lang="html">
	<div class="panel panel-danger">

		<header class="panel-heading">
			<h4 class="panel-title text-center">
				Hauler Data Not Found
			</h4>
		</header>

		<div class="panel-body">
			<p>
				Hmmm... your address isn’t associated with any collection information. Here are some things you can try:
			</p>
			<ol>
				<li>Confirm the address and search again.</li>
				<li>Search the City of Tampa's <a href="https://apps.tampagov.net/mygovtsvcs_webapp/AddrForm.aspx" target="_blank"><u>Solid Waste Look Up Tool</u></a>.</li>
				<li>Or, help us improve this service by submitting your address so we can improve our database.</li>
			</ol>

			<feedback-form></feedback-form>

		</div>

		<ul class="list-group">
			<li v-for="(provider, index) in providers" :key="index" class="list-group-item">
				<provider-info :provider="provider"></provider-info>
			</li>
		</ul>

	</div>
</template>

<script>
import { mapState } from 'vuex'
import ProviderInfo from '@/components/results/hauler/Provider'
import FeedbackForm from '@/components/results/hauler/FeedbackForm'

export default {
	name: 'hauler-not-found',
	components: {
		ProviderInfo,
		FeedbackForm
	},
	computed: mapState({
		providers: state => state.hauler.index
	})
}
</script>
