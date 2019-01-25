<template>
	<div>
		<div class="news-center page-with-nav-top">
			<div class="news-center-list">
				<!-- a news start -->
				<van-list v-model="loading" :finished="finished" @load="loadMore" finished-text="没有更多了">
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
				</van-list>
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

			newsList: [],

			// 分页配置
			page: 1,
			size: 10,
			total: 0,
			loading: false,
			finished: false,
		}
	},
	methods: {
		requestData() {
			this.$http.get('/app/index/newsList', {
				params: {
					page: this.page,
					size: this.size
				}
			}).then(reponse => {
				reponse = reponse.body

				if (reponse.data) {
					this.newsList = this.newsList.concat(reponse.data.list)
					this.total = reponse.data.total
				} else {
					this.newsList = []
					this.total = 0
				}

				this.loading = false

				if (this.newsList.length === this.total) {
					this.finished = true
				}
			})
		},

		//加载更多
		loadMore() {
			setTimeout(() => {
				this.requestData()
				this.page++
			}, 500)
		},
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

