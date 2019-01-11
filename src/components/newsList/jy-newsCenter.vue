<template>
	<div>
		<div class="news-center page-with-nav-top">
			<NavTop :title="title"/>
			<div class="news-center-list">
				<!-- a news start -->
				<div class="list-item">
					<div class="item-title">平台最新公告，凡是2018年12月18号</div>
					<div class="item-intro">免费领取一瓶五粮液酒水，时间截止时间在2018年12月30号之前。敬请关注</div>
					<div class="item-time-detail">
						<div class="time">2018-02-21</div>
						<div class="go-detail">
							查看详情
							<span class="lt">&gt;</span>
						</div>
					</div>
				</div>
				<!-- a news end -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyNewsCenter',
	data() {
		return {
			// 头部导航配置参数
			title: '新闻中心'
		}
	},
	created() {
		this.$http.get('/app/index/newsList', {
			params: {}
		}).then(reponse => {
			reponse = reponse.body
			console.log(reponse)
		})
	}
}
</script>

<style lang="stylus">
.page-with-nav-top.news-center
	padding-top 1.22rem
.news-center
	.news-center-list
		.list-item
			padding 0.43rem 0.35rem
			background-color #fff
			.item-title
				margin-bottom 0.25rem
				font-size 0.3rem
				color #333333
			.item-intro
				margin-bottom 0.4rem
				font-size 0.28rem
				color #ababab
				line-height 0.42rem
			.item-time-detail
				display flex
				justify-content space-between
				align-items center
				.time
					font-size 0.28rem
					color #909090
				.go-detail
					font-size 0.26rem
					color #00a000
</style>

