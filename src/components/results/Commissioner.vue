<template lang="html">
	<section v-if="answer" class="panel panel-info">

		<header class="panel-heading">
			<h4 class="text-center">
				{{ answer.NAME }}
				<small>
					({{ answer.PARTY }})
				</small>
				<small>
					<br>
					District {{ answer.DISTRICT }}
				</small>
			</h4>
		</header>

		<div class="list-group small">
			<a :href="`tel:${answer.PHONE}`" class="list-group-item">
				<i class="fa fa-fw fa-phone"></i>
				{{ answer.PHONE }}
			</a>
			<a :href="answer.WEBSITE" class="list-group-item">
				<i class="fa fa-fw fa-globe"></i>
				Website
			</a>
		</div>

		<esri-web-map portalId="3df5b4b240e54308843253e13ed8f0f0"></esri-web-map>

	</section>
</template>

<script>
import { mapState } from 'vuex'
import EsriWebMap from '@/components/esri/WebMap'

export default {
	name: 'commissioner',
	components: {
		EsriWebMap
	},
	computed: mapState([
		'answer'
	])
}
</script>

<style scoped>
.panel-heading > h4 {
	color: #fff !important;
}
.panel-heading > h4 > small {
	color: #fff !important;
}
</style>
