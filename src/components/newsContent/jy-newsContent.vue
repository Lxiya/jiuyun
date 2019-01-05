<template>
	<div>
		<div class="news-content page-with-nav-top">
			<NavTop :title="title"/>
			<div class="gray-bg"></div>
			<div class="new-content-detail">
				<div class="detail-title">
					平台最新公告，凡是2018年12月18号之前注
					册用户请注意
				</div>
				<div class="detail-create-time">发布时间：2018-12-30</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyNewsContent',
	data() {
		return {
			title: '新闻详情'
		}
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

