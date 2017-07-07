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

		<esri-web-map portalId="3df5b4b240e54308843253e13ed8f0f0"></esri-web-map>

		<!-- <pre>{{ $store.state.answer }}</pre> -->

	</div>
</template>

<script>
import EsriWebMap from '@/components/esri/WebMap'

export default {
	name: 'commissioner-results',
	components: {
		'esri-web-map': EsriWebMap
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
