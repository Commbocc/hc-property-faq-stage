<template>
	<div class="evacuation">

		<p class="h2 text-center">
			{{ commissioner.name }}
			
			<small>
				({{ commissioner.party }})

				<br>

				District:
				{{ commissioner.district }}
			</small>
		</p>

		<ul class="list-inline text-center">
			<li>
				{{ commissioner.phone }}
			</li>
			<li>
				<a :href="commissioner.website" target="_blank">Website</a>
			</li>
		</ul>

		<!-- <pre>{{ $store.state.answer }}</pre> -->

		<!-- <esri-geo-map></esri-geo-map> -->

	</div>
</template>

<script>
// import EsriGeoMap from '@/components/esri/GeoMap'
export default {
	name: 'commissioner-results',
	components: {
		// 'esri-geo-map': EsriGeoMap
	},
	computed: {
		commissioner () {
			if (this.$store.state.answer) {
				return {
					name: this.$store.state.answer.attributes.NAME,
					party: this.$store.state.answer.attributes.PARTY,
					district: this.$store.state.answer.attributes.DISTRICT,
					phone: this.$store.state.answer.attributes.PHONE,
					website: this.$store.state.answer.attributes.WEBSITE,
				}
			}
		}
	}
}
</script>
