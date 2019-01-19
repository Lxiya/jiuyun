<template>
	<div>
		<div class="integral-list-item">
			<div class="item-img" :class="{'big-img':showBig}">
				<img v-lazy="item.imageUrl" alt>
			</div>
			<div class="item-title">
				<span>{{item.name}}</span>
			</div>
			<div class="item-integral">
				<div class="item-icon">
					<img src="static/images/integral-icon.png" alt>
				</div>
				<div class="item-number">
					<span>{{item.exIntegral}} 积分可兑换</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'IntegralExchange',
	props: {
		item: Object,
		showBig: Boolean
	}
}
</script>

<style lang="stylus" scoped>
.integral-list-item
	display flex
	flex-direction column
	background-color #fff
	padding 0.2rem 0.24rem
	margin-bottom 0.25rem
.item-img
	img
		display block
		width 2.7rem
		height 2.7rem
		margin 0 auto
	&.big-img
		img
			height auto
.item-title
	max-height 0.8rem
	overflow hidden
	text-overflow ellipsis
	margin-bottom 0.16rem
	span
		display block
		font-size 0.28rem
		line-height 0.4rem
		color #333333
.item-integral
	display flex
	align-items center
	.item-icon
		margin-right 0.1rem
		img
			display block
			width 0.35rem
			height 0.35rem
	.item-number
		display flex
		span
			margin-top 0.05rem
			font-size 0.32rem
			color #00c400
</style>
