<template>
	<div>
		<div class="header-swiper">
			<van-swipe indicator-color="white">
				<van-swipe-item v-for="(image,index) in images" :key="index">
					<img :src="image">
				</van-swipe-item>
			</van-swipe>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyHeader',
	data() {
		return {
			images: [
				'static/images/banner.png',
				'static/images/banner.png',
				'static/images/banner.png'
			],
			// showIndicators: false
		}
	}
}
</script>

<style lang="stylus" scoped>
.header-swiper
	box-sizing border-box
	img
		display block
		max-width 100%
		height auto
</style>

