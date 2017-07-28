<template lang="html">
	<section v-if="answer" class="panel panel-default">
		<header class="panel-heading">
			<strong>Address:</strong>
			{{ answer.Property_Address }}
		</header>
		<div class="table-responsive">
			<table class="table table-striped table-bordered">
				<tbody>
					<tr>
						<td>
							<strong>Trash Days</strong><br>
							<span class="small">
								Next Pickups
							</span>
						</td>
						<td>
							<strong>
								{{ daysOfWeek(answer.Gar__Ser__Days) }}
							</strong>
							<ul class="small list-unstyled">
								<li v-for="date in nextPickupDays(answer.Gar__Ser__Days)">
									{{ date }}
								</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>
							<strong>Recycling Day</strong><br>
							<span class="small">
								Next Pickup
							</span>
						</td>
						<td>
							<strong>
								{{ daysOfWeek(answer.Rec__Ser__Days) }}
							</strong>
							<ul class="small list-unstyled">
								<li v-for="date in nextPickupDays(answer.Rec__Ser__Days, true)">
									{{ date }}
								</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>
							<strong>Yard Waste Day</strong><br>
							<span class="small">
								Next Pickup
							</span>
						</td>
						<td>
							<strong>
								{{ daysOfWeek(answer.YW_Ser__Days) }}
							</strong>
							<ul class="small list-unstyled">
								<li v-for="date in nextPickupDays(answer.YW_Ser__Days)">
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
			answer: state => state.answer
		}),
		...mapGetters([
			'myProvider',
			'nextPickupDays',
			'daysOfWeek'
		])
	}
}
</script>
