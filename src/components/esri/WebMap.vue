<template lang="html">
	<div class="embed-responsive embed-responsive-16by9 thumbnail">
		<div id="mapDiv" class="embed-responsive-item"></div>
	</div>
</template>

<script>
import * as esriLoader from 'esri-loader'

export default {
	props: ['portalId'],
	data () {
		return {
			webmap: null,
			mapview: null,
			graphic: null,
		}
	},
	mounted () {
		esriLoader.dojoRequire([
			'esri/WebMap',
			'esri/views/MapView',
			'esri/widgets/Home',
		], (WebMap, MapView, Home) => {

			this.webmap = new WebMap({
				portalItem: {
					id: this.portalId
				}
			})

			this.mapview = new MapView({
				container: 'mapDiv',
				map: this.webmap
			})

			var homeWidget = new Home({
				view: this.mapview
			});

			// adds the home widget to the top left corner of the MapView
			this.mapview.ui.add(homeWidget, "top-left")

		});
	}
}
</script>
