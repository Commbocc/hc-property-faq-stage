<template lang="html">
	<section v-if="answer" class="panel panel-default">

		<header class="panel-heading">
			<h4 class="panel-title text-center">
				{{ response }}
				in the 140 mph Windborne Debris area.
			</h4>
		</header>

		<div class="panel-body">
			<div class="row">
				<div class="col-sm-8 col-sm-push-4">
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</div>
				<div class="col-sm-4 col-sm-pull-8">
					<img :src="flagImgSrc" class="img-responsive center-block">
				</div>
			</div>

		</div>
	</section>
</template>

<script>
import { mapState } from 'vuex'
import FlagYes from '@/assets/wind-flag-yes.png'
import FlagNo from '@/assets/wind-flag-no.png'

export default {
	name: 'wind-debris',
	computed: {
		...mapState([
			'answer'
		]),
		isInAreA () {
			return (this.answer['tag'] === '140 MPH Area')
		},
		response () {
			return (this.isInAreA) ? 'You ARE': 'You ARE NOT'
		},
		flagImgSrc () {
			return (this.isInAreA) ? FlagYes : FlagNo
		}
	}
}
</script>
