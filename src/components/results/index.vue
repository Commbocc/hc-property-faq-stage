<template lang="html">
	<div>

		<div v-if="loading" class="text-center">
			<p class="h1">
				<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
			</p>
		</div>

		<component v-else :is="activeResult"></component>

		<!-- <details><pre>{{ answer }}</pre></details> -->

		<router-view></router-view>

	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Hello from '@/components/Hello'
import Hauler from '@/components/results/hauler/index'
import FloodZone from '@/components/results/FloodZone'
import EvacuationZone from '@/components/results/EvacuationZone'
import Commissioner from '@/components/results/Commissioner'
import WindDebris from '@/components/results/WindDebris'

export default {
	name: 'results',
	props: ['folio', 'question_id'],
	components: {
		Hauler,
		FloodZone,
		EvacuationZone,
		Commissioner,
		WindDebris
	},
	data () {
		return {
			loading: false,
			activeResult: null
		}
	},
	computed: mapState({
		answer: state => state.answer
	}),
	methods: {
		...mapActions([
			'askQuestion'
		]),
		init () {
			this.loading = true
			this.activeResult = null
			this.askQuestion(this.question_id).then(x => {
				if (this.answer === false && this.question_id == 'hauler') {
					this.$router.replace({name: 'HaulerNotFound'})
				}
				this.loading = false
				this.activeResult = this.question_id
			})
		}
	},
	mounted () {
		this.init()
	},
	watch: {
		'$route': function() {
			this.init()
		}
	}
}
</script>
