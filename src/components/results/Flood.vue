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

		<blockquote cite="https://www.fema.gov/media-library-data/20130726-1535-20490-7429/appxd.pdf" class="small">
			<p>
				<strong>Zone A:</strong> The Special Flood Hazard Area (except coastal V Zones) shown on a community's Flood Insurance Rate Map. There are five types of A Zones:
				<ul>
					<li><strong>A:</strong> SFHA where no base flood elevation is provided.</li>
					<li><strong>A#:</strong> Numbered A Zones (e.g., A7 or A14), SFHA where the FIRM shows a base flood elevation in relation to NGVD.</li>
					<li><strong>AE:</strong> SFHA where base flood elevations are provided. AE Zone delineations are now used on new FIRMs instead of A# Zones.</li>
					<li><strong>AO:</strong> SFHA with sheet flow, ponding, or shallow flooding. Base flood depths (feet above grade) are provided.</li>
					<li><strong>AH:</strong> Shallow flooding SFHA. Base flood elevations in relation to NGVD are provided.</li>
				</ul>
			</p>
			<p>
				<strong>Zone B:</strong> Area of moderate flood hazard, usually depicted on Flood Insurance Rate Maps as between the limits of the base and 500-year floods. B Zones are also used to designate base floodplains of little hazard, such as those with average depths of less than 1 foot.
			</p>
			<p>
				<strong>Zone C:</strong> Area of minimal flood hazard, usually depicted on Flood Insurance Rate Maps as above the 500-year flood level. B and C Zones may have flooding that does not meet the criteria to be mapped as a Special Flood Hazard Area, especially ponding and local drainage problems.
			</p>
			<p>
				<strong>Zone D:</strong> Area of undetermined but possible flood hazard.
			</p>
			<p>
				<strong>Zone V:</strong> The Special Flood Hazard Area subject to coastal high hazard flooding. There are three types of V Zones: V, V#, and VE, and they correspond to the A Zone designations.
			</p>
			<p>
				<strong>Zone X:</strong> Newer Flood Insurance Rate Maps show Zones B and C (see above) as Zone X.
			</p>

			<footer>
				<a href="https://www.fema.gov/media-library-data/20130726-1535-20490-7429/appxd.pdf" target="_blank">
					Appendix D: Glossary
				</a>
				-
				<cite title="Federal Emergency Management Agency">FEMA</cite>
			</footer>
		</blockquote>

		<!-- <pre v-if="$store.state.answer">{{ $store.state.answer.attributes }}</pre> -->

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
