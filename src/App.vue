<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
import * as esriLoader from 'esri-loader'

export default {
	name: 'app',
	beforeMount () {
		if (!esriLoader.isLoaded()) {
			esriLoader.bootstrap((err) => {
				if (err) { console.error(err) }
			}, {
				url: 'https://js.arcgis.com/4.3'
			})
		}
	}
}
</script>
