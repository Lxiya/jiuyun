<template>
	<div>
		<div class="success">
			<div class="success-img">
				<img src="static/images/success-icon.png" alt>
			</div>
			<slot name="success-type"></slot>
			<slot name="success-instructions"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Success'
}
</script>

<style lang="stylus" scoped>
.success
	margin-top 2.67rem
	.font-green
		margin-top 0.63rem
		color #00a100
		font-size 0.3rem
	.success-img
		img
			display block
			width 1rem
			height auto
			margin 0 auto
</style>

