<template>
	<div class="panel panel-default">
		<div class="panel-body">

			<div class="row">
				<div class="col-sm-7 col-sm-push-5">
					<div class="well well-sm h2 text-center">
						{{ response }}
						in the 140 mph Windborne Debris area.
					</div>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>

				</div>
				<div class="col-sm-5 col-sm-pull-7">
					<img :src="flagImgSrc" class="img-responsive center-block">
				</div>
			</div>

		</div>
	</div>
</template>

<script>
import FlagYes from '../../assets/wind-flag-yes.png'
import FlagNo from '../../assets/wind-flag-no.png'

export default {
	name: 'wind-results',
	computed: {
		isInAreA () {
			if (this.$store.state.answer) {
				// this.$store.state.answer.attributes[this.$store.getters.theQuestion.attr_field]
				return this.$store.state.answer.attributes['tag'] === '140 MPH Area'
			} else {
				return false
			}
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

<style scoped>
.h2 {
	margin-top: 0;
}
</style>
