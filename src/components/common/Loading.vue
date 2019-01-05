<template>
	<div>
		<div class="loading"></div>
	</div>
</template>

<script>
export default {
	name: "Loading",
	props: {
		isShow: Boolean
	}
}
</script>
<style lang="stylus" scoped>
.loading
	display flex
	justify-content center
	align-items center
	position absolute
	left 0
	right 0
	min-height 100vh
	z-index 3
	background-color #000
</style>

