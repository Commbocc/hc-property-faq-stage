<template lang="html">
	<section v-if="answer" class="panel panel-default">
		<header class="panel-heading">
			<h4 class="panel-title text-center">
				Flood Zone: {{ answer.FLD_ZONE }}
				<br>
				<em class="small">
					{{ answer.FLOODWAY }}
				</em>
			</h4>
		</header>

		<esri-web-map portalId="aa4ea5c805c54f378d228fe8439f0819"></esri-web-map>

		<footer class="panel-footer small">
			Flood map layers contain large amounts of geographical data, please allow time for them to load in their entirety.
		</footer>
	</section>
</template>

<script>
import { mapState } from 'vuex'
import EsriWebMap from '@/components/esri/WebMap'

export default {
	name: 'flood-zone',
	components: {
		EsriWebMap
	},
	computed: mapState([
		'answer'
	])
}
</script>
