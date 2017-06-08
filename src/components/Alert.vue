<template>
	<div class="alert" :class="alert_class">
		<button type="button" class="close" aria-label="Close" @click="remove()">
			<span aria-hidden="true">&times;</span>
		</button>

		<p>
			<i class="fa fa-fw" :class="icon"></i>
			<strong>{{ title }}</strong>
		</p>

		<div v-html="text"></div>

		<form v-if="show_feedback_form" @submit="hideFeedbackForm()" action="https://www.formstack.com/forms/index.php" class="text-center" enctype="multipart/form-data" method="post" name="fsForm2719344" target="_blank">
			<input name="form" type="hidden" value="2719344">
			<input name="viewkey" type="hidden" value="J7qwJEECVj">
			<input name="_submit" type="hidden" value="1">
			<input name="viewparam" type="hidden" value="685268">
			<input name="field53337621" type="hidden" :value="JSON.stringify($store.state)">

			<button type="submit" class="btn btn-xs btn-link" style="margin-top: 10px;">
				Submit your usage data to help us imporove this service.
			</button>
		</form>

		<!-- <footer v-if="item.footer_txt" class="small">{{ item.footer_txt }}</footer> -->
	</div>
</template>

<script>
export default {
	name: 'alert',
	props: ['item'],
	data () {
		return {
			feedback_submitted: false
		}
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
		},
		show_feedback_form () {
			return (this.item.notify && !this.feedback_submitted)
		}
	},
	methods: {
		remove () {
			this.$store.commit('removeAlert', this.item)
		},
		hideFeedbackForm () {
			this.feedback_submitted = true
		}
	}
}
</script>

<style scoped>
footer {
	margin-top: 10px;
}
</style>
