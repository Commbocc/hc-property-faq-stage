<template>
	<div id="app">

		<p v-if="devEnv">
			<a href="./">
				<img src="./assets/logo.png" class="img-responsive center-block">
			</a>
		</p>

		<!-- <details><pre>{{ $store.state }}</pre></details> -->

		<address-form></address-form>

		<alert v-for="(item, index) in $store.state.alerts.active" :item="item" :key="index"></alert>

		<router-view></router-view>

	</div>
</template>

<script>
import { mapActions } from 'vuex'
import Alert from '@/components/Alert'
import AddressForm from '@/components/AddressForm'

export default {
	components: {
		Alert,
		AddressForm
	},
	computed: {
		devEnv () {
			return process.env.NODE_ENV == 'development'
		}
	}
}
</script>

<style>
#app {
	/*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
	/*-webkit-font-smoothing: antialiased;*/
	/*-moz-osx-font-smoothing: grayscale;*/
	/*text-align: center;*/
	/*color: #2c3e50;*/
	margin-top: 10px;
}
</style>
