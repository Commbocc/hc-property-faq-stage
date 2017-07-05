<template>
	<div id="address-form">

		<form @submit.prevent="search()">
			<div class="form-group">
				<div class="input-group input-group-md">
					<input class="form-control" v-model="$store.state.inputAddress" :placeholder="$store.state.inputAddressPlaceholder" autocomplete="off" required>
					<span class="input-group-btn">

						<button class="btn" :class="btn_class" type="submit">
							<i v-if="$store.state.is_address_loading" class="fa fa-spinner fa-spin fa-fw"></i>
							<i v-else class="fa fa-fw fa-search"></i>
							Find
						</button>

					</span>
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
	},
	computed: {
		btn_class () {
			return (this.$store.state.is_address_loading) ? 'btn-warning disabled' : 'btn-info'
		}
	}
}
</script>

<style scope>
.btn {
	white-space: nowrap;
}
</style>
