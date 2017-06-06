<template>
	<div class="wind-debris">
		<h1>{{ title }}</h1>

		<p class="h2">
			<span class="label label-info" v-text="response"></span>
		</p>

		<!-- <esri-geo-map></esri-geo-map> -->

	</div>
</template>

<script>
// import EsriGeoMap from '@/components/esri/GeoMap'
export default {
	name: 'wind-results',
	data () {
		return {
			title: 'Wind Debris'
		}
	},
	components: {
		// 'esri-geo-map': EsriGeoMap
	},
	computed: {
		isInAreA () {
			if (this.$store.state.answer) {
				var bool = this.$store.state.answer[this.$store.getters.theQuestion.attr_field]
				return !bool
			} else {
				return false
			}
		},
		response () {
			return (this.isInAreA) ? 'You Are': 'You Are Not'
		}
	}
}
</script>
