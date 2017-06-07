<template>
	<div class="evacuation">

		<p v-if="zone" class="h2 text-center">
			Zone: {{ zone.letter }}

			<i class="fa fa-fw fa-square" :style="iconStyle()"></i>

			<br>

			<em class="small">
				{{ zone.description }}
			</em>
		</p>
		<p v-else class="h2 text-center">
			You are not in an Evacuation Zone.
		</p>

		<!-- <esri-geo-map></esri-geo-map> -->

		<details open>
			<ul>
				<li v-for="zone in $store.state.evacuation_zones.index">
					<i class="fa fa-fw fa-square" :style="iconStyle(zone)"></i>
					Zone {{ zone.letter }}:
					{{ zone.description }}
				</li>
			</ul>
		</details>

	</div>
</template>

<script>
// import EsriGeoMap from '@/components/esri/GeoMap'
export default {
	name: 'evacuation-results',
	components: {
		// 'esri-geo-map': EsriGeoMap
	},
	computed: {
		zone () {
			if (this.$store.state.answer) {
				return this.$store.getters.evacZoneById(this.$store.state.answer.attributes.CAT)
			} else {
				return false
			}
		}
	},
	methods: {
		iconStyle (zone=false) {
			var color = (zone) ? zone.color : this.zone.color
			return `color: ${color};`
		}
	}
}
</script>
