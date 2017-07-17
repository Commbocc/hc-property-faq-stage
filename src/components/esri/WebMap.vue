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
			'esri/geometry/Point',
			'esri/Graphic',
			'esri/symbols/SimpleFillSymbol',
		], (WebMap, MapView, Home, Point, Graphic, SimpleFillSymbol) => {

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
			})

			// adds the home widget to the top left corner of the MapView
			this.mapview.ui.add(homeWidget, "top-left")

			// highlight parcel
			var graphic = new Graphic({
				geometry: this.$store.state.addr_form_resp_parcel_location,
				symbol: new SimpleFillSymbol({
					color: [0,0,0,0.15],
					style: "solid",
					outline: {
						color: "black",
						width: 1
					}
				})
			})

			// zoom to address
			this.mapview.then( mv => {
				var target = new Point(this.$store.state.addr_form_resp_location)
				mv.goTo({
					target,
					zoom: 18
				})
				mv.graphics.add(graphic);
			})

		});
	}
}
</script>
