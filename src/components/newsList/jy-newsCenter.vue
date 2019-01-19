<template>
	<div>
		<div class="news-center page-with-nav-top">
			<div class="news-center-list">
				<!-- a news start -->
				<div class="list-item" v-for="(item,index) in newsList">
					<router-link :to="{path:'/index/news/newsContent/'+item.id+''}">
						<div class="item-title">{{item.artName}}</div>
						<div class="item-intro">{{item.jianjie}}</div>
						<div class="item-time-detail">
							<div class="time">{{item.createTime2}}</div>
							<div class="go-detail">
								查看详情
								<span class="lt">&gt;</span>
							</div>
						</div>
					</router-link>
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
			title: '新闻中心',

			newsList: []
		}
	},
	created() {
		this.$http.get('/app/index/newsList', {
			params: {
				page: 1,
				size: 10
			}
		}).then(reponse => {
			setTimeout(() => {
				reponse = reponse.body
				this.newsList = reponse.data.list

				console.log(reponse)
			}, 500);
		})
	}
}
</script>

<style lang="stylus">
.news-center
	.news-center-list
		.list-item
			padding 0.43rem 0.35rem
			margin-bottom 0.26rem
			background-color #fff
			&:last-child
				margin-bottom 0
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

