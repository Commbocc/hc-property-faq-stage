<template>
	<div class="flood-zone">
		<p class="h2 text-center">

			Zone: {{ zone }}

			<br>

			<em class="small">
				{{ floodway }}
			</em>
		</p>

		<esri-web-map portalId="aa4ea5c805c54f378d228fe8439f0819"></esri-web-map>

		<div class="alert alert-info small">
			<p class="small">
				Flood map layers contain large amounts of geographical data, please allow time for them to load in their entirety.
			</p>
		</div>

	</div>
</template>

<script>
import EsriWebMap from '@/components/esri/WebMap'

export default {
	name: 'flood-results',
	components: {
		'esri-web-map': EsriWebMap
	},
	computed: {
		zone () {
			if (this.$store.state.answer) {
				return this.$store.state.answer.attributes.FLD_ZONE
			}
		},
		floodway () {
			if (this.$store.state.answer) {
				return this.$store.state.answer.attributes.FLOODWAY
			}
		}
	}
}
</script>
