<template lang="html">
	<section v-if="answer" class="panel panel-default">
		<header class="panel-heading">
			<strong>Address:</strong>
			{{ address }}
		</header>
		<div class="table-responsive">
			<table class="table table-striped table-bordered">
				<tbody>
					<tr v-for="section in haulerDataSections">
						<td>
							<strong>{{ section.text }}</strong><br>
							<span class="small">
								Next Pickup(s)
							</span>
						</td>
						<td>
							<strong>
								{{ daysOfWeek(section.days) }}
							</strong>
							<ul class="small list-unstyled">
								<li v-for="date in nextPickupDays(section.days, section.isRecycle)">
									{{ date }}
								</li>
							</ul>
						</td>
					</tr>

					<tr>
						<th>Provider</th>
						<td>
							<provider-info :provider="myProvider"></provider-info>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import ProviderInfo from '@/components/results/hauler/Provider'

export default {
	name: 'hauler',
	components: {
		ProviderInfo
	},
	computed: {
		...mapState({
			answer: state => state.answer,
			address: state => state.answer.Property_Address
		}),
		...mapGetters([
			'myProvider',
			'nextPickupDays',
			'daysOfWeek'
		]),
		haulerDataSections () {
			return [
				{
					text: 'Trash Days',
					days: this.answer.Gar__Ser__Days,
					isRecycle: false
				},
				{
					text: 'Recycling Day',
					days: this.answer.Rec__Ser__Days,
					isRecycle: true
				},
				{
					text: 'Yard Waste Day',
					days: this.answer.YW_Ser__Days,
					isRecycle: false
				}
			]
		}
	}
}
</script>
