<template lang="html">
	<section class="panel panel-default">

		<header class="panel-heading">
			<h4 class="panel-title text-center">
				<template v-if="answer">
					Evacuation Zone: {{ zone.letter }}
					<i class="fa fa-fw fa-square" :style="iconStyle"></i>
					<small>
						<br>
						{{ zone.description }}
					</small>
				</template>
				<template v-else>
					You are not in an Evacuation Zone.
				</template>
			</h4>
		</header>

		<esri-web-map portalId="3e0206ad5efb4af2ae7ed2f44069d7eb"></esri-web-map>

		<!-- <footer class="panel-footer small"></footer> -->
	</section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import EsriWebMap from '@/components/esri/WebMap'

export default {
	name: 'evacuation-zone',
	components: {
		EsriWebMap
	},
	computed: {
		...mapState([
			'answer'
		]),
		...mapGetters([
			'evacZoneById'
		]),
		zone () {
			return this.evacZoneById(this.answer.CAT)
		},
		iconStyle () {
			return `color: ${this.zone.color};`
		}
	}
}
</script>
