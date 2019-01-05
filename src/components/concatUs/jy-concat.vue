<template>
	<div>
		<div class="concat page-with-nav-top">
			<NavTop :title="title"/>
			<RadiusBg>
				<div class="concat-content" slot="content">
					<div class="concat-wrapper company-address">
						<h1>公司地址</h1>
						<h2>山东云子电子商务有限公司</h2>
						<h3>山东省济南市绿地中央广场C3地块A座22层</h3>
					</div>
				</div>
			</RadiusBg>

			<RadiusBg>
				<div class="concat-content" slot="content" style="margin-bottom:0">
					<div class="concat-wrapper company-phone">
						<h1>公司电话</h1>
						<h2>有意向加盟、咨询问题、询问酒水</h2>
						<h3>0531-58676918</h3>
						<p class="btn-call">立即拨打</p>
					</div>
				</div>
			</RadiusBg>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyConcat',
	data() {
		return {
			// 头部导航配置参数
			title: '联系我们'
		}


	}
}
</script>

<style lang="stylus" scoped>
.page-with-nav-top.concat
	padding-top 1.26rem
.concat-content
	padding 0.5rem 0 0.7rem 0
	margin-bottom 0.3rem
	.concat-wrapper
		display flex
		flex-direction column
		justify-content center
		align-items center
		// margin-bottom 0.3rem
		h1
			font-size 0.36rem
			color #25a934
			margin-bottom 0.5rem
		h2
			font-size 0.3rem
			color #555555
			margin-bottom 0.5rem
		h3
			font-size 0.3rem
			color #444444
		&.company-phone
			h2
				font-size 0.24rem
				margin-bottom 0.35rem
			h3
				font-size 0.48rem
			p.btn-call
				margin-top 0.6rem
				padding 0.17rem 0.6rem
				font-size 0.28rem
				color #fff
				background-color #ff5a32
				border-radius 0.2rem
</style>

