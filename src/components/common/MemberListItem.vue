<template>
	<div class="list-item">
		<router-link :to="{path:'/store/memberDetail/'+item.id+''}">
			<div class="item-wrapper">
				<div class="item-content">
					<div class="item-img">
						<img :src="item.userHeadimg" alt v-if="item.userHeadimg">
						<img src="static/images/member-icon-default-woman.png" alt v-else-if="item.sex ==='女'">
						<img src="static/images/member-icon-default-man.png" alt v-else>
					</div>
					<div class="item-detail">
						<div class="detail">
							<p class="member-name">会员：{{item.nickName}}</p>
							<p class="member-phone">手机：{{item.phoneNumber}}</p>
							<p class="member-integral">积分：{{item.integral}}</p>
						</div>
						<div class="detail-left-arrow">
							<img src="static/images/member-left-arrow.png" alt>
						</div>
					</div>
				</div>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: 'MemberListItem',
	props: {
		item: Object
	}
}
</script>

<style lang="stylus">
.list-item
	&.last-item
		.item-wrapper
			.item-content
				border-bottom 0 none
	.item-wrapper
		background-color #fff
		padding 0 0.21rem
		.item-content
			display flex
			justify-content flex-start
			align-items center
			padding 0.42rem 0.21rem
			border-bottom 0.02rem solid rgba(220, 220, 220, 0.5)
			.item-img
				img
					display block
					width 1.07rem
					height 1.07rem
					margin-right 0.43rem
					border-radius 50%
			.item-detail
				flex 1
				display flex
				justify-content space-between
				align-items center
				p
					line-height 0.36rem
					font-size 0.26rem
					color #333333
				.detail-left-arrow
					img
						display block
						width 0.14rem
						height 0.28rem
</style>
