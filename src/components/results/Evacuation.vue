<template>
	<div class="evacuation">
		<h1>{{ title }}</h1>

		<pre>{{ $store.state.answer }}</pre>

		<!-- <esri-geo-map></esri-geo-map> -->

	</div>
</template>

<script>
// import EsriGeoMap from '@/components/esri/GeoMap'
export default {
	name: 'evacuation-results',
	data () {
		return {
			title: 'Evacuation'
		}
	},
	components: {
		// 'esri-geo-map': EsriGeoMap
	},
	computed: {
		// isInArea () {
		// 	if (this.$store.getters.theQuestion) {
		// 		var bool = this.$store.state.answer.attributes[this.$store.getters.theQuestion.attr_field]
		// 		return !bool
		// 	}
		// }
	}
}
</script>
