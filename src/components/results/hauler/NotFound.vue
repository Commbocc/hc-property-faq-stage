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
				<li>Search the <a href="https://apps.tampagov.net/mygovtsvcs_webapp/AddrForm.aspx" target="_blank"><u>City of Tampa's Solid Waste Look Up Tool</u></a>.</li>
				<li>
					Help us
					<feedback-form btn-class="btn btn-link btn-xs">
						<u>
							improve this service
						</u>
					</feedback-form>
					by submitting your address so we can improve our database.
				</li>
			</ol>

		</div>

		<footer class="panel-footer">
			<provider-accordion></provider-accordion>
		</footer>

	</div>
</template>

<script>
import FeedbackForm from '@/components/results/hauler/FeedbackForm'
import ProviderAccordion from '@/components/results/hauler/ProviderAccordion'

export default {
	name: 'hauler-not-found',
	components: {
		FeedbackForm,
		ProviderAccordion
	}
}
</script>
