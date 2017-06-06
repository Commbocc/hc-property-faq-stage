<template>
	<div v-if="!$parent.question_known" class="form-group">
		<select v-model="$store.state.selected_question" class="form-control">
			<!-- <optgroup label="What is..."></optgroup> -->
			<option selected disabled :value="false">I want to know...</option>
			<option v-for="option in $store.state.questions.index" :value="option.value">
				{{ option.text }}
			</option>
		</select>
	</div>
</template>

<script>
export default {
	name: 'select-questions'
}
</script>
