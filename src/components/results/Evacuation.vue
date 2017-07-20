<template>
	<section v-if="$store.state.answer">

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

		<esri-web-map portalId="3e0206ad5efb4af2ae7ed2f44069d7eb"></esri-web-map>

		<details open>
			<ul>
				<li v-for="zone in $store.state.evacuation_zones.index">
					<i class="fa fa-fw fa-square" :style="iconStyle(zone)"></i>
					Zone {{ zone.letter }}:
					{{ zone.description }}
				</li>
			</ul>
		</details>

	</section>
</template>

<script>
import EsriWebMap from '@/components/esri/WebMap'

export default {
	name: 'evacuation-results',
	components: {
		'esri-web-map': EsriWebMap
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
