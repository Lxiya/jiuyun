<template>
	<div>
		<div class="header-swiper">
			<van-swipe :autoplay="2000" indicator-color="white">
				<van-swipe-item v-for="(image,index) in imagesList" :key="index">
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
			imagesList: []
		}
	},
	computed: {
		images: {
			get() {
				return this.imagesList
			},
			set(newValue) {
				for (let property in newValue) {
					this.imagesList.push(newValue[property])
				}
			}
		}
	},
	created() {
		this.$http.get('/app/index/banner', {
			params: {}
		}).then(reponse => {
			reponse = reponse.body

			this.images = reponse.data
		})
	}
}
</script>

<style lang="stylus" scoped>
.header-swiper
	box-sizing border-box
	img
		display block
		min-width 100%
		max-height 4.38rem
</style>

