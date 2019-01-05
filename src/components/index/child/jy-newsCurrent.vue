<template>
	<div>
		<RadiusBg>
			<div slot="content">
				<div class="current-news">
					<div class="content-title">
						<h1>新闻热点</h1>
					</div>
					<div class="content-list">
						<!-- a new start -->
						<router-link to="index/news/newsContent">
							<div class="list-item">
								<div class="item-info">
									<span class="item-type">【公告】</span>
									<p class="item-title">9·云在线正式于2019年2月2号正式我我我</p>
								</div>
								<div class="item-time">发布时间：2019-01-02</div>
							</div>
						</router-link>
						<!-- a new end -->
					</div>
				</div>
			</div>
		</RadiusBg>
	</div>
</template>

<script>

export default {
	name: 'jyNewsCurrent'
}
</script>

<style lang="stylus">
.current-news
	.content-title
		h1
			padding 0.3rem 0
			font-size 0.3rem
			color #333
			border-bottom 0.02rem solid rgba(236, 236, 236, 0.8)
			text-indent 0.2rem
	.content-list
		.list-item
			padding 0.35rem 0
			font-size 0.3rem
			color #555555
			border-bottom 0.02rem solid rgba(236, 236, 236, 0.8)
			&:last-child
				border-bottom 0 none
			.item-info
				display flex
				justify-content flex-start
				margin-bottom 0.3rem
				span.item-type
					color #fa7554
				p.item-title
					max-width 5.3rem
					white-space nowrap
					overflow hidden
					text-overflow ellipsis
			.item-time
				font-size 0.24rem
				color #9f9f9f
				text-indent 0.2rem
</style>

