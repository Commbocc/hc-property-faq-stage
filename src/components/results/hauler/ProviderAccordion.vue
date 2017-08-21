<template lang="html">
	<div v-if="providers" class="panel-group mb-0" id="providerAccordion" role="tablist" aria-multiselectable="true">
		<aside v-for="(provider, index) in providers" :key="index" class="panel panel-danger">
			<a role="button" id="headingOne" class="btn btn-default btn-block btn-sm" data-toggle="collapse" data-parent="#providerAccordion" :href="`#collapse${index}`" aria-expanded="true" :aria-controls="`collapse${index}`">
				<i class="fa fa-fw fa-info-circle pull-left"></i>
				{{ provider.name }}
			</a>
			<div :id="`collapse${index}`" class="panel-collapse collapse" role="tabpanel" :aria-labelledby="`heading${index}`">
				<div class="panel-body">

					<provider-info :provider="provider"></provider-info>

				</div>
			</div>
		</aside>
	</div>

</template>

<script>
import { mapState } from 'vuex'
import ProviderInfo from '@/components/results/hauler/Provider'

export default {
	components: {
		ProviderInfo
	},
	computed: mapState({
		providers: state => state.hauler.index
	})
}
</script>

<style lang="css">
#providerAccordion {
}
.panel {
	border: 0;
}
.panel-group {
	margin-bottom: 0;
}
</style>
