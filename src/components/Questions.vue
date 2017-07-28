<template lang="html">
	<div>

		<router-view></router-view>

		<section class="panel panel-info">
			<header class="panel-heading">
				<h4 class="panel-title">
					{{ panelTitle }} {{ folio }}
				</h4>
			</header>

			<div class="panel-body">
				<select v-model="selected" class="form-control" @change="jump" @focus="reset">
					<option selected disabled :value="null">I want to know...</option>
					<option v-for="question in questions" :value="question.id">
						{{ question.text }}
					</option>
				</select>
			</div>

			<!-- <div class="list-group small">
				<router-link v-for="question in questions" :to="questionRoute(question.id)" :key="question.id" class="list-group-item">
					{{ question.text }}
				</router-link>
			</div> -->
		</section>

	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'questions',
	props: ['folio'],
	data () {
		return {
			panelTitle: 'Information for Folio #',
			selected: null
		}
	},
	computed: mapState({
		questions: state => state.questions.index
	}),
	methods: {
		jump (e) {
			this.$router.push(this.questionRoute(e.target.value))
		},
		reset () {
			this.selected = null
		},
		questionRoute (question_id) {
			return {
				name: 'Results',
				params: {
					folio: this.folio,
					question_id: question_id
				}
			}
		}
	}
}
</script>

<style scoped>
.panel-heading {
	/*background: #eee;*/
}
</style>
