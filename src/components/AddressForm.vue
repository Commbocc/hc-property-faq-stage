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
import { mapActions, mapMutations } from 'vuex'

export default {
	name: 'address-form',
	data () {
		return {
			loading: false,
			placeholder: 'Your Street Address...'
		}
	},
	computed: {
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
			'findAddress',
			'fetchParcel'
		]),
		...mapMutations([
			'clearAlerts',
			'showAlert'
		]),
		search () {
			this.loading = true
			this.clearAlerts()
			this.findAddress().then(addressFound => {
				if (addressFound) {
					this.fetchParcel().then(parcelFound => {
						if (parcelFound) {
							this.loading = false
							this.$router.replace({ name: 'Search' })
						} else {
							this.throwErr('parcel-not-found')
						}
					})
				} else {
					this.throwErr('address-not-found')
				}
			})
		},
		throwErr (err) {
			this.loading = false
			this.$router.push({
				name: 'Error',
				query: {
					error: err,
					q: this.$store.state.address.input
				}
			})
			this.showAlert(err)
		}
	}
}
</script>

<style scope>
.btn {
	white-space: nowrap;
}
</style>
