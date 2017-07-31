<template>
	<div v-if="item" class="alert" :class="alertClass">
		<button type="button" class="close" aria-label="Close" @click="removeAlert(item)">
			<span aria-hidden="true">&times;</span>
		</button>

		<p>
			<i class="fa fa-fw" :class="icon" aria-hidden="true"></i>
			<strong>{{ item.title }}</strong>
		</p>

		<div v-html="item.text"></div>

	</div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
	name: 'alert',
	props: ['item'],
	computed: {
		alertClass () {
			return (this.item.alert_class) ? this.item.alert_class : 'alert-warning'
		},
		icon () {
			switch (this.alert_class) {
				case 'alert-warning': {
					return 'fa-warning'
					break;
				}
				case 'alert-danger': {
					return 'fa-times-rectangle'
					break;
				}
				case 'alert-success': {
					return 'fa-check-circle'
					break;
				}
				default: {
					return 'fa-info-circle'
				}
			}
		}
	},
	methods: mapMutations([
		'removeAlert'
	])
}
</script>
