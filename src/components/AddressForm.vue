<template lang="html">
	<form @submit.prevent="search">
		<div class="form-group">
			<div class="input-group input-group-lg">
				<input class="form-control" v-model="$store.state.address.input" :placeholder="placeholder" autocomplete="off" required>
				<span class="input-group-btn">
					<button class="btn" :class="btnClass" type="submit">
						<i :class="btnIcon"></i>
						<span class="hidden-xs">
							{{ btnText }}
						</span>
					</button>
				</span>
			</div>
		</div>
	</form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	name: 'address-form',
	data () {
		return {
			placeholder: 'Your Street Address...'
		}
	},
	computed: {
		...mapState({
			loading: state => state.address.loading
		}),
		btnText () {
			// return (this.loading) ? 'Loading' : 'Find'
			return 'Find'
		},
		btnClass () {
			return (this.loading) ? 'btn-warning' : 'btn-info'
		},
		btnIcon () {
			return (this.loading) ? 'fa fa-fw fa-spinner fa-spin' : 'fa fa-fw fa-search'
		}
	},
	methods: {
		...mapActions([
			'findAddress'
		]),
		search () {
			this.findAddress().then(addressFound => {
				if (addressFound) {
					this.$router.replace({ name: 'Search' })
				}
			})
		}
	}
}
</script>

<style scope>
.btn {
	white-space: nowrap;
}
</style>
