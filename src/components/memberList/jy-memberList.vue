<template>
	<div>
		<div class="member-list page-with-nav-top">
			<NavTop :title="title" :rightText="rightText" :router-replace="routerReplace"/>
			<van-search placeholder="会员编号/手机号/姓名" v-model="value">
				<img src="static/images/search.png" alt slot="left-icon">
			</van-search>
			<div class="list-item">
				<!-- a member info start -->
				<div class="item-wrapper">
					<div class="item-content">
						<div class="item-img">
							<img src="static/images/member-icon-default-man.png" alt>
						</div>
						<div class="item-detail">
							<div class="detail">
								<p class="member-name">会员：王崇</p>
								<p class="member-phone">手机：18754635656</p>
								<p class="member-integral">积分：5623</p>
							</div>
							<div class="detail-left-arrow">
								<img src="static/images/member-left-arrow.png" alt>
							</div>
						</div>
					</div>
				</div>
				<!-- a member info end -->
				<!-- a member info start -->
				<div class="item-wrapper">
					<div class="item-content">
						<div class="item-img">
							<img src="static/images/member-icon-default-woman.png" alt>
						</div>
						<div class="item-detail">
							<div class="detail">
								<p class="member-name">会员：王崇</p>
								<p class="member-phone">手机：18754635656</p>
								<p class="member-integral">积分：5623</p>
							</div>
							<div class="detail-left-arrow">
								<img src="static/images/member-left-arrow.png" alt>
							</div>
						</div>
					</div>
				</div>
				<!-- a member info end -->
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyMemberList',
	data() {
		return {
			// 头部导航配置参数
			title: '我的会员',
			rightText: '添加',
			routerReplace: '/store/memberAdd',

			value: ''
		}
	},
	methods: {
		// goAdd() {
		// 	this.$router.replace('/store/memberAdd')
		// }
	}
}
</script>
<style lang="stylus" scoped>
.member-list
	.list-item
		.item-wrapper
			background-color #fff
			padding 0 0.21rem
			&:last-child
				.item-content
					border-bottom 0 none
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

