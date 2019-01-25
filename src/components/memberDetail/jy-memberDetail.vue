<template>
	<div>
		<div class="member-detail page-with-nav-top top">
			<NavTop :title="title"/>
			<div class="detail-top">
				<div class="detail-img">
					<img :src="User.userHeadimg" alt v-if="User.userHeadimg">
					<img src="static/images/member-icon-default-woman.png" alt v-else-if="User.sex ==='女'">
					<img src="static/images/member-icon-default-man.png" alt v-else>
				</div>
				<div class="detail-info">
					<p>会员：{{User.nickName}}</p>
					<p>手机：{{User.phoneNumber}}</p>
					<p>积分：{{User.integral}}</p>
					<p>编号：{{User.userNumber}}</p>
				</div>
			</div>
			<div class="detail-content">
				<h1>
					当前积分
					<span class="integral-number">{{User.integral}}</span>
					积分
				</h1>
				<div class="change-integral">
					<span class="btn-minus" @click="modifyIntegral(0)">
						<img src="static/images/integral-minus.png" alt>
					</span>
					<span class="number">{{totalResult}}</span>
					<span class="btn-add" @click="modifyIntegral(1)">
						<img src="static/images/integral-add.png" alt>
					</span>
				</div>
				<div class="modify-tabs" v-show="modify">
					<div class="tabs">
						<span
							class="tabs-item"
							v-for="(item,index) in numberTabs"
							@click="changeIntegral(item)"
						>{{item}}</span>
					</div>
					<div class="custom">
						<span class="custom-btn" @click="showCustomPopup">自定义</span>
					</div>
					<div class="close-btn" @click="closeModify">
						<img src="static/images/close-btn.png" alt>
					</div>
				</div>
			</div>
			<div class="button-group">
				<div class="button-with-green">
					<van-button :disabled="disabled" plain type="primary" @click="submitChange()">修改</van-button>
				</div>
			</div>
		</div>

		<!-- 用户自定义积分输入框 -->
		<van-dialog
			v-model="show"
			show-cancel-button
			:show-confirm-button="showConfirmButton"
			@confirm="inputUserDefined"
		>
			<van-field v-model="userInput" label="积分：" placeholder="请输入积分" type="number" ref="user_input"/>
		</van-dialog>
	</div>
</template>

<script>
export default {
	name: 'jyMemberDetail',
	data() {
		return {
			// 头部导航配置参数
			title: '我的会员',

			modify: false,
			customModify: false,
			disabled: true,

			//暂存点击过的数值
			clickedTabs: [],
			// 快速加减的数值
			numberTabsAdd: [+200, +600, +800],
			numberTabsMinus: [-200, -600, -800],
			numberTabs: [],

			// 用户自定义输入的积分
			show: false,
			showConfirmButton: false,
			userSymbol: 0,//操作标识，0为减少积分，1为增加积分,当为减积分的时候用户将用户输入的积分✖-1
			userInput: '',//用户输入的积分

			User: {}
		}
	},
	computed: {
		// 计算后的新积分
		newIntegral: {
			get: function () {
				return this.User.integral
			},
			set: function (value) {
				this.User.integral = Number.parseInt(this.User.integral)
				this.User.integral = this.User.integral += Number.parseInt(value)
				if (this.User.integral <= 0) {
					this.User.integral = 0
				}
			}
		},

		//累计加/减的积分
		totalResult: function () {
			let s = 0
			if (this.clickedTabs.length == 0) {
				return 0
			} else {
				this.clickedTabs.forEach(function (val, idx, arr) {
					s += val
				}, 0)
				if (s > 0) {
					s = '+' + s
				}
				return s
			}
		}
	},
	methods: {
		// 控制修改积分的区域是否可见
		closeModify() {
			this.modify = false
		},
		// 控制是展示加积分还是减积分
		modifyIntegral(type) {
			this.modify = true
			this.userSymbol = type

			type ? this.numberTabs = this.numberTabsAdd : this.numberTabs = this.numberTabsMinus
		},

		// 修改积分
		changeIntegral(value) {
			this.newIntegral = value
			this.clickedTabs.push(value)
		},

		// 控制自定义积分弹出框
		showCustomPopup() {
			this.show = true
			this.$refs.user_input.focus()
		},
		// 输入用户自定义的积分
		inputUserDefined() {
			let userSymbol = this.userSymbol
			this.userInput = Number.parseInt(this.userInput)
			if (!userSymbol && this.userInput > 0) {
				this.userInput = this.userInput * -1
			}

			this.newIntegral = this.userInput
			this.clickedTabs.push(this.userInput)
		},

		// 提交最终修改
		submitChange() {
			this.$toast.loading({ mask: false, message: '处理中...' });

			this.$http.get('/app/shop/updIntegral', {
				params: {
					id: this.id,
					integral: (this.User.integral).toString()
				}
			}).then(reponse => {
				setTimeout(() => {
					this.$toast.clear()
					reponse = reponse.body
					if (reponse.success) {
						this.$router.push('/store/memberChangeSuccess')
					}
				}, 500);
			})
		}

	},
	watch: {
		totalResult: function () {
			this.disabled = false
		},
		userInput: function () {
			this.showConfirmButton = !!(this.userInput)
		}
	},
	created() {
		this.$toast.loading({ mask: false, message: '加载中...' });

		this.id = this.$route.params.id

		this.$http.get('/app/shop/memberById', {
			params: {
				id: this.id
			}
		}).then(reponse => {
			setTimeout(() => {
				this.$toast.clear()
				reponse = reponse.body

				this.User = reponse.data
			}, 500);
		})
	}

}
</script>

<style lang="stylus" scoped>
.member-detail
	height 100vh
	overflow-y hidden
	.detail-top
		display flex
		min-height 2.85rem
		margin-bottom 0.3rem
		padding-left 0.85rem
		padding-top 0.5rem
		background-color #d5f5f2
		.detail-img
			margin-right 0.48rem
			img
				display block
				width 1.07rem
				height 1.07rem
		.detail-info
			p
				font-size 0.26rem
				line-height 0.48rem
				color #333
	.detail-content
		display flex
		flex-direction column
		align-items center
		padding-top 0.75rem
		padding-bottom 0.75rem
		background-color #fff
		h1
			font-size 0.3rem
			margin-bottom 0.6rem
		span.integral-number
			font-size 0.36rem
			color #18a718
		.change-integral
			display flex
			align-items center
			justify-content space-around
			box-sizing border-box
			width 87%
			padding 0.35rem 0
			margin 0 auto
			margin-bottom 0.15rem
			background-color #f6f6f6
			border-radius 0.1rem
			span
				img
					display block
					width 0.44rem
					height 0.44rem
				&.number
					font-size 0.36rem
					color #555555
		.modify-tabs
			position relative
			width 87%
			padding 0.5rem 0
			font-size 0.3rem
			color #fff
			box-sizing border-box
			border 1px solid #bfbfbf
			border-radius 0.1rem
			.tabs
				display flex
				justify-content space-around
				margin-bottom 0.45rem
				.tabs-item
					padding 0.2rem 0.45rem
					background-color #40c049
					border-radius 0.1rem
			.custom
				display flex
				justify-content center
				.custom-btn
					background-color #ed6942
					padding 0.2rem 0.45rem
					border-radius 0.1rem
			.close-btn
				position absolute
				right -0.09rem
				top -0.09rem
				img
					display block
					width 0.4rem
					height 0.4rem
	.button-group
		width 87%
		margin 0 auto
		margin-top 0.45rem
</style>

