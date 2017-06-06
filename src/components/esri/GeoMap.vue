<template lang="html">
	<div class="embed-responsive embed-responsive-16by9 thumbnail">
		<div id="mapDiv" class="embed-responsive-item"></div>
	</div>
</template>

<script>
import * as esriLoader from 'esri-loader'
export default {

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
			'esri/Graphic',
			'esri/symbols/SimpleFillSymbol',
			// 'esri/widgets/Home',
		], (WebMap, MapView, Graphic, SimpleFillSymbol) => {

			this.webmap = new WebMap({
				portalItem: {
					id: 'b51fb4e76e154e1b93b630eac3ea94ae'
				}
			})

			this.mapview = new MapView({
				container: 'mapDiv',
				map: this.webmap
			})

			this.graphic = new Graphic({
				geometry: this.$store.state.answer.geometry,
				symbol: new SimpleFillSymbol({
					color: [ 255, 0, 0, 0.9 ],
					style: "solid",
					outline: {
						color: "white",
						width: 1
					}
				})
			})
			// console.log(this.graphic)

			this.mapview.graphics.add(this.graphic)

			// this.mapview.spatialReference = this.$store.state.answer.geometry.spatialReference

			this.mapview.then( (mv) => {
				mv.extent = this.graphic.extent
			})

		})
	}

}
</script>
