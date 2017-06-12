<template>
	<div class="alert" :class="alert_class">
		<button type="button" class="close" aria-label="Close" @click="remove()">
			<span aria-hidden="true">&times;</span>
		</button>

		<p>
			<i class="fa fa-fw" :class="icon" aria-hidden="true"></i>
			<strong>{{ title }}</strong>
		</p>

		<div v-html="text"></div>

		<feedback-form :alert="item"></feedback-form>

		<!-- <footer v-if="item.footer_txt" class="small">{{ item.footer_txt }}</footer> -->
	</div>
</template>

<script>
import AlertFeedbackForm from '@/components/AlertFeedbackForm'

export default {
	name: 'alert',
	props: ['item'],
	components: {
		'feedback-form': AlertFeedbackForm
	},
	computed: {
		title () {
			return (this.item && this.item.title) ? this.item.title : null
		},
		text () {
			return (this.item && this.item.text) ? this.item.text : null
		},
		alert_class () {
			return (this.item && this.item.alert_class) ? this.item.alert_class : 'alert-warning'
		},
		icon () {
			switch (this.alert_class) {
				case 'alert-warning':
				return 'fa-warning'
				break;
				case 'alert-danger':
				return 'fa-times-rectangle'
				break;
				case 'alert-success':
				return 'fa-check-circle'
				break;
				default:
				return 'fa-info-circle'
			}
		}
	},
	methods: {
		remove () {
			this.$store.commit('removeAlert', this.item)
		}
	}
}
</script>

<style scoped>
footer {
	margin-top: 10px;
}
</style>
