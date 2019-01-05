<template>
	<div>
		<div class="radius">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RadiusBg'
}
</script>

<style lang="stylus" scoped>
.radius
	width 92%
	box-sizing border-box
	margin 0 auto
	padding 0 0.15rem
	background-color #fff
	border-radius 0.3rem
	box-shadow 0px 3px 15px rgba(144, 144, 144, 0.1)
</style>

