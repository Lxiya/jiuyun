<template>
	<div>
		<div class="join-us">
			<NavTop :title="title" :border="border"/>
			<div class="join-us-content">
				<div class="join-banner">
					<img src="static/images/joinUs-banner.png" alt>
					<div class="border-bottom"></div>
				</div>
				<div class="join-input">
					<div class="join-input-from">
						<div class="from-group">
							<div class="input-group">
								<van-field v-model="userName" label="姓名："/>
							</div>
							<div class="input-group" style="margin-bottom:0.27rem">
								<van-field v-model="phone" label="电话："/>
							</div>
							<div class="last-group input-group leave-message">
								<van-field v-model="message" type="textarea" placeholder="添加您的留言" rows="3" autosize/>
							</div>
							<div class="quick-message">
								<span
									v-for="(item,index) in quickMessage"
									:key="index"
									@click="insertQuickMessage(item)"
								>{{item}}</span>
							</div>
							<div class="button-with-green">
								<van-button :disabled="disabled" @click="submitJoin" plain type="primary">提交</van-button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'jyJoinUs',
	data() {
		return {
			// 头部导航配置参数
			title: '加盟申请',
			border: false,

			userName: '',
			phone: '',
			message: '',
			disabled: true,

			quickMessage: ['我有意加盟', '请尽快与我联系']
		}
	},
	methods: {
		insertQuickMessage(message) {
			this.message = message
		},

		// 提交加盟申请
		submitJoin() {
			this.$toast.loading({ mask: false, message: '处理中...' });

			this.$http.get('/app/index/jamengSave', {
				params: {
					name: this.userName,
					telephone: this.phone,
					remark: this.message
				}
			}).then(reponse => {
				setTimeout(() => {
					this.$toast.clear()
					reponse = reponse.body
					if (reponse.success) {
						this.$toast.success('提交成功!')
						setTimeout(() => {
							this.$toast.clear()
							this.$router.replace('/')
						}, 1000);
					}
				}, 1000);
			})
		}
	},
	watch: {
		phone: function () {
			if ((/^1[34578]\d{9}$/.test(this.phone)) && this.userName.trim() != '') {
				this.disabled = false
			} else {
				this.disabled = true
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
.join-us
	min-height 100vh
	background-color #fff
	.join-us-content
		.join-banner
			position relative
			img
				display block
				width 100%
				height auto
			.border-bottom
				position absolute
				left 0
				right 0
				bottom 0
				height 0.4rem
				box-sizing border-box
				background-color #fff
				border-top-left-radius 0.3rem
				border-top-right-radius 0.3rem
		.join-input
			display flex
			justify-content center
			position relative
			height 0.24rem
			width 95%
			margin 0 auto
			box-sizing border-box
			border-radius 0.1rem
			background-color #42bd56
			.join-input-from
				position absolute
				top 0.15rem
				width 93%
				padding-top 0.54rem
				padding-bottom 0.5rem
				padding-left 0.35rem
				padding-right 0.35rem
				box-sizing border-box
				background-color #f9f9f9
				border-bottom-left-radius 0.2rem
				border-bottom-right-radius 0.2rem
				box-shadow 0px 8px 5px -5px rgba(202, 202, 202, 1) inset
				.quick-message
					display flex
					margin-bottom 0.56rem
					span
						width 2.03rem
						padding 0.1rem 0
						margin-right 0.28rem
						text-align center
						background-color #42bd56
						border-radius 0.3rem
						font-size 0.24rem
						color #fff
</style>
