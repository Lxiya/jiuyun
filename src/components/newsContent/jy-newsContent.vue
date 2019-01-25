<template>
	<div>
		<div class="news-content">
			<div class="gray-bg"></div>
			<div class="new-content-detail">
				<div class="detail-title">{{newsTitle}}</div>
				<div class="detail-create-time">{{createTime}}</div>
				<div class="detail-content" v-html="content"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyNewsContent',
	data() {
		return {
			// 头部导航配置参数
			title: '新闻详情',

			newsId: '',
			newsTitle: '',
			content: '',
			createTime: ''
		}
	},
	created() {
		this.$toast.loading('加载中...')

		this.newsId = this.$route.params.id

		this.$http.get('/app/index/articleDetail', {
			params: {
				id: this.newsId
			}
		}).then(reponse => {
			setTimeout(() => {
				this.$toast.clear()

				let data = reponse.body.data

				this.newsTitle = data.artName
				this.createTime = data.time
				this.content = data.content
			}, 500);

		})
	}
}
</script>

<style lang="stylus" scoped>
.news-content
	background-color #fff
	.gray-bg
		height 0.2rem
		background-color #f5f5f5
	.new-content-detail
		padding-right 0.33rem
		padding-left 0.33rem
		.detail-title
			padding-top 0.42rem
			font-size 0.34rem
			color #555555
		.detail-create-time
			margin-top 0.32rem
			margin-bottom 0.32rem
			font-size 0.26rem
			color #777777
</style>

