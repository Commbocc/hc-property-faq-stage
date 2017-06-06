<template>
	<div id="address-form">

		<form @submit.prevent="search()">
			<div class="form-group">
				<div class="input-group">
					<input class="form-control" v-model="$store.state.inputAddress" :placeholder="$store.state.inputAddressPlaceholder" autocomplete="off" required>
					<span class="input-group-btn">
						<button class="btn btn-info" type="submit">
							<span class="glyphicon glyphicon-search" aria-hidden="true"></span>
							Find
						</button>
					</span>
				</div>
				<div v-if="$store.state.addr_form_resp_addr" class="help-block label label-success">
					{{ $store.state.addr_form_resp_addr }}
				</div>
			</div>
		</form>

	</div>
</template>

<script>
export default {
	name: 'address-form',
	methods: {
		search () {
			this.$store.dispatch('findAddress')
		}
	}
}
</script>

<style scoped>
</style>
