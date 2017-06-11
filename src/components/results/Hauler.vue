<template>
	<div id="hauler">

		<section v-if="$store.state.hauler.show_hauler_data" class="panel panel-default">
			<header class="panel-heading">
				<strong>Address:</strong>
				{{ $store.state.hauler.hauler_data.Address }}
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
									{{ $store.state.hauler.garbageDays }}
								</strong>
								<ul class="small list-unstyled">
									<li v-for="date in $store.state.hauler.nextGarbageDays">
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
									{{ $store.state.hauler.recycleDays }}
								</strong>
								<ul class="small list-unstyled">
									<li v-for="date in $store.state.hauler.nextRecycleDays">
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
									{{ $store.state.hauler.yardWasteDays }}
								</strong>
								<ul class="small list-unstyled">
									<li v-for="date in $store.state.hauler.nextYardWasteDays">
										{{ date }}
									</li>
								</ul>
							</td>
						</tr>
						<tr>
							<th>Provider</th>
							<td v-if="$store.getters.provider">
								<strong>{{ $store.getters.provider.name }}</strong><br>
								<span v-html="$store.getters.provider.address"></span><br>
								<i class="fa fa-fw fa-phone"></i> <span class="sr-only">Phone:</span> {{ $store.getters.provider.phone }}<br>
								<i class="fa fa-fw fa-fax"></i> <span class="sr-only">Fax:</span> {{ $store.getters.provider.fax }}<br>
								<i class="fa fa-fw fa-envelope"></i> <span class="sr-only">Email:</span>
								<a :href="'mailto:'+$store.getters.provider.email" v-text="$store.getters.provider.email"></a>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>

	</div>
</template>

<script>
export default {
	name: 'hauler-results',
	methods: {
		fetchHaulerInfo () {
			if (this.$store.state.addr_form_resp_addr) {
				this.$store.dispatch('fetchParcel').then(()=>{
					if (this.$store.state.addr_form_resp_parcel) {
						this.$store.dispatch('fetchHaulerInfo', this.$store.state.addr_form_resp_parcel.FOLIO)
					} else {
						this.$router.replace({ path: '/' })
					}
				})
			} else {
				this.$router.replace({ path: '/' })
			}
		}
	},
	watch: {
		'$store.getters.askWatcher': function() {
			this.fetchHaulerInfo()
		}
	},
	mounted () {
		this.fetchHaulerInfo()
	}
}
</script>
