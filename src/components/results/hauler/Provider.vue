<template lang="html">
	<div v-if="provider" class="">
		<strong>{{ provider.name }}</strong><br>
		<span v-html="provider.address"></span><br>
		<i class="fa fa-fw fa-phone"></i> <span class="sr-only">Phone:</span> {{ provider.phone }}<br>
		<i class="fa fa-fw fa-fax"></i> <span class="sr-only">Fax:</span> {{ provider.fax }}<br>
		<i class="fa fa-fw fa-envelope"></i> <span class="sr-only">Email:</span>
		<a :href="'mailto:'+provider.email" v-text="provider.email"></a><br>
		<i class="fa fa-fw fa-globe"></i> <span class="sr-only">Web:</span>
		<a :href="provider.website" target="_blank">Website</a>
	</div>
</template>

<script>
export default {
	name: 'provider-info',
	props: ['provider']
}
</script>
