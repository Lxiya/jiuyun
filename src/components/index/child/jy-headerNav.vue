<template>
	<div>
		<div class="header-nav">
			<RadiusBg>
				<div slot="content">
					<div class="icon-list">
						<router-link to="/index/intro">
							<div class="icon">
								<img src="static/images/projectIntro.png" class="intro" alt>
								<p>项目介绍</p>
							</div>
						</router-link>

						<router-link to="/index/joinUs">
							<div class="icon">
								<img src="static/images/joinUs.png" class="join" alt>
								<p>加盟申请</p>
							</div>
						</router-link>

						<router-link to="/index/newsCenter">
							<div class="icon">
								<img src="static/images/newsCurrent.png" class="news" alt>
								<p>新闻中心</p>
							</div>
						</router-link>

						<router-link to="/index/concat">
							<div class="icon">
								<img src="static/images/concatUs.png" class="concat" alt>
								<p>联系我们</p>
							</div>
						</router-link>
					</div>
				</div>
			</RadiusBg>
		</div>
	</div>
</template>

<script>

export default {
	name: 'jyHeaderNav'
}
</script>

<style lang="stylus">
.header-nav
	.icon-list
		display flex
		justify-content space-around
		padding-top 0.4rem
		padding-bottom 0.5rem
		.icon
			img
				display block
				margin 0 auto
				margin-bottom 0.3rem
				&.intro
					width 0.59rem
					height 0.56rem
				&.join
					width 0.62rem
					height 0.56rem
				&.news
					width 0.61rem
					height 0.59rem
				&.concat
					width 0.62rem
					height 0.59rem
			p
				font-size 0.25rem
				color #333
</style>

